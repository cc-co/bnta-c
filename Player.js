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
exports.Player = void 0;
// const Potion = require('../lib/Potion');
// const Character = require('./Character');
var Potion_js_1 = require("./Potion.js");
var Character_js_1 = require("./Character.js");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        if (name === void 0) { name = ''; }
        var _this = 
        // Call parent constructor here:
        _super.call(this, name) || this;
        // Superclass -> example of inheritance (prototype based OOP)
        _this.inventory = [new Potion_js_1.Potion('health'), new Potion_js_1.Potion('health'), new Potion_js_1.Potion('super-health'), new Potion_js_1.Potion()];
        return _this;
    }
    Player.prototype.getStats = function () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };
    Player.prototype.getInventory = function () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };
    Player.prototype.addRevive = function (potion) {
        this.inventory.push(potion);
    };
    Player.prototype.useRevive = function (index) {
        var potion = this.inventory.splice(index, 1)[0];
        // ['1','strength']
        // splice --> ['strength']
        // [0] ---> 'strength'
        switch (potion.name) {
            case ['agility']:
                this.agility += potion.value;
                break;
            case ['health']:
            case ['super-health']:
                this.health += potion.value;
                break;
            case ['strength']:
                this.strength += potion.value;
                break;
        }
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    return Player;
}(Character_js_1.Character));
exports.Player = Player;
// module.exports = Player;
