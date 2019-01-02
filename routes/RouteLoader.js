"use strict";
exports.__esModule = true;
var express = require("express");
var PagesController = require("../controllers/PagesController");
var ApplicationController = require("../controllers/ApplicationController");
exports.router = express.Router();
exports.router.get('/', PagesController.home);
exports.router.post('/applications', ApplicationController.validate, ApplicationController.checkValidation, ApplicationController.normalizeData, ApplicationController.store);
