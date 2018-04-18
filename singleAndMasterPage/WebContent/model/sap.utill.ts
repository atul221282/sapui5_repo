namespace sap {
    
    export const ui = <UIInterface>{};

    interface UIInterface {
        core: SapCore;
        define(dependencies: string[], callback: any): any;
        xmlfragment(actionSheet: string, currentContext: any): any;
    }

    interface SapCore {
        UIComponent: SapUIComponent;
    }

    interface SapUIComponent {
        getRouterFor(currentContext: any): any;
    }
}