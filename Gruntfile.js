module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
///////////////////////////////////////////////////////////      
      uglify: {
        options: {
          banner: ''
        },
        build: {
          src: 'src/bilzaa2d.js',
          dest: 'build/bilzaa2d.min.js'
        }
      },

      copy: {
        main: {
          files: [
            {cwd: "src", src: ["**"], dest: 'testsrc/' , expand: true}
          ],
        },
      },

      clean: ['src' , 'build' , 'testsrc' , 'dist'],
      cleanInter: ['src/interfaces'],

      transpile: {
        main: {
          type: "cjs", // or  "cjs" "amd" or "yui"
          files: [{
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'testsrc/'
          }]
        }
      },
    
////////////////////////////////////////////////////////////////////////
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  
  };