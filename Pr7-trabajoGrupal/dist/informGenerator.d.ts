import { AssetsDB } from "./AssetsDB.js";
import { TransactionsDB } from "./transactionsDB.js";
export interface GenerateInform {
    generateInform(id?: number): void;
}
export declare abstract class InformGenerator implements GenerateInform {
    protected stock: AssetsDB | undefined;
    protected transactions: TransactionsDB | undefined;
    abstract generateInform(id?: number): void;
    constructor(stock: AssetsDB | undefined, transactions: TransactionsDB | undefined);
}
