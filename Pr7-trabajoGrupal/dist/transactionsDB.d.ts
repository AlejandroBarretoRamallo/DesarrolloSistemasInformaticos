import { GenericDatabase } from "./bd.js";
export declare enum TransactionType {
    SELL = 0,
    BUY = 1,
    RETURN = 2
}
export declare enum ReturnReasonType {
    DISSATISFACTION = 0,
    DEFECTIVE = 1
}
export interface Transactions {
    id: number;
    type: TransactionType;
    trID: number;
    date: string;
    clientID: number;
    productName: string;
    buying: boolean;
    productID: number;
    involver_crowns?: number;
    return_reason?: ReturnReasonType;
}
export declare class TransactionsDB extends GenericDatabase<Transactions> {
    constructor();
    filterEntry(asset: Transactions): Transactions | undefined;
    findValues(filter: {
        id?: number;
        type?: TransactionType;
        trID?: number;
        date?: string;
        productName?: string;
        productID?: number;
        buying?: boolean;
        clientID?: number;
        involver_crowns?: number;
        return_reason?: ReturnReasonType;
    }): Transactions[];
    deleteEntry(filter: {
        id?: number;
        type?: TransactionType;
        trID?: number;
        date?: string;
        involver_crowns?: number;
        return_reason?: ReturnReasonType;
    }): void;
    modifyEntry(id: number, filter: {
        type?: TransactionType;
        trID?: number;
        date?: string;
        involver_crowns?: number;
        return_reason?: ReturnReasonType;
    }): void;
}
