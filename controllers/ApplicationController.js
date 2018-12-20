"use strict";
exports.__esModule = true;
function store(req, res) {
    req.flash('form', req.body.first_name + ', you are true hero.');
    res.redirect('/');
}
exports.store = store;
function normalizeData(req, res, next) {
    var nameArr = req.body.name.split(' ');
    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');
    next();
}
exports.normalizeData = normalizeData;
