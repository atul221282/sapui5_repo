//https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
(function () {
	"use strict";

	function initController(controller, vm) {
		let ctrl = controller.extend("worklist.controller.SimpleForm", {
			onInit: vm.onInit,
			handleLoadItems: vm.handleLoadItems,
			save: vm.save
		});
		return ctrl;
	}

	sap.ui.define(["sap/ui/core/mvc/Controller",
		"../viewmodel/simple-form-view-model"
	], initController);

}());