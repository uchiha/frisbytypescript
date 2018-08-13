// main entry point for defining grunt tasks

module.exports =  function (grunt) {
  
    grunt.initConfig({
        ts: {
            default : {
            //   tsconfig: './tsconfig.json'
            //   tsconfig: true
            src : ["**/*.ts", "!node_modules/**/*.ts"],
            outDir : "compiled",
            options : {
                module : 'commonjs'
                // strict : true,
                // target : "es5"
            }
            }
        },
        cucumberjs : {
            options : {
                format : 'html',
                output : 'my_reports.html',
                theme : 'bootstrap',
                // theme : 'foundation',
                require : 'compiled/step_definitions'
            },
            features : ['src/features']
        }
    });
    grunt.loadNpmTasks('grunt-cucumberjs');
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask('default', ['cucumberjs']);
};