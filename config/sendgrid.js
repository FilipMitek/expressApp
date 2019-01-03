"use strict";
exports.__esModule = true;
var sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.message = {
    from: 'filip.mitek@interia.pl',
    mail_settings: {
        sandbox_mode: {
            enable: false
        }
    }
};
