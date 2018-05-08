namespace Validator {

    export class ValidatorComposer {

        private controlValidators: Array<common.ControlValidator> = new Array<common.ControlValidator>();

        validate() {
            this.controlValidators.forEach((cv: common.ControlValidator) => {

                const errorMessages = cv.controlValidators.map(v => {
                    return !v.isValid(cv.control) ? v.errorMessage : "";
                })//get invalid records
                    .filter(err => !!err);//remove undefined

                if (errorMessages.length > 0) {
                    cv.control.setValueStateText(errorMessages.join(", "));
                    cv.control.setValueState(sap.ui.core.ValueState.Error);
                }
                else {
                    cv.control.setValueStateText("");
                    cv.control.setValueState(sap.ui.core.ValueState.None);
                }
            });
        }

        validateFor(control: any): void {
            
            const controlValidators = this.controlValidators.filter(cv => cv.control.getId() === control.getId());
            controlValidators.forEach((cv: common.ControlValidator) => {

                const errorMessages = cv.controlValidators.map(v => {
                    return !v.isValid(cv.control) ? v.errorMessage : "";
                })//get invalid records
                    .filter(err => !!err);//remove undefined

                if (errorMessages.length > 0) {
                    cv.control.setValueStateText(errorMessages.join(", "));
                    cv.control.setValueState(sap.ui.core.ValueState.Error);
                }
                else {
                    cv.control.setValueStateText("");
                    cv.control.setValueState(sap.ui.core.ValueState.None);
                }
            });
        }

        compose(control: any, validators: common.Validator[]) {
            this.controlValidators.push({ control: control, controlValidators: validators });
        }

        validateAndGetInvalidControls() {
            this.validate();
            const ctrls = this.controlValidators.map(cv => cv.control)
                .filter(f => f.getValueState() === sap.ui.core.ValueState.Error);

            return ctrls;
        }

        getAllControls() {
            return this.controlValidators.map(c => c.control);
        }

        getControlById(id: string) {
            return this.controlValidators.find(c => c.control.getId() === id);
        }

        clearAll() {
            this.controlValidators.forEach((cv: common.ControlValidator) => {
                cv.control.setValueStateText(undefined);
                cv.control.setValueState(sap.ui.core.ValueState.None);
            })
        }
    }

    sap.ui.define([], new ValidatorComposer());
}