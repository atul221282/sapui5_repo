
//https://sapui5.hana.ondemand.com/#/topic/91f087396f4d1014b6dd926db0e91070
((vm: viewmodel.SimpleFormViewModel = undefined) => {
	"use strict";

	function onInit() {
		vm.onInit(this);
	}

	function handleLoadItems(event: any) {
		vm.handleLoadItems(event);
	}

	async function save(event: any) {
		const result = await vm.save(event, this);
		
		return result;
	}

	function initController(controller: any, vModel: viewmodel.SimpleFormViewModel) {
		vm = vModel;
		let ctrl = controller.extend("worklist.controller.SimpleForm", {
			onInit: onInit,
			handleLoadItems: handleLoadItems,
			save: save
		});
		return ctrl;
	}

	sap.ui.define(["sap/ui/core/mvc/Controller",
		"../viewmodel/simple-form-view-model"
	], initController);

})();