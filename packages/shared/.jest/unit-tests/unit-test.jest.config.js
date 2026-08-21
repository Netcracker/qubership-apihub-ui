export default {
  testRunner: 'jest-circus/runner',
  testMatch: ['**/*.unit-test.ts'],
  rootDir: '../..',
  roots: ['<rootDir>/src', '<rootDir>/../portal/src', '<rootDir>/../agents/src'],
  testEnvironment: 'node',
  moduleFileExtensions: [
    'ts',
    'js',
    'json',
    'node',
  ],
  transform: {
    '\\.ts?$': [
      'ts-jest',
      { tsconfig: '<rootDir>/.jest/unit-tests/tsconfig.unit-test.json' },
    ],
  },
  moduleNameMapper: {
    '^@netcracker/qubership-apihub-ui-shared/(.*)$': '<rootDir>/src/$1',
    // Intra-package aliases, mirroring each package’s tsconfig paths and vite config.
    // This suite runs portal and agents tests (see roots above), so both must resolve.
    // The names are deliberately distinct: one shared mapping cannot serve two packages
    // that both call their own source @apihub.
    '^@portal/(.*)$': '<rootDir>/../portal/src/$1',
    '^@agents/(.*)$': '<rootDir>/../agents/src/$1',
    '^lodash-es/isPlainObject$': '<rootDir>/../../node_modules/lodash/isPlainObject.js',
  },
  modulePaths: ['<rootDir>/src', '<rootDir>/../portal/src'],
  reporters: [
    'default',
  ],
  collectCoverage: true,
  coverageReporters: ['text'],
}
