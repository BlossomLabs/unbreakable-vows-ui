module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules", "dist"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "react-app/jest",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
