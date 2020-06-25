///* ====================================================
//   #CONFIG - DEV-SERVER
//   ==================================================== */

// Dependencies:
//
// webpack-dev-server

const config = (options) => {

  return {
    devServer: Object.assign({
      host: process.env.HOST,
      hot: true,
      open: true,
      overlay: true,
      port: process.env.PORT,
      stats: 'errors-only',
    }, options)
  }

}

module.exports = config
