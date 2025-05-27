// eslint.config.mjs
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupPluginRules } from '@eslint/compat'
import path from 'path'
import { fileURLToPath } from 'url'
import reactHooks from 'eslint-plugin-react-hooks'
// import filenamesSimplePlugin from "eslint-plugin-filenames-simple"; // Removed
import jsoncPlugin from 'eslint-plugin-jsonc'
import eslintPluginYml from 'eslint-plugin-yml' // Import directly
import stylisticPlugin from '@stylistic/eslint-plugin'
import boundaries from 'eslint-plugin-boundaries' // Added import
// eslint-plugin-react is often extended or its rules used directly.
// For this config, we'll assume it's mostly covered by typescript-eslint for JSX/TSX,
// but if specific React rules are needed beyond what @typescript-eslint provides for JSX,
// it might need to be added. The original config didn't explicitly list it as a plugin,
// but relied on recommended sets that might include it.
// Plugins that might need FlatCompat or have specific loading
// It's better to import plugins directly if they support flat config

// Mimic __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default tseslint.config(
  {
    // Global ignores
    ignores: ['**/*.d.ts', '**/vite.config.ts', 'dist/', 'node_modules/', '.eslintrc.json'],
  },
  // Base recommended configurations
  js.configs.recommended,
  stylisticPlugin.configs.customize({
    braceStyle: '1tbs',
    quoteProps: 'as-needed',
    severity: 'warn',
  }),

  // Apply type-checked configurations from TypeScript ESLint ONLY to relevant files
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'], // Restrict to JS/TS-like files
  })),

  // Apply type-checked configurations from TypeScript ESLint ONLY to relevant files
  ...tseslint.configs.stylisticTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'], // Restrict to JS/TS-like files
  })),

  ...jsoncPlugin.configs['flat/recommended-with-jsonc'],
  ...eslintPluginYml.configs['flat/recommended'],

  // Global plugins and language options setup for JS/TS files
  {
    files: ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'], // Restrict this block to JS/TS-like files
    plugins: {
      '@stylistic': stylisticPlugin,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Config for root TS/JS files (if any, not in packages)
  {
    files: ['*.{js,mjs,cjs,ts,tsx}', 'code-style-demo/**/*.{js,mjs,cjs,ts,tsx}'], // Adjust glob as needed for root files
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'], // Added tsconfig.node.json for root
        tsconfigRootDir: __dirname,
      },
    },
  },

  // ESLint Plugin Storybook (using FlatCompat)
  ...compat.extends('plugin:storybook/recommended').map(config => ({
    ...config,
    files: ['**/*.stories.{js,jsx,ts,tsx}', '**/*.story.{js,jsx,ts,tsx}'], // Target story files
  })),

  // ESLint Plugin Boundaries (using FlatCompat)
  // This needs careful translation as it had settings and rules.
  // We'll first apply the recommended set and then layer package-specific rules.
  ...compat.config({ // Manually construct from plugin object if `extends` is tricky for boundaries
    plugins: ['boundaries'],
    extends: ['plugin:boundaries/recommended'],
    settings: { // Root level settings for boundaries, if any were implied
      'boundaries/elements': [
        // Default from root .eslintrc if any, otherwise this can be for package-specific overrides
      ],
      'import/resolver': { // Boundaries might use this
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  }).map(config => ({ ...config, files: ['packages/**/src/**/*.{js,jsx,ts,tsx}'] })), // Apply broadly to packages

  // ESLint Plugin Filenames (using FlatCompat and @eslint/compat)
  ...compat.config({
    plugins: ['filenames'], // Keep as array of strings for FlatCompat
    rules: {
      // 'filenames/no-index': 'error', // Temporarily disabled due to compatibility issues
    },
  }).map(config => ({ ...config, files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'] })),

  {
    files: ['**/*.json', '**/*.jsonc'],
    ignores: ['**/tsconfig.json', '**/tsconfig.node.json'], // IMPORTANT: Exclude tsconfig files
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      'jsonc/auto': 'warn',
      'jsonc/array-bracket-newline': ['warn', 'always'],
      'jsonc/array-element-newline': ['warn', 'always'],
      'jsonc/object-curly-newline': ['warn', 'always'],
      'jsonc/object-property-newline': 'warn',
      'jsonc/comma-dangle': ['warn', 'never'],
    },
  },

  // Configuration for YAML files (Manually specifying rules)
  {
    files: ['**/*.yaml', '**/*.yml'],
    plugins: {
      yml: eslintPluginYml,
      '@stylistic': stylisticPlugin,
    },
    rules: {
      '@stylistic/spaced-comment': ['warn', 'always', { markers: ['#'] }],
    },
  },

  // Overrides for specific file patterns (like index.ts for sort-exports)
  // ESLint Plugin Sort Exports (using FlatCompat)
  ...compat.config({
    plugins: ['sort-exports'],
    rules: {
      'sort-exports/sort-exports': ['error', { sortDir: 'asc', ignoreCase: true }],
    },
  }).map(config => ({ ...config, files: ['**/index.ts', '**/index.tsx'] })),

  // Main JS/TS rules (ensure this is after global plugins but before package overrides)
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        },
      },
    },
    plugins: {
      '@stylistic': stylisticPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      // Core ESLint rules (non-stylistic)
      camelcase: 'error',
      eqeqeq: ['error', 'always'],
      'no-confusing-arrow': 'error',
      'no-useless-rename': 'error',
      'no-unexpected-multiline': 'error',
      'no-case-declarations': 'off',
      'object-shorthand': ['error', 'consistent'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'prefer-destructuring': 'error',
      yoda: 'error',

      // TypeScript ESLint rules
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public', overrides: { parameterProperties: 'off' } }],
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true, allowTypedFunctionExpressions: true }],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Stylistic rules

      '@stylistic/quote-props': ['warn', 'as-needed'],

      // Operators
      // '@stylistic/operator-linebreak': ['warn', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/operator-linebreak': ['warn', 'before', { overrides: { '=': 'after' } }],
      // '@stylistic/multiline-ternary': ['warn', 'always-multiline'],

      // JSX
      // '@stylistic/jsx-child-element-spacing': ['error'],
      // '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'single-child' }],
    },
  },

  // Package-specific configurations
  // PORTAL
  {
    files: ['packages/portal/**/*.{js,jsx,ts,tsx,cjs,mjs}'], // Expanded to include all JS/TS files in the package
    languageOptions: { // Added languageOptions with parserOptions
      parserOptions: {
        project: ['./packages/portal/tsconfig.json', './packages/portal/tsconfig.node.json'], // Added tsconfig.node.json
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        { type: 'portal-local-dev-server', pattern: './server/*', basePath: 'packages/portal' },
        { type: 'portal-source-code', pattern: './src/*', basePath: 'packages/portal' },
      ],
    },
    rules: {
      'boundaries/element-types': ['error', {
        default: 'disallow',
        message: '${file.type} (${file.path}) MUST NOT import from ${dependency.type} (${dependency.path})',
        rules: [
          { from: ['portal-local-dev-server'], allow: ['portal-local-dev-server'], message: 'Server code can import from itself.' },
          { from: ['portal-source-code'], allow: ['portal-source-code'], message: 'Portal src code can import from itself.' },
        ],
      }],
    },
  },
  // SHARED
  {
    files: ['packages/shared/**/*.{js,jsx,ts,tsx,cjs,mjs}'], // Expanded to include all JS/TS files in the package
    languageOptions: { // Added languageOptions with parserOptions
      parserOptions: {
        project: ['./packages/shared/tsconfig.json', './packages/shared/tsconfig.node.json'], // Added tsconfig.node.json
        tsconfigRootDir: __dirname, // Root of the ESLint config file
      },
    },
    rules: {
      'no-restricted-imports': ['error', {
        paths: [
          { name: '@netcracker/qubership-apihub-ui-agents', message: 'You are not allowed to import APIHUB Agents components in APIHUB Shared.' },
          { name: '@netcracker/qubership-apihub-ui-editor', message: 'You are not allowed to import APIHUB Editor components in APIHUB Shared.' },
          { name: '@netcracker/qubership-apihub-ui-portal', message: 'You are not allowed to import APIHUB Portal components in APIHUB Shared.' },
        ],
        patterns: [
          { group: ['@netcracker/qubership-apihub-ui-agents/**'], message: 'You are not allowed to import APIHUB Agents components in APIHUB Shared.' },
          { group: ['@netcracker/qubership-apihub-ui-editor/**'], message: 'You are not allowed to import APIHUB Editor components in APIHUB Shared.' },
          { group: ['@netcracker/qubership-apihub-ui-portal/**'], message: 'You are not allowed to import APIHUB Portal components in APIHUB Shared.' },
        ],
      }],
    },
  },
  // EDITOR
  {
    files: ['packages/editor/**/*.{js,jsx,ts,tsx,cjs,mjs}'], // Expanded to include all JS/TS files in the package
    languageOptions: { // Added languageOptions with parserOptions
      parserOptions: {
        project: ['./packages/editor/tsconfig.json', './packages/editor/tsconfig.node.json'], // Added tsconfig.node.json
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        { type: 'editor-local-dev-server', pattern: './server/*', basePath: 'packages/editor' },
        { type: 'editor-source-code', pattern: './src/*', basePath: 'packages/editor' },
      ],
    },
    rules: {
      'boundaries/element-types': ['error', {
        default: 'disallow',
        message: '${file.type} (${file.path}) MUST NOT import from ${dependency.type} (${dependency.path})',
        rules: [
          { from: ['editor-local-dev-server'], allow: ['editor-local-dev-server'] },
          { from: ['editor-source-code'], allow: ['editor-source-code'] },
        ],
      }],
    },
  },
  // AGENTS
  {
    files: ['packages/agents/**/*.{js,jsx,ts,tsx,cjs,mjs}'], // Expanded to include all JS/TS files in the package
    languageOptions: { // Added languageOptions with parserOptions
      parserOptions: {
        project: ['./packages/agents/tsconfig.json', './packages/agents/tsconfig.node.json'], // Added tsconfig.node.json
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': [
        { type: 'agents-local-dev-server', pattern: './server/*', basePath: 'packages/agents' },
        { type: 'agents-source-code', pattern: './src/*', basePath: 'packages/agents' },
      ],
    },
    rules: {
      'boundaries/element-types': ['error', {
        default: 'disallow',
        message: '${file.type} (${file.path}) MUST NOT import from ${dependency.type} (${dependency.path})',
        rules: [
          { from: ['agents-local-dev-server'], allow: ['agents-local-dev-server'] },
          { from: ['agents-source-code'], allow: ['agents-source-code'] },
        ],
      }],
    },
  },
)
