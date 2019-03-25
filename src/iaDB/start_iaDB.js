import init from "./init_IaDB";
//import "../dev";

init();

const request = window.indexedDB.open("iaDB", 1);

export default callback => {
	let db;

	request.onerror = err => {
		console.log("could not open: ", err);
	};

	request.onsuccess = ev => {
		db = ev.target.result;
		console.log(
			"Open DB",
			ev.target.result.name,
			"version",
			(db = ev.target.result.version)
		);
	};

	request.onupgradeneeded = function(event) {
		console.log("DB upgrage is required");
		// ? let db = event.target.result;

		// Create an objectStore to hold information about our customers. We're
		// going to use "ssn" as our key path because it's guaranteed to be
		// unique - or at least that's what I was told during the kickoff meeting.

		// var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

		// Create an index to search customers by name. We may have duplicates
		// so we can't use a unique index.

		// ? objectStore.createIndex("name", "name", { unique: false });

		// Create an index to search customers by email. We want to ensure that
		// no two customers have the same email, so use a unique index.

		// ? objectStore.createIndex("email", "email", { unique: true });

		// Use transaction oncomplete to make sure the objectStore creation is
		// finished before adding data into it.

		// ? objectStore.transaction.oncomplete = function(event) {

		// Store values in the newly created objectStore.
		// var customerObjectStore = db
		//.transaction("customers", "readwrite")
		//.objectStore("customers");
		// customerData.forEach(function(customer) {
		// customerObjectStore.add(customer);
		//});
		//};
	};
	return callback(db);
};
