(function () {
    "use strict";
    function onInit() {
    }
    function handleLoadItems(event) {
    }
    function save(event) {
    }
    function initController(controller, service) {
        var ctrl = controller.extend("worklist.controller.SimpleForm", {
            onInit: onInit,
            handleLoadItems: handleLoadItems,
            save: save
        });
        return ctrl;
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "../service/simple-form-data-service"
    ], initController);
})();
//# sourceMappingURL=SimpleForm.controller.js.map