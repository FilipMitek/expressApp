"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey('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');
exports.message = {
    from: 'filip.mitek@interia.pl',
    mail_settings: {
        sandbox_mode: {
            enable: false
        }
    },
};
