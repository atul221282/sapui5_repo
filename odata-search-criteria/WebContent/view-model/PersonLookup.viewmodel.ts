namespace viewmodel {

    sap.ui.define(["sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel",
        "../../service/person-lookup.service"], (jsonModel: any,
            odataModel: any,
            personLookupService: servicemodel.IPersonLookupService) => new PersonLookupClass(jsonModel, odataModel, personLookupService));

    class PersonLookupClass {

        personLookupService: servicemodel.IPersonLookupService;
        ctrl: any;
        JSONModel: any;
        ODataModel: any;
        _formFragments: any = {}
        backendModel: any;

        constructor(jsonModel: any, odataModel: any, personLookupService: servicemodel.IPersonLookupService) {
            this.JSONModel = jsonModel;
            this.ODataModel = odataModel;
            this.personLookupService = personLookupService;
        }

        getView() {
            return this.ctrl.getView();
        }

        onInit(ctrl: any) {
            this.ctrl = ctrl;

            const oJSONData = {
                busy: false
            };
            this.backendModel = new this.ODataModel({
                serviceUrl: `https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/`
            });

            const searchFormCriteria = {
                name: "",
                description: "",
                id: -1
            };

            const searchModel = new this.JSONModel({
                criteria: searchFormCriteria
            });

            this.getView().setModel(searchModel, "search");
            this._showFormFragment("PersonLookupCriteria");
            this._readData();
        }

        onSearch() {
            this._readData([this._filterByName()]);
        }

        onEdit(oEvent: any) {
            const currentRow = this._getCurrentRowObject(oEvent);
        }

        private _readData(filters: any[] = null) {
            this.personLookupService.getProducts({
                filters: filters,
                errorCallback: null,
                sucecssCallback: (data: any) => this.setProducts(data),
                backendModel: this.backendModel
            });
        }

        private setProducts(data: any) {
            const oModel = new this.JSONModel({
                data: data.results
            });
            this.getView().setModel(oModel, "products");
        }

        private _getModel() {
            return this.ctrl.getView().getModel()
        }

        private _getCurrentRowObject(event: any) {
            const model = this._getModel();
            return event.getSource().getBindingContext("products").getObject();
        }

        private _filterByName() {
            const searchFormCriteria = this.getView().getModel("search").getProperty("/criteria/");
            return new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, searchFormCriteria.name);
        }

        private _showFormFragment(sFragmentName: string) {
            const oPage = this.getView().byId("pagePanel");
            oPage.removeAllContent();
            const frag = this._getFormFragment(sFragmentName);
            oPage.addContent(frag);
        }

        private _getFormFragment(sFragmentName: string) {
            let oFormFragment = this._formFragments[sFragmentName];
            if (oFormFragment) {
                return oFormFragment;
            }

            oFormFragment = sap.ui.xmlfragment(this.getView().getId(), `worklist.view.odata.${sFragmentName}`, this.ctrl);
            this._formFragments[sFragmentName] = oFormFragment;
            return this._formFragments[sFragmentName];
        }
    }
}