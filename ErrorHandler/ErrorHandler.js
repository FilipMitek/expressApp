"use strict";
exports.__esModule = true;
function notFound(req, res, next) {
    var err = Error('404 pages not found.');
    err.status = 404;
    next(err);
}
exports.notFound = notFound;
function catchError(err, req, res, next) {
    res.status = err.status || 500;
    var message = err.message.slice(err.message.lastIndexOf('-') + 1, err.message.length);
    res.render('error', {
        //'message': `${err.message} ${err.status}`,
        'message': message
    });
    console.log("Error occured " + message + " " + err.status);
    next();
}
exports.catchError = catchError;
