"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("../models/application");
const ErrorHandler_1 = require("../ErrorHandler/ErrorHandler");
const check_1 = require("express-validator/check");
const appMailer = require("../mailer/appMailer");
exports.validate = [
    check_1.check('name').trim().isLength({ min: 1 }).withMessage('Name is required'),
    check_1.check('email').isLength({ min: 1 }).withMessage('Phone is required'),
    check_1.check('message').isLength({ min: 1 }).withMessage('Message is required'),
];
exports.checkValidation = (req, res, next) => {
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('home', {
            validated: req.body,
            errors: errors.mapped(),
            showLightbox: 'true'
        });
    }
    next();
};
// Store new application
async function store(req, res) {
    try {
        const application = {
            'name': req.body.name,
            'email': req.body.email,
            'message': req.body.message,
        };
        await new application_1.Application(application).save();
        console.log(`Insert to database ${req.body.name}`);
        await appMailer.applicationNotify({
            email: application.email,
            data: { name: application.name }
        });
    }
    catch (err) {
        return ErrorHandler_1.catchError(err, req, res);
    }
    req.flash('form', req.body.first_name + ', you are true hero.');
    res.redirect('/');
}
exports.store = store;
function normalizeData(req, res, next) {
    const nameArr = req.body.name.split(' ');
    req.body.first_name = nameArr.shift();
    req.body.last_name = nameArr.join(' ');
    next();
}
exports.normalizeData = normalizeData;
