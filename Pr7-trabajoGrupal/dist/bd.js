"use strict";
exports.__esModule = true;
exports.GenericDatabase = void 0;
// db.ts
var lowdb_1 = require("lowdb");
var node_1 = require("lowdb/node");
var GenericDatabase = /** @class */ (function () {
    function GenericDatabase(dbFile) {
        if (dbFile === void 0) { dbFile = './db/db.json'; }
        var adapter = new node_1.JSONFileSync(dbFile);
        this._db = new lowdb_1.LowSync(adapter, { data: [] });
        this._db.read();
    }
    GenericDatabase.prototype.addEntry = function (value) {
        if (this.filterEntry(value) != undefined) {
            throw new Error('Value not inserted. Value alredy in table.');
        }
        this._db.data.data.push(value);
        this._db.write();
    };
    GenericDatabase.prototype.getAllEntries = function () {
        return this._db.data.data;
    };
    return GenericDatabase;
}());
exports.GenericDatabase = GenericDatabase;
