///* ====================================================
//   #LOADER - CSS - STYLE
//   ==================================================== */

// Dependencies:
//
// style-loader
// css-loader

const config = ({
  loaderOptions,
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            {
              loader: 'style-loader',
              options: loaderOptions
            },
            'css-loader'
          ]
        }
      ]
    }
  }

}

module.exports = config
