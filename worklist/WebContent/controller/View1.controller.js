(function() {
	var ctrl = undefined;
	var that = undefined;
	
	function onControl() {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("Controls");
	}

	function onSimpleForm() {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("SimpleForm");
	}

	function onAfterRendering() {
		that = this;
	}

	function viewController(controller) {
		ctrl = controller.extend("worklist.controller.View1", {
			varValue : "View1Controller",
			onControl : onControl,
			onSimpleForm : onSimpleForm,
			onAfterRendering : onAfterRendering,
		});

		return ctrl;
	}

	sap.ui.define([ 'sap/ui/core/mvc/Controller', 'sap/m/MessageToast' ],
			viewController);
}());

// https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
