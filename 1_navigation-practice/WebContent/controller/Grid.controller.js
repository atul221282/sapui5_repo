var controller;
(function (controller) {
    sap.ui.define([
        "worklist/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/Input",
        "sap/m/ColumnListItem",
        "sap/m/Text",
        "../service/ValidatorComposer",
        "../service/ValidatorFactory"
    ], function (Controller, JSONModel, Input, ColumnListItem, Text, Validator, ValidatorFactory) {
        "use strict";
        return Controller.extend("worklist.controller.Grid", {
            onInit: onInit
        });
        function onInit() {
            var getTodos = setTodos.bind(this, []);
            getTodos();
        }
        function setTodos() {
            var _this = this;
            jQuery.get("https://jsonplaceholder.typicode.com/photos").then(function (data) {
                debugger;
                var count = 0;
                _this.model = new JSONModel({
                    todos: data.map(function (x) {
                        return {
                            guid: count++,
                            id: x.id,
                            url: x.url,
                            title: x.title,
                            thumbnailUrl: x.thumbnailUrl
                        };
                    })
                });
                _this.getView().setModel(_this.model, "TripService");
                console.clear();
            });
        }
    });
})(controller || (controller = {}));
//# sourceMappingURL=Grid.controller.js.map