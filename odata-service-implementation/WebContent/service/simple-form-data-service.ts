namespace service {
	declare const $: any;

	export class SimpleFormDataService {

		messageToast: sapmodel.MessasgeToast;
		public currentMonth: number = 0;

		constructor(messageToast: sapmodel.MessasgeToast) {
			this.messageToast = messageToast;
			this.currentMonth += this.currentMonth + 1;
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

		getCommentById(id: Number) {
			return $.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
		}
	}

	//sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => SimpleFormDataService.Instance(m));
	sap.ui.define(["sap/m/MessageToast"], (m: sapmodel.MessasgeToast) => new SimpleFormDataService(m));
}