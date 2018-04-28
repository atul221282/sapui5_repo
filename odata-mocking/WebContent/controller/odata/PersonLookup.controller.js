var controller;
(function (controller_1) {
    var PersonLookupClass = (function () {
        function PersonLookupClass(jsonModel, odataModel) {
            this.JSONModel = jsonModel;
            this.ODataModel = odataModel;
        }
        PersonLookupClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        PersonLookupClass.prototype.onInit = function (ctrl) {
            var _this = this;
            this.ctrl = ctrl;
            var oJSONData = {
                busy: false
            };
            var backendModel = new this.ODataModel({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/"
            });
            backendModel.read("/Products", {
                success: function (data) {
                    console.clear();
                    console.log(JSON.stringify(data));
                    var oModel = new _this.JSONModel({
                        data: data.results
                    });
                    _this.getView().setModel(oModel, "products");
                }
            });
        };
        PersonLookupClass.prototype.onAfterRendering = function (e) {
        };
        return PersonLookupClass;
    }());
    function oData4FormController(controller, jsonModel, odataModel) {
        var odata4 = new PersonLookupClass(jsonModel, odataModel);
        var extendedController = controller.extend("worklist.controller.odata.PersonLookup", {
            onInit: function () { odata4.onInit(this); },
            onAfterRendering: function (e) { return odata4.onAfterRendering(e); }
        });
        return extendedController;
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel"
    ], oData4FormController);
})(controller || (controller = {}));
//# sourceMappingURL=PersonLookup.controller.js.map