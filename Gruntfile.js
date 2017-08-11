module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');

    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      includes: {
        files: {
          src: ['./src/index.html'],
          dest: 'dist',
          flatten: true
        }
      }

    });

    grunt.registerTask('default', ['includes']);

};
