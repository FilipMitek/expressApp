"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookshelf_1 = require("../config/bookshelf");
exports.Application = bookshelf_1.bkshelf.Model;
exports.create = function (app) {
    return new exports.Application({
        name: app.name,
        phone: app.phone,
        message: app.message,
    }).save();
};
