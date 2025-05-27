import { InformGenerator } from "./informGenerator.js";
import { TransactionsDB } from "./transactionsDB.js";
export declare class BenefitsInformGenerator extends InformGenerator {
    constructor(transactionDB: TransactionsDB);
    generateInform(id?: number): void;
}
