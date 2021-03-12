"use strict";
exports.__esModule = true;
exports.Potion = void 0;
var Potion = /** @class */ (function () {
    function Potion(name) {
        this.types = ['strength', 'agility', 'health', 'super-health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
        if (this.name === ['health']) {
            this.value = Math.floor(Math.random() * 15 + 30);
        }
        else if (this.name === ['super-health']) {
            this.value = Math.floor(Math.random() * 15 + 50);
        }
        else {
            this.value = Math.floor(Math.random() * 15 + 7);
        }
    }
    return Potion;
}());
exports.Potion = Potion;
