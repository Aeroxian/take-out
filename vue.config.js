module.exports = {
    // 设置代理，解决跨域
    devServer: {
        //本机地址端口
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //代理
        proxy: {
            '/api': {//匹配所有以'/api'开头的请求路径
                target: 'http://localhost:4000', //代理目标的基础地址
                changeOrign: true, //支持跨域
                pathRewrite: { //重写路径:去掉路径中开头的'/api'
                    '^/api':''
                },
            },
        },
    },

}