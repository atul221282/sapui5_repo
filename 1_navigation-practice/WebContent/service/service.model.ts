namespace servicemodel {
    export interface IEmployeeService {
        getEmployees(): any;

        getEmployeeById(id: number): any;
    }

    export interface IPersonLookupService {
        getProducts(params: ODataReadParams): void;
    }

    export interface ODataReadParams {
        backendModel: any;
        sucecssCallback: any;
        errorCallback: any;
        filters?: any[];
    }
}