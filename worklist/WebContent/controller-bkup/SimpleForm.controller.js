(function (vm) {
    "use strict";
    function onInit() {
        vm.onInit(this);
    }
    function handleLoadItems() {
        vm.handleLoadItems();
    }
    function save() {
        vm.save();
    }
    function initController(controller, vModel) {
        vm = vModel;
        var ctrl = controller.extend("worklist.controller.SimpleForm", {
            onInit: onInit,
            handleLoadItems: handleLoadItems,
            save: save
        });
        return ctrl;
    }
    sap.ui.define(["sap/ui/core/mvc/Controller",
        "../viewmodel/simple-form-view-model"
    ], initController);
})();
//# sourceMappingURL=SimpleForm.controller.js.map