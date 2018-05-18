var Validator;
(function (Validator) {
    var ValidatorComposer = (function () {
        function ValidatorComposer() {
            this.controlValidators = new Array();
        }
        ValidatorComposer.prototype.validate = function () {
            this.controlValidators.forEach(function (cv) {
                var errorMessages = cv.controlValidators.map(function (v) {
                    return !v.isValid(cv.control) ? v.errorMessage : "";
                })
                    .filter(function (err) { return !!err; });
                if (errorMessages.length > 0) {
                    cv.control.setValueStateText(errorMessages.join(", "));
                    cv.control.setValueState(sap.ui.core.ValueState.Error);
                }
                else {
                    cv.control.setValueStateText("");
                    cv.control.setValueState(sap.ui.core.ValueState.None);
                }
            });
        };
        ValidatorComposer.prototype.validateFor = function (control) {
            var controlValidators = this.controlValidators.filter(function (cv) { return cv.control.getId() === control.getId(); });
            controlValidators.forEach(function (cv) {
                var errorMessages = cv.controlValidators.map(function (v) {
                    return !v.isValid(cv.control) ? v.errorMessage : "";
                })
                    .filter(function (err) { return !!err; });
                if (errorMessages.length > 0) {
                    cv.control.setValueStateText(errorMessages.join(", "));
                    cv.control.setValueState(sap.ui.core.ValueState.Error);
                }
                else {
                    cv.control.setValueStateText("");
                    cv.control.setValueState(sap.ui.core.ValueState.None);
                }
            });
        };
        ValidatorComposer.prototype.compose = function (control, validators) {
            this.controlValidators.push({ control: control, controlValidators: validators });
        };
        ValidatorComposer.prototype.validateAndGetInvalidControls = function () {
            this.validate();
            var ctrls = this.controlValidators.map(function (cv) { return cv.control; })
                .filter(function (f) { return f.getValueState() === sap.ui.core.ValueState.Error; });
            return ctrls;
        };
        ValidatorComposer.prototype.getAllControls = function () {
            return this.controlValidators.map(function (c) { return c.control; });
        };
        ValidatorComposer.prototype.getControlById = function (id) {
            return this.controlValidators.find(function (c) { return c.control.getId() === id; });
        };
        ValidatorComposer.prototype.clearAll = function () {
            this.controlValidators.forEach(function (cv) {
                cv.control.setValueStateText(undefined);
                cv.control.setValueState(sap.ui.core.ValueState.None);
            });
        };
        return ValidatorComposer;
    }());
    Validator.ValidatorComposer = ValidatorComposer;
    sap.ui.define([], new ValidatorComposer());
})(Validator || (Validator = {}));
//# sourceMappingURL=ValidatorComposer.js.map