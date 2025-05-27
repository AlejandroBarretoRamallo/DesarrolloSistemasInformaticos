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
exports.AssetInformGenerator = void 0;
var informGenerator_js_1 = require("./informGenerator.js");
var AssetInformGenerator = /** @class */ (function (_super) {
    __extends(AssetInformGenerator, _super);
    function AssetInformGenerator(assetsDB) {
        return _super.call(this, assetsDB, undefined) || this;
    }
    AssetInformGenerator.prototype.generateInform = function (id) {
        var _a, _b, _c, _d, _e;
        var idObject = {
            id: id
        };
        var asset = (_a = this.stock) === null || _a === void 0 ? void 0 : _a.findValues(idObject);
        if (id != undefined && ((_b = this.stock) === null || _b === void 0 ? void 0 : _b.findValues(idObject).length) != 0 && asset != undefined) {
            console.log("This asset its currently available (amount: ".concat(asset.length, ")"));
            console.log('Information of the asset: ');
            console.log("Id: ".concat(asset[0].id, "}"));
            console.log("Name: ".concat(asset[0].name));
            console.log("Description o the asset: ".concat(asset[0].description));
            console.log("Material: ".concat(asset[0].material));
            console.log("Weigth: ".concat(asset[0].weigth));
            console.log("Crown value: ".concat(asset[0].crown_value));
        }
        else if (id != undefined) {
            console.log("The asset with ID '".concat(id, " is not available"));
        }
        else {
            var numberAssets = (_c = this.stock) === null || _c === void 0 ? void 0 : _c.getAllEntries().length;
            console.log("Number of assets available: ".concat(numberAssets));
            var names_1 = '';
            (_d = this.stock) === null || _d === void 0 ? void 0 : _d.getAllEntries().forEach(function (entry) {
                names_1 += "".concat(entry.name, ", ");
            });
            if (names_1.length > 0) {
                names_1 = names_1.slice(0, -2);
                console.log("Assets: ".concat(names_1));
            }
            var totalCrownValue_1 = 0;
            (_e = this.stock) === null || _e === void 0 ? void 0 : _e.getAllEntries().forEach(function (asset) {
                totalCrownValue_1 += asset.crown_value;
            });
            console.log("Total crown value: ".concat(totalCrownValue_1));
        }
    };
    AssetInformGenerator.prototype.generateTypeInform = function (type) {
        var _a;
        var assets = (_a = this.stock) === null || _a === void 0 ? void 0 : _a.getAllEntries();
        console.log("Number of assets of type ".concat(type, ": ").concat(assets.length));
        var names = '';
        assets.forEach(function (asset) {
            names += "".concat(asset.name, ", ");
        });
        names = names.slice(0, -2);
        console.log("List of ".concat(type, " assets: ").concat(names));
        var crowns = 0;
        assets.forEach(function (asset) {
            crowns += asset.crown_value;
        });
        console.log("Total value of ".concat(type, " assets: ").concat(crowns, " crowns"));
    };
    return AssetInformGenerator;
}(informGenerator_js_1.InformGenerator));
exports.AssetInformGenerator = AssetInformGenerator;
