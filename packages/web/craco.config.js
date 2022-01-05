const webpack = require("webpack");
const { getWebpackTools } = require("react-native-monorepo-tools");
const path = require('path');
const { when, whenDev } = require("@craco/craco");

const monorepoWebpackTools = getWebpackTools();

module.exports = {
    webpack: {
        alias: {
            "src": path.join(path.resolve(__dirname, './src')),
        },
        configure: (webpackConfig) => {
            // Allow importing from external workspaces.
            monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
            // Ensure nohoisted libraries are resolved from this workspace.
            monorepoWebpackTools.addNohoistAliases(webpackConfig);
            return webpackConfig;
        },
        plugins: [
            // Inject the "__DEV__" global variable.
            new webpack.DefinePlugin({
                __DEV__: process.env.NODE_ENV !== "production",
            })
        ],
    },
    watch: {
        "build:election": "src/**/*.*"
    }
};
