var controller;
(function (controller_1) {
    var FormClass = (function () {
        function FormClass(service, JsonModel, messageToast, busyIndicator, DateFormat, categoryService, odataModel) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
            this.ODataModel = odataModel;
        }
        FormClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        FormClass.prototype.onInit = function (ctrl) {
            this.ctrl = ctrl;
            var oForm = this.getView().byId("idSimpleForm");
            oForm.bindElement("Northwind>/Categories(2)");
            var oModel = new this.ODataModel({
                serviceUrl: "/destinations/northwind/V2/Northwind/NorthwindC.svc/"
            });
            oModel.read("/Suppliers(2)", {
                method: "GET",
                success: function (data) { return console.dir(JSON.stringify(data)); },
                error: function (error) { return console.error(error); }
            });
        };
        return FormClass;
    }());
    function formController(controller, jsonModel, messageToast, busyIndicator, DateFormat, service, employeeService, odataModel) {
        var gridDataTableClass = new FormClass(service, jsonModel, messageToast, busyIndicator, DateFormat, employeeService, odataModel);
        var extendedController = controller.extend("worklist.controller.odata.Form", {
            onInit: function () { gridDataTableClass.onInit(this); }
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
})(controller || (controller = {}));
//# sourceMappingURL=Form.controller.js.map