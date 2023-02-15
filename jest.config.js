module.exports = {
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
	coverageReporters: ['clover'],
	modulePaths: ['<rootDir>/src'],
	moduleDirectories: ['<rootDir>/src'],
	moduleNameMapper: {
		'\\.png$': '<rootDir>/src/test/file.js',
		'\\.(svg|webp)$': '<rootDir>/src/test/image.js'
	},
	setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
	testEnvironment: 'jsdom',
	testRegex: '\\.spec\\.js$',
	testTimeout: 60000,
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es|@hs)'],
	transform: {
		'^.+\\.js$': 'babel-jest'
	}
}
