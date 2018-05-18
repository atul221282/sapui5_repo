namespace controller {

    sap.ui.define([
        "worklist/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/Input",
        "sap/m/ColumnListItem",
        "sap/m/Text",
        "../service/ValidatorComposer",
        "../service/ValidatorFactory"
    ], (Controller: BaseControllerModel.Extends<BaseControllerModel.GridController>,
        JSONModel: any,
        Input: any,
        ColumnListItem: any,
        Text: any,
        Validator: Validator.ValidatorComposer,
        ValidatorFactory: Validator.ValidatorFactory) => {
            "use strict";
            return Controller.extend("worklist.controller.Grid", {
                onInit: onInit
            });

            function onInit() {
                const getTodos = setTodos.bind(this, []);
                getTodos();
            }

            function setTodos() {
                jQuery.get("https://jsonplaceholder.typicode.com/photos").then((data: any[]) => {
                    debugger;
                    let count = 0;
                    this.model = new JSONModel({
                        todos: data.map(x => {
                            return {
                                guid: count++,
                                id: x.id,
                                url: x.url,
                                title: x.title,
                                thumbnailUrl: x.thumbnailUrl
                            }
                        })
                    });
                    this.getView().setModel(this.model, "TripService");
                    console.clear();
                });
            }
        });
}