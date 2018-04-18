sap.ui.define(["sap/ui/core/mvc/Controller"], getController);
function getRouter(ctrl) {
    var router = sap.ui.core.UIComponent.getRouterFor(ctrl);
    return router;
}
function onControl() {
    getRouter(this).navTo("Controls");
}
function onSimpleForm() {
    getRouter(this).navTo("SimpleForm");
}
function onSplitApp() {
    getRouter(this).navTo("oapp");
}
function getController(ctrl) {
    return ctrl.extend("worklist.controller.View1", {
        varValue: "View1Controller",
        onControl: onControl,
        onSimpleForm: onSimpleForm,
        onSplitApp: onSplitApp
    });
}
//# sourceMappingURL=View1.controller.js.map