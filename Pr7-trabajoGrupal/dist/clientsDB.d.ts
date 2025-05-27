import { GenericDatabase } from "./bd.js";
import { Clients, Race } from "./clients.js";
export declare class ClientsDB extends GenericDatabase<Clients> {
    constructor();
    filterEntry(cl: Clients): (Clients) | undefined;
    findValues(filter: {
        id?: number;
        name?: string;
        race?: Race;
        location?: string;
    }): (Clients)[];
    deleteEntry(filter: {
        id?: number;
        name?: string;
        race?: Race;
        location?: string;
    }): void;
    modifyEntry(id: number, filter: {
        name?: string;
        race?: Race;
        location?: string;
    }): void;
}
