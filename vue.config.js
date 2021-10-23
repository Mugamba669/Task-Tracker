module.exports = {
    devServer:{
        proxy:{
            "^/api":{
                target:"http://localhost:2000",
                changeOrigin:true,
                logLevel:'debug',
                pathRewrite:{'^/api':'/'}
            }
        }
    }
}