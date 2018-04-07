//https://jsonplaceholder.typicode.com/

(function () {
	"use strict";

	sap.ui.define(["sap/m/MessageToast"], function (messageToast) {

		class SimpleFormDataService {

			constructor(messageToast) {
				this.messageToast = messageToast;
			}

			render() {
				return "data";
			}

			getPhotos() {
				return $.get("https://jsonplaceholder.typicode.com/photos");
			}

			getTodos() {
				this.messageToast.show("Getting todos");
				return $.get("http://localhost:9000/webcontent/data/todo.json");
			}

			getComments() {
				this.messageToast.show("Getting comments");
				return $.get("http://localhost:9000/webcontent/data/comments.json");
			}

			getCommentById(id) {
				return $.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
			}
		}

		return new SimpleFormDataService(messageToast);
	});

}());