///* ====================================================
//   #LOADER - SVG - FILE
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
          test: /\.(svg)$/,
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
