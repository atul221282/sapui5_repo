namespace sap {
    export class ui {
        static define(dependencies: string[], callback: any) { }
        static xmlfragment(actionSheet: string, currentContext: any) { }
        static core: SapCore;
    }
    interface SapCore {
        UIComponent: SapUIComponent;
    }
    interface SapUIComponent {
        getRouterFor(currentContext: any): any;
    }
}