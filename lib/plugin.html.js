///* ===================================================
//   #PLUGIN - HTML
//   =================================================== */

// Dependencies:
//
// app-root-dir
// html-webpack-plugin

const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rootDir = require('app-root-dir').get()

const config = (pluginOptions = {}) => {

  return {
    plugins: [
      new HTMLWebpackPlugin(
        Object.assign(
          {
            meta: {
              viewport: 
                'width=device-width, initial-scale=1'
            },
            scriptLoading: 'defer',
            template: path.resolve(
              rootDir, 'main/templates/index.html'
            )
          },
          pluginOptions
        )
      )
    ]
  }

}

module.exports = config
