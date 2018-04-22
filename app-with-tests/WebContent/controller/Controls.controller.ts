namespace controller {
	declare let window: any;
	let history: any = undefined;
	let ctrl: any = undefined;
	let messageToast: sapmodel.MessasgeToast = undefined;
	let actionSheet: any = undefined;

	function handleOpen(oEvent: any) {
		var oButton = oEvent.getSource();
		actionSheet.openBy(oButton);
	}

	function getUrl() {
		return "123_345";
	}

	function onNavBack() {
		var oHistory = history.getInstance();
		var sPreviousHash = oHistory.getPreviousHash();

		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		}
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

	function controlsController(Controller: any, MessageToast: sapmodel.MessasgeToast, hs: any, service: any) {
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

	// inject dependency in define method like controller below
	sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/routing/History",
		"../service/simple-form-data-service"
	], controlsController);
}
