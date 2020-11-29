const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: '@ts-tools/webpack-loader',
            },
            {
                test: /\.css$/,
                exclude: /\.st\.css$/,
                use: ['css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
    },
    plugins: [new StylableWebpackPlugin()],
};
