///* ====================================================
//   #LOADER - FONTS - FILE
//   ==================================================== */

// Dependencies:
//
// file-loader

const config = ({
  use = [],
  loaderOptions = {},
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          include,
          exclude,
          use: [
            {
              loader: 'file-loader',
              options: Object.assign(
                {
                  name: 'fonts/[name].[ext]'
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
