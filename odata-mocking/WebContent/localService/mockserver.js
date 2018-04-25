sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";
    return {
        init: function () {
            // create
            const oMockServer = new MockServer({
                rootUri: "/destinations/northwind/V2/Northwind/Northwind.svc/"
            });
            const oUriParameters = jQuery.sap.getUriParameters();
            // configure
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 1000
            });
            // simulate
            const sPath = jQuery.sap.getModulePath("worklist.localService");

            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            const oMockServer2 = new MockServer({
                rootUri: "/destinations/northwind/V2/Northwind/NorthwindC.svc/"
            });
            const oUriParameters2 = jQuery.sap.getUriParameters();
            // configure
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters2.get("serverDelay") || 1000
            });
            // simulate
            const sPath2 = jQuery.sap.getModulePath("worklist.localService");

            oMockServer2.simulate(sPath2 + "/metadata2.xml", sPath2 + "/mockdata");

            // start
            oMockServer.start();
            oMockServer2.start();
        }
    };
});