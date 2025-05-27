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
exports.AssetsDB = exports.AssetType = void 0;
// Inventary.ts
var bd_js_1 = require("./bd.js");
var AssetType;
(function (AssetType) {
    AssetType[AssetType["PRODUCT"] = 0] = "PRODUCT";
    AssetType[AssetType["ARMOR"] = 1] = "ARMOR";
    AssetType[AssetType["WEAPON"] = 2] = "WEAPON";
    AssetType[AssetType["POTION"] = 3] = "POTION";
    AssetType[AssetType["BOOK"] = 4] = "BOOK";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var AssetsDB = /** @class */ (function (_super) {
    __extends(AssetsDB, _super);
    function AssetsDB() {
        return _super.call(this, './db/AssetsDB.json') || this;
    }
    AssetsDB.prototype.filterEntry = function (asset) {
        return this._db.data.data.find(function (a) { return a.id === asset.id; });
    };
    AssetsDB.prototype.findValues = function (filter) {
        return this._db.data.data.filter(function (asset) {
            return ((filter.id == undefined || asset.id === filter.id) &&
                (filter.name == undefined || asset.name === filter.name) &&
                (filter.description == undefined || asset.description === filter.description) &&
                (filter.material == undefined || asset.material === filter.material) &&
                (filter.crown_value == undefined || asset.crown_value === filter.crown_value) &&
                (filter.weigth == undefined || asset.weigth === filter.weigth));
        });
    };
    AssetsDB.prototype.deleteEntry = function (filter) {
        var deleteData = this.findValues(filter);
        var result = [];
        this._db.data.data.forEach(function (asset) {
            if (deleteData.find(function (as) { return as.id == asset.id; }) == undefined) {
                result.push(asset);
            }
        });
        this._db.data.data = result;
        this._db.write();
    };
    AssetsDB.prototype.modifyEntry = function (id, filter) {
        this._db.data.data.forEach(function (asset) {
            if (asset.id === id) {
                if (filter.name)
                    asset.name = filter.name;
                if (filter.description)
                    asset.description = filter.description;
                if (filter.material)
                    asset.material = filter.material;
                if (filter.weigth)
                    asset.weigth = filter.weigth;
                if (filter.crown_value)
                    asset.crown_value = filter.crown_value;
            }
        });
    };
    return AssetsDB;
}(bd_js_1.GenericDatabase));
exports.AssetsDB = AssetsDB;
