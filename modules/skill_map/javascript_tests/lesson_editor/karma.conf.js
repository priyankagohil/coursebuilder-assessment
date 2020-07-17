module.exports = function(config) {
  config.set({
    basePath: '../../../..',
    files: [
      'lib/_static/jquery-2.2.4/jquery.min.js',
      'tests/unit/javascript_tests/lib/common.js',
      'modules/skill_map/javascript_tests/lesson_editor/*.js',
      {
        pattern: 'modules/skill_map/javascript_tests/lesson_editor/*.html',
        watched: true,
        included: false,
        served: true
      },
      'modules/skill_map/resources/js/skill_tagging_lib.js',
      'modules/core_ui/_static/*/*.js'
    ],
    exclude: ['**/karma.conf.js'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
