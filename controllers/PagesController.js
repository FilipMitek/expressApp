"use strict";
exports.__esModule = true;
function home(req, res) {
    res.render('home', {
        formMessage: req.flash('form')
    });
}
exports.home = home;
;
