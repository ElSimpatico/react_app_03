module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/styles.ts',
        'react-i18next': '<rootDir>/test/mocks/react-i18next.ts'
    },
    setupFiles: ['<rootDir>test/init.ts']
};
