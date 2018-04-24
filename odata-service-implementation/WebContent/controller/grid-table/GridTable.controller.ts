namespace controller {

    class GridDataTableClass {

        MessageToast: any;
        JSONModel: any;
        service: service.SimpleFormDataService;
        ctrl: any;

        constructor(service: service.SimpleFormDataService, JsonModel: any, messageToast: any) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
        }

        getView() {
            return this.ctrl.getView();
        }

        getModel() {
            return this.ctrl.getView().getModel()
        }

        async onInit(ctrl: any) {
            this.ctrl = ctrl;
            const todos = await this.service.getTodos();
            var oModel = new this.JSONModel({
                data: todos
            });
            this.getView().setModel(oModel);
        }

        handleDetailsPress(e: any) {
            const model = this.getModel();
            const path = e.getSource().getBindingContext().getPath();
            const obj = model.getProperty(path);

            this.MessageToast.show(`Details for product with email 
            ${obj["name"]} got email : ${model.getProperty("email", e.getSource().getBindingContext())}`);
        }

        onIdChange(e: any) {
            const selectedItem = e.getSource().getParent();
            const cells = selectedItem.getCells();
            debugger;
            cells[2].setEditable(true);
        }
    }

    function gridDataTableController(controller: any, jsonModel: any, messageToast: any, service: service.SimpleFormDataService) {
        const gridDataTableClass = new GridDataTableClass(service, jsonModel, messageToast);
        const extendedController = controller.extend("worklist.controller.grid-table.GridTable", {
            onInit: function () { gridDataTableClass.onInit(this) },
            handleDetailsPress: (e: any) => gridDataTableClass.handleDetailsPress(e),
            onIdChange: (e: any) => gridDataTableClass.onIdChange(e),
        });

        return extendedController;
    }

    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "../../service/simple-form-data-service"
    ], gridDataTableController);

}
