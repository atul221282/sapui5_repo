var viewmodel;
(function (viewmodel) {
    var View1ViewModelImpl = (function () {
        function View1ViewModelImpl(messageToast) {
            this.messageToast = messageToast;
        }
        View1ViewModelImpl.prototype.onControl = function (ctrl) {
            navigate(ctrl, this.messageToast).navigateTo("Controls", "Navigating to control route");
        };
        View1ViewModelImpl.prototype.onSimpleForm = function (ctrl) {
            navigate(ctrl, this.messageToast).navigateTo("SimpleForm", "Navigating to simple form route");
        };
        return View1ViewModelImpl;
    }());
    var navigate = function (ctrl, messageToast) { return ({
        navigateTo: function (url, message) {
            var router = sap.ui.core.UIComponent.getRouterFor(ctrl);
            router.navTo(url);
        }
    }); };
    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service"], function (m, service) { return new View1ViewModelImpl(m); });
})(viewmodel || (viewmodel = {}));
//# sourceMappingURL=view1-view-model.js.map