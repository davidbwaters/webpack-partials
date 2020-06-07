///* ====================================================
//   #PLUGIN - OPTIMIZE-CSS-ASSETS
//   ==================================================== */

// Add after extracting CSS

// Dependencies:
//
// cssnano
// optimize-css-assets-webpack-plugin

const OptimizeCssAssetsPlugin = require(
  'optimize-css-assets-webpack-plugin'
)

const config = (pluginOptions = {}) => {

  return {
    plugins: [new OptimizeCssAssetsPlugin(pluginOptions)]
  }

}

module.exports = config
