"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var connectFlash = require('connect-flash');
var session = require("express-session");
var RouteLoader_1 = require("./routes/RouteLoader");
var ErrorHandler_1 = require("./ErrorHandler/ErrorHandler");
exports.app = express();
exports.app.set('views', path.join(__dirname, 'views'));
exports.app.set('view engine', 'pug');
exports.app.use(express.static(path.join(__dirname, 'public')));
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({ extended: true }));
exports.app.use(cookieParser());
exports.app.use(session({
    secret: 'dog hero',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
exports.app.use(connectFlash());
exports.app.use('/', RouteLoader_1.router);
exports.app.use(ErrorHandler_1.notFound);
//app.use(catchError);
