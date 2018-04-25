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
        employeeService: service.EmployeeService;
        ODataModel: any;

        constructor(service: service.OrderService, JsonModel: any, messageToast: any,
            busyIndicator: any, DateFormat: any, categoryService: service.EmployeeService,
            odataModel: any) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
            this.ODataModel = odataModel;
        }

        getView() {
            return this.ctrl.getView();
        }

        async onInit(ctrl: any) {
            this.ctrl = ctrl;
            const oForm = this.getView().byId("idSimpleForm");
            oForm.bindElement("Northwind>/Categories(2)");

            // const oModel = new this.ODataModel({
            //     serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/Northwind/Northwind.svc"
            // });

            // oModel.read("/Categories(2)", {
            //     method: "GET",
            //     success: (data: any) => console.dir(JSON.stringify(data)),
            //     error: (err: any) => console.error(err)
            // });
        }

    }

    function formController(
        controller: any,
        jsonModel: any,
        messageToast: any,
        busyIndicator: any,
        DateFormat: any,
        service: service.OrderService,
        employeeService: service.EmployeeService,
        odataModel: any
    ) {
        const gridDataTableClass = new FormClass(service, jsonModel, messageToast,
            busyIndicator, DateFormat, employeeService, odataModel);
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
        "sap/ui/model/odata/v2/ODataModel"
    ], formController);

}
