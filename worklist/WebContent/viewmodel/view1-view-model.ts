//https://jsonplaceholder.typicode.com/
namespace viewmodel {

    class View1ViewModelImpl {

        private messageToast: sapmodel.MessasgeToast;
        constructor(messageToast: sapmodel.MessasgeToast) {
            this.messageToast = messageToast;
        }

        onControl(ctrl: any) {
            navigate(ctrl, this.messageToast).navigateTo("Controls", "Navigating to control route");
        }

        onSimpleForm(ctrl: any) {
            navigate(ctrl, this.messageToast).navigateTo("SimpleForm", "Navigating to simple form route");
        }
    }

    const navigate = (ctrl: any, messageToast: sapmodel.MessasgeToast) => ({
        navigateTo(url: string, message: string) {
            const router = sap.ui.core.UIComponent.getRouterFor(ctrl);
            router.navTo(url);
        }
    });

    sap.ui.define(["sap/m/MessageToast",
        "../service/simple-form-data-service"],
        (m: sapmodel.MessasgeToast, service: any) => new View1ViewModelImpl(m));
}