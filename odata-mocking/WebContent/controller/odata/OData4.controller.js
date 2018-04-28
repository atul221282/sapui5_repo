var controller;
(function (controller_1) {
    var OData4Class = (function () {
        function OData4Class(service, JsonModel, messageToast, busyIndicator, DateFormat, categoryService, odataModel, odataV4Model) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
            this.ODataModel = odataModel;
            this.ODataV4Model = odataV4Model;
        }
        OData4Class.prototype.getView = function () {
            return this.ctrl.getView();
        };
        OData4Class.prototype.onInit = function (ctrl) {
            this.ctrl = ctrl;
            var oJSONData = {
                busy: false
            };
            var oModel = new this.JSONModel(oJSONData);
            var oData = new this.ODataV4Model({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/TripPinRESTierService/(S(id))/",
                autoExpandSelect: true,
                operationMode: "Server",
                groupId: "$direct",
                synchronizationMode: "None"
            });
        };
        OData4Class.prototype.onAfterRendering = function (e) {
        };
        return OData4Class;
    }());
    function oData4FormController(controller, jsonModel, messageToast, busyIndicator, DateFormat, service, employeeService, odataModel, odataV4Model) {
        var odata4 = new OData4Class(service, jsonModel, messageToast, busyIndicator, DateFormat, employeeService, odataModel, odataV4Model);
        var extendedController = controller.extend("worklist.controller.odata.OData4", {
            onInit: function () { odata4.onInit(this); },
            onAfterRendering: function (e) { return odata4.onAfterRendering(e); }
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
})(controller || (controller = {}));
//# sourceMappingURL=OData4.controller.js.map