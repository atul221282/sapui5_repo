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

        isNotSameAs(mustBeLessThan: any, errorMessage: string) {
            return {
                errorMessage: errorMessage, isValid: (control: any) => {
                    const orgValue = control.getValue();
                    const mblValue = mustBeLessThan.getValue();

                    if(!orgValue && !mblValue) return true;

                    return orgValue !== mblValue;
                }
            };
        }
    }

    sap.ui.define([], new ValidatorFactory())
}
