var path = require('path');
    module.exports = {
        entry: './es6/clock.js',
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, 'es6'),
                  loader: 'babel-loader' },
                { test: path.join(__dirname, 'json'),
                  loader: 'json' },
                { test: /\.hbs/,
                  loader: 'handlebars-template-loader' }
            ]
        }
    };
