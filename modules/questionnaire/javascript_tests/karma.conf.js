module.exports = function(config) {
  config.set({
    basePath: '../../..',
    files: [
      'lib/_static/jquery-2.2.4/jquery.min.js',
      'modules/questionnaire/javascript_tests/*.js',
      {
        pattern: 'modules/questionnaire/javascript_tests/fixture.html',
        watched: true,
        included: false,
        served: true
      },
      {
        pattern: 'modules/questionnaire/javascript_tests/form_data.json',
        watched: true,
        included: false,
        served: true
      },
      'modules/questionnaire/resources/js/questionnaire.js'
    ],
    exclude: ['**/karma.conf.js'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true,
  });
};
