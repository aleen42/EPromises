/*
 * Copyright (c) 2021 Coremail.cn, Ltd. All Rights Reserved.
 */

const webpackConfig = Object.assign({}, require('./webpack.config'));
delete webpackConfig.entry;

module.exports = config => {
    config.set({
        webpack       : webpackConfig,
        files         : ['test/index.js'],
        preprocessors : {'test/index.js' : ['webpack', 'sourcemap']},
        frameworks    : ['jasmine', 'webpack', 'detectBrowsers'],
        reporters     : ['mocha'],
        singleRun     : true,
        plugins       : [
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-ie-launcher',
            'karma-edge-launcher',
            'karma-detect-browsers',
        ],

        client : {jasmine : {random : false}},

        detectBrowsers : {
            // ref: https://github.com/karma-runner/karma-safari-launcher/issues/12
            'postDetection' : availableBrowser => availableBrowser.filter(name => name !== 'Safari'),
        },
    });
};
