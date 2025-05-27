"use strict";
exports.__esModule = true;
exports.Inventary = exports.InformType = void 0;
var transactionsDB_js_1 = require("./transactionsDB.js");
var AssetsDB_js_1 = require("./AssetsDB.js");
var assetInformGenerator_js_1 = require("./assetInformGenerator.js");
var benefitsInformGenerator_js_1 = require("./benefitsInformGenerator.js");
var traderInformGenerator_js_1 = require("./traderInformGenerator.js");
var InformType;
(function (InformType) {
    InformType[InformType["STOCKSTATE"] = 0] = "STOCKSTATE";
    InformType[InformType["STOCKTYPE"] = 1] = "STOCKTYPE";
    InformType[InformType["BENEFITS"] = 2] = "BENEFITS";
    InformType[InformType["TRADERHISTORY"] = 3] = "TRADERHISTORY";
})(InformType = exports.InformType || (exports.InformType = {}));
var Inventary = /** @class */ (function () {
    function Inventary() {
        this._assets = new AssetsDB_js_1.AssetsDB();
        this._transactions = new transactionsDB_js_1.TransactionsDB();
    }
    Inventary.prototype.stockControl = function () {
    };
    Inventary.prototype.registerTransaction = function (tr) {
        console.log('Adding a new transaction...');
        this._transactions.addEntry(tr);
        console.log('Registered succesfully');
    };
    Inventary.prototype.generateInform = function (informt, id, assetType) {
        switch (informt) {
            case InformType.STOCKSTATE:
                var stockInform = new assetInformGenerator_js_1.AssetInformGenerator(this._assets);
                stockInform.generateInform(id);
                break;
            case InformType.STOCKTYPE:
                var stockTypeInform = new assetInformGenerator_js_1.AssetInformGenerator(this._assets);
                stockTypeInform.generateInform(assetType);
                break;
            case InformType.BENEFITS:
                var benefitInform = new benefitsInformGenerator_js_1.BenefitsInformGenerator(this._transactions);
                benefitInform.generateInform();
                break;
            case InformType.TRADERHISTORY:
                var traderInform = new traderInformGenerator_js_1.TraderInformGenerator(this._transactions);
                traderInform.generateInform(id);
                break;
            default:
                console.log('Choose a correct inform type (STOCKSTATE, STOCKTYPE, BENEFITS, TRADERHISTORY');
        }
        return;
    };
    return Inventary;
}());
exports.Inventary = Inventary;
