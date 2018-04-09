(function () {
    var ViewController = (function () {
        function ViewController(ctrl, v) {
            this.ctrl = ctrl;
            this.v = v;
            ViewController.that = this;
        }
        ViewController.prototype.onControl = function () {
            ViewController.that.v.onControl(this);
        };
        ViewController.prototype.onSimpleForm = function () {
            ViewController.that.v.onSimpleForm(this);
        };
        ViewController.prototype.getController = function () {
            var ctrl = this.ctrl.extend("worklist.controller.View1", {
                varValue: "View1Controller",
                onControl: this.onControl,
                onSimpleForm: this.onSimpleForm
            });
            return ctrl;
        };
        return ViewController;
    }());
    sap.ui.define(["sap/ui/core/mvc/Controller",
        "../viewmodel/view1-view-model"
    ], function (ctrl, v) { return new ViewController(ctrl, v).getController(); });
})();
//# sourceMappingURL=View1.controller.js.map