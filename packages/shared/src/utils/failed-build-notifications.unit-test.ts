/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  type FailedBuildNotifications,
  type NotificationMessage,
  NotificationsError,
} from '@netcracker/qubership-apihub-api-processor'
import { transferHandlers } from 'comlink'

import { appendFailedBuildNotifications, toFailedPublicationDetails } from './failed-build-notifications'

const PARSE_ERROR: NotificationMessage = {
  category: 'parse-file',
  severity: 0,
  message: 'Cannot parse file',
  documentId: 'broken.yaml',
}
const UNRESOLVED_VERSION: NotificationMessage = {
  category: 'version-not-resolved',
  severity: 0,
  message: 'No such version',
}
const LISTS: FailedBuildNotifications = {
  notifications: [PARSE_ERROR],
  comparisonNotifications: [UNRESOLVED_VERSION],
}

describe('toFailedPublicationDetails', () => {
  it('takes both lists from a NotificationsError', () => {
    const error = new NotificationsError(new Error('boom'), [PARSE_ERROR], [UNRESOLVED_VERSION])

    expect(toFailedPublicationDetails(error)).toStrictEqual({
      errors: 'Error: boom',
      notifications: LISTS,
    })
  })

  // the main thread rebuilds a worker's error with comlink's own handler: a plain Error with the fields copied on
  it('takes both lists from an error that crossed comlink', () => {
    // what the portal worker's `throw` handler serializes for a NotificationsError
    const serialized = {
      isError: true,
      value: {
        message: 'boom',
        name: 'Error',
        stack: '',
        responseStatus: undefined,
        notifications: [PARSE_ERROR],
        comparisonNotifications: [UNRESOLVED_VERSION],
      },
    }

    const error = catchThrown(() => transferHandlers.get('throw')!.deserialize(serialized))

    expect(error).toBeInstanceOf(Error)
    expect(error).not.toBeInstanceOf(NotificationsError)
    expect(toFailedPublicationDetails(error)).toStrictEqual({
      errors: 'Error: boom',
      notifications: LISTS,
    })
  })

  it('sends no lists for an error without them', () => {
    expect(toFailedPublicationDetails(new Error('boom'))).toStrictEqual({
      errors: 'Error: boom',
      notifications: undefined,
    })
  })

  it('sends no lists when only one of them is present', () => {
    const error = Object.assign(new Error('boom'), { notifications: [PARSE_ERROR] })

    expect(toFailedPublicationDetails(error).notifications).toBeUndefined()
  })

  it.each([
    ['a string', 'boom', 'boom'],
    ['undefined', undefined, 'undefined'],
    ['null', null, 'null'],
  ])('reports %s as text without lists', (_, error, errors) => {
    expect(toFailedPublicationDetails(error)).toStrictEqual({ errors: errors, notifications: undefined })
  })
})

describe('appendFailedBuildNotifications', () => {
  // the backend reads the part with FormFile, which skips a part without a file name
  it('adds the lists as a JSON file part named notifications', async () => {
    const formData = new FormData()

    appendFailedBuildNotifications(formData, LISTS)

    const part = formData.get('notifications')
    expect(part).toBeInstanceOf(File)
    const file = part as File
    expect(file.name).toBe('failed-build-notifications.json')
    expect(file.type).toBe('application/json')
    expect(JSON.parse(await file.text())).toStrictEqual(LISTS)
  })
})

function catchThrown(action: () => unknown): unknown {
  try {
    action()
  } catch (thrown) {
    return thrown
  }
  throw new Error('expected the action to throw')
}
