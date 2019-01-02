"use strict";
exports.__esModule = true;
var mailer_1 = require("./mailer");
exports.applicationNotify = function (options) {
    var defaultOption = {
        subject: '[shelter for dogs] Thank you, Hero!',
        view: 'application-notification'
    };
    return mailer_1.send(Object.assign(defaultOption, options));
};
