"use strict";
exports.__esModule = true;
var knex = require("knex");
var knexfile_1 = require("./knexfile");
var bookshelf = require("bookshelf");
var knexo = knex(knexfile_1.knexConf);
exports.bkshelf = bookshelf(knexo);
