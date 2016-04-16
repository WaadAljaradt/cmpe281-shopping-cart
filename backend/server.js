var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var mongodb = require("./routes/mongodb.js")(app);
var riakdb = require("./routes/riakdb.js")(app);
var customer = require("./routes/mongodb/customer.js")(app);
 
var server = app.listen(8080, function () {
    console.log("Listening on port %s...", server.address().port);
});