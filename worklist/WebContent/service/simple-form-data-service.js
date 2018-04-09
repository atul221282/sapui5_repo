var service;
(function (service) {
    var SimpleFormDataService = (function () {
        function SimpleFormDataService(messageToast) {
            this.messageToast = messageToast;
        }
        SimpleFormDataService.prototype.render = function () {
            return "data";
        };
        SimpleFormDataService.prototype.getPhotos = function () {
            return $.get("https://jsonplaceholder.typicode.com/photos");
        };
        SimpleFormDataService.prototype.getTodos = function () {
            this.messageToast.show("Getting todos");
            return $.get("http://localhost:9000/webcontent/data/todo.json");
        };
        SimpleFormDataService.prototype.getComments = function () {
            this.messageToast.show("Getting comments");
            return $.get("http://localhost:9000/webcontent/data/comments.json");
        };
        SimpleFormDataService.prototype.getCommentById = function (id) {
            return $.get("https://jsonplaceholder.typicode.com/comments/" + id);
        };
        return SimpleFormDataService;
    }());
    service.SimpleFormDataService = SimpleFormDataService;
    sap.ui.define(["sap/m/MessageToast"], function (m) { return new SimpleFormDataService(m); });
})(service || (service = {}));
//# sourceMappingURL=simple-form-data-service.js.map