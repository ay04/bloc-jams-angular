module.exports = function(grunt) {
  grunt.registerTask('default' , 'Testing out grunt logging and task callbacks', ['watch']);

    
    grunt.registerTask('fun', 'This task is for fun only', function() {
        grunt.log.writeln('This is the fun grunt task');
    });
    
    grunt.registerTask('serious', 'This task is for serious stuff only', function() {
        grunt.log.writeln('Wipe that smirk off your face; this is serious.');
    });

    grunt.initConfig({
        watch: {
            files: ['Gruntfile.js']
        },
        
        copy:{
            main:{
                src: ['assets/js/*.js'],
                dest:`./dest/'
                    
                }
            }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

};