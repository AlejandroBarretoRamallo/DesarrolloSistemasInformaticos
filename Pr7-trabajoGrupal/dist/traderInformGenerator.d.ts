import { InformGenerator } from "./informGenerator.js";
import { TransactionsDB } from "./transactionsDB.js";
export declare class TraderInformGenerator extends InformGenerator {
    constructor(transactionDB: TransactionsDB);
    generateInform(id?: number): void;
}
