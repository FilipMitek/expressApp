"use strict";
exports.__esModule = true;
function notFound(req, res) {
    var err = Error('404 pages not found.');
    err.status = 404;
    catchError(err, req, res);
}
exports.notFound = notFound;
function catchError(err, req, res) {
    res.status = err.status || 500;
    var message = err.message.slice(err.message.lastIndexOf('-') + 1, err.message.length);
    res.render('error', {
        'message': message
    });
    console.log("Error occured " + message + " " + err.status);
}
exports.catchError = catchError;
