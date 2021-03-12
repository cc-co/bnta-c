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
exports.Enemy = void 0;
var Potion_js_1 = require("./Potion.js");
var Character_js_1 = require("./Character.js");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, weapon) {
        var _this = 
        // Call parent constructor here:
        _super.call(this, name) || this;
        _this.weapon = weapon;
        _this.potion = new Potion_js_1.Potion();
        return _this;
    }
    // Describes initial and preceding enemies name and weapon attributes
    Enemy.prototype.getDescription = function () {
        return "A " + this.name + " yielding " + this.weapon + " weapon has appeared!";
    };
    return Enemy;
}(Character_js_1.Character));
exports.Enemy = Enemy;
