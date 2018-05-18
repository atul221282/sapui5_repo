sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/mvc/Controller",
    "worklist/controller/App.controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function (ManagedObject, Controller, AppController, JSONModel, sinon, sinonQunit) {
    "use strict";

    QUnit.module("Test model modification", {

        beforeEach: function () {

            this.oAppController = new AppController();
            // debugger;
            // this.oViewStub = new ManagedObject({});
            // sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);

            // this.oJSONModelStub = new JSONModel({
            //     todos: []
            // });
            // this.oViewStub.setModel(this.oJSONModelStub);
        },

        afterEach: function () {
            //Controller.prototype.getView.restore();
            //this.oViewStub.destroy();
        }
    });

    QUnit.test("Should add a todo element to the model", function (assert) {
        // Assumption
        assert.strictEqual(this.oAppController.test, "appController");
    });

});