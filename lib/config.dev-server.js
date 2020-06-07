///* ====================================================
//   #CONFIG - DEV-SERVER
//   ==================================================== */

// Dependencies:
//
// webpack-dev-server

const config = (options) => {

  return {
    devServer: Object.assign({
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: true,
      hot: true
    }, options)
  }

}

module.exports = config
