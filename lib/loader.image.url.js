///* ====================================================
//   #LOADER - IMAGE - URL
//   ==================================================== */

// Dependencies:
//
// url-loader

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
              loader: 'url-loader',
              options: Object.assign(
                {
                  limit: 25000
                },
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
