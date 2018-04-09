(function () {
    "use strict";
    var ctrl = undefined;
    var messageToast = undefined;
    var actionSheet = undefined;
    function handleOpen(oEvent) {
        var oButton = oEvent.getSource();
        actionSheet.openBy(oButton);
    }
    function actionSelected(oEvent) {
        messageToast.show("Selected action is '" + oEvent.getSource().getText()
            + "'");
    }
    function onAfterRendering() {
        if (!actionSheet) {
            actionSheet = sap.ui.xmlfragment("worklist.view.ActionSheet", this);
            this.getView().addDependent(actionSheet);
        }
    }
    function controlsController(Controller, MessageToast) {
        messageToast = MessageToast;
        ctrl = Controller.extend("worklist.controller.Controls", {
            varValue: "FormLayout1Controller",
            handleOpen: handleOpen,
            actionSelected: actionSelected,
            onAfterRendering: onAfterRendering,
        });
        return ctrl;
    }
    sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], controlsController);
})();
//# sourceMappingURL=Controls.controller.js.map