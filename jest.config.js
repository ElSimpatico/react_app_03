module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styles.ts'
    },
    setupFiles: ['<rootDir>test/init.ts']
};
