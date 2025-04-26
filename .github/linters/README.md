# Linter Configuration for qubership-apihub-ui

This directory contains configuration files for various linters used in the project through GitHub Super Linter.

## How It Works

GitHub Super Linter runs automatically when pushing to the repository or creating a pull request. It checks only the changed files using settings from the `.github/linters` folder.

## Configuration

The main Super Linter configuration is located in the files:

- `.github/workflows/linting.yml` - GitHub Actions configuration
- `.github/super-linter.env` - environment variables for Super Linter

## Local Execution

You can run Super Linter locally using Docker:

```bash
docker run --rm \
  -e RUN_LOCAL=true \
  -e VALIDATE_ALL_CODEBASE=false \
  --env-file .github/super-linter.env \
  -v "$(pwd)":/tmp/lint \
  ghcr.io/super-linter/super-linter:v7.3.0
```

## Additional Information

Additional information about GitHub Super Linter can be found in the [official documentation](https://github.com/super-linter/super-linter).
