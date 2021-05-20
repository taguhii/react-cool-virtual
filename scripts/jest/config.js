module.exports = {
  preset: "ts-jest",
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/scripts/jest/setup.ts"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/index.ts",
    "!**/index.umd.ts",
    "!src/types/*",
  ],
  globals: { __DEV__: true },
};
