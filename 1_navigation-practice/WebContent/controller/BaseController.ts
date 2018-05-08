declare const console: any;
declare const sap: any;
declare const jQuery: any;
declare const setTimeout: any;
sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller: any) => {
    "use strict";
    return Controller.extend("worklist.controller.BaseController", {
        getRouter(): any {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });
});