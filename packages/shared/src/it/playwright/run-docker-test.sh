#!/bin/bash

# Get the absolute path to the repository root
# Try different approaches to be more robust
if command -v git &> /dev/null; then
  REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
else
  # If git is not available, try to determine the root from the current script path
  SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
  REPO_ROOT="$(cd "$SCRIPT_DIR/../../../../.." && pwd)"
fi
echo "Repository root: $REPO_ROOT"

# Convert Windows path to Docker path format if needed
# On Windows, convert E:\path\to\repo to /e/path/to/repo
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" || "$OSTYPE" == "cygwin" ]]; then
  # Convert Windows path to Docker-compatible path
  DOCKER_PATH=$(echo "$REPO_ROOT" | sed -e 's/\\/\//g' -e 's/://')
  MOUNT_PATH="/${DOCKER_PATH}"
else
  MOUNT_PATH="$REPO_ROOT"
fi
echo "Mount path for Docker: $MOUNT_PATH"

# Check if Docker or Podman is available
CONTAINER_CMD="docker"
if ! command -v docker &> /dev/null; then
  if command -v podman &> /dev/null; then
    CONTAINER_CMD="podman"
    echo "Docker not found, using Podman instead"
  else
    echo "Error: Neither Docker nor Podman is installed. Please install one of them."
    exit 1
  fi
fi
echo "Using container runtime: $CONTAINER_CMD"

# Define the Docker run arguments
args=(
  # Container self-destructs after test
  --rm

  # Support access to locally running Storybook
  --ipc=host 
  --add-host=host.docker.internal:host-gateway

  # Mount the project folder to the container
  # so Playwright uses the local code
  -v "$MOUNT_PATH:/mnt/app:z"
  -w=/mnt/app

  # Pass environment variables into the container
  -e IN_DOCKER=1

  # Specify Docker image for running tests
  --platform=linux/amd64
  mcr.microsoft.com/playwright:v1.51.0-noble
)

# Command to run inside Docker - ensure we install dependencies
docker_cmd="cd packages/shared && npm run screenshot-test -- $@"

echo "Running Playwright tests in Docker..."
echo "Command: $CONTAINER_CMD run ${args[@]} /bin/bash -c \"$docker_cmd\""

# Run test in container, open report on errors
$CONTAINER_CMD run "${args[@]}" /bin/bash -c "$docker_cmd"
exit_code=$?

exit $exit_code