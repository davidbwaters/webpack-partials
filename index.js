///* ====================================================
//   #WEBPACK-PARTIALS - MAIN
//   ==================================================== */

const partials = {
  configSplitChunks: require(
    './lib/config.split-chunks.js'
  ),
  configDevServer: require(
    './lib/config.dev-server.js'
  ),
  dualCssExtractCssChunks: require(
    './lib/dual.css.extract-css-chunks.js'
  ),
  dualSassExtractCssChunks: require(
    './lib/dual.sass.extract-css-chunks.js'
  ),
  loaderCssStyle: require(
    './lib/loader.css.style.js'
  ),
  loaderFontsFile: require(
    './lib/loader.fonts.file.js'
  ),
  loaderImageFile: require(
    './lib/loader.image.file.js'
  ),
  loaderImageUrl: require(
    './lib/loader.image.url.js'
  ),
  loaderJsBabel: require(
    './lib/loader.js.babel.js'
  ),
  loaderSassStyle: require(
    './lib/loader.sass.style.js'
  ),
  loaderSvgFile: require(
    './lib/loader.svg.file.js'
  ),
  loaderVideoFile: require(
    './lib/loader.video.file.js'
  ),
  pluginBundleAnalyzer: require(
    './lib/plugin.bundle-analyzer.js'
  ),
  pluginClean: require(
    './lib/plugin.clean.js'
  ),
  pluginHtml: require(
    './lib/plugin.html.js'
  ),
  pluginOptimizeCssAssets: require(
    './lib/plugin.optimize-css-assets.js'
  ),
  pluginPurgecss: require(
    './lib/plugin.purgecss.js'
  )
}

module.exports = partials
