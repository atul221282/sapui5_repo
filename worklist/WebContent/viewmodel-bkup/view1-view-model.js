(function () {
    "use strict";
    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service",
    ], function (messageToast) {
        var navigate = function (ctrl, messageToast) { return ({
            navigateTo: function (url, message) {
                var router = sap.ui.core.UIComponent.getRouterFor(ctrl);
                setTimeout(function () {
                    messageToast.show(message);
                }, 100);
                router.navTo(url);
            }
        }); };
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
        return new View1ViewModelImpl(messageToast);
    });
})();
//# sourceMappingURL=view1-view-model.js.map