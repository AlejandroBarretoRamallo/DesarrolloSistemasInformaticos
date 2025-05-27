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
exports.TransactionsDB = exports.ReturnReasonType = exports.TransactionType = void 0;
// Inventary.ts
var bd_js_1 = require("./bd.js");
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["SELL"] = 0] = "SELL";
    TransactionType[TransactionType["BUY"] = 1] = "BUY";
    TransactionType[TransactionType["RETURN"] = 2] = "RETURN";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var ReturnReasonType;
(function (ReturnReasonType) {
    ReturnReasonType[ReturnReasonType["DISSATISFACTION"] = 0] = "DISSATISFACTION";
    ReturnReasonType[ReturnReasonType["DEFECTIVE"] = 1] = "DEFECTIVE";
})(ReturnReasonType = exports.ReturnReasonType || (exports.ReturnReasonType = {}));
var TransactionsDB = /** @class */ (function (_super) {
    __extends(TransactionsDB, _super);
    function TransactionsDB() {
        return _super.call(this, './db/TransactionsDB.json') || this;
    }
    TransactionsDB.prototype.filterEntry = function (asset) {
        return this._db.data.data.find(function (a) { return a.id === asset.id; });
    };
    TransactionsDB.prototype.findValues = function (filter) {
        return this._db.data.data.filter(function (tr) {
            return ((filter.id == undefined || tr.id === filter.id) &&
                (filter.type == undefined || tr.type === filter.type) &&
                (filter.trID == undefined || tr.trID === filter.trID) &&
                (filter.date == undefined || tr.date === filter.date) &&
                (filter.clientID === undefined || tr.clientID === filter.clientID) &&
                (filter.involver_crowns == undefined || tr.involver_crowns === filter.involver_crowns) &&
                (filter.return_reason == undefined || tr.return_reason === filter.return_reason));
        });
    };
    TransactionsDB.prototype.deleteEntry = function (filter) {
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
    TransactionsDB.prototype.modifyEntry = function (id, filter) {
        this._db.data.data.forEach(function (tr) {
            if (tr.id === id) {
                if (filter.type)
                    tr.type = filter.type;
                if (filter.trID)
                    tr.trID = filter.trID;
                if (filter.date)
                    tr.date = filter.date;
                if (filter.involver_crowns)
                    tr.involver_crowns = filter.involver_crowns;
                if (filter.return_reason)
                    tr.return_reason = filter.return_reason;
            }
        });
        this._db.write();
    };
    return TransactionsDB;
}(bd_js_1.GenericDatabase));
exports.TransactionsDB = TransactionsDB;
