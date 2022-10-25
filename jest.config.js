const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    // ...moduleNameMapper
    "^@generatedTypes$": "<rootDir>/generatedTypes/generated",
    "^@config$": "<rootDir>/src/config.ts",
    "^@styleGuide$": "<rootDir>/src/modules/styleGuide/fe/index.ts",
    "^@utils$": "<rootDir>/src/modules/utils/index.ts",
    "^@globalContext$": "<rootDir>/src/modules/globalContext/index.ts",
    "^@layout$": "<rootDir>/src/modules/layout/fe/index.ts",
    "^@uiComponents$": "<rootDir>/src/modules/uiComponents/fe/index.ts",
    "^@beEmailNotification$": "<rootDir>/src/modulesBackEnd/emailNotification",
    "^@beUtils$": "<rootDir>/src/modulesBackEnd/utils",
    "^@feedbackForm$": ["<rootDir>/src/modules/feedback/index.ts"],
    "^@auth$": ["<rootDir>/src/modules/auth/index.ts"],
    "^@algolia$": ["<rootDir>/src/modules/algolia/index.ts"],
    "^@adminVercelDeployment$": ["<rootDir>/src/modules/vercelDeploy"],
    "^@beAlgoliaManageIndex$": ["<rootDir>/src/modulesBackEnd/algoliaManageIndex"],
    "^@beRecommender$": ["<rootDir>/src/modulesBackEnd/recommender"],
    "^@linkedIn$": ["<rootDir>/src/modulesBackEnd/linkedIn"],
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)