import { expect, test } from '@playwright/test'
import { loadStoryIds } from '../helpers/stories'

const skippedStories = [
  'security-reports-table--infinity-data-story',
  'file-table-upload-file-table-upload--with-files-story',
  'specification-dialog--graphql-story',
]
const testHost = process.env.CI ? 'localhost' : 'host.docker.internal'

// Load the story IDs before defining tests
const storyIds = await loadStoryIds()

// Skip all tests if no story IDs are found
test.skip(storyIds.length === 0, 'There are no stories to test')

// Define test for each story ID - Playwright requires all tests to be defined statically
for (const storyId of storyIds) {
  test(storyId, async ({ page }) => {
    // Skip specific stories that are problematic
    test.skip(skippedStories.includes(storyId), `Story ${storyId} is in the skip list`)

    // Navigate to the story page
    await page.goto(`http://${testHost}:9009/iframe.html?viewMode=story&id=${storyId}&args=`)

    // Take and verify screenshot
    await expect(page).toHaveScreenshot(`${storyId}.png`, {
      fullPage: true,
      timeout: 15000,
    })
  })
}
