sap.ui.define(["sap/ui/core/mvc/Controller"], getController);

function getRouter(ctrl: any): any {
    const router = sap.ui.core.UIComponent.getRouterFor(ctrl);
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

// Whatever is here will be executed as soon as the script is loaded.
function getController(ctrl: any) {
    return ctrl.extend("worklist.controller.View1", {
        varValue: "View1Controller",
        onControl: onControl,
        onSimpleForm: onSimpleForm,
        onSplitApp: onSplitApp
    });
}
