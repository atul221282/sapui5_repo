var controller;
(function (controller) {
    sap.ui.define([
        "worklist/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/Input",
        "sap/m/ColumnListItem",
        "sap/m/Text",
        "worklist/service/ValidatorComposer",
        "worklist/service/ValidatorFactory"
    ], function (Controller, JSONModel, Input, ColumnListItem, Text, Validator, ValidatorFactory) {
        "use strict";
        return Controller.extend("worklist.controller.View1", {
            onInit: onInit,
            name: function () { return "Atul"; },
            getTodosTable: getTodosTable,
            populateItems: populateItems,
            count: 0
        });
        function populateItems(sId, oContext) {
            var sIdValue = oContext.getProperty("id");
            if (!sIdValue)
                return;
            var id = "" + sIdValue;
            var titleCtrlId = "title_" + sIdValue;
            var existingTitleINput = Validator.getControlById(titleCtrlId);
            var existingUrlInput = Validator.getControlById("url_" + id);
            var urlErrors = !!existingUrlInput ? existingUrlInput.control.getValueStateText() : undefined;
            var idInput = new Input({
                value: "{TripService>id}",
                id: "id_" + id,
            });
            var titleInput = new Input({
                value: "{TripService>title}",
                id: titleCtrlId,
                liveChange: onTitleChange.bind(this),
                valueStateText: existingTitleINput ? existingTitleINput.control.getValueStateText() : undefined,
                valueState: existingTitleINput ? existingTitleINput.control.getValueState() : sap.ui.core.ValueState.None
            });
            var urlInput = new Input({
                id: "url_" + id,
                value: "{TripService>url}",
                liveChange: onUrlChange.bind(this),
                valueStateText: existingUrlInput ? existingUrlInput.control.getValueStateText() : undefined,
                valueState: existingUrlInput ? existingUrlInput.control.getValueState() : sap.ui.core.ValueState.None
            });
            var tumbnailInput = new Input({
                id: "thumb_" + sId,
                value: "{TripService>thumbnailUrl}"
            });
            if (!existingUrlInput) {
                Validator.compose(urlInput, new (Array.bind.apply(Array, [void 0].concat([
                    ValidatorFactory.requiredValidator("Invalid Url"),
                    ValidatorFactory.isNotSameAs(titleInput, "Url cannot be same as title")
                ])))());
            }
            if (!existingTitleINput) {
                Validator.compose(titleInput, new (Array.bind.apply(Array, [void 0].concat([
                    ValidatorFactory.requiredValidator("Invalid Title"),
                    ValidatorFactory.isNotSameAs(urlInput, "Title cannot be same as Url")
                ])))());
            }
            var row = new ColumnListItem(sId, {
                cells: [idInput, titleInput, urlInput, tumbnailInput]
            });
            return row;
        }
        function onTitleChange(oEvent) {
            var control = oEvent.oSource;
            var oView = this.getView();
            var oTable = oView.byId("todosTable");
            control.setValueState(sap.ui.core.ValueState.None);
            control.setValueStateText("");
            setTimeout(function () {
                Validator.validateFor(control);
            }, 100);
        }
        function onUrlChange(oEvent) {
            var control = oEvent.oSource;
            control.setValueState(sap.ui.core.ValueState.None);
            control.setValueStateText("");
            setTimeout(function () {
                Validator.validateFor(control);
            }, 100);
        }
        function onInit() {
            getTodos.bind(this, ["Welcome"])();
            setTodos.bind(this)();
        }
        function getTodos(message) {
            var formattedName = _formatName.bind(this, [message])();
            this.page = new JSONModel(formattedName);
            this.getView().setModel(this.page, "Page");
        }
        function getTodosTable() {
            if (!this.todosTable)
                this.todosTable = this.getView().byId("todosTable");
            return this.todosTable;
        }
        function _formatName(message) {
            var name = this.name();
            return { "name": message + " " + name };
        }
        function setTodos() {
            var _this = this;
            jQuery.get("https://jsonplaceholder.typicode.com/photos").then(function (data) {
                var count = 0;
                _this.model = new JSONModel({
                    todos: data.map(function (x) {
                        return {
                            guid: count++,
                            id: x.id,
                            url: x.url,
                            title: x.title,
                            thumbnailUrl: x.title
                        };
                    })
                });
                _this.getView().setModel(_this.model, "TripService");
            });
        }
        function getRequiredInputValidator(sId, valuePath) {
            var input = new Input({
                value: "{TripService>id}",
            });
            return input;
        }
    });
})(controller || (controller = {}));
//# sourceMappingURL=View1.controller.js.map