var Validator;
(function (Validator) {
    var ValidatorComposer = (function () {
        function ValidatorComposer() {
            this.controlValidators = new Array();
        }
        ValidatorComposer.prototype.validate = function (control, validators) {
            validators.forEach(function (v) {
                if (v.validate(control)) {
                    control.setValueStateText(v.errorMessage);
                    control.setValueState(sap.ui.core.ValueState.Error);
                }
            });
        };
        ValidatorComposer.prototype.compose = function (control, validators) {
            this.controlValidators.push({ control: control, controlValidators: validators });
        };
        return ValidatorComposer;
    }());
    Validator.ValidatorComposer = ValidatorComposer;
    sap.ui.define([], new ValidatorComposer());
})(Validator || (Validator = {}));
//# sourceMappingURL=ValidatorComposer.js.map