"use strict";
var _createClass = function () {
    function a(b, c) {
        for (var e, d = 0; d < c.length; d++) e = c[d], e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(b, e.key, e)
    }
    return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
    }
}();
Object.defineProperty(exports, "__esModule", {
    value: !0
});

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
}
var ViewController = exports.ViewController = function () {
    function a(b, c) {
        _classCallCheck(this, a), this.ctrl = b, this.v = c, a.that = this
    }
    return _createClass(a, [{
        key: "onControl",
        value: function onControl() {
            a.that.v.onControl(this)
        }
    }, {
        key: "onSimpleForm",
        value: function onSimpleForm() {
            a.that.v.onSimpleForm(this)
        }
    }, {
        key: "getController",
        value: function getController() {
            var b = this.ctrl.extend("worklist.controller.View1", {
                varValue: "View1Controller",
                onControl: this.onControl,
                onSimpleForm: this.onSimpleForm
            });
            return b
        }
    }]), a
}();