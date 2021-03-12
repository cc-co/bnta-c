"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Game = exports.Timer = void 0;
var inquirer_1 = require("inquirer");
var Player_js_1 = require("./Player.js");
var _ = require("lodash");
var Cyclops_js_1 = require("./Cyclops.js");
var Serpent_js_1 = require("./Serpent.js");
var Wolf_js_1 = require("./Wolf.js");
var chalk = require("chalk");
// Countdown timer for in-game decisions
var Timer = /** @class */ (function () {
    function Timer(timeLimit) {
        this.timeLimit = timeLimit;
        this.currentTimeLeft;
    }
    Timer.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            function wait() {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.timeLimit;
                        _a.label = 1;
                    case 1:
                        if (!(i > 0)) return [3 /*break*/, 4];
                        this.currentTimeLeft = i;
                        return [4 /*yield*/, wait()];
                    case 2:
                        _a.sent();
                        if (i == 1) {
                            console.log(chalk.red("\n Time has run out, game over!"));
                            process.exit();
                        }
                        _a.label = 3;
                    case 3:
                        i--;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Timer;
}());
exports.Timer = Timer;
// Main game function
var Game = /** @class */ (function () {
    function Game() {
        this.battleNumber = 0;
        this.isPlayerTurn = false;
        this.enemies = [];
        this.currentEnemy;
        this.player;
        this.roundNumber = 0;
        this.timer = new Timer(300);
        // Could amalgamate games counts using object destructuring 
        this.gamesPlayed = 0;
        this.gamesWon = 0;
        this.gamesLost = 0;
        this.resetIndexEnemies;
    }
    // Initialise the game
    Game.prototype.initializeGame = function () {
        var _this = this;
        // create enemies and put into array
        this.enemies.push(new Wolf_js_1.Wolf('three-headed wolf', 'claw'));
        this.enemies.push(new Serpent_js_1.Snake('serpent', 'fang'));
        this.enemies.push(new Cyclops_js_1.Cyclops('skeletocyclops', 'axe'));
        // randomise order of enemies
        var shuffledEnemies = _.shuffle(this.enemies);
        this.resetIndexEnemies = shuffledEnemies.filter(function () { return true; });
        this.currentEnemy = this.resetIndexEnemies[0];
        // asks player to play the game with the terminal expanded fully
        console.log(chalk.cyan("NOTE: This game is best played with the terminal expanded to a full window!"));
        // prompts the player for their name and narrates the story
        inquirer_1["default"]
            .prompt({
            type: 'text',
            name: 'name',
            message: 'Please tell us your name young squire ... so we can remember you, should you succumb to the fate that awaits you.\n'
        })
            // destructure name from the prompt object
            .then(function (_a) {
            var name = _a.name;
            _this.player = new Player_js_1.Player(name);
            _this.timer.start();
            console.log("\n" + name + " has awaken and picks up a \uD83D\uDCD7book\uD83D\uDCD7");
            console.log("'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light\uD83C\uDF15, it was the season of Darkness\uD83C\uDF11, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way...'");
            console.log("You find yourself in a deep, dark dungeon. Liberate all the creatures to escape. Use Beyonces to help you. \n");
            // placeholder for starting a new round
            _this.door();
        });
    };
    ;
    // Prompts for door choice. If chosen door is correct, player continues, but is game over if otherwise.
    Game.prototype.door = function () {
        var _this = this;
        inquirer_1["default"]
            .prompt({
            type: 'list',
            name: 'action',
            message: 'Light and Darkness are sometimes intertwined, which door will you choose?',
            choices: ['Light', 'Dark', 'Live']
        })
            .then(function (_a) {
            var action = _a.action;
            console.log("\n    \t\t                        \t\t  nO eNtRy                             \n\t\t\t                        \t ____________                          \n\t\t\t                        \t|            |                         \n\t\t\t                        \t|            |                         \n\t\t\t                        \t|            |                         \n\t\t\t\t                        |        ()  |                         \n\t\t\t\t        " + chalk.bgGreen("vvvv") + "            |            |             " + chalk.bgGreen("vvvv") + "        \n\t\t\t\t    " + chalk.bgGreen("vvvvvvvvvvvv") + "        |            |         " + chalk.bgGreen("vvvvvvvvvvvv") + "    \n\t\t\t\t" + chalk.bgGreen("vvvvvvvvvvvvvvvvvvvv") + "    |____________|     " + chalk.bgGreen("vvvvvvvvvvvvvvvvvvvv") + "\n\t\t\t                        \t   ...creak!                               ");
            // Light and Dark door are completely randomised to be correct on either one
            if (action == _.sample(['Light', 'Dark'])) {
                console.log("" + chalk.green("\n Well done warrior, you have opened the correct door\n"));
                _this.startNewBattle();
            }
            else if (action === 'Live') {
                console.log("" + chalk.cyan("\nYou have opened the safe door, continue with your journey warrior\n"));
                _this.startNewBattle();
            }
            else {
                console.log("" + chalk.red("\nYou must not deviate away from Light. Game over\n"));
                inquirer_1["default"]
                    .prompt({
                    type: 'list',
                    name: 'action',
                    message: "Would you like to test fate and play again, " + chalk.blue(_this.player.getName()) + "?\n",
                    choices: ['Yes', 'No']
                })
                    .then(function (_a) {
                    var action = _a.action;
                    if (action == 'Yes') {
                        // resets game state
                        _this.battleNumber = 0;
                        _this.isPlayerTurn = false;
                        _this.enemies = [];
                        _this.roundNumber = 0;
                        _this.timer = new Timer(300);
                        // starts a new game
                        _this.initializeGame();
                        // increments number of games played and lost
                        _this.gamesPlayed++;
                        _this.gamesLost++;
                        console.log("Total Games Played: + " + _this.gamesPlayed);
                        console.log("Total Games Won: + " + _this.gamesWon);
                        console.log("Total Games Lost: + " + _this.gamesLost);
                    }
                    else {
                        process.exit();
                    }
                });
            }
        });
    };
    // Starts a new battle upon entering the correct door or when an enemy is defeated
    Game.prototype.startNewBattle = function () {
        if (this.player.agility > this.currentEnemy[0].agility) {
            this.isPlayerTurn = true;
        }
        else {
            this.isPlayerTurn = false;
        }
        console.log('Your stats are as follows:');
        console.table(this.player.getStats());
        console.log(this.currentEnemy.getDescription());
        this.battle();
    };
    ;
    // Execute battle action
    Game.prototype.battle = function () {
        var _this = this;
        // execute if it is player's turn
        if (this.isPlayerTurn) {
            this.roundNumber++;
            console.log(this.currentEnemy.sprite);
            console.log("");
            console.log("-----Round " + this.roundNumber + "-----You have " + chalk.green(this.timer.currentTimeLeft) + " seconds left to finish the game!");
            inquirer_1["default"]
                .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ["Tame🤝", "Use Revive💕", "Poison🍷", "Do Nothing🤐😴"]
            })
                .then(function (_a) {
                var action = _a.action;
                if (action === 'Use Revive💕') {
                    // No potions to use
                    if (!_this.player.getInventory()) {
                        console.log("You don't have any Beyonces (revive) to the left, to the left!");
                        return _this.checkEndOfBattle();
                    }
                    // Player uses potion
                    inquirer_1["default"]
                        .prompt({
                        type: 'list',
                        message: 'Which Beyonce (revive) would you like to use?',
                        name: 'action',
                        // utilising map function to specify index and string literal in console
                        choices: _this.player.getInventory().map(function (item, index) { return index + 1 + ": " + item.name; })
                    })
                        // callback for acceptance / rejection of Promise of specified action
                        .then(function (_a) {
                        var action = _a.action;
                        var reviveDetails = action.split(': '); // split ---> ['1','health']
                        _this.player.useRevive(reviveDetails[0] - 1);
                        console.log("You used a " + reviveDetails[1] + " Beyonce (revive).");
                        _this.checkEndOfBattle(); // check alive statuses of player and enemy
                    });
                }
                else if (action === 'Poison🍷') {
                    // player poisons enemy                   
                    if (_this.currentEnemy.status == chalk.magenta('Poisoned')) {
                        console.log('Enemy has already been poisoned!');
                    }
                    else {
                        _this.currentEnemy.status = chalk.magenta('Poisoned');
                        console.log("You poisoned the " + _this.currentEnemy.name);
                    }
                    _this.checkEndOfBattle(); // check alive statuses of player and enemy
                }
                else if (action === 'Tame🤝') {
                    // player tames enemy
                    var damage = _this.player.getAttackValue();
                    _this.currentEnemy.reduceHealth(damage);
                    console.log("You attacked the " + _this.currentEnemy.name);
                    console.log(_this.currentEnemy.getHealth());
                    _this.checkEndOfBattle(); // check alive statuses of player and enemy
                }
                else if (action === 'Do Nothing🤐😴') {
                    console.log("You flail around like a useless Magikarp. " + _this.currentEnemy.name + " looks at you confusingly.");
                    _this.checkEndOfBattle(); // check alive statuses of player and enemy
                }
            });
        }
        // execute if it is enemy's turn
        else {
            // enemy attacks
            var damage = this.currentEnemy.getAttackValue();
            this.player.reduceHealth(damage);
            console.log("You were attacked by the " + this.currentEnemy.name + " (" + this.currentEnemy.status + ")");
            console.log(this.player.getHealth());
            this.checkEndOfBattle(); // check alive statuses of player and enemy
        }
    };
    ;
    // Applies battle effects and check alive conditions at the end of the turn
    Game.prototype.checkEndOfBattle = function () {
        var _this = this;
        // recover health if have LifeSteal Fang and when enemy attacks
        if (!this.isPlayerTurn) {
            this.currentEnemy.getRecoverHealth();
        }
        // damage if have poisoned status
        this.currentEnemy.getPoisonedDamage();
        // executes if player and enemy is alive
        if (this.player.isAlive() && this.currentEnemy.isAlive()) {
            this.isPlayerTurn = !this.isPlayerTurn;
            this.battle();
        }
        // executes if player is alive but enemy is dead
        else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
            console.log("\nYou've successfully tamed the " + this.currentEnemy.name);
            this.player.addRevive(this.currentEnemy.potion);
            console.log(this.player.name + " found a(n) " + this.currentEnemy.potion.name + " Beyonce \n");
            this.battleNumber++;
            // constraining 'levels' of game to amount of defined enemies
            if (this.battleNumber < this.enemies.length) {
                this.currentEnemy = this.resetIndexEnemies[this.battleNumber];
                this.startNewBattle();
            }
            else if (this.battleNumber == this.enemies.length) {
                console.log("You win! " + this.player.getName() + " has successfully tamed all the suffering creatures in your dungeon. The purified creatures awake and shine brightly, becoming your mythical pets. You meet others who have overcome their challenges. Together on a path of Light towards a new world will you maintain in Light, or surrender to the season of Darkness..\n");
                inquirer_1["default"]
                    .prompt({
                    type: 'list',
                    name: 'action',
                    message: "Would you like to test fate and play again, " + chalk.blue(this.player.getName()) + "?\n",
                    choices: ['Yes', 'No']
                })
                    .then(function (_a) {
                    var action = _a.action;
                    if (action == 'Yes') {
                        // resets game state
                        _this.battleNumber = 0;
                        _this.isPlayerTurn = false;
                        _this.enemies = [];
                        _this.roundNumber = 0;
                        _this.timer = new Timer(300);
                        // starts a new game
                        _this.initializeGame();
                        // increments number of games played and won
                        _this.gamesPlayed++;
                        _this.gamesWon++;
                        console.log("Total Games Played: + " + _this.gamesPlayed);
                        console.log("Total Games Won: + " + _this.gamesWon);
                        console.log("Total Games Lost: + " + _this.gamesLost);
                    }
                    else {
                        process.exit();
                    }
                });
            }
        }
        // if we don't meet the above conditions i.e. player is dead
        else {
            console.log("\nYou've been defeated! The dark path ahead lies. Nothing to be seen, nothing to be heard...\n");
            inquirer_1["default"]
                .prompt({
                type: 'list',
                name: 'action',
                message: "Would you like to test fate and play again, " + chalk.blue(this.player.getName()) + "?\n",
                choices: ['Yes', 'No']
            })
                .then(function (_a) {
                var action = _a.action;
                if (action == 'Yes') {
                    // resets game state
                    _this.battleNumber = 0;
                    _this.isPlayerTurn = false;
                    _this.enemies = [];
                    _this.roundNumber = 0;
                    _this.timer = new Timer(300);
                    // starts a new game
                    _this.initializeGame();
                    // increments number of games played and lost
                    _this.gamesPlayed++;
                    _this.gamesLost++;
                    console.log("Total Games Played: + " + _this.gamesPlayed);
                    console.log("Total Games Won: + " + _this.gamesWon);
                    console.log("Total Games Lost: + " + _this.gamesLost);
                }
                else {
                    process.exit();
                }
            });
        }
    };
    return Game;
}());
exports.Game = Game;
;
