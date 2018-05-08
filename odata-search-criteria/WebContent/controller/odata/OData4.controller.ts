namespace controller {

    declare let console: any;

    class OData4Class {
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
            const oJSONData = {
                busy: false
            };
            const oModel = new this.JSONModel(oJSONData);

            const oData = new this.ODataV4Model({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/TripPinRESTierService/(S(id))/",
                autoExpandSelect: true,
                operationMode: "Server",
                groupId: "$direct",
                synchronizationMode: "None"
            });
        }

        onAfterRendering(e: any) {
        }
    }

    function oData4FormController(
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
        const odata4 = new OData4Class(service, jsonModel, messageToast,
            busyIndicator, DateFormat, employeeService, odataModel, odataV4Model);
        // our exposed api
        const extendedController = controller.extend("worklist.controller.odata.OData4", {
            onInit: function () { odata4.onInit(this) },
            onAfterRendering: (e: any) => odata4.onAfterRendering(e)
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
    ], oData4FormController);

}
