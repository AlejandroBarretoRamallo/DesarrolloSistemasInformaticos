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
exports.BenefitsInformGenerator = void 0;
var informGenerator_js_1 = require("./informGenerator.js");
var BenefitsInformGenerator = /** @class */ (function (_super) {
    __extends(BenefitsInformGenerator, _super);
    function BenefitsInformGenerator(transactionDB) {
        return _super.call(this, undefined, transactionDB) || this;
    }
    BenefitsInformGenerator.prototype.generateInform = function (id) {
        var _a, _b;
        var benefits = 0;
        var losts = 0;
        var boughAssets = (_a = this.transactions) === null || _a === void 0 ? void 0 : _a.getAllEntries().filter(function (transaction) {
            return transaction.buying === true;
        });
        boughAssets === null || boughAssets === void 0 ? void 0 : boughAssets.forEach(function (transaction) {
            if (transaction.involver_crowns !== undefined) {
                losts += transaction.involver_crowns;
            }
        });
        var soldAssets = (_b = this.transactions) === null || _b === void 0 ? void 0 : _b.getAllEntries().filter(function (transaction) {
            return transaction.buying === false;
        });
        soldAssets === null || soldAssets === void 0 ? void 0 : soldAssets.forEach(function (transaction) {
            if (transaction.involver_crowns !== undefined) {
                benefits += transaction.involver_crowns;
            }
        });
        console.log("Benefits: ".concat(benefits, " crowns"));
        console.log("Losts: ".concat(losts, " crowns"));
        console.log("Total balance: ".concat(benefits - losts));
    };
    return BenefitsInformGenerator;
}(informGenerator_js_1.InformGenerator));
exports.BenefitsInformGenerator = BenefitsInformGenerator;
