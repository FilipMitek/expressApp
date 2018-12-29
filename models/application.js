"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var bookshelf_1 = require("../config/bookshelf");
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application(app) {
        var _this = _super.call(this) || this;
        _this.tableName = 'application';
        _this.attributes = {
            'name': app.name,
            'phone': app.phone,
            'message': app.message
        };
        return _this;
    }
    ;
    return Application;
}(bookshelf_1.bkshelf.Model));
exports.Application = Application;
;
