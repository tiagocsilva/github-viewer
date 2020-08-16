module.exports = {
    publicPath: "./",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_colors.scss";`
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'GitHub Viewer'
                return args
            })
    },
    transpileDependencies: [
        "epic-spinners"
    ]
}