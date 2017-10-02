// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: 'http://localhost:4000',
  clientURL: 'http://localhost:4001',
  modifyJestConfig: (baseConfig) => {
    const jestConfig = Object.assign({}, baseConfig)

    jestConfig.setupTestFrameworkScriptFile = '../src/setupTests.js'
    jestConfig.setupFiles = ['raf/polyfill', ...jestConfig.setupFiles]

    return jestConfig
  }
}
