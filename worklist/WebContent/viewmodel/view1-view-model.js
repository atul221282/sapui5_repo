//https://jsonplaceholder.typicode.com/

(function () {
    "use strict";
    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service",
    ], function (messageToast) {

        const navigate = (ctrl, messageToast) => ({
            navigateTo(url, message) {
                const router = sap.ui.core.UIComponent.getRouterFor(ctrl);
                setTimeout(() => {
                    messageToast.show(message);
                }, 100);
                router.navTo(url);
            }
        });

        class View1ViewModel {

            constructor(messageToast) {
                this.messageToast = messageToast;
            }

            onControl(ctrl) {
                navigate(ctrl, this.messageToast).navigateTo("Controls", "Navigating to control route");
            }

            onSimpleForm(ctrl) {
                navigate(ctrl, this.messageToast).navigateTo("SimpleForm", "Navigating to simple form route");
            }
        }

        return new View1ViewModel(messageToast);
    });

}());