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
    var OrderTableClass = (function () {
        function OrderTableClass(service, JsonModel, messageToast, busyIndicator, DateFormat, categoryService) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
        }
        Object.defineProperty(OrderTableClass.prototype, "orderTable", {
            get: function () {
                var oTable = this.getView().byId("orderTable");
                return oTable;
            },
            enumerable: true,
            configurable: true
        });
        OrderTableClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        OrderTableClass.prototype.getModel = function () {
            return this.ctrl.getView().getModel();
        };
        OrderTableClass.prototype.onInit = function (ctrl) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, todos, employees, oModel;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.ctrl = ctrl;
                            return [4, this._getData()];
                        case 1:
                            _a = _b.sent(), todos = _a[0], employees = _a[1];
                            oModel = new this.JSONModel({
                                data: todos,
                                employees: employees,
                                deletedRecords: []
                            });
                            this.getView().setModel(oModel);
                            return [2];
                    }
                });
            });
        };
        OrderTableClass.prototype.addDeleteColumn = function () {
            var oTable = this.orderTable;
            var oTemplate = oTable.getRowActionTemplate();
            if (oTemplate) {
                oTemplate.destroy();
                oTemplate = null;
            }
            var aRes = this.getEditTemplate();
            var iCount = aRes[0] || 0;
            oTemplate = aRes[1];
            oTable.setRowActionTemplate(oTemplate);
            oTable.setRowActionCount(iCount);
        };
        OrderTableClass.prototype.getEditTemplate = function () {
            var _this = this;
            var oTemplate = new sap.ui.table.RowAction({
                items: [
                    new sap.ui.table.RowActionItem({
                        icon: "sap-icon://edit",
                        text: "Edit",
                        press: function (e) { return _this.delete(e); }
                    }),
                    new sap.ui.table.RowActionItem({
                        icon: "sap-icon://delete",
                        text: "Edit",
                        press: this.delete.bind(this)
                    })
                ]
            });
            return [2, oTemplate];
        };
        OrderTableClass.prototype.getCurrentRowObject = function (event) {
            var model = this.getModel();
            var path = event.getSource().getBindingContext().getPath();
            var obj = model.getProperty(path);
            return obj;
        };
        OrderTableClass.prototype.update = function (e) {
            var currentRow = this.getCurrentRowObject(e);
        };
        OrderTableClass.prototype.delete = function (e) {
            var currentRow = this.getCurrentRowObject(e);
            var oTable = this.orderTable;
            var model = this.getModel();
            var path = e.getSource().getBindingContext().getPath();
            var index = parseInt(path.substring(path.lastIndexOf('/') + 1));
            this.moveItem(oTable.getModel(), "/data", "/deletedRecords", index);
        };
        OrderTableClass.prototype.moveItem = function (m, fromList, toList, idx) {
            var list = m.getProperty(fromList);
            var rm = list.splice(idx, 1);
            m.setProperty(fromList, list);
            m.setProperty(toList, m.getProperty(toList).concat(rm));
            m.refresh();
        };
        OrderTableClass.prototype.onAfterRendering = function () {
            this.addDeleteColumn();
        };
        OrderTableClass.prototype._getData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _b = (_a = Promise).all;
                            return [4, this.service.getOrders()];
                        case 1:
                            _c = [
                                (_d.sent()).value.map(function (x) {
                                    x.OrderDate = new Date(x.OrderDate).getTime();
                                    return x;
                                })
                            ];
                            return [4, this.employeeService.getEmployees()];
                        case 2: return [2, _b.apply(_a, [_c.concat([
                                    (_d.sent()).value.map(function (x) {
                                        x.Name = x.FirstName + " " + x.LastName;
                                        return x;
                                    })
                                ])])];
                    }
                });
            });
        };
        OrderTableClass.prototype.handleDetailsPress = function (e) {
            var model = this.getModel();
            var path = e.getSource().getBindingContext().getPath();
            var obj = model.getProperty(path);
            this.MessageToast.show("Details for product with email \n            " + obj["name"] + " got email : " + model.getProperty("email", e.getSource().getBindingContext()));
        };
        return OrderTableClass;
    }());
    function gridDataTableController(controller, jsonModel, messageToast, busyIndicator, DateFormat, service, employeeService) {
        var gridDataTableClass = new OrderTableClass(service, jsonModel, messageToast, busyIndicator, DateFormat, employeeService);
        var extendedController = controller.extend("worklist.controller.grid-table.OrderTable", {
            onInit: function () { gridDataTableClass.onInit(this); },
            handleDetailsPress: function (e) { return gridDataTableClass.handleDetailsPress(e); },
            onAfterRendering: function () { return gridDataTableClass.onAfterRendering(); }
        });
        return extendedController;
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "sap/ui/core/BusyIndicator",
        "sap/ui/core/format/DateFormat",
        "../../service/order-service",
        "../../service/employee-service"
    ], gridDataTableController);
})(controller || (controller = {}));
//# sourceMappingURL=OrderTable.controller.js.map