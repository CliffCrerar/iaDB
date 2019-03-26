module.exports = () => {
	window.indexedDB =
		window.indexedDB ||
		window.mozIndexedDB ||
		window.webkitIndexedDB ||
		window.msIndexedDB;
	window.IDBTransaction = window.IDBTransaction ||
		window.webkitIDBTransaction ||
		window.msIDBTransaction || { READ_WRITE: "readwrite" };
	window.IDBKeyRange =
		window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
	if (!window.indexedDB) {
		window.alert(
			"Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
		);
		console.error({ err: "Browser not supported" });
		return false;
	} else {
		console.log("Browser supports indexedDb datastore");
		return true;
	}
};
