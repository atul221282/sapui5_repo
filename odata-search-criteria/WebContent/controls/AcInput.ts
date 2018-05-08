namespace controls {

    sap.ui.define([
        "sap/m/MaskInput",
        "sap/m/MaskInputRule",
        "../service/simple-form-data-service"
    ], acInput);

    function acInput(maskInput: any, oRule: any, service: any) {

        return maskInput.extend("worklist.controls.AcInput", {
            metadata: {
                properties: {
                    url: {
                        type: "sap.ui.base.ManagedObject"
                    }
                }
            },

            onBeforeRendering: function () {
                //This can be done in init as well 
                // but there you won't get the property url
                const url = this.getUrl();
                const rule = new oRule();
                rule.setMaskFormatSymbol("C");
                rule.setRegex("[0-9]");
                this.addRule(rule);

                this.setMask("+61 CCC CCC CCC");
                this.setProperty("placeholder", "Enter Number", true);
            },

            renderer: {}
        });
    }

}