namespace controller {
    declare const window: any;
    class MasterPageClass {
        ctrl: any;
        history: any;
        window: any;

        constructor(ctrl: any, history: any, window: any) {
            this.ctrl = ctrl;
            this.history = history;
            this.window = window
        }

        onInit(event: any) { }

        onNavBack(event: any) {
            const oHistory = this.history.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                this.window.history.go(-1);
            }
        }
    }

    function getController(ctrl: any, history: any) {
        const mpc = new MasterPageClass(ctrl, history, window);

        const controller = ctrl.extend("worklist.controller.omasterpage", {
            onInit: (event: any) => mpc.onInit(event),
            onNavBack: (event: any) => mpc.onNavBack(event)
        });

        return controller;
    }

    sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History"],
        getController);
}