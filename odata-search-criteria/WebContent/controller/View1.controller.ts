namespace controller {

    sap.ui.define(["worklist/controller/BaseController",
        "../view-model/View1.viewmodel"],
        function (ctrl: any, ViewModel: viewmodel.View1ViewModel) {
            const vs = ViewModel;
            return ctrl.extend("worklist.controller.View1", {
                varValue: "View1Controller",
                onControl: () => vs.onControl(),
                onSimpleForm: () => vs.onSimpleForm(),
                onSplitApp: () => vs.onSplitApp(),
                onGridTable: () => vs.onGridTable(),
                onOrderTable: () => vs.onOrderTable(),
                onInit: function () {
                    vs.init(this);
                }
            })
        });

}