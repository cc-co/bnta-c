import { Enemy } from './Enemy.js';
import * as chalk from 'chalk';
// ES6 Syntax
export class Wolf extends Enemy {
    constructor(name, weapon) {
        // Call parent constructor here:
        super(name, weapon);
        this.armor = 'Fur';
        this.type = 'Earth';
        this.item = null;
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
//# sourceMappingURL=Wolf.js.map