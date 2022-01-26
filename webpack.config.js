const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require("path");


var htmlPages = glob.sync('./src/*.html').map(path => {
    var chunk = path.replace(".html", '').replace("./src/","")
    return new HtmlWebpackPlugin({
        template: path,
        filename: `pages/${chunk}.html`,
        //chunks: [chunk, 'vendor'],
        chunks: [chunk],

        inject: true
    })
})
 

module.exports = {
   // watch: true,
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js'
    },
    output: {
        filename: 'js/[name]/[name].js',
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: path.resolve(__dirname, "dist", "pages")

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader' 
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [        
        //new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ].concat(htmlPages)

}