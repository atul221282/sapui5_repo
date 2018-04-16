namespace controller {
    declare const sap: any;

    sap.ui.define(["sap/ui/demo/toolpageapp/controller/BaseController"],
        function (BaseController: any) {

            function onInit() {

            }

            return BaseController.extend("sap.ui.demo.toolpageapp.controller.Controls", {
                onInit: onInit
            });
        });
}