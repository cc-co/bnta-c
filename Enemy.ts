import {Potion} from './Potion.js';
import {Character} from './Character.js';


export class Enemy extends Character {
        name: string;
        weapon: string;
        potion: Potion;

    constructor(name?, weapon?) {

        // Call parent constructor here:
        super(name);
        
        this.weapon = weapon;
        this.potion = new Potion();
    }

    // Describes initial and preceding enemies name and weapon attributes
    getDescription() {
        return `A ${this.name} yielding ${this.weapon} weapon has appeared!`;
    }
}