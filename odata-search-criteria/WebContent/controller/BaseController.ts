namespace controller {

    export class BaseController {
        getRouter(): any { }
    }
    function BaseControllerC(controller: any) {
        // our exposed api
        const baseControllerParams = {
            getRouter: function (): any {
                return sap.ui.core.UIComponent.getRouterFor(this);
            }
        };
        return controller.extend("worklist.controller.BaseController", baseControllerParams);
    }

    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], BaseControllerC);

}
