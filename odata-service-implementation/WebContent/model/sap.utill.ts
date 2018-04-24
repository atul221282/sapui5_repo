namespace sap {

    export const ui = <ui>{};
    export const m = <UIMInterface>{};
    export const UITable = <UITable>{};


    export interface UITable {
        getRowActionTemplate(): UIRowActionTemplate;
        bindColumns(name: string, callback: any): void;
        addColumn(arg: any): void;
        setRowActionTemplate(arg: any): void;
        setRowActionCount(arg: any): void;
        getSelectedIndex(): number;
        getContextByIndex(index: number): any;
        getModel(): any;
        removeItem<T>(item: T): void;
    }

    interface ui {
        core: SapCore;
        define(dependencies: string[], callback: any): any;
        xmlfragment(actionSheet: string, currentContext: any): any;
        table: any;
        commons: any;
    }

    interface UIMInterface {
        Button: any;
        MessageToast: any;
    }

    interface SapCore {
        UIComponent: SapUIComponent;
        ValueState: any;
    }

    interface SapUIComponent {
        getRouterFor(currentContext: any): any;
    }

    interface UIRowActionTemplate {
        destroy(): void;
    }
}
