"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RouteLoader_1 = require("./routes/RouteLoader");
const ErrorHandler_1 = require("./ErrorHandler/ErrorHandler");
const connectFlash = require('connect-flash');
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
    cookie: {},
}));
exports.app.use(connectFlash());
exports.app.use('/', RouteLoader_1.router);
exports.app.use(ErrorHandler_1.notFound);
//app.use(catchError);
