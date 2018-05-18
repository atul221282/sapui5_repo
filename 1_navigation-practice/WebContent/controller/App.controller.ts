namespace controller {
    sap.ui.define(["worklist/controller/BaseController"],
        (Controller: BaseControllerModel.Extends<BaseControllerModel.BaseController>) => {
            "use strict";
            return Controller.extend("worklist.controller.App", <BaseControllerModel.BaseController>{

            });
        });
}

    // /**
    //  * App controller
    //  */
    // sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller: any) {
    //     "use strict";

    //     return Controller.extend("worklist.controller.App", {
    //         test: "appController"
    //     });
    // });
