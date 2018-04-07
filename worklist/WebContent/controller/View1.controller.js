//webeclipse
//https://dzone.com/articles/webinar-recap-learning-advanced-angular-component
(function() {

	var dataService = undefined;

	function onControl() {
		let router = sap.ui.core.UIComponent.getRouterFor(this);

		router.navTo("Controls");
	}

	function onSimpleForm() {
		let router = sap.ui.core.UIComponent.getRouterFor(this);
		dataService.asyncCall();
		router.navTo("SimpleForm");
	}

	function viewController(controller, messageToast, service) {
		dataService = service;
		let ctrl = controller.extend("worklist.controller.View1", {
			varValue : "View1Controller",
			onControl : onControl,
			onSimpleForm : onSimpleForm
		});

		return ctrl;
	}

	sap.ui.define([ 'sap/ui/core/mvc/Controller',
		'sap/m/MessageToast',
		'../service/data-service' ], viewController);
}());

// https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070