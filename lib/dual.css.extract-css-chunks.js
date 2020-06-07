///* ====================================================
//   #DUAL - CSS - EXTRACT-CSS-CHUNKS
//   ==================================================== */

// Dependencies:
//
// css-loader
// extract-css-chunks-webpack-plugin

const ExtractCssChunksPlugin = require(
  'extract-css-chunks-webpack-plugin'
)

const config = ({
  loaderOptions = {},
  pluginOptions = {},
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            {
              loader: ExtractCssChunksPlugin.loader,
              options: loaderOptions
            },
            'css-loader'
          ]
        }
      ]
    },
    plugins: [new ExtractCssChunksPlugin(
      Object.assign(
        {
          filename: '[name].[hash].css',
          chunkFileName: '[id].[hash].css' 
        },
        pluginOptions
      )
    )]
  }

}

module.exports = config
