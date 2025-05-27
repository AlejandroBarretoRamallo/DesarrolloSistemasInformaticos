import { LowSync } from 'lowdb';
export interface Database<T> {
    data: T[];
}
export declare abstract class GenericDatabase<T> {
    protected _db: LowSync<Database<T>>;
    constructor(dbFile?: string);
    addEntry(value: T): void;
    getAllEntries(): T[];
    abstract findValues(filter: {}): T[];
    abstract filterEntry(value: T): T | undefined;
    abstract deleteEntry(filter: {}): void;
    abstract modifyEntry(key: number, filter: {}): void;
}
