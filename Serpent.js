"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Snake = void 0;
var Enemy_js_1 = require("./Enemy.js");
var chalk = require("chalk");
// ES6 Syntax
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, weapon) {
        var _this = 
        // Call parent constructor here:
        _super.call(this, name, weapon) || this;
        _this.armor = 'Silver Scales';
        _this.type = 'Earth';
        _this.item = 'Lifesteal Fang';
        _this.sprite = "\n            :===-- ..         \n          .==-=+=*+==         \n          +=*#+===+*+         \n         :++" + chalk.red('*#') + ":=+++" + chalk.red('#') + "=         \n          =+***=:+#+.         \n           =*++++=-: " + chalk.red('.::: ') + "    \n            :+*+--===+-.      \n    .---:-+**##*+---=+*+=:    \n   ==+++++**#%%%*=---=*###:   \n  :==+++**+#*##%*=---==****:  \n  :+**#*****=***+==--=+*%#+:  \n   =#*+#******++=++++++#*.    \n   ==+=====+*****##***##*:    \n  :::========++******+=:.     \n   .:-=---==:-=+=++-.          ";
        return _this;
    }
    return Snake;
}(Enemy_js_1.Enemy));
exports.Snake = Snake;
