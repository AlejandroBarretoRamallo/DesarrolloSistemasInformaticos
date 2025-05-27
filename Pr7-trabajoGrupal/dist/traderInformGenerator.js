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
exports.TraderInformGenerator = void 0;
var informGenerator_js_1 = require("./informGenerator.js");
var TraderInformGenerator = /** @class */ (function (_super) {
    __extends(TraderInformGenerator, _super);
    function TraderInformGenerator(transactionDB) {
        return _super.call(this, undefined, transactionDB) || this;
    }
    TraderInformGenerator.prototype.generateInform = function (id) {
        var _a;
        if (id === undefined) {
            return;
        }
        var clientIDValue = {
            clientID: id
        };
        var transactions = (_a = this.transactions) === null || _a === void 0 ? void 0 : _a.findValues(clientIDValue);
        console.log("Number of transactions: ".concat(transactions === null || transactions === void 0 ? void 0 : transactions.length));
        var IDs = '';
        transactions === null || transactions === void 0 ? void 0 : transactions.forEach(function (transaction) {
            IDs += "".concat(transaction.id, ", ");
        });
        transactions = transactions === null || transactions === void 0 ? void 0 : transactions.slice(0, -2);
        console.log("IDs of '".concat(id, " trnasactions: ").concat(transactions));
        var boughProducts = '';
        transactions === null || transactions === void 0 ? void 0 : transactions.forEach(function (transaction) {
            if (!transaction.buying) {
                boughProducts += "".concat(transaction.productName, ", ");
            }
        });
        boughProducts = boughProducts.slice(0, -2);
        console.log("List of bought products: ".concat(boughProducts));
        var soldProducts = '';
        transactions === null || transactions === void 0 ? void 0 : transactions.forEach(function (transaction) {
            if (transaction.buying) {
                soldProducts += "".concat(transaction.productName);
            }
        });
        soldProducts = soldProducts.slice(0, -2);
        console.log("List of sold products: ".concat(soldProducts));
    };
    return TraderInformGenerator;
}(informGenerator_js_1.InformGenerator));
exports.TraderInformGenerator = TraderInformGenerator;
