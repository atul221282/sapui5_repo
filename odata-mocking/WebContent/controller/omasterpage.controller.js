var controller;
(function (controller_1) {
    var MasterPageClass = (function () {
        function MasterPageClass(ctrl, history, window) {
            this.ctrl = ctrl;
            this.history = history;
            this.window = window;
        }
        MasterPageClass.prototype.onInit = function (event) { };
        MasterPageClass.prototype.onNavBack = function (event) {
            var oHistory = this.history.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                this.window.history.go(-1);
            }
        };
        return MasterPageClass;
    }());
    function getController(ctrl, history) {
        var mpc = new MasterPageClass(ctrl, history, window);
        var controller = ctrl.extend("worklist.controller.omasterpage", {
            onInit: function (event) { return mpc.onInit(event); },
            onNavBack: function (event) { return mpc.onNavBack(event); }
        });
        return controller;
    }
    controller_1.getController = getController;
    sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"], getController);
})(controller || (controller = {}));
//# sourceMappingURL=omasterpage.controller.js.map