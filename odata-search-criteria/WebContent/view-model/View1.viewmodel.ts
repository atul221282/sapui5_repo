namespace viewmodel {
    export class View1ViewModel extends viewmodel.BaseViewModel {

        private ODataProductModel: any;
        private _ctrl: any;

        private _getInternalRouter() {
            return sap.ui.core.UIComponent.getRouterFor(this._ctrl);
        }

        private _getView(): any {
            const view = this._ctrl.getView();
            return view;
        }

        private _getRout() {
            return this._getInternalRouter();
        }

        private _sucecssCallback(data: any) {
            const btn = this._getView().byId("btnControl");
            this._getRout().navTo("grid-table/OrderTable");
        }

        constructor(json: any, ODataModel: any) {
            super();
            this.ODataProductModel = new ODataModel({
                serviceUrl: `https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/`
            });
        }

        init(ctrl: any) {
            this._ctrl = ctrl;
        }

        onOrderTable() {
            this.ODataProductModel.read(`/Products`, {
                success: (data: any) => this._sucecssCallback(data),
            });
        }

        onControl() {
            this._getInternalRouter().navTo("Controls");
        }

        onSimpleForm() {
            this._getInternalRouter().navTo("SimpleForm");
        }

        onSplitApp() {
            this._getInternalRouter().navTo("oapp");
        }

        onGridTable() {
            this._getInternalRouter().navTo("grid-table/GridTable")
        }
    }
    sap.ui.define(["sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel"], (json: any, odata: any) => new View1ViewModel(json, odata));
}