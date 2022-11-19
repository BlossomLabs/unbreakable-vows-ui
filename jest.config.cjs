module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/__mocks__/fileMock.cjs",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
