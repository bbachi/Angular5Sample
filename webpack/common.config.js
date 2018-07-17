var path =  require('path');
var CommonConfig = function() {}

CommonConfig.prototype.getEnvironmentFile = function(mode){
    if(mode === 'local'){
        return path.resolve(__dirname,"../environment/local/.env");
    }else if(mode === 'dev'){
        return path.resolve(__dirname,"../environment/dev/.env");
    }else if(mode === 'stg'){
        return path.resolve(__dirname,"../environment/stg/.env");
    }else if(mode === 'prod'){
        return path.resolve(__dirname,"../environment/prod/.env");
    }
    return path.resolve(__dirname,"../environment/local/.env");
}

module.exports = new CommonConfig()