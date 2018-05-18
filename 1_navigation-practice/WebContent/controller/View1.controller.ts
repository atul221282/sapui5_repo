namespace controller {

    sap.ui.define([
        "worklist/controller/BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/m/Input",
        "sap/m/ColumnListItem",
        "sap/m/Text",
        "worklist/service/ValidatorComposer",
        "worklist/service/ValidatorFactory"
    ], (Controller: BaseControllerModel.Extends<BaseControllerModel.BaseController>,
        JSONModel: any,
        Input: any,
        ColumnListItem: any,
        Text: any,
        Validator: Validator.ValidatorComposer,
        ValidatorFactory: Validator.ValidatorFactory) => {
            "use strict";

            /**
             * Controllers api
             */
            return Controller.extend("worklist.controller.View1", <BaseControllerModel.BaseController>{
                onInit: onInit,
                name: () => "Atul",
                //onIdChange: onIdChange,
                getTodosTable: getTodosTable,
                populateItems: populateItems,
                count: 0
            });

            function populateItems(sId: any, oContext: any) {
                const sIdValue = oContext.getProperty("id");
                if (!sIdValue) return;


                const id = `${sIdValue}`;
                const titleCtrlId = `title_${sIdValue}`;
                const existingTitleINput = Validator.getControlById(titleCtrlId);
                const existingUrlInput = Validator.getControlById(`url_${id}`);
                const urlErrors = !!existingUrlInput ? existingUrlInput.control.getValueStateText() : undefined;

                const idInput = new Input({
                    value: "{TripService>id}",
                    id: `id_${id}`,
                });

                const titleInput = new Input({
                    value: "{TripService>title}",
                    id: titleCtrlId,
                    liveChange: onTitleChange.bind(this),
                    valueStateText: existingTitleINput ? existingTitleINput.control.getValueStateText() : undefined,
                    valueState: existingTitleINput ? existingTitleINput.control.getValueState() : sap.ui.core.ValueState.None
                });

                const urlInput = new Input({
                    id: `url_${id}`,
                    value: "{TripService>url}",
                    liveChange: onUrlChange.bind(this),
                    valueStateText: existingUrlInput ? existingUrlInput.control.getValueStateText() : undefined,
                    valueState: existingUrlInput ? existingUrlInput.control.getValueState() : sap.ui.core.ValueState.None
                });

                const tumbnailInput = new Input({
                    id: `thumb_${sId}`,
                    value: "{TripService>thumbnailUrl}"
                });

                if (!existingUrlInput) {
                    Validator.compose(urlInput,
                        new Array<common.Validator>(...[
                            ValidatorFactory.requiredValidator(`Invalid Url`),
                            ValidatorFactory.isNotSameAs(titleInput, "Url cannot be same as title")
                        ]));

                }
                if (!existingTitleINput) {
                    Validator.compose(titleInput,
                        new Array<common.Validator>(...[
                            ValidatorFactory.requiredValidator(`Invalid Title`),
                            ValidatorFactory.isNotSameAs(urlInput, "Title cannot be same as Url")
                        ]));
                }

                var row = new ColumnListItem(sId, {
                    cells: [idInput, titleInput, urlInput, tumbnailInput]
                });

                return row;
            }

            function onTitleChange(oEvent: any) {
                const control = oEvent.oSource;
                const oView = this.getView();
                var oTable = oView.byId("todosTable");
                control.setValueState(sap.ui.core.ValueState.None);
                control.setValueStateText("");
                setTimeout(() => {
                    Validator.validateFor(control);
                }, 100);
            }

            function onUrlChange(oEvent: any) {
                const control = oEvent.oSource;
                control.setValueState(sap.ui.core.ValueState.None);
                control.setValueStateText("");
                setTimeout(() => {
                    Validator.validateFor(control);
                }, 100);
            }


            function onInit() {
                //private methods needs to be bind to current this
                getTodos.bind(this, ["Welcome"])();
                setTodos.bind(this)();
            }

            function getTodos(message: string) {
                //private methods needs to be bind to current this
                const formattedName = _formatName.bind(this, [message])();
                this.page = new JSONModel(formattedName);
                this.getView().setModel(this.page, "Page");
            }

            function getTodosTable() {
                if (!this.todosTable)
                    this.todosTable = this.getView().byId("todosTable");

                return this.todosTable;
            }

            function _formatName(message: string) {
                const name = this.name();
                return { "name": `${message} ${name}` };
            }

            function setTodos() {
                jQuery.get("https://jsonplaceholder.typicode.com/photos").then((data: any[]) => {
                    let count = 0;
                    this.model = new JSONModel({
                        todos: data.map(x => {
                            return {
                                guid: count++,
                                id: x.id,
                                url: x.url,
                                title: x.title,
                                thumbnailUrl: x.title
                            }
                        })
                    });
                    this.getView().setModel(this.model, "TripService");
                    //console.clear();
                });
            }

            function getRequiredInputValidator(sId: string, valuePath: string) {
                const input = new Input({
                    value: "{TripService>id}",
                    //liveChange: onIdChange.bind(this)
                });
                return input;
            }
        });
}