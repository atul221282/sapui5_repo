var controller;
(function (controller_1) {
    var PersonLookupClass = (function () {
        function PersonLookupClass(jsonModel, odataModel, personLookupService) {
            this._formFragments = {};
            this.JSONModel = jsonModel;
            this.ODataModel = odataModel;
            this.personLookupService = personLookupService;
        }
        PersonLookupClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        PersonLookupClass.prototype.onInit = function (ctrl) {
            this.ctrl = ctrl;
            var oJSONData = {
                busy: false
            };
            this.backendModel = new this.ODataModel({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/"
            });
            var searchFormCriteria = {
                name: "",
                description: "",
                id: -1
            };
            var searchModel = new this.JSONModel({
                criteria: searchFormCriteria
            });
            this.getView().setModel(searchModel, "search");
            this._showFormFragment("PersonLookupCriteria");
            this._readData();
        };
        PersonLookupClass.prototype.onSearch = function () {
            this._readData([this._filterByName()]);
        };
        PersonLookupClass.prototype.onEdit = function (oEvent) {
            var currentRow = this._getCurrentRowObject(oEvent);
        };
        PersonLookupClass.prototype._readData = function (filters) {
            var _this = this;
            if (filters === void 0) { filters = null; }
            this.personLookupService.getProducts({
                filters: filters,
                errorCallback: null,
                sucecssCallback: function (data) { return _this.setProducts(data); },
                backendModel: this.backendModel
            });
        };
        PersonLookupClass.prototype.setProducts = function (data) {
            var oModel = new this.JSONModel({
                data: data.results
            });
            this.getView().setModel(oModel, "products");
        };
        PersonLookupClass.prototype._getModel = function () {
            return this.ctrl.getView().getModel();
        };
        PersonLookupClass.prototype._getCurrentRowObject = function (event) {
            var model = this._getModel();
            return event.getSource().getBindingContext("products").getObject();
        };
        PersonLookupClass.prototype._filterByName = function () {
            var searchFormCriteria = this.getView().getModel("search").getProperty("/criteria/");
            return new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, searchFormCriteria.name);
        };
        PersonLookupClass.prototype._showFormFragment = function (sFragmentName) {
            var oPage = this.getView().byId("pagePanel");
            oPage.removeAllContent();
            var frag = this._getFormFragment(sFragmentName);
            oPage.addContent(frag);
        };
        PersonLookupClass.prototype._getFormFragment = function (sFragmentName) {
            var oFormFragment = this._formFragments[sFragmentName];
            if (oFormFragment) {
                return oFormFragment;
            }
            oFormFragment = sap.ui.xmlfragment(this.getView().getId(), "worklist.view.odata." + sFragmentName, this.ctrl);
            this._formFragments[sFragmentName] = oFormFragment;
            return this._formFragments[sFragmentName];
        };
        return PersonLookupClass;
    }());
    function oData4FormController(controller, jsonModel, odataModel, personLookupService) {
        var odata4 = new PersonLookupClass(jsonModel, odataModel, personLookupService);
        var controllerParams = {
            onInit: function () { odata4.onInit(this); },
            onSearch: function () { return odata4.onSearch(); },
            onEdit: function (oEvent) { return odata4.onEdit(oEvent); }
        };
        return controller.extend("worklist.controller.odata.PersonLookup", controllerParams);
    }
    sap.ui.define([
        "worklist/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel",
        "../../service/person-lookup.service"
    ], oData4FormController);
})(controller || (controller = {}));
//# sourceMappingURL=PersonLookup.controller.js.map