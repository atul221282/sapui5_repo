//
namespace service {
    declare const $: any;

    export class EmployeeService {

        messageToast: sapmodel.MessasgeToast;
        private baseUrl: string = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";
        constructor(messageToast: sapmodel.MessasgeToast) {
            this.messageToast = messageToast;
        }

        getEmployees() {
            return $.get(this.baseUrl);
        }

        getEmployeeById(id: number) {
            return $.get(`${this.baseUrl}(${id})`);
        }
    }

    //sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => SimpleFormDataService.Instance(m));
    sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => new EmployeeService(m));
}