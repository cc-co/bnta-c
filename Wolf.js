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
exports.Wolf = void 0;
var Enemy_js_1 = require("./Enemy.js");
var chalk = require("chalk");
// ES6 Syntax
var Wolf = /** @class */ (function (_super) {
    __extends(Wolf, _super);
    function Wolf(name, weapon) {
        var _this = 
        // Call parent constructor here:
        _super.call(this, name, weapon) || this;
        _this.armor = 'Fur';
        _this.type = 'Earth';
        _this.item = null;
        _this.sprite = "\n::::-==-:::::::::::::::::::::::::::::\n:::---+#*-:::::::::::::::::::::::::::\n::::::-*#=:::::::::::::::::::::::::::\n:::--+*##-:::::::::-:::::::::::::::::\n:::+*%#*-::-===--=****+=--:::::::::::\n:::*%%#*==*%%%%%%%%%%##***+=-::::::::\n::::=*#*%@@@@@%%%%%%%###*##***+=-::::\n:::::::-@@@%%%%%%%%%%@%#####**#*=-:::\n::::::-#@@@%%%@%%%%%@@%%#*%##*+#" + chalk.red("Q") + "*=-:\n::::-#%@@%%#*@@@%%%%@%%%###%%##*#*==-\n:::+@@%@%**%@%#*%%%*=#%%#*%%%%" + chalk.red("Q") + "*+==-:\n::*@%+:-::-*@*::-#%*::*" + chalk.red("Q") + "*:-=+##=:---:\n:#@@%=:::::-*@%#*-##+-:=-:::::+##**-:\n:-=-=-:::::::-=--+@%*=::::::::::---:: ";
        return _this;
    }
    return Wolf;
}(Enemy_js_1.Enemy));
exports.Wolf = Wolf;
