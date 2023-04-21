module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'quote-props': ['error', 'as-needed'],
		'no-multiple-empty-lines': 'error',
		'max-len': ['error', {code: 140}]
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
