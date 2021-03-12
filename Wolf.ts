import {Enemy} from './Enemy.js';
import chalk from 'chalk';
import { TemplateLiteral } from 'typescript';


// ES6 Syntax
export class Wolf extends Enemy {
        armor: string;
        type: string;
        weapon!: string; 
        sprite: string; //template literal
        item!: string;

    constructor(name:string, weapon:string) {
        // Call parent constructor here:
        super(name, weapon);

        this.armor = 'Fur';
        this.type = 'Earth';
        this.item;
        this.sprite = `
::::-==-:::::::::::::::::::::::::::::
:::---+#*-:::::::::::::::::::::::::::
::::::-*#=:::::::::::::::::::::::::::
:::--+*##-:::::::::-:::::::::::::::::
:::+*%#*-::-===--=****+=--:::::::::::
:::*%%#*==*%%%%%%%%%%##***+=-::::::::
::::=*#*%@@@@@%%%%%%%###*##***+=-::::
:::::::-@@@%%%%%%%%%%@%#####**#*=-:::
::::::-#@@@%%%@%%%%%@@%%#*%##*+#${chalk.red(`Q`)}*=-:
::::-#%@@%%#*@@@%%%%@%%%###%%##*#*==-
:::+@@%@%**%@%#*%%%*=#%%#*%%%%${chalk.red(`Q`)}*+==-:
::*@%+:-::-*@*::-#%*::*${chalk.red(`Q`)}*:-=+##=:---:
:#@@%=:::::-*@%#*-##+-:=-:::::+##**-:
:-=-=-:::::::-=--+@%*=::::::::::---:: `;
    }

}
