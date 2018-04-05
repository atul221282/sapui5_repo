//https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
(function() {
	"use strict";

	var dataService,
		JSONModel;

	async function onInit() {
		var oModel = new JSONModel({
			data : (await dataService.asyncCall())
		});

		this.getView().setModel(oModel);
	}

	function initController(controller, jsonModel, service) {
		JSONModel = jsonModel;
		dataService = service;
		let ctrl = controller.extend("worklist.controller.SimpleForm", {
			onInit : onInit
		});
		return ctrl;
	}

	sap.ui.define([ "sap/ui/core/mvc/Controller",
		'sap/ui/model/json/JSONModel',
		'../service/data-service' ], initController);

}());