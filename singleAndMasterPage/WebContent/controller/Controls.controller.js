var controller;
(function (controller) {
    var history = undefined;
    var ctrl = undefined;
    var messageToast = undefined;
    var actionSheet = undefined;
    function handleOpen(oEvent) {
        var oButton = oEvent.getSource();
        actionSheet.openBy(oButton);
    }
    function onNavBack() {
        var oHistory = history.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
            window.history.go(-1);
        }
    }
    function actionSelected(oEvent) {
        messageToast.show("Selected action is  " + oEvent.getSource().getText());
    }
    function onAfterRendering() {
        if (!actionSheet) {
            actionSheet = sap.ui.xmlfragment("worklist.view.ActionSheet", this);
            this.getView().addDependent(actionSheet);
        }
    }
    function controlsController(Controller, MessageToast, hs) {
        messageToast = MessageToast;
        history = hs;
        ctrl = Controller.extend("worklist.controller.Controls", {
            varValue: "FormLayout1Controller",
            handleOpen: handleOpen,
            actionSelected: actionSelected,
            onAfterRendering: onAfterRendering,
            history: history,
            onNavBack: onNavBack
        });
        return ctrl;
    }
    sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/routing/History"], controlsController);
})(controller || (controller = {}));
//# sourceMappingURL=Controls.controller.js.map