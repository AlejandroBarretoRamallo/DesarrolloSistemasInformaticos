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
exports.ClientsDB = void 0;
// sClientsDB.ts
var bd_js_1 = require("./bd.js");
var ClientsDB = /** @class */ (function (_super) {
    __extends(ClientsDB, _super);
    function ClientsDB() {
        return _super.call(this, './db/ClientsDB.json') || this;
    }
    ClientsDB.prototype.filterEntry = function (cl) {
        return this._db.data.data.find(function (c) { return c.id === cl.id; });
    };
    ClientsDB.prototype.findValues = function (filter) {
        return this._db.data.data.filter(function (cl) {
            return ((filter.id == undefined || cl.id === filter.id) &&
                (filter.name == undefined || cl.name === filter.name) &&
                (filter.location == undefined || cl.location === filter.location) &&
                (filter.race == undefined || cl.race === filter.race));
        });
    };
    ClientsDB.prototype.deleteEntry = function (filter) {
        var deleteData = this.findValues(filter);
        var result = [];
        this._db.data.data.forEach(function (client) {
            if (deleteData.find(function (cl) { return cl.id == client.id; }) == undefined) {
                result.push(client);
            }
        });
        this._db.data.data = result;
        this._db.write();
    };
    ClientsDB.prototype.modifyEntry = function (id, filter) {
        this._db.data.data.forEach(function (cl) {
            if (cl.id === id) {
                if (filter.name)
                    cl.name = filter.name;
                if (filter.location)
                    cl.location = filter.location;
                if (filter.race)
                    cl.race = filter.race;
            }
        });
        this._db.write();
    };
    return ClientsDB;
}(bd_js_1.GenericDatabase));
exports.ClientsDB = ClientsDB;
// let clients = new ClientsDB();
// const c1: Clients = {
//   id:1,
//   name:'pedro',
//   race:Race.GOBLIN,
//   location:'lalaguna'
// };
// const c2: Clients = {
//   id:2,
//   name:'antonio',
//   race:Race.ELF,
//   location:'santacruz'
// };
// console.log(clients.getAllEntries())
// clients.addEntry(c1);
// clients.addEntry(c2);
// console.log(clients.getAllEntries())
// clients.deleteEntry({id:1})
// console.log(clients.getAllEntries())
// clients.modifyEntry(2, {name:'juan'})
// console.log(clients.getAllEntries())
