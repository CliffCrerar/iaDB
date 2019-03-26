import init from "./init";
import msg from "./msg";
//import "../dev";
(function(global) {
	if (!init()) return;
	const devmode = true;
	const iadb = (idbName, idbVersion) => {
		return new iadb.init(idbName, idbVersion);
	};

	iadb.prototype = {
		iadbName: function() {
			return this.dbname;
		},
		iadbVersion: function() {
			return this.dbversion;
		},
		iadbOpen: function() {
			this.dbrequest = indexedDB.open(this.dbname, this.dbversion);
			this.dbrequest.onerror = ev => {
				msg.dbOpenErr(ev);
			};
			this.dbrequest.onsuccess = ev => {
				msg.dbOpenSucces(ev, devmode);
			};
			return this.dbrequest;
		}
	};

	iadb.init = function(idbName, idbVersion) {
		let self = this;
		//console.log(arguments);
		self.dbname = idbName || "iadbDefualt";
		self.dbversion = idbVersion || 1;
		//console.log("self: ", self);
	};

	iadb.init.prototype = iadb.prototype;

	global.iadb = iadb;
})(window);
