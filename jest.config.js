/*eslint-disable*/
module.exports = {
    // ...
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    // ...
    "setupFilesAfterEnv" : [
      "<rootDir>/test-setup.js"
    ]
  };