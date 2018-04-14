(function (viewModel) {
    if (viewModel === void 0) { viewModel = undefined; }
    function onControl() {
        viewModel.onControl(this);
    }
    function onSimpleForm() {
        viewModel.onSimpleForm(this);
    }
    function viewController(controller, vm) {
        viewModel = vm;
        var ctrl = controller.extend("worklist.controller.View1", {
            varValue: "View1Controller",
            onControl: onControl,
            onSimpleForm: onSimpleForm
        });
        return ctrl;
    }
    sap.ui.define(["sap/ui/core/mvc/Controller",
        "../viewmodel/view1-view-model"
    ], viewController);
})();
//# sourceMappingURL=View1.controller.js.map