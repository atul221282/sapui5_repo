namespace controller {
    declare const setTimeout: any;

    class OrderTableClass {
        busyIndicator: any;
        dialog: any;
        MessageToast: any;
        JSONModel: any;
        service: service.OrderService;
        ctrl: any;
        DateFormat: any;
        employeeService: service.EmployeeService;

        get orderTable(): sap.UITable {
            const oTable = this.getView().byId("orderTable");
            return oTable;
        }

        constructor(service: service.OrderService, JsonModel: any, messageToast: any,
            busyIndicator: any, DateFormat: any, categoryService: service.EmployeeService) {
            this.service = service;
            this.JSONModel = JsonModel;
            this.MessageToast = messageToast;
            this.busyIndicator = busyIndicator;
            this.DateFormat = DateFormat;
            this.employeeService = categoryService;
        }

        getView() {
            return this.ctrl.getView();
        }

        getModel() {
            return this.ctrl.getView().getModel()
        }

        getRouter() {
            if (!this.ctrl)
                return {};
            const router = sap.ui.core.UIComponent.getRouterFor(this.ctrl);
            return router;
        }

        onInit(ctrl: any) {
            this.ctrl = ctrl;
            this.getView().addEventDelegate({
                afterRendering: this.afterInit.bind(this)
            });
        }

        afterInit() {
            debugger;
        }

        async onBeforeRendering(ctrl: any) {
            //this.busyIndicator.show(10);

            const [todos, employees] = await this._getData();
            var oModel = new this.JSONModel({
                data: todos,
                employees: employees,
                deletedRecords: []
            });
            this.getView().setModel(oModel);
            //this.busyIndicator.hide();
        }

        private addDeleteColumn() {
            const oTable = this.orderTable;
            let oTemplate = oTable.getRowActionTemplate();
            if (oTemplate) {
                oTemplate.destroy();
                oTemplate = null;
            }
            const aRes = this.getEditTemplate();
            const iCount = aRes[0] || 0;
            oTemplate = aRes[1];

            oTable.setRowActionTemplate(oTemplate);
            oTable.setRowActionCount(iCount);
        }

        private getEditTemplate(): [number, any] {
            const oTemplate = new sap.ui.table.RowAction({
                items: [
                    new sap.ui.table.RowActionItem({
                        icon: "sap-icon://edit",
                        text: "Edit",
                        press: (e: any) => this.edit(e)
                    }),
                    new sap.ui.table.RowActionItem({
                        icon: "sap-icon://delete",
                        text: "Edit",
                        press: this.delete.bind(this)
                    })
                ]
            });
            return [2, oTemplate];
        }

        private getCurrentRowObject(event: any) {
            const model = this.getModel();
            const path = event.getSource().getBindingContext().getPath();
            const obj = model.getProperty(path);
            return obj;
        }

        private update(e: any) {
            const currentRow = this.getCurrentRowObject(e);
        }

        private delete(e: any) {
            const currentRow = this.getCurrentRowObject(e);
            const oTable = this.orderTable;
            const model = this.getModel();
            const path = e.getSource().getBindingContext().getPath();
            const index = parseInt(path.substring(path.lastIndexOf('/') + 1));
            this.moveItem(oTable.getModel(), "/data", "/deletedRecords", index);
        }

        private edit(e: any) {
            const currentRow = this.getCurrentRowObject(e);
            this.service.setSelectedOrder(currentRow);
            this.getRouter().navTo("order/Detail", { "ID": currentRow.OrderID });
        }

        private moveItem(m: any, fromList: string, toList: string, idx: number) {
            var list = m.getProperty(fromList);
            var rm = list.splice(idx, 1);
            m.setProperty(fromList, list);
            m.setProperty(toList, m.getProperty(toList).concat(rm));
            m.refresh();
        }

        onAfterRendering() {
            this.addDeleteColumn();
        }

        private async _getData(): Promise<any> {
            return Promise.all([
                (await this.service.getOrders()).value.map((x: any) => {
                    x.OrderDate = new Date(x.OrderDate).getTime();
                    return x;
                }),
                (await this.employeeService.getEmployees()).value.map((x: any) => {
                    x.Name = `${x.FirstName} ${x.LastName}`;
                    return x;
                })
            ]);
        }

        handleDetailsPress(e: any) {
            const model = this.getModel();
            const path = e.getSource().getBindingContext().getPath();
            const obj = model.getProperty(path);

            this.MessageToast.show(`Details for product with email 
            ${obj["name"]} got email : ${model.getProperty("email", e.getSource().getBindingContext())}`);
        }
    }

    function gridDataTableController(
        controller: any,
        jsonModel: any,
        messageToast: any,
        busyIndicator: any,
        DateFormat: any,
        service: service.OrderService,
        employeeService: service.EmployeeService
    ) {
        const gridDataTableClass = new OrderTableClass(service, jsonModel, messageToast, busyIndicator, DateFormat, employeeService);
        const extendedController = controller.extend("worklist.controller.grid-table.OrderTable", {
            onInit: function () { gridDataTableClass.onInit(this) },
            onBeforeRendering: function () { gridDataTableClass.onBeforeRendering(this) },
            handleDetailsPress: (e: any) => gridDataTableClass.handleDetailsPress(e),
            onAfterRendering: () => gridDataTableClass.onAfterRendering()
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

}
