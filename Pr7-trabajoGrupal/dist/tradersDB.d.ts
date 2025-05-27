import { GenericDatabase } from "./bd.js";
import { Trader, TraderTypes } from "./mercaderes.js";
export declare class TradersDB extends GenericDatabase<Trader> {
    constructor();
    filterEntry(tr: Trader): (Trader) | undefined;
    findValues(filter: {
        id?: number;
        name?: string;
        type?: TraderTypes;
        location?: string;
    }): (Trader)[];
    deleteEntry(filter: {
        id?: number;
        name?: string;
        type?: TraderTypes;
        location?: string;
    }): void;
    modifyEntry(id: number, filter: {
        name?: string;
        type?: TraderTypes;
        location?: string;
    }): void;
}
