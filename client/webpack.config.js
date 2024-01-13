const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                exclude: excludeArray,
                loader: "svg-inline-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./public/assets", to: "assets" }
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 8010,
        open: true,
        client: {
            logging: 'info',
        },
    },
};

// "html-webpack-plugin": "^5.6.0",
// "webpack": "^5.89.0",
// "webpack-cli": "^5.1.4",
// "webpack-dev-server": "^4.15.1"

// "dev": "webpack --mode development --watch ./src/index.js -o ./dist/.",
// "serve": "webpack serve",
// "build": "webpack"