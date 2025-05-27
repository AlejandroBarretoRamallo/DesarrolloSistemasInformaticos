import { Transactions } from "./transactionsDB.js";
import { AssetType } from "./AssetsDB.js";
export declare enum InformType {
    STOCKSTATE = 0,
    STOCKTYPE = 1,
    BENEFITS = 2,
    TRADERHISTORY = 3
}
export declare class Inventary {
    private _assets;
    private _transactions;
    constructor();
    stockControl(): void;
    registerTransaction(tr: Transactions): void;
    generateInform(informt: InformType, id?: number, assetType?: AssetType): void;
}
