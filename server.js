"use strict";
exports.__esModule = true;
var app_1 = require("./app");
app_1.app.set('port', process.env.PORT || 8080);
var server = app_1.app.listen(app_1.app.get('port'), function () {
    console.log("Listening on : " + app_1.app.get('port'));
});
