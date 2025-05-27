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
exports.mainMenu = exports.listClients = exports.listTraders = exports.listGoods = exports.addTrader = exports.addAsset = exports.addClient = void 0;
var inquirer_1 = require("inquirer");
var mercaderes_js_1 = require("./mercaderes.js");
var AssetsDB_js_1 = require("./AssetsDB.js");
var tradersDB_js_1 = require("./tradersDB.js");
var clientsDB_js_1 = require("./clientsDB.js");
var clients_js_1 = require("./clients.js");
function addClient(db) {
    return __awaiter(this, void 0, void 0, function () {
        var newClient, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter the ID of the client'
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter the name of the client'
                        },
                        {
                            type: 'input',
                            name: 'race',
                            message: 'Enter the race of the client',
                            validate: function (input) {
                                switch (input.toUpperCase()) {
                                    case 'HUMAN':
                                    case 'ELF':
                                    case 'DEAMON':
                                    case 'WIZARD':
                                    case 'WITCH':
                                    case 'GOBLIN':
                                    case 'GIGANT':
                                        return true;
                                    default:
                                        return "Please enter a valid race: HUMAN, ELF, DEAMON, WIZARD, WITCH, GOBLIN, GIGANT.";
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'location',
                            message: 'Enter the location of the client'
                        }
                    ])];
                case 1:
                    newClient = _a.sent();
                    client = {
                        name: newClient.name,
                        id: newClient.id,
                        location: newClient.location,
                        race: clients_js_1.Race[newClient.race.toUpperCase()]
                    };
                    db.addEntry(client);
                    return [2 /*return*/];
            }
        });
    });
}
exports.addClient = addClient;
function addAsset(db) {
    return __awaiter(this, void 0, void 0, function () {
        var newAsset, asset;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter the ID of the asset',
                            validate: function (input) {
                                if (!input || isNaN(Number(input))) {
                                    return 'Please enter a valid number for the ID.';
                                }
                                return true;
                            }
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter the name of the asset'
                        },
                        {
                            type: 'input',
                            name: 'description',
                            message: 'Enter description of the asset'
                        },
                        {
                            type: 'input',
                            name: 'material',
                            message: 'Enter the material of the asset'
                        },
                        {
                            type: 'input',
                            name: 'type',
                            message: 'Enter the type of asset',
                            validate: function (input) {
                                switch (input.toUpperCase()) {
                                    case 'PRODUCT':
                                        return true;
                                    case 'ARMOR':
                                        return true;
                                    case 'WEAPON':
                                        return true;
                                    case 'POTION':
                                        return true;
                                    case 'BOOK':
                                        return true;
                                    default:
                                        return 'Introduce a correct type of asset';
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'weight',
                            message: 'Enter the weight of the asset',
                            validate: function (input) {
                                if (!input || isNaN(Number(input))) {
                                    return 'Please enter a valid number for the weight.';
                                }
                                return true;
                            }
                        },
                        {
                            type: 'input',
                            name: 'crown_value',
                            message: 'Enter the crown value of the asset',
                            validate: function (input) {
                                if (!input || isNaN(Number(input))) {
                                    return 'Please enter a valid number for the weight.';
                                }
                                return true;
                            }
                        }
                    ])];
                case 1:
                    newAsset = _a.sent();
                    asset = {
                        id: Number(newAsset.id),
                        name: newAsset.name,
                        description: newAsset.description,
                        material: newAsset.material,
                        weigth: newAsset.weight,
                        crown_value: newAsset.crown_value,
                        type: newAsset.type
                    };
                    //Añadir bien a la db
                    db.addEntry(asset);
                    return [2 /*return*/];
            }
        });
    });
}
exports.addAsset = addAsset;
function addTrader(db) {
    return __awaiter(this, void 0, void 0, function () {
        var newtrader, trader;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Enter the ID of the Trader',
                            validate: function (input) {
                                if (!input || isNaN(Number(input))) {
                                    return 'Please enter a valid number for the ID.';
                                }
                                return true;
                            }
                        },
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Enter the name of the trader'
                        },
                        {
                            type: 'input',
                            name: 'location',
                            message: 'Enter the location of the trader'
                        },
                        {
                            type: 'input',
                            name: 'type',
                            message: 'Enter the type of the trader',
                            validate: function (input) {
                                switch (input) {
                                    case 'Blacksmith':
                                    case 'Alchemist':
                                    case 'Generaltrader':
                                    case 'Herbalist':
                                    case 'Armorer':
                                        return true;
                                    default:
                                        return "Please enter a valid type: Blacksmith, Alchemist, Generaltrader, Herbalist, Armorer.";
                                }
                            }
                        }
                    ])
                    // Añadir mercader
                ];
                case 1:
                    newtrader = _a.sent();
                    trader = {
                        type: mercaderes_js_1.TraderTypes[newtrader.type],
                        location: newtrader.location,
                        name: newtrader.name,
                        id: newtrader.id
                    };
                    db.addEntry(trader);
                    return [2 /*return*/];
            }
        });
    });
}
exports.addTrader = addTrader;
function listGoods(db) {
    return __awaiter(this, void 0, void 0, function () {
        var assets;
        return __generator(this, function (_a) {
            assets = db.getAllEntries();
            if (assets.length === 0) {
                console.log("\n🔴 No assets registered in the inventory.\n");
                return [2 /*return*/];
            }
            console.log("\n===========================================");
            console.log("🏹  ASSET LIST - WHITE WOLF INN INVENTORY  🏹");
            console.log("===========================================\n");
            assets.forEach(function (asset) {
                console.log("\uD83D\uDD39 *".concat(asset.name, "* (ID: ").concat(asset.id, ")"));
                console.log("   \uD83D\uDCDC Description: ".concat(asset.description));
                console.log("   \u2696\uFE0F  Weight: ".concat(asset.weigth, " kg | \uD83D\uDCB0 Value: ").concat(asset.crown_value, " crowns"));
                console.log("   \uD83D\uDEE0\uFE0F  Material: ".concat(asset.material));
                console.log("-------------------------------------------");
            });
            console.log("\n🏹 End of the list.\n");
            return [2 /*return*/];
        });
    });
}
exports.listGoods = listGoods;
function listTraders(db) {
    return __awaiter(this, void 0, void 0, function () {
        var traders;
        return __generator(this, function (_a) {
            traders = db.getAllEntries();
            if (traders.length === 0) {
                console.log("\n🔴 No Traders registered in the inventory.\n");
                return [2 /*return*/];
            }
            console.log("\n===========================================");
            console.log("🏹  TRADER LIST - WHITE WOLF INN INVENTORY  🏹");
            console.log("===========================================\n");
            traders.forEach(function (trader) {
                var traderType;
                switch (trader.type) {
                    case mercaderes_js_1.TraderTypes.Blacksmith:
                        traderType = 'Blacksmith';
                        break;
                    case mercaderes_js_1.TraderTypes.Alchemist:
                        traderType = 'Alchemist';
                        break;
                    case mercaderes_js_1.TraderTypes.Generaltrader:
                        traderType = 'Generaltrader';
                        break;
                    case mercaderes_js_1.TraderTypes.Herbalist:
                        traderType = 'Herbalist';
                        break;
                    case mercaderes_js_1.TraderTypes.Armorer:
                        traderType = 'Armorer';
                        break;
                    default:
                        traderType = 'Unknown';
                }
                console.log("\uD83D\uDD39 *".concat(trader.name, "* (ID: ").concat(trader.id, ")"));
                console.log("\uD83D\uDEE0\uFE0F  Trader work: ".concat(traderType));
                console.log("\uD83D\uDCCC Location: ".concat(trader.location));
                console.log("");
            });
            console.log("\n🏹 End of the list.\n");
            return [2 /*return*/];
        });
    });
}
exports.listTraders = listTraders;
function listClients(db) {
    return __awaiter(this, void 0, void 0, function () {
        var clients;
        return __generator(this, function (_a) {
            clients = db.getAllEntries();
            if (clients.length === 0) {
                console.log("\n🔴 No clients registered in the inventory.\n");
                return [2 /*return*/];
            }
            console.log("\n===========================================");
            console.log("🏹  CLIENT LIST - WHITE WOLF INN INVENTORY  🏹");
            console.log("===========================================\n");
            clients.forEach(function (client) {
                var raceName;
                switch (client.race) {
                    case clients_js_1.Race.HUMAN:
                        raceName = 'HUMAN';
                        break;
                    case clients_js_1.Race.ELF:
                        raceName = 'ELF';
                        break;
                    case clients_js_1.Race.DEAMON:
                        raceName = 'DEAMON';
                        break;
                    case clients_js_1.Race.WIZARD:
                        raceName = 'WIZARD';
                        break;
                    case clients_js_1.Race.WITCH:
                        raceName = 'WITCH';
                        break;
                    case clients_js_1.Race.GOBLIN:
                        raceName = 'GOBLIN';
                        break;
                    case clients_js_1.Race.GIGANT:
                        raceName = 'GIGANT';
                        break;
                    default:
                        raceName = 'UNKNOWN';
                }
                console.log("\uD83D\uDD39 *".concat(client.name, "* (ID: ").concat(client.id, ")"));
                console.log("\uD83E\uDDDD Race: ".concat(raceName, " \uD83E\uDDD9"));
                console.log("\uD83D\uDCCC Location: ".concat(client.location));
                console.log("");
            });
            console.log("\n🏹 End of the list.\n");
            return [2 /*return*/];
        });
    });
}
exports.listClients = listClients;
function mainMenu(assetsDB, tradersDB, clientsDB) {
    return __awaiter(this, void 0, void 0, function () {
        var options, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                        {
                            type: 'list',
                            name: 'action',
                            message: 'What do you want to do?',
                            choices: [
                                'Add a good',
                                'List goods',
                                'Add a trader',
                                'Add a client',
                                'List clients',
                                'List traders',
                                'Exit'
                            ]
                        }
                    ])];
                case 1:
                    options = _b.sent();
                    _a = options.action;
                    switch (_a) {
                        case 'Add a good': return [3 /*break*/, 2];
                        case 'List goods': return [3 /*break*/, 4];
                        case 'Add a trader': return [3 /*break*/, 6];
                        case 'List traders': return [3 /*break*/, 8];
                        case 'Add a client': return [3 /*break*/, 10];
                        case 'List clients': return [3 /*break*/, 12];
                        case 'Exit': return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 14];
                case 2: return [4 /*yield*/, addAsset(assetsDB)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 4: return [4 /*yield*/, listGoods(assetsDB)];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 6: return [4 /*yield*/, addTrader(tradersDB)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 8: return [4 /*yield*/, listTraders(tradersDB)];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 10: return [4 /*yield*/, addClient(clientsDB)];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 12:
                    listClients(clientsDB);
                    return [3 /*break*/, 14];
                case 13:
                    console.log('Exiting...');
                    return [2 /*return*/];
                case 14: return [4 /*yield*/, mainMenu(assetsDB, tradersDB, clientsDB)];
                case 15:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.mainMenu = mainMenu;
// Simulated databases in memory
var assetsDB = new AssetsDB_js_1.AssetsDB();
var tradersDB = new tradersDB_js_1.TradersDB();
var clientsDB = new clientsDB_js_1.ClientsDB();
// Start the menu
mainMenu(assetsDB, tradersDB, clientsDB);
