var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    "use strict";
    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service",
        "sap/ui/model/json/JSONModel"
    ], function (messageToast, dataService, JSONModel) {
        var SimpleFormViewModel = (function () {
            function SimpleFormViewModel() {
            }
            SimpleFormViewModel.prototype.onInit = function (ctrl) {
                return __awaiter(this, void 0, void 0, function () {
                    var allComments, comments, todos, selectTodos, oModel, todoModel, commentModel;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, dataService.getComments()];
                            case 1:
                                allComments = _a.sent();
                                comments = _.take(allComments, 5);
                                return [4, dataService.getTodos()];
                            case 2:
                                todos = _a.sent();
                                selectTodos = todos.filter(function (x) { return x._id === "5ac8aeafbb93bfee8ee587f3"; })[0];
                                oModel = new JSONModel({
                                    data: todos,
                                    selectedTodo: selectTodos,
                                    ratings: 3.5,
                                    avUrl: "./images/av1.png"
                                });
                                ctrl.getView().setModel(oModel, "main");
                                todoModel = new JSONModel({
                                    todoList: todos
                                });
                                todoModel.setSizeLimit(todos.length);
                                ctrl.getView().setModel(todoModel, "todos");
                                commentModel = new JSONModel({
                                    commentList: comments
                                });
                                ctrl.getView().setModel(commentModel, "commentModel");
                                return [2];
                        }
                    });
                });
            };
            SimpleFormViewModel.prototype.handleLoadItems = function (oControlEvent) {
                var source = oControlEvent.getSource();
                var items = source.getBinding("items");
                items.resume();
            };
            SimpleFormViewModel.prototype.save = function (event, ctrl) {
                var data = ctrl.getView().getModel("main");
                var prop = data.getProperty("/");
                if (dataService.save)
                    dataService.save(prop, event);
            };
            return SimpleFormViewModel;
        }());
        return new SimpleFormViewModel();
    });
})();
//# sourceMappingURL=simple-form-view-model.js.map