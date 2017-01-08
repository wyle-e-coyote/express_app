var path = require("path");

module.exports = {
    devtool: "source-map",
    entry: {
        "index": "./src/index.tsx",
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/javascripts",
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: "babel-loader!awesome-typescript-loader",
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" },
        ],
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
    },
    debug: true,
    stats: {
        colors: true,
        errorDetails: true,
        modules: true,
        reasons: true,
    },
};
