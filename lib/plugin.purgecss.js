///* ====================================================
//   #PLUGIN - PURGECSS
//   ==================================================== */

// Add after extracting CSS

// Dependencies:
//
// app-root-dir
// glob-all
// purgecss-webpack-plugin

const path = require('path')
const globAll = require('glob-all')
const PurgeCssPlugin = require('purgecss-webpack-plugin')

const rootDir = require('app-root-dir').get()
const sourcePaths = [path.join(rootDir, 'main')]

const config = (pluginOptions = {}) => {

  return {
    plugins: [
      new PurgeCssPlugin(
        pluginOptions
          ? pluginOptions
          : { paths: globAll(sourcePaths) }
      )
    ]
  }

}

module.exports = config
