(() => {

    class ViewController {

        v: any;
        ctrl: any;
        public static that: ViewController;

        constructor(ctrl: any, v: any) {
            this.ctrl = ctrl;
            this.v = v;
            ViewController.that = this;
        }

        onControl() {
            ViewController.that.v.onControl(this);
        }

        onSimpleForm() {
            ViewController.that.v.onSimpleForm(this);
        }

        // Whatever is here will be executed as soon as the script is loaded.
        getController() {
            let ctrl = this.ctrl.extend("worklist.controller.View1", {
                varValue: "View1Controller",
                onControl: this.onControl,
                onSimpleForm: this.onSimpleForm
            });
            return ctrl;
        }
    }

    sap.ui.define(["sap/ui/core/mvc/Controller",
        "../viewmodel/view1-view-model"
    ], (ctrl: any, v: any) => new ViewController(ctrl, v).getController());


})();
