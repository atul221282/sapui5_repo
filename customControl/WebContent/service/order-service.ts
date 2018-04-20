namespace service {
    declare const $: any;

    export class OrderService {

        messageToast: sapmodel.MessasgeToast;

        constructor(messageToast: sapmodel.MessasgeToast) {
            this.messageToast = messageToast;
        }

        getOrders() {
            return $.get("http://services.odata.org/V4/Northwind/Northwind.svc/Orders");
        }

        getOrdersById(id: number) {
            return $.get(`http://services.odata.org/V4/Northwind/Northwind.svc/Orders(${id})`);
        }
    }

    //sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => SimpleFormDataService.Instance(m));
    sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => new OrderService(m));
}