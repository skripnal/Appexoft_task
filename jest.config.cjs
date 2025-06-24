module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Додайте тут ваші аліаси. Наприклад, якщо у tsconfig:
    // "@/*": ["src/*"]
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@service/(.*)$": "<rootDir>/src/service/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  // Вказуємо Jest використовувати tsconfig.jest.json
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
};
