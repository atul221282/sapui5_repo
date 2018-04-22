module.exports = function (grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    keepalive: true,
                    open: {
                        target: "http://localhost:9000/webcontent"
                    }
                }
            }
        },
        ts: {
            default: {
                tsconfig: "./tsconfig.json"
            },
            compileTwoSetsOfFilesToDirUsingArrayStyle: {
                files: [{
                        src: ["WebContent/ts-viewmodel/*.ts", "!node_modules/**"],
                        dest: "WebContent/viewmodel"
                    },
                    {
                        src: ["WebContent/ts-controller/*.ts"],
                        dest: "WebContent/controller"
                    }
                ],
                options: {
                    fast: "never"
                }
            }
        },
        clean: {
            build: {
                src: [
                    "WebContent/controller/global.var.js",
                    "WebContent/viewmodel/global.var.js",
                    "WebContent/controller/global.var.js.map",
                    "WebContent/viewmodel/global.var.js.map"
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.registerTask("tg", ["ts", "clean"]);
    grunt.registerTask("default", ["connect"]);
};