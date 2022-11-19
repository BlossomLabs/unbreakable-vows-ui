module.exports = {
	'*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm lint:format'],
	'.{json,css,scss,md}': ['pnpm lint:format'],
};
