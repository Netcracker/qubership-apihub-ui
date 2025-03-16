import path from 'path'
import fs from 'fs'
import { readFile, writeFile } from 'fs/promises'
import os from 'os'

// Limit the number of tests to run to avoid overwhelming the system
// Set to 0 to run all tests
const MAX_STORIES_TO_TEST = 0

// Path to the cache file
const CACHE_FILE_PATH = path.join(os.tmpdir(), 'storybook-ids-cache.json')
// Path to store the timestamp of the last stories.json file used
const TIMESTAMP_FILE_PATH = path.join(os.tmpdir(), 'storybook-timestamp.json')

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

// Create a mock stories data structure for testing
// This will be used if we can't load the real stories.json file
function createMockStoriesData(): StoriesJson {
  return {
    v: 3,
    stories: {
      'system-administrators-dialog--default-story': {
        id: 'system-administrators-dialog--default-story',
        name: 'Default',
        title: 'System Administrators Dialog',
        importPath: './src/stories/AddSystemAdministratorDialog.stories.tsx',
        tags: ['story'],
        kind: 'System Administrators Dialog',
        story: 'Default',
        parameters: {
          __id: 'system-administrators-dialog--default-story',
          docsOnly: false,
          fileName: './src/stories/AddSystemAdministratorDialog.stories.tsx',
        },
      },
      'add-user-dialog--add-user-dialog-story': {
        id: 'add-user-dialog--add-user-dialog-story',
        name: 'Default',
        title: 'Add User Dialog',
        importPath: './src/stories/AddUserDialog.stories.tsx',
        tags: ['story'],
        kind: 'Add User Dialog',
        story: 'Default',
        parameters: {
          __id: 'add-user-dialog--add-user-dialog-story',
          docsOnly: false,
          fileName: './src/stories/AddUserDialog.stories.tsx',
        },
      },
    },
  }
}

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

    // Define possible locations for stories.json
    // Start by looking upwards from the current directory
    const currentDir = process.cwd()
    const possibleUpwardPaths = []
    let testDir = currentDir

    // Build paths looking upward from test directory
    for (let i = 0; i < 5; i++) {
      testDir = path.dirname(testDir)
      possibleUpwardPaths.push(path.join(testDir, 'dist-showcase', 'stories.json'))
    }

    // Combine all possible paths
    const potentialPaths = [
      // Then add paths relative to current working directory
      ...possibleUpwardPaths,
      // Finally add some absolute fallback paths
      path.resolve('/dist-showcase/stories.json'),
      path.resolve('./dist-showcase/stories.json'),
      // Add an additional path in the current directory
      path.join(currentDir, 'dist-showcase', 'stories.json'),
    ]

    // Log the paths we're going to try
    console.log('Will try the following paths for stories.json:')
    potentialPaths.forEach((p, i) => console.log(`${i + 1}. ${p}`))

    let storiesData: StoriesJson | null = null

    // Try each path and print directory contents if not found
    for (const filePath of potentialPaths) {
      console.log('Checking for stories.json at:', filePath)

      try {
        if (fs.existsSync(filePath)) {
          console.log('✅ Found stories.json at:', filePath)

          try {
            const fileContent = await readFile(filePath, 'utf8')
            storiesData = JSON.parse(fileContent) as StoriesJson
            console.log('Successfully parsed stories.json')
            break
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

    // If we couldn't find or load the file, use mock data
    if (!storiesData) {
      console.log('⚠️ Could not find or load stories.json. Using mock data for testing.')
      storiesData = createMockStoriesData()
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
    // Even if there's an error, use mock data to ensure tests can run
    console.log('Using mock data due to error')
    const mockData = createMockStoriesData()
    const storyIds = extractStoryIds(mockData)
    console.log(`Using ${storyIds.length} mock story IDs`)
    return storyIds
  }
}

/**
 * Get story IDs from the file cache or load them if not cached
 * This uses a file-based cache to ensure IDs are only loaded once across all worker processes
 */
async function getPreloadedStoryIds(): Promise<string[]> {
  // Use a file-based lock system to prevent race conditions
  const lockFilePath = `${CACHE_FILE_PATH}.lock`
  
  // Function to find the stories.json file and get its modified time
  async function getStoriesFileInfo(): Promise<{path: string | null; mtime: number | null}> {
    // Define possible locations for stories.json
    const currentDir = process.cwd()
    const possibleUpwardPaths = []
    let testDir = currentDir

    // Build paths looking upward from test directory
    for (let i = 0; i < 5; i++) {
      testDir = path.dirname(testDir)
      possibleUpwardPaths.push(path.join(testDir, 'dist-showcase', 'stories.json'))
    }

    const potentialPaths = [
      ...possibleUpwardPaths,
      path.resolve('/dist-showcase/stories.json'),
      path.resolve('./dist-showcase/stories.json'),
      path.join(currentDir, 'dist-showcase', 'stories.json'),
    ]

    for (const filePath of potentialPaths) {
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        return { path: filePath, mtime: stats.mtimeMs }
      }
    }
    
    return { path: null, mtime: null }
  }

  try {
    // Check if the stories.json file has been modified since we last cached
    const storiesFileInfo = await getStoriesFileInfo()
    let cacheIsStale = true
    
    if (fs.existsSync(TIMESTAMP_FILE_PATH) && fs.existsSync(CACHE_FILE_PATH)) {
      try {
        const timestampContent = await readFile(TIMESTAMP_FILE_PATH, 'utf8')
        const cachedInfo = JSON.parse(timestampContent)
        
        // If the same file path and the same or newer modification time, cache is still valid
        if (cachedInfo.path === storiesFileInfo.path && 
            cachedInfo.mtime === storiesFileInfo.mtime && 
            cachedInfo.mtime !== null) {
          cacheIsStale = false
        } else {
          console.log('Stories file changed, cache needs to be refreshed')
        }
      } catch (err) {
        console.error('Error reading timestamp file:', err)
      }
    }
    
    // If cache is fresh and exists, read from it
    if (!cacheIsStale && fs.existsSync(CACHE_FILE_PATH)) {
      try {
        const cacheContent = await readFile(CACHE_FILE_PATH, 'utf8')
        const storyIds = JSON.parse(cacheContent)
        console.log(`Read ${storyIds.length} story IDs from valid cache file`)
        return storyIds
      } catch (err) {
        console.error('Error reading from cache file:', err)
        // Continue to load if there's an error reading the cache
      }
    }
    
    // If we reach here, we need to load the story IDs
    // Try to create a lock file to prevent multiple processes from loading at once
    try {
      if (!fs.existsSync(lockFilePath)) {
        // Create the lock file
        await writeFile(lockFilePath, Date.now().toString(), 'utf8')
        
        console.log('Lock acquired, loading story IDs')
        // Load the story IDs
        const storyIds = await loadStoryIds()
        
        // Write to the cache file
        await writeFile(CACHE_FILE_PATH, JSON.stringify(storyIds), 'utf8')
        console.log(`Wrote ${storyIds.length} story IDs to cache file`)
        
        // Write timestamp file with stories file info
        if (storiesFileInfo.path) {
          await writeFile(TIMESTAMP_FILE_PATH, JSON.stringify(storiesFileInfo), 'utf8')
          console.log(`Updated timestamp file for ${storiesFileInfo.path}`)
        }
        
        // Release the lock
        if (fs.existsSync(lockFilePath)) {
          fs.unlinkSync(lockFilePath)
        }
        
        return storyIds
      } else {
        // Someone else is loading, wait and then try to read from cache
        console.log('Lock file exists, waiting for other process to load story IDs')
        
        // Wait for lock to be released (simple polling)
        for (let i = 0; i < 10; i++) {
          await new Promise(resolve => setTimeout(resolve, 500))
          if (!fs.existsSync(lockFilePath)) {
            break
          }
        }
        
        // Try to read from cache again
        if (fs.existsSync(CACHE_FILE_PATH)) {
          const cacheContent = await readFile(CACHE_FILE_PATH, 'utf8')
          const storyIds = JSON.parse(cacheContent)
          // console.log(`Read ${storyIds.length} story IDs from cache file after waiting`)
          return storyIds
        } else {
          // If still no cache, load directly
          console.log('No cache file found after waiting, loading directly')
          return loadStoryIds()
        }
      }
    } catch (lockErr) {
      console.error('Error with lock file:', lockErr)
      // If there's an error with the lock, just load directly
      return loadStoryIds()
    }
  } catch (err) {
    console.error('Unexpected error in getPreloadedStoryIds:', err)
    // Fall back to direct loading
    return loadStoryIds()
  }
}

export { loadStoryIds, getPreloadedStoryIds }
