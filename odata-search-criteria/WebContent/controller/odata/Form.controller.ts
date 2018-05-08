namespace controller {

    declare let console: any;

    class FormClass {
        busyIndicator: any;
        dialog: any;
        MessageToast: any;
        JSONModel: any;
        service: service.OrderService;
        ctrl: any;
        DateFormat: any;
        employeeService: servicemodel.IEmployeeService;
        ODataModel: any;
        ODataV4Model: any;

        constructor(service: service.OrderService, JsonModel: any, messageToast: any,
            busyIndicator: any, DateFormat: any, categoryService: servicemodel.IEmployeeService,
            odataModel: any, odataV4Model: any) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
            this.ODataModel = odataModel;
            this.ODataV4Model = odataV4Model;
        }

        getView() {
            return this.ctrl.getView();
        }

        onInit(ctrl: any) {
            this.ctrl = ctrl;
            const oForm = this.getView().byId("idSimpleForm");

            oForm.bindElement("Northwind>/Categories(2)");

            const oModel = new this.ODataV4Model({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/Northwind/Northwind.svc/",
                synchronizationMode: "None"
            });
        }
    }

    function formController(
        controller: any,
        jsonModel: any,
        messageToast: any,
        busyIndicator: any,
        DateFormat: any,
        service: service.OrderService,
        employeeService: servicemodel.IEmployeeService,
        odataModel: any,
        odataV4Model: any
    ) {
        const gridDataTableClass = new FormClass(service, jsonModel, messageToast,
            busyIndicator, DateFormat, employeeService, odataModel, odataV4Model);
        // our exposed api
        const extendedController = controller.extend("worklist.controller.odata.Form", {
            onInit: function () { gridDataTableClass.onInit(this) }
        });

        return extendedController;
    }

    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "sap/ui/core/BusyIndicator",
        "sap/ui/core/format/DateFormat",
        "../../service/order-service",
        "../../service/employee-service",
        "sap/ui/model/odata/v2/ODataModel",
        "sap/ui/model/odata/v4/ODataModel"
    ], formController);

}
