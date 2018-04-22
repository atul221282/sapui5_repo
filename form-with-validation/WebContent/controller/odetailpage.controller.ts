/**
 * App controller
 */
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller: any) {
    "use strict";

    function onPress() {
        const router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("odetailpage2");
    }
    return Controller.extend("worklist.controller.odetailpage", {
        onPress: onPress
    });
});