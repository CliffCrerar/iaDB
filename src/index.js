import "./iaDB";

console.log(iadb);

var clientDatabase = iadb("devtestDB", 1);

console.log(clientDatabase.iadbName());

console.log(clientDatabase.iadbVersion());
