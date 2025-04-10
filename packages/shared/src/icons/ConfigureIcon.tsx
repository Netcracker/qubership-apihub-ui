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

import type { FC } from 'react'
import { memo } from 'react'

export const ConfigureIcon: FC = memo(() => {
    return (
      <div style={{ display: 'flex' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5826 8.29327C16.9736 7.90224 17.6075 7.90224 17.9985 8.29327L18.7065 9.0013C19.0975 9.39233 19.0975 10.0263 18.7065 10.4173L17.9985 11.1254L15.8746 9.0013L16.5826 8.29327Z"
            fill="#626D82"
          />
          <path
            d="M14.8939 9.98136L17.0178 12.1054L12.6801 16.4434C12.2405 16.8831 11.7045 17.2144 11.1147 17.411L9.39563 17.9841C9.16081 18.0623 8.93742 17.8389 9.01569 17.6041L9.58871 15.8849C9.78532 15.295 10.1166 14.759 10.5562 14.3194L14.8939 9.98136Z"
            fill="#626D82"
          />
          <path
            d="M17.5 4.75C17.5 4.33579 17.1585 4 16.7562 4H2.74385C2.33303 4 2 4.3329 2 4.75C2 5.16421 2.34148 5.5 2.74385 5.5H16.7562C17.167 5.5 17.5 5.1671 17.5 4.75ZM12 9.75C12 9.33579 11.6585 9 11.2562 9H2.74385C2.33303 9 2 9.3329 2 9.75C2 10.1642 2.34148 10.5 2.74385 10.5H11.2562C11.667 10.5 12 10.1671 12 9.75ZM2 14.75C2 15.1642 2.33746 15.5 2.75513 15.5H6.24488C6.66193 15.5 7.00002 15.1671 7.00002 14.75C7.00002 14.3358 6.66256 14 6.24488 14H2.75513C2.33809 14 2 14.3329 2 14.75Z"
            fill="#626D82"
          />
        </svg>
      </div>
    )
  },
)
