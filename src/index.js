import db from "./iaDB";

const iaDB = db(datbase => {
	console.log("db: ", datbase);
});
