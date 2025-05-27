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
exports.TradersDB = void 0;
// tradersClientsDB.ts
var bd_js_1 = require("./bd.js");
var TradersDB = /** @class */ (function (_super) {
    __extends(TradersDB, _super);
    function TradersDB() {
        return _super.call(this, './db/TradersDB.json') || this;
    }
    TradersDB.prototype.filterEntry = function (tr) {
        return this._db.data.data.find(function (t) { return tr.id === t.id; });
    };
    TradersDB.prototype.findValues = function (filter) {
        return this._db.data.data.filter(function (tr) {
            return ((filter.id == undefined || tr.id === filter.id) &&
                (filter.name == undefined || tr.name === filter.name) &&
                (filter.location == undefined || tr.location === filter.location) &&
                (filter.type == undefined || tr.type === filter.type));
        });
    };
    TradersDB.prototype.deleteEntry = function (filter) {
        var deleteData = this.findValues(filter);
        var result = [];
        this._db.data.data.forEach(function (tr) {
            if (deleteData.find(function (t) { return t.id == tr.id; }) == undefined) {
                result.push(tr);
            }
        });
        this._db.data.data = result;
        this._db.write();
    };
    TradersDB.prototype.modifyEntry = function (id, filter) {
        this._db.data.data.forEach(function (tr) {
            if (tr.id === id) {
                if (filter.name)
                    tr.name = filter.name;
                if (filter.location)
                    tr.location = filter.location;
                if (filter.type)
                    tr.type = filter.type;
            }
        });
        this._db.write();
    };
    return TradersDB;
}(bd_js_1.GenericDatabase));
exports.TradersDB = TradersDB;
