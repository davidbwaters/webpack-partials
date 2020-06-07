///* ===================================================
//   #PLUGIN - CLEAN
//   =================================================== */

// Dependencies:
//
// clean-webpack-plugin

const { CleanWebpackPlugin } = require(
  'clean-webpack-plugin'
)

const config = (pluginOptions = {}) => {

  return {
    plugins: [
      new CleanWebpackPlugin(
        Object.assign({ verbose: true }, pluginOptions)
      )
    ]
  }

}

module.exports = config
