///* ====================================================
//   #PLUGIN - BUNDLE-ANALYZER
//   ==================================================== */

// Add after extracting CSS

// Dependencies:
//
// webpack-bundle-analyzer

const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer'
).BundleAnalyzerPlugin

const config = (pluginOptions = {}) => {

  return {
    plugins: [
      new BundleAnalyzerPlugin(
        Object.assign({
          analyzerMode: 'static',
          openAnalyzer: false
        }, pluginOptions)
      )
    ]
  }

}

module.exports = config
