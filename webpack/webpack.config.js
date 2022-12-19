const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const mergeConfig = (envVars = {env: 'dev'}) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)

    return config
}
module.exports = mergeConfig()