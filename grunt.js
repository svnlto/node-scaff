/*global module:false*/

var fs = require('fs'),
    jshintOptions = JSON.parse(fs.readFileSync('./.jshintrc'));

module.exports = function(grunt) {

  "use strict";

  grunt.loadNpmTasks('grunt-mocha-test');

  // Project configuration.
  grunt.initConfig({

    lint: {
      files: [
        'grunt.js',
        'lib/**/*.js',
        'test/**/*-test.js'
      ]
    },

    watch: {
      files: ['<config:lint.files>'],
      tasks: 'lint mochaTest'
    },
     mochaTest: {
      files: [
        'test/**/*-test.js'
      ]
    },

    mochaTestConfig: {
      options: {
        reporter: 'dot'
      }
    },

    jshint: {
      options: jshintOptions
    }

  });

  // Default task.
  grunt.registerTask('default', 'lint');

  grunt.registerTask('test', 'lint mochaTest');

};
