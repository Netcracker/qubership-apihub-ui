/**
 * Validates if the file is a valid YAML file
 * @param file File to validate
 * @returns Object with validation result and error message if any
 */
export function validateYamlFile(file: File): { isValid: boolean; errorMessage?: string } {
  // Check if file exists
  if (!file) {
    return {
      isValid: false,
      errorMessage: 'Please select a file.',
    }
  }

  // Check file extension
  const fileExtension = file.name.split('.').pop()?.toLowerCase()
  if (fileExtension !== 'yaml' && fileExtension !== 'yml') {
    return {
      isValid: false,
      errorMessage: 'File must have a .yaml or .yml extension.',
    }
  }

  // Check file size (max 5MB)
  const maxSizeInBytes = 5 * 1024 * 1024 // 5MB
  if (file.size > maxSizeInBytes) {
    return {
      isValid: false,
      errorMessage: 'File size must not exceed 5MB.',
    }
  }

  return {
    isValid: true,
  }
}

/**
 * Copy text to clipboard
 * @param text Text to copy
 * @returns Promise that resolves when text is copied
 */
export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    console.error('Failed to copy text to clipboard', error)
    throw new Error('Failed to copy text to clipboard')
  }
}
