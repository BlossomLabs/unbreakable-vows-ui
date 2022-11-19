module.exports = {
  "*.{js,jsx,ts,tsx}": ["pnpm lint:fix", "pnpm lint:format", "pnpm test:stage"],
  ".{json,css,scss,md}": ["pnpm lint:format"],
};
