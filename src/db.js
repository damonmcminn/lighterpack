var config = require("config");
var mongojs = require("mongojs");

var collections = ["users", "libraries"];
var db = mongojs(config.get("databaseUrl"), collections);

module.exports = db;