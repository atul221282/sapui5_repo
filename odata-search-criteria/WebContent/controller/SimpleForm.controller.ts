
//https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
(() => {
	"use strict";

	function onInit() {

	}

	function handleLoadItems(event: any) {

	}

	function save(event: any) {

	}

	function initController(controller: any, service: any) {
		let ctrl = controller.extend("worklist.controller.SimpleForm", {
			onInit: onInit,
			handleLoadItems: handleLoadItems,
			save: save
		});
		return ctrl;
	}

	sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"../service/simple-form-data-service"
	], initController);

})();