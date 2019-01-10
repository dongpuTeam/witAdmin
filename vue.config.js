
module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/"
    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: '' // 相对于outputDir的静态资源(js、css、img、fonts)目录

    // 基本路径
    // baseUrl: './',
    // 输出文件目录
    // outputDir: 'dist',
    // webpack-dev-server 相关配置
    // devServer: {
    //     port: 8888
    // }
};