module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                diagnostics: {
                    ignoreCodes: [1343],
                },
                astTransformers: {
                    before: [
                        {
                            path: "node_modules/ts-jest-mock-import-meta",
                            options: {
                                metaObjectReplacement: {
                                    url: "https://www.url.com",
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
    moduleNameMapper: {
        "^~/src/(.*)$": "<rootDir>/src/$1",
        "react-toastify/dist/ReactToastify.css":
            "<rootDir>/__mocks__/ReactToastify.css",
    },
};
