const { join } = require('path');
const { config } = require('./wdio.conf');

config.cucumberOpts.require = ['./tests/steps/*.steps.js'];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel XL API 33',
        'appium:platformVersion': '13.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(
            process.cwd(),
            './apps/nuclone.apk',
        ),
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
