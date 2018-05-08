namespace Validator {

    export class ValidatorFactory {

        requiredValidator(errorMessage: string): common.Validator {
            return {
                errorMessage: errorMessage, isValid: (control: any) => {
                    return control.getValue();
                }
            };
        }

        minLengthValidator(errorMessage: string, minLength: number): common.Validator {
            return { errorMessage: errorMessage, isValid: (control: any) => control.getValue().length >= minLength };
        }

        isLessThanOrEqualToDate(mustBeLessThan: any, errorMessage: string) {
            return {
                errorMessage: errorMessage, isValid: (control: any) =>
                    control.getDateValue() <= mustBeLessThan.getDateValue()

            };
        }
    }

    sap.ui.define([], new ValidatorFactory())
}
