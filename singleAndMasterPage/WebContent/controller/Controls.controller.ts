namespace controller {

	var ctrl = undefined;
	var messageToast: sapmodel.MessasgeToast = undefined;
	var actionSheet: any = undefined;

	function handleOpen(oEvent: any) {
		var oButton = oEvent.getSource();
		actionSheet.openBy(oButton);
	}

	function actionSelected(oEvent: any) {
		messageToast.show(`Selected action is  ${oEvent.getSource().getText()}`);
	}

	function onAfterRendering() {
		if (!actionSheet) {
			actionSheet = sap.ui.xmlfragment("worklist.view.ActionSheet", this);
			this.getView().addDependent(actionSheet);
		}
	}

	function controlsController(Controller: any, MessageToast: sapmodel.MessasgeToast) {
		messageToast = MessageToast;
		ctrl = Controller.extend("worklist.controller.Controls", {
			varValue: "FormLayout1Controller",
			handleOpen: handleOpen,
			actionSelected: actionSelected,
			onAfterRendering: onAfterRendering,
		});

		return ctrl;
	}

	// inject dependency in define method like controller below
	sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
		controlsController);

}
