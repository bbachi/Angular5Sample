const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const Dotenv = require('dotenv-webpack');
var commonConfig = require('./common.config.js');

const configBasedOnMode = mode => {
    var environmentFile = commonConfig.getEnvironmentFile(mode);
    
    return merge([{}]);
}
 

module.exports = mode => {
    console.log("Building for the environment::::"+mode)
    return merge(baseConfig,configBasedOnMode(mode))
}

