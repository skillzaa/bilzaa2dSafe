module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
///////////////////////////////////////////////////////////      

      copy: {
        main: {
          files: [
            {cwd: "src", src: ["**"], dest: 'testsrc/' , expand: true}
          ],
        },
      },
      clean: {
        inter: {
          src: ['src/interfaces']
        },
        others:{
          src : ['src' ,  'build' , 'testSrc' , 'dist']
        }
      },
      transpile: {
        main: {
          type: "cjs", // or  "cjs" "amd" or "yui"
          files: [{
            expand: true,
            cwd: 'src',
            src: ['metal/Metal.js'],
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
    grunt.loadNpmTasks('grunt-transform-amd');
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  grunt.registerTask("sleep",function(){
    console.log("sleeping");
  });
  //grunt.registerTask("someName" , ["task1" , "task2"]);
//---------------------------------------------------  
  };

  