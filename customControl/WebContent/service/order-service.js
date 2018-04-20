var service;
(function (service) {
    var OrderService = (function () {
        function OrderService(messageToast) {
            this.messageToast = messageToast;
        }
        OrderService.prototype.getOrders = function () {
            return $.get("http://services.odata.org/V4/Northwind/Northwind.svc/Orders");
        };
        OrderService.prototype.getOrdersById = function (id) {
            return $.get("http://services.odata.org/V4/Northwind/Northwind.svc/Orders(" + id + ")");
        };
        return OrderService;
    }());
    service.OrderService = OrderService;
    sap.ui.define(["sap/m/MessageToast"], function (m) { return new OrderService(m); });
})(service || (service = {}));
//# sourceMappingURL=order-service.js.map