var path = require('path');
var webpack = require('webpack');
var base_c = require('./chore/chore.config');

module.exports = function makeWebpackConfig() {

    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.resolve = {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.html', '.scss', '.ts', '.tsx', '.js', '.webpack.js', '.web.js'],
        // root: __dirname
    };

    //Exclude all external files from bundle
    config.externals = {
        'angular': 'angular'
    };

    config.entry = {
        app: path.join(__dirname, base_c.src, 'index.ts')
    };

    config.output = {
        filename: 'index.js',
        path: path.join(__dirname, base_c.dist)
    };

    // Source maps support
    config.devtool = 'source-map';

    config.module = {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // specify option using query
            {
                test: /\.tsx?$/,
                // exclude: '*.jasmine.ts',
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate-loader?relativeTo=' + __dirname + '/!html-loader'
            },
            {
                test: [/\.svg/],
                loader: 'file-loader?name=assets/images/[name].[ext]'
            }
        ]
    };

    // config.sassLoader = {
    //     outputStyle: 'compressed'
    // };

    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false
        })
    ];

    return config;

}();