var controller;
(function (controller_1) {
    var BaseController = (function () {
        function BaseController() {
        }
        BaseController.prototype.getRouter = function () { };
        return BaseController;
    }());
    controller_1.BaseController = BaseController;
    function BaseControllerC(controller) {
        var baseControllerParams = {
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            }
        };
        return controller.extend("worklist.controller.BaseController", baseControllerParams);
    }
    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], BaseControllerC);
})(controller || (controller = {}));
//# sourceMappingURL=BaseController.js.map