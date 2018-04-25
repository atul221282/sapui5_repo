namespace controller {

    class RequiredValidator implements common.Validator {
        errorMessage: string;
        control: any;

        constructor(control: any, errorMessage: string) {
            this.control = control;
            this.errorMessage = errorMessage;
        }

        isValid(control: any): boolean {
            if (!control.getValue()) {
                return false;
            }
            return true;
        }
    }

    class OrderDetailClass {

        validatorFactory: Validator.ValidatorFactory;
        validator: Validator.ValidatorComposer;
        orderService: service.OrderService;
        JSONModel: any;
        ctrl: any;

        get shipNameControl() {
            return this.ctrl.byId("ShipName");
        }

        get orderDateControl() {
            return this.ctrl.byId("OrderDate");
        }

        get requiredDateControl() {
            return this.ctrl.byId("RequiredDate");
        }

        constructor(ctrl: any, jsonModel: any, messageToast: any, busyIndicator: any, dateFormat: any,
            orderService: service.OrderService, empService: service.EmployeeService,
            validator: Validator.ValidatorComposer, validatorFactory: Validator.ValidatorFactory) {
            this.orderService = orderService;
            this.JSONModel = jsonModel;
            this.validator = validator;
            this.validatorFactory = validatorFactory;
        }

        getView() {
            return this.ctrl.getView();
        }

        getRouter() {
            if (!this.ctrl)
                return {};
            const router = sap.ui.core.UIComponent.getRouterFor(this.ctrl);
            return router;
        }

        onInit(ctrl: any) {
            this.ctrl = ctrl;
            const shipName = this.shipNameControl;
            const currentRoute = this.getRouter().getRoute("order/Detail");
            currentRoute.attachPatternMatched(this._onObjectMatched.bind(this), this.ctrl);
            this.validator.compose(this.shipNameControl,
                new Array<common.Validator>(...[
                    this.validatorFactory.requiredValidator("Invalid ShipName"),
                    this.validatorFactory.minLengthValidator("Minlength Shipname", 3)
                ]));
            this.validator.compose(this.orderDateControl,
                new Array<common.Validator>(...[
                    this.validatorFactory.requiredValidator("Invalid OrderDate"),
                    this.validatorFactory.isLessThanOrEqualToDate(this.requiredDateControl, "Cannot be greater than Required Date")
                ]));
        }

        private async _onObjectMatched(event: any) {
            const ID = event.getParameter("arguments").ID;
            const order = await this.orderService.getOrdersById(parseInt(ID));
            order.OrderDate = new Date(order.OrderDate).getTime();
            order.ShippedDate = new Date(order.ShippedDate).getTime();
            order.RequiredDate = new Date(order.RequiredDate).getTime();
            const model = new this.JSONModel({
                data: order
            });
            this.getView().setModel(model);
            this.validator.clearAll();
        }

        onShipNameChange(e: any) {
            if (!this.shipNameControl) {
                return;
            }
            //this.validator.for(this.shipNameControl).validate();
        }

        onOrderDateChange(e: any) {
            if (!this.orderDateControl) {
                return;
            }
            //this.validator.for(this.orderDateControl).validate();
        }

        onSave(e: any) {
            const controls = this.validator.validateAndGetInvalidControls();
            if (controls.length > 0)
                controls[0].focus();
        }
    }

    function orderDetailController(ctrl: any, jsonModel: any, messageToast: any, busyIndicator: any, dateFormat: any,
        orderService: service.OrderService, empService: service.EmployeeService, validator: Validator.ValidatorComposer,
        validatorFactory: Validator.ValidatorFactory) {
        const ordClass = new OrderDetailClass(ctrl, jsonModel, messageToast, busyIndicator,
            dateFormat, orderService, empService, validator, validatorFactory);
        return ctrl.extend("worklist.controller.order.Detail", {
            onInit: function () {
                ordClass.onInit(this);
            },
            onShipNameChange: (e: any) => ordClass.onShipNameChange(e),
            onOrderDateChange: (e: any) => ordClass.onOrderDateChange(e),
            onSave: (e: any) => ordClass.onSave(e),
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
}
