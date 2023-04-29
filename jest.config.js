module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: { // npm i --save-dev babel-jest
		'^.+\\.(css|less|scss)$': 'babel-jest'
	},
	projects: [
		/**
	 * Common project's components typically written with React
	 */
		{
			displayName: 'components',
			testMatch: ['<rootDir>/src/app/**/__tests__/**/*.spec.(jsx|js)'],
			testEnvironment: 'jsdom',
			setupFilesAfterEnv: [
				'<rootDir>/jest.env.js',
			],
			coveragePathIgnorePatterns: [
				'<rootDir>/app/context/TracksContext',
			],
			moduleNameMapper: {
				'^.+\\.(css|less|scss)$': 'babel-jest'
			},
			verbose: true,
		}
	],
  	transformIgnorePatterns: ['node_modules/(?!axios)'],
};
