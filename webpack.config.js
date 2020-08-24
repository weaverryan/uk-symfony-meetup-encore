const path = require('path');

// webpack.config.js
module.exports = {
    entry: {
        app: './public/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'build'),
    },
    mode: 'development'
}

