namespace BaseControllerModel {
    export interface Extends<T> {
        extend(name: string, metadata: T): T;
        readonly prototype: T;
    }

    export interface BaseController {
        onInit?(): Function | void;
    }

    export interface BaseControllerWithRouterPrototype extends BaseController {
        getRouter?(): Function | void
    }

    export interface CSController extends BaseControllerWithRouterPrototype {
        secondMethod?(): Function | void
    }

    export interface AppController extends CSController {
        getTodos?(): Promise<any>;
    }

    export interface View1Controller extends CSController {
        getTodos?(message: string): Promise<any>;
        name: string;
    }

    export interface GridController extends CSController {
        setTodos?(): any
    }
}
