///* ====================================================
//   #LOADER - SASS - STYLE
//   ==================================================== */

// Dependencies:
//
// sass
// css-loader
// sass-loader
// style-loader

const config = ({
  loaderOptions = {},
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: [
            {
              loader: 'style-loader',
              options: loaderOptions
            },
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }

}

module.exports = config
