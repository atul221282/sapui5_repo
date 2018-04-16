namespace controller {
    declare const sap: any;

    sap.ui.define(["sap/ui/demo/toolpageapp/controller/BaseController"],
        function (BaseController: any) {

            function onInit() {

            }

            function onControl() {
                this.getRouter().navTo("controls");
            }

            return BaseController.extend("sap.ui.demo.toolpageapp.controller.User", {
                onInit: onInit,
                onControl: onControl
            });
        });
}