// const Potion = require('../lib/Potion');
// const Character = require('./Character');
import { Potion } from './Potion.js';
import { Character } from './Character.js';
export class Player extends Character {
    constructor(name = '') {
        // Call parent constructor here:
        super(name);
        // Superclass -> example of inheritance (prototype based OOP)
        this.inventory = [new Potion('health'), new Potion('health'), new Potion('super-health'), new Potion()];
    }
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }
    getInventory() {
        return this.inventory;
    }
    addRevive(potion) {
        this.inventory.push(potion);
    }
    useRevive(index) {
        const potion = this.inventory.splice(index, 1)[0];
        // ['1','strength']
        // splice --> ['strength']
        // [0] ---> 'strength'
        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
            case 'super-health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
    getName() {
        return this.name;
    }
}
// module.exports = Player;
//# sourceMappingURL=Player.js.map