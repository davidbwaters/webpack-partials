///* ====================================================
//   #LOADER - JS - BABEL
//   ==================================================== */

// Dependencies:
//
// babel-loader
// @babel/core
// @babel/preset-env
// babel-plugin-syntax-dynamic-import

const config = ({
  use = [],
  loaderOptions = {},
  include,
  exclude
} = {}) => {

  const excludeAll = exclude
    ? ['/node_modules/'].concat(exclude)
    : ['/node_modules/']
    
  return {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include,
          exclude: excludeAll,
          use: [
            {
              loader: 'babel-loader',
              options: Object.assign(loaderOptions, {
                presets: [
                  '@babel/preset-env'
                ],
                plugins: [
                  'babel-plugin-syntax-dynamic-import'
                ]
              })
            }
          ].concat(use)
        }
      ]
    }
  }

}

module.exports = config
