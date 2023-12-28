module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^~/src/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    ts_jest: {
      diagnostics: {
        "message TS151001": false,
      },
    },
  },
};
