//https://dzone.com/articles/webinar-recap-learning-advanced-angular-component
// https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
(function (viewModel) {

	function onControl() {
		viewModel.onControl(this);
	}

	function onSimpleForm() {
		viewModel.onSimpleForm(this);
	}

	function viewController(controller, vm) {
		viewModel = vm;
		let ctrl = controller.extend("worklist.controller.View1", {
			varValue: "View1Controller",
			onControl: onControl,
			onSimpleForm: onSimpleForm
		});
		return ctrl;
	}
	sap.ui.define(["sap/ui/core/mvc/Controller",
		"../viewmodel/view1-view-model"
	], viewController);

}());