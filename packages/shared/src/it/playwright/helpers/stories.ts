import path from 'path'
import fs from 'fs'
import { readFile } from 'fs/promises'

// Limit the number of tests to run to avoid overwhelming the system
// Set to 0 to run all tests
const MAX_STORIES_TO_TEST = 0

/**
 * Load stories from stories.json file
 * @returns An array of story ID strings
 */
async function loadStoryIds(): Promise<string[]> {
  try {
    console.log('Current working directory:', process.cwd())
    console.log('OS Platform:', process.platform)
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      IN_DOCKER: process.env.IN_DOCKER,
    })

    // Find stories.json file
    const { content: storiesData } = await findStoriesJsonFile()

    if (!storiesData) {
      console.log('⚠️ Could not find or load stories.json. Returning empty array.')
      return []
    }

    // Extract story IDs
    let storyIds = extractStoryIds(storiesData)

    // Log results
    if (storyIds.length > 0) {
      console.log(`Successfully extracted ${storyIds.length} story IDs`)
    } else {
      console.log('⚠️ No stories found in the file.')
    }

    // Limit the number of stories to test if MAX_STORIES_TO_TEST is set
    if (MAX_STORIES_TO_TEST > 0 && storyIds.length > MAX_STORIES_TO_TEST) {
      console.log(`Limiting tests to first ${MAX_STORIES_TO_TEST} stories`)
      storyIds = storyIds.slice(0, MAX_STORIES_TO_TEST)
    }

    return storyIds
  } catch (error) {
    console.error('Error processing stories.json:', error)
    console.log('Returning empty array due to error')
    return []
  }
}

/**
 * Interface representing the structure of stories.json
 */
interface StoriesJson {
  v: number
  stories: {
    [key: string]: {
      id: string
      name: string
      title: string
      importPath: string
      tags: string[]
      kind: string
      story: string
      parameters: {
        __id: string
        docsOnly: boolean
        fileName: string
      }
    }
  }
}

/**
 * Get all potential paths where stories.json might be located
 * @returns Array of potential file paths to search
 */
function getPotentialStoriesJsonPaths(): string[] {
  const currentDir = process.cwd()
  const possibleUpwardPaths = []
  let testDir = currentDir

  // Build paths looking upward from test directory
  for (let i = 0; i < 5; i++) {
    testDir = path.dirname(testDir)
    possibleUpwardPaths.push(path.join(testDir, 'dist-showcase', 'stories.json'))
  }

  // Combine all possible paths
  return [
    // Paths relative to parent directories
    ...possibleUpwardPaths,
    // Absolute fallback paths
    path.resolve('/dist-showcase/stories.json'),
    path.resolve('./dist-showcase/stories.json'),
    // Path in current directory
    path.join(currentDir, 'dist-showcase', 'stories.json'),
  ]
}

/**
 * Find the stories.json file from potential paths
 * @returns Information about the found file or null values if not found
 */
async function findStoriesJsonFile(): Promise<{
  path: string | null
  mtime: number | null
  content?: StoriesJson | null
}> {
  const potentialPaths = getPotentialStoriesJsonPaths()

  // Log the paths we're going to try
  console.log('Will try the following paths for stories.json:')
  potentialPaths.forEach((p, i) => console.log(`${i + 1}. ${p}`))

  for (const filePath of potentialPaths) {
    console.log('Checking for stories.json at:', filePath)

    try {
      if (fs.existsSync(filePath)) {
        console.log('✅ Found stories.json at:', filePath)
        const stats = fs.statSync(filePath)

        try {
          const fileContent = await readFile(filePath, 'utf8')
          const storiesData = JSON.parse(fileContent) as StoriesJson
          console.log('Successfully parsed stories.json')
          return {
            path: filePath,
            mtime: stats.mtimeMs,
            content: storiesData,
          }
        } catch (readError) {
          console.error(`Error reading ${filePath}:`, readError)
        }
      } else {
        // Try to list contents of the directory to debug
        const dirPath = path.dirname(filePath)
        if (fs.existsSync(dirPath)) {
          console.log(`Directory ${dirPath} exists. Contents:`, fs.readdirSync(dirPath))
        } else {
          console.log(`Directory ${dirPath} does not exist.`)
        }
      }
    } catch (error) {
      console.error(`Error checking ${filePath}:`, error)
    }
  }

  return { path: null, mtime: null, content: null }
}

/**
 * Extract all story IDs from the storiesJson object
 * @param storiesData The storiesJson object containing storybook stories
 * @returns An array of story ID strings
 */
function extractStoryIds(storiesData: StoriesJson): string[] {
  // Initialize an empty array to store the story IDs
  const storyIds: string[] = []

  // Check if stories object exists and is properly structured
  if (storiesData?.stories && typeof storiesData.stories === 'object') {
    // Get all keys from the stories object
    const storyKeys = Object.keys(storiesData.stories)
    console.log(`Found ${storyKeys.length} story keys in the stories object`)

    // For each story key, extract the ID if it exists
    for (const key of storyKeys) {
      const story = storiesData.stories[key]
      if (story?.id) {
        storyIds.push(story.id)
      }
    }
  }

  return storyIds
}

export { loadStoryIds }
