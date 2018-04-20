var controls;
(function (controls) {
    sap.ui.define([
        "sap/m/MaskInput",
        "sap/m/MaskInputRule",
        "../service/simple-form-data-service"
    ], acInput);
    function acInput(maskInput, oRule, service) {
        return maskInput.extend("worklist.controls.AcInput", {
            metadata: {
                properties: {
                    url: {
                        type: "sap.ui.base.ManagedObject"
                    }
                }
            },
            onBeforeRendering: function () {
                var url = this.getUrl();
                var rule = new oRule();
                rule.setMaskFormatSymbol("C");
                rule.setRegex("[0-9]");
                this.addRule(rule);
                this.setMask("+61 CCC CCC CCC");
                this.setProperty("placeholder", "Enter Number", true);
            },
            renderer: {}
        });
    }
})(controls || (controls = {}));
//# sourceMappingURL=AcInput.js.map