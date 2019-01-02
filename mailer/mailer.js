"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require("@sendgrid/mail");
const sgConfig = require("../config/sendgrid");
const pug = require("pug");
const path = require("path");
exports.send = async (options) => {
    Object.assign(sgConfig.message, {
        to: options.email,
        subject: options.subject,
        html: exports.render(options.view, options.data)
    });
    return await sgMail.send(sgConfig.message);
};
exports.render = (filename, data) => {
    const currentPath = __dirname;
    return pug.renderFile(`${path.dirname(currentPath)}/views/${filename}.pug`, data);
};
