(function() {

	sap.ui.define([ 'sap/m/MessageToast' ], function(messageToast) {

		class DataService {

			constructor(messageToast) {
				this.messageToast = messageToast;
			}

			render() {
				return "data";
			}


			getPhotos() {
				return $.get( "https://jsonplaceholder.typicode.com/photos");
			}

			async asyncCall() {
				const response = await this.getPhotos();
				//messageToast.show(`Service Inititated ${JSON.stringify(data[0])}`);
				const data = response;
				return data;
			}
		}

		return new DataService(messageToast);
	});

}());