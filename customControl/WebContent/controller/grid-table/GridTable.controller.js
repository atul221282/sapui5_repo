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
var controller;
(function (controller_1) {
    var GridDataTableClass = (function () {
        function GridDataTableClass(service, JsonModel, messageToast) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
        }
        GridDataTableClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        GridDataTableClass.prototype.getModel = function () {
            return this.ctrl.getView().getModel();
        };
        GridDataTableClass.prototype.onInit = function (ctrl) {
            return __awaiter(this, void 0, void 0, function () {
                var todos, oModel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.ctrl = ctrl;
                            return [4, this.service.getTodos()];
                        case 1:
                            todos = _a.sent();
                            oModel = new this.JSONModel({
                                data: todos
                            });
                            this.getView().setModel(oModel);
                            return [2];
                    }
                });
            });
        };
        GridDataTableClass.prototype.handleDetailsPress = function (e) {
            var model = this.getModel();
            var path = e.getSource().getBindingContext().getPath();
            var obj = model.getProperty(path);
            this.MessageToast.show("Details for product with email \n            " + obj["name"] + " got email : " + model.getProperty("email", e.getSource().getBindingContext()));
        };
        return GridDataTableClass;
    }());
    function gridDataTableController(controller, jsonModel, messageToast, service) {
        var gridDataTableClass = new GridDataTableClass(service, jsonModel, messageToast);
        var extendedController = controller.extend("worklist.controller.grid-table.GridTable", {
            onInit: function () { gridDataTableClass.onInit(this); },
            handleDetailsPress: function (e) { return gridDataTableClass.handleDetailsPress(e); }
        });
        return extendedController;
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "../../service/simple-form-data-service"
    ], gridDataTableController);
})(controller || (controller = {}));
//# sourceMappingURL=GridTable.controller.js.map