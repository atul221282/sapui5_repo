namespace viewmodel {

    "use strict";
    declare const $: any;
    export class SimpleFormViewModel {

        JSONModel: any;
        dataService: service.SimpleFormDataService;
        messageToast: sapmodel.MessasgeToast;

        constructor(messageToast: sapmodel.MessasgeToast, dataService: service.SimpleFormDataService, JSONModel: any) {
            this.messageToast = messageToast;
            this.dataService = dataService;
            this.JSONModel = JSONModel;
        }

        async onInit(ctrl: any) {
            const allComments = await this.dataService.getComments();
            const comments = _.take(allComments, 5);
            const todos = await this.dataService.getTodos();
            const selectTodos = todos.filter((x: any) => x._id === "5ac8aeafbb93bfee8ee587f3")[0];

            var oModel = new this.JSONModel({
                data: todos,
                selectedTodo: selectTodos,
                ratings: 3.5,
                avUrl: "./images/av1.png"
            });

            ctrl.getView().setModel(oModel, "main");

            var todoModel = new this.JSONModel({
                todoList: todos
            });
            // make srue to set size limit for bulk  data 
            // and make sure set it befire setModel
            todoModel.setSizeLimit(todos.length);
            ctrl.getView().setModel(todoModel, "todos");

            var commentModel = new this.JSONModel({
                commentList: comments
            });
            //commentModel.setSizeLimit(comments.length);
            ctrl.getView().setModel(commentModel, "commentModel");
        }

        handleLoadItems(oControlEvent: any) {
            const source = oControlEvent.getSource();
            const items = source.getBinding("items");
            items.resume();
        }

        public save(event: any, ctrl: any): Promise<number> {
            const data = ctrl.getView().getModel("main");
            const prop = data.getProperty("/");

            return $.get("http://localhost:9000/webcontent/data/comments.json");
        }
    }

    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service",
        "sap/ui/model/json/JSONModel"
    ], (m: sapmodel.MessasgeToast, d: service.SimpleFormDataService, j: any) =>
            new SimpleFormViewModel(m, d, j))
}