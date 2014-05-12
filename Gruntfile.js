module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
        dist: {
            files: {
                'css/app.css': 'css/app.css'
            }
        }
    },
    jade: {
      compile: {
        files: [{
          cwd: 'jade',
          src: ['*.jade'],
          dest: '.',
          expand: true,
          ext: '.html'
        }]
      },
      options: {
        pretty: true,
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'i',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'i',
        }]
      }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      compass: {
        files: 'scss/**/*.scss',
        tasks: ['compass', 'autoprefixer']
      },
      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade'],
      },
      imagemin: {
        files: ['i/**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('build', ['compass']);
  grunt.registerTask('default', ['build','watch','jade','imagemin']);
}