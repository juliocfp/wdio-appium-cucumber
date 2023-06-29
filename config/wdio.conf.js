exports.config = {
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 600,
    connectionRetryTimeout: 900,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: true,
        compiler: [],
        dryRun: false,
        format: ['pretty'],
        colors: true,
        tags: [],
        timeout: 5000,
        tagExpression: 'not @skip',
    },
    services: ['appium'],
    appium: {
        log: false,
        args: {},
        command: 'appium',
    },

    port: 4723,

    afterStep(scenario) {
         if (scenario.error) {
             driver.takeScreenshot();
         }
     },
};
