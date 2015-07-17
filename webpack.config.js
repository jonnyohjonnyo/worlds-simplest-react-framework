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
                loaders: ['babel']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};