const _ = require('underscore');

module.exports = _(require('./webpack.config'))
.chain()
.clone()
.extend({
    output: {
        path: '/',
        filename: '/hack-homelessness-web/scripts/bundle.js'
    },
    devtool: 'cheap-module-inline-source-map',
    plugins: []
})
.value();