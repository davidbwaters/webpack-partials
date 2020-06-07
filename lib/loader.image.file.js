///* ====================================================
//   #LOADER - IMAGE - FILE
//   ==================================================== */

// Dependencies:
//
// file-loader

const config = (
  { use = [], loaderOptions = {}, include, exclude } = {}
) => {

  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|webp)$/,
          include,
          exclude,
          use: [
            {
              loader: 'file-loader',
              options: Object.assign(
                { name: '[path][name].[hash].[ext]' },
                loaderOptions
              )
            }
          ].concat(use)
        }
      ]
    }
  }

}

module.exports = config
