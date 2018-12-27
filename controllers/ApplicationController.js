"use strict";
exports.__esModule = true;
var application_1 = require("../models/application");
function store(req, res) {
    var create = new application_1.Application({
        'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    }).save();
    create.then(function () {
        req.flash('form', req.body.first_name + ', you are true hero.');
        res.redirect('/');
    });
}
exports.store = store;
function normalizeData(req, res, next) {
    var nameArr = req.body.name.split(' ');
    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');
    next();
}
exports.normalizeData = normalizeData;
