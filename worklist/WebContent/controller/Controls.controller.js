(function() {

	"use strict";
	var ctrl = undefined;
	var messageToast = undefined;
	function handleOpen(oEvent) {
		var oButton = oEvent.getSource();

		// create action sheet only once
		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment("worklist.view.ActionSheet",
					this);
			this.getView().addDependent(this._actionSheet);
		}

		this._actionSheet.openBy(oButton);
	}

	function actionSelected(oEvent) {
		messageToast.show("Selected action is '" + oEvent.getSource().getText()
				+ "'");
	}

	function controlsController(Controller, MessageToast) {
		messageToast = MessageToast;
		ctrl = Controller.extend("worklist.controller.Controls", {
			varValue : "FormLayout1Controller",
			handleOpen : handleOpen,
			actionSelected : actionSelected
		});

		return ctrl;
	}

	// inject dependency in define method like controller below
	sap.ui.define([ 'sap/ui/core/mvc/Controller', 'sap/m/MessageToast' ],
			controlsController);

}());