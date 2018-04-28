sap.ui.define([
    "sap/ui/core/util/MockServer"
], function (MockServer) {
    "use strict";
    return {
        init: function () {
            const $ = jQuery;

            // create
            const oMockServer = new MockServer({
                rootUri: "/destinations/northwind/V2/Northwind/Northwind.svc/"
            });
            const oUriParameters = $.sap.getUriParameters();
            // configure
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 1000
            });
            // simulate
            const sPath = $.sap.getModulePath("worklist.localService");

            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

            const oMockServer2 = new MockServer({
                rootUri: "/destinations/northwind/V2/Northwind/NorthwindC.svc/"
            });
            const oUriParameters2 = $.sap.getUriParameters();
            // configure
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters2.get("serverDelay") || 1000
            });

            // simulate
            const sPath2 = $.sap.getModulePath("worklist.localService");

            oMockServer2.simulate(sPath2 + "/metadata2.xml", sPath2 + "/mockdata");


            const oMockServer3 = new MockServer({
                rootUri: "/destinations/northwind/V2/Northwind/NorthwindZ.svc/"
            });
            const oUriParameters3 = $.sap.getUriParameters();
            // configure
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters3.get("serverDelay") || 1000
            });

            // simulate
            const sPath3 = $.sap.getModulePath("worklist.localService");

            oMockServer3.simulate(sPath3 + "/tripServiceMetaData.xml", sPath3 + "/mockdata");


            // start
            oMockServer.start();
            oMockServer2.start();
            oMockServer3.start();
        }
    };
});