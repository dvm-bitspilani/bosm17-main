module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-minify-html');

    grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),

      includes: {
        files: {
          src: ['./src/index.html'],
          dest: 'dist',
          flatten: true
        }
      },

      minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'dist/index.html': 'dist/index.html'
            }
        }
    }

    });

    grunt.registerTask('default', ['includes','minifyHtml']);

};
