//https://jsonplaceholder.typicode.com/

(function () {
    "use strict";
    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service",
        "sap/ui/model/json/JSONModel"
    ], function (messageToast, dataService, JSONModel) {

        class SimpleFormViewModel {

            async onInit() {
                const allComments = await dataService.getComments();
                const comments = _.take(allComments, 5);
                const todos = await dataService.getTodos();
                const selectTodos = todos.filter(x => x._id === "5ac8aeafbb93bfee8ee587f3")[0];

                var oModel = new JSONModel({
                    data: todos,
                    selectedTodo: selectTodos,
                    ratings: 3.5,
                    avUrl: "./images/av1.png"
                });

                this.getView().setModel(oModel, "main");

                var todoModel = new JSONModel({
                    todoList: todos
                });
                // make srue to set size limit for bulk  data 
                // and make sure set it befire setModel
                todoModel.setSizeLimit(todos.length);
                this.getView().setModel(todoModel, "todos");

                var commentModel = new JSONModel({
                    commentList: comments
                });
                //commentModel.setSizeLimit(comments.length);
                this.getView().setModel(commentModel, "commentModel");
            }

            handleLoadItems(oControlEvent) {
                const source = oControlEvent.getSource();
                const items = source.getBinding("items");
                items.resume();
            }

            save(event) {
                const data = this.getView().getModel("main");
                const prop = data.getProperty("/");
                if (dataService.save)
                    dataService.save(prop, event);
            }
        }
        
        return new SimpleFormViewModel();
    });

}());