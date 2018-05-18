var service;
(function (service) {
    var EmployeeService = (function () {
        function EmployeeService(messageToast) {
            this.baseUrl = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";
            this.messageToast = messageToast;
        }
        EmployeeService.prototype.getEmployees = function () {
            return $.get(this.baseUrl);
        };
        EmployeeService.prototype.getEmployeeById = function (id) {
            return $.get(this.baseUrl + "(" + id + ")");
        };
        return EmployeeService;
    }());
    sap.ui.define(["sap/m/MessageToast"], function (m) { return new EmployeeService(m); });
})(service || (service = {}));
//# sourceMappingURL=employee-service.js.map