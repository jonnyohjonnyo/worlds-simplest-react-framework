module.exports = {
    entry: './scripts/consumer.jsx',
    output: {
        filename: 'index.js',
        path: './'
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