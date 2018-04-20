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
(function (controller) {
    var RequiredValidator = (function () {
        function RequiredValidator(control, errorMessage) {
            this.control = control;
            this.errorMessage = errorMessage;
        }
        RequiredValidator.prototype.isValid = function (control) {
            if (!control.getValue()) {
                return false;
            }
            return true;
        };
        return RequiredValidator;
    }());
    var OrderDetailClass = (function () {
        function OrderDetailClass(ctrl, jsonModel, messageToast, busyIndicator, dateFormat, orderService, empService, validator, validatorFactory) {
            this.orderService = orderService;
            this.JSONModel = jsonModel;
            this.validator = validator;
            this.validatorFactory = validatorFactory;
        }
        Object.defineProperty(OrderDetailClass.prototype, "shipNameControl", {
            get: function () {
                return this.ctrl.byId("ShipName");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderDetailClass.prototype, "orderDateControl", {
            get: function () {
                return this.ctrl.byId("OrderDate");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderDetailClass.prototype, "requiredDateControl", {
            get: function () {
                return this.ctrl.byId("RequiredDate");
            },
            enumerable: true,
            configurable: true
        });
        OrderDetailClass.prototype.getView = function () {
            return this.ctrl.getView();
        };
        OrderDetailClass.prototype.getRouter = function () {
            if (!this.ctrl)
                return {};
            var router = sap.ui.core.UIComponent.getRouterFor(this.ctrl);
            return router;
        };
        OrderDetailClass.prototype.onInit = function (ctrl) {
            this.ctrl = ctrl;
            var shipName = this.shipNameControl;
            var currentRoute = this.getRouter().getRoute("order/Detail");
            currentRoute.attachPatternMatched(this._onObjectMatched.bind(this), this.ctrl);
            this.validator.compose(this.shipNameControl, new (Array.bind.apply(Array, [void 0].concat([
                this.validatorFactory.requiredValidator("Invalid ShipName"),
                this.validatorFactory.minLengthValidator("Minlength Shipname", 3)
            ])))());
            this.validator.compose(this.orderDateControl, new (Array.bind.apply(Array, [void 0].concat([
                this.validatorFactory.requiredValidator("Invalid OrderDate"),
                this.validatorFactory.isLessThanOrEqualToDate(this.requiredDateControl, "Cannot be greater than Required Date")
            ])))());
        };
        OrderDetailClass.prototype._onObjectMatched = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var ID, order, model;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ID = event.getParameter("arguments").ID;
                            return [4, this.orderService.getOrdersById(parseInt(ID))];
                        case 1:
                            order = _a.sent();
                            order.OrderDate = new Date(order.OrderDate).getTime();
                            order.ShippedDate = new Date(order.ShippedDate).getTime();
                            order.RequiredDate = new Date(order.RequiredDate).getTime();
                            model = new this.JSONModel({
                                data: order
                            });
                            this.getView().setModel(model);
                            this.validator.clearAll();
                            return [2];
                    }
                });
            });
        };
        OrderDetailClass.prototype.onShipNameChange = function (e) {
            if (!this.shipNameControl) {
                return;
            }
        };
        OrderDetailClass.prototype.onOrderDateChange = function (e) {
            if (!this.orderDateControl) {
                return;
            }
        };
        OrderDetailClass.prototype.onSave = function (e) {
            var controls = this.validator.validateAndGetInvalidControls();
            if (controls.length > 0)
                controls[0].focus();
        };
        return OrderDetailClass;
    }());
    function orderDetailController(ctrl, jsonModel, messageToast, busyIndicator, dateFormat, orderService, empService, validator, validatorFactory) {
        var ordClass = new OrderDetailClass(ctrl, jsonModel, messageToast, busyIndicator, dateFormat, orderService, empService, validator, validatorFactory);
        return ctrl.extend("worklist.controller.order.Detail", {
            onInit: function () {
                ordClass.onInit(this);
            },
            onShipNameChange: function (e) { return ordClass.onShipNameChange(e); },
            onOrderDateChange: function (e) { return ordClass.onOrderDateChange(e); },
            onSave: function (e) { return ordClass.onSave(e); },
        });
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/m/MessageToast",
        "sap/ui/core/BusyIndicator",
        "sap/ui/core/format/DateFormat",
        "../../service/order-service",
        "../../service/employee-service",
        "../../service/ValidatorComposer",
        "../../service/ValidatorFactory"
    ], orderDetailController);
})(controller || (controller = {}));
//# sourceMappingURL=Detail.controller.js.map