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
    "plugin:jest-dom/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "testing-library"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
