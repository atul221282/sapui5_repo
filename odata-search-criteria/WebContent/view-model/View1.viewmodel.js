var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var viewmodel;
(function (viewmodel) {
    var View1ViewModel = (function (_super) {
        __extends(View1ViewModel, _super);
        function View1ViewModel(json, ODataModel) {
            var _this = _super.call(this) || this;
            _this.ODataProductModel = new ODataModel({
                serviceUrl: "https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/"
            });
            return _this;
        }
        View1ViewModel.prototype._getInternalRouter = function () {
            return sap.ui.core.UIComponent.getRouterFor(this._ctrl);
        };
        View1ViewModel.prototype._getView = function () {
            var view = this._ctrl.getView();
            return view;
        };
        View1ViewModel.prototype._getRout = function () {
            return this._getInternalRouter();
        };
        View1ViewModel.prototype._sucecssCallback = function (data) {
            var btn = this._getView().byId("btnControl");
            this._getRout().navTo("grid-table/OrderTable");
        };
        View1ViewModel.prototype.init = function (ctrl) {
            this._ctrl = ctrl;
        };
        View1ViewModel.prototype.onOrderTable = function () {
            var _this = this;
            this.ODataProductModel.read("/Products", {
                success: function (data) { return _this._sucecssCallback(data); },
            });
        };
        View1ViewModel.prototype.onControl = function () {
            this._getInternalRouter().navTo("Controls");
        };
        View1ViewModel.prototype.onSimpleForm = function () {
            this._getInternalRouter().navTo("SimpleForm");
        };
        View1ViewModel.prototype.onSplitApp = function () {
            this._getInternalRouter().navTo("oapp");
        };
        View1ViewModel.prototype.onGridTable = function () {
            this._getInternalRouter().navTo("grid-table/GridTable");
        };
        return View1ViewModel;
    }(viewmodel.BaseViewModel));
    viewmodel.View1ViewModel = View1ViewModel;
    sap.ui.define(["sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel"], function (json, odata) { return new View1ViewModel(json, odata); });
})(viewmodel || (viewmodel = {}));
//# sourceMappingURL=View1.viewmodel.js.map