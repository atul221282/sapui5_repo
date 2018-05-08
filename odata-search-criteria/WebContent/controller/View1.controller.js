var controller;
(function (controller) {
    sap.ui.define(["worklist/controller/BaseController",
        "../view-model/View1.viewmodel"], function (ctrl, ViewModel) {
        var vs = ViewModel;
        return ctrl.extend("worklist.controller.View1", {
            varValue: "View1Controller",
            onControl: function () { return vs.onControl(); },
            onSimpleForm: function () { return vs.onSimpleForm(); },
            onSplitApp: function () { return vs.onSplitApp(); },
            onGridTable: function () { return vs.onGridTable(); },
            onOrderTable: function () { return vs.onOrderTable(); },
            onInit: function () {
                vs.init(this);
            }
        });
    });
})(controller || (controller = {}));
//# sourceMappingURL=View1.controller.js.map