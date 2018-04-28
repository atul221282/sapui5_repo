var service;
(function (service) {
    var PersonLookupService = (function () {
        function PersonLookupService() {
        }
        PersonLookupService.prototype.getProducts = function (params) {
            params.backendModel.read("/Products", {
                filters: params.filters,
                success: params.sucecssCallback,
                error: params.errorCallback
            });
        };
        return PersonLookupService;
    }());
    sap.ui.define([], function () { return new PersonLookupService(); });
})(service || (service = {}));
//# sourceMappingURL=person-lookup.service.js.map