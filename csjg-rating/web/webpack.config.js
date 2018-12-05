/**
 * webpack 配置
 */
function buildConfig(env) {
  return require('./build/' + env + '.js')
}

module.exports = buildConfig(process.env.NODE_ENV);