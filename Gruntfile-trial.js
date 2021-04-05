module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
///////////////////////////////////////////////////////////      
    concat: {
      js: {
        cwd : 'src',
        src: ['**/*.js'],
        dest: 'dist/basic.js',
      }
    },
    clean: {
      inter: {
        src: ['src/interfaces']
      },
      others:{
        src : ['src' ,  'build' , 'testsrc' , 'dist']
      }
    },
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
    }
////////////////////////////////////////////////////////////////////////
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-es6-module-transpiler');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Default task(s).
   // grunt.registerTask('default', ['uglify']);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  grunt.registerTask("sleep",function(){
    console.log("sleeping");
  });
  //grunt.registerTask("someName" , ["task1" , "task2"]);
//---------------------------------------------------  
  
}////this is the main function that makes it a module
  