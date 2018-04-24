var Validator;
(function (Validator) {
    var ValidatorFactory = (function () {
        function ValidatorFactory() {
        }
        ValidatorFactory.prototype.requiredValidator = function (errorMessage) {
            return {
                errorMessage: errorMessage, isValid: function (control) {
                    return control.getValue();
                }
            };
        };
        ValidatorFactory.prototype.minLengthValidator = function (errorMessage, minLength) {
            return { errorMessage: errorMessage, isValid: function (control) { return control.getValue().length >= minLength; } };
        };
        ValidatorFactory.prototype.isLessThanOrEqualToDate = function (mustBeLessThan, errorMessage) {
            return {
                errorMessage: errorMessage, isValid: function (control) {
                    return control.getDateValue() <= mustBeLessThan.getDateValue();
                }
            };
        };
        return ValidatorFactory;
    }());
    Validator.ValidatorFactory = ValidatorFactory;
    sap.ui.define([], new ValidatorFactory());
})(Validator || (Validator = {}));
//# sourceMappingURL=ValidatorFactory.js.map