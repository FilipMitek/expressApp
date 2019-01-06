"use strict";
exports.__esModule = true;
var sgMail = require("@sendgrid/mail");
var Parameter_1 = require("../Parameter");
sgMail.setApiKey(Parameter_1.Parameters.SENDGRID_API_KEY);
exports.message = {
    from: 'filip.mitek@interia.pl',
    mail_settings: {
        sandbox_mode: {
            enable: false
        }
    }
};
