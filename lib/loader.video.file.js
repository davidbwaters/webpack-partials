///* ====================================================
//   #LOADER - VIDEO - FILE
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
          test: /\.(mp4|ogg|webm)$/,
          include,
          exclude,
          use: [
            {
              loader: 'file-loader',
              options: Object.assign(
                { name: '[path][name].[ext]' },
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
