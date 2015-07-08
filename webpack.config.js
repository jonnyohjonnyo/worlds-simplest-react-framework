module.exports = {
    entry: './scripts/consumer.jsx',
    output: {
        filename: 'app.js',
        path: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};