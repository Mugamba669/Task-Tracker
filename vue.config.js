module.exports = {
    publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
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