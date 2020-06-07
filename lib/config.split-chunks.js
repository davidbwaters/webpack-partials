///* ====================================================
//   #CONFIG - CODE-SPLIT-VENDORS
//   ==================================================== */

const config = (options) => {

  return {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxAsyncRequests: 20,
        minSize: 100000
      }
    }
  }

}

module.exports = config
