export default {
	dbOpenErr: ev => {
		console.err("ERROR OPENING THE DATABASE:", ev);
	},
	dbOpenSucces: (ev, mode) => {
		if (mode) {
			console.log("Database open success");
			console.log(ev);
		}
	}
};
