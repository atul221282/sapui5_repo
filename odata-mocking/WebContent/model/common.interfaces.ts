namespace common {
    export interface ControlValidator {
        control: any;
        controlValidators: Validator[]
    }

    export interface Validator {
        errorMessage: string;
        isValid(control: any): boolean;
    }
}