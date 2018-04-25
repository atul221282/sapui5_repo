sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    function onPress() {
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("odetailpage2");
    }
    return Controller.extend("worklist.controller.odetailpage", {
        onPress: onPress
    });
});
//# sourceMappingURL=odetailpage.controller.js.map