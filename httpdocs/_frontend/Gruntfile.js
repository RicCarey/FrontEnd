module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
		    dist: { 
                options: {                       // Target options
		            style: 'expanded'
		        },
                files: {
                    'styles/output/normalize.css': 'styles/normalize.scss',
                    'build/sass/output/global.css': 'styles/global.scss',
                    'build/sass/output/grid.css': 'styles/grid.scss',
                    'build/sass/output/mediaQ.css': 'styles/mediaQ.scss',
                    'build/sass/output/utilities.css': 'styles/utilities.scss'
				}
			}
		},
		watch: {
		    options:
            {
                livereload: true
            },
		    css: {
		        files: '**/*.scss',
		        tasks: ['sass']
		    },
		    cshtml: {
		        files: ['**/*.cshtml']
		    }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}

