module.exports = {
    //处理前端跨域问题
    devServer:{
        proxy:{
            '/reflex_1':{
                target:"http://192.168.0.109:3000",
                changeOrigin:true,
                pathRewrite:{
                    '^/reflex_1': ''
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            //给文件取别名
            alias:{
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'assets': '@/assets',
            }
        },
    }
}