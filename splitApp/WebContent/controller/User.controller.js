var controller;
(function (controller) {
    sap.ui.define(["sap/ui/demo/toolpageapp/controller/BaseController"], function (BaseController) {
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
})(controller || (controller = {}));
//# sourceMappingURL=User.controller.js.map