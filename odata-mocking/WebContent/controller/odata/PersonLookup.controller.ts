namespace controller {

    declare let console: any;

    class PersonLookupClass {
        ctrl: any;
        JSONModel: any;
        ODataModel: any;

        constructor(jsonModel: any, odataModel: any) {
            this.JSONModel = jsonModel;
            this.ODataModel = odataModel;
        }

        getView() {
            return this.ctrl.getView();
        }

        onInit(ctrl: any) {
            this.ctrl = ctrl;
            const oJSONData = {
                busy: false
            };
            //const oModel = new this.JSONModel(oJSONData);

            const backendModel = new this.ODataModel({
                serviceUrl: `https://cors-anywhere.herokuapp.com/services.odata.org/V2/(S(ecclwcfcqcqug0bdlyt2mujb))/OData/OData.svc/`
            });

            backendModel.read("/Products", {
                success: (data: any) => {
                    console.clear();
                    console.log(JSON.stringify(data));
                    const oModel = new this.JSONModel({
                        data: data.results
                    });
                    this.getView().setModel(oModel, "products");
                }
            });
        }

        onAfterRendering(e: any) {
        }
    }

    function oData4FormController(
        controller: any,
        jsonModel: any,
        odataModel: any
    ) {
        const odata4 = new PersonLookupClass(jsonModel, odataModel);
        // our exposed api
        const extendedController = controller.extend("worklist.controller.odata.PersonLookup", {
            onInit: function () { odata4.onInit(this) },
            onAfterRendering: (e: any) => odata4.onAfterRendering(e)
        });

        return extendedController;
    }

    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/odata/v2/ODataModel"
    ], oData4FormController);

}
