import { GenericDatabase } from "./bd.js";
import { Asset } from "./assets.js";
export declare enum AssetType {
    PRODUCT = 0,
    ARMOR = 1,
    WEAPON = 2,
    POTION = 3,
    BOOK = 4
}
export declare class AssetsDB extends GenericDatabase<Asset> {
    constructor();
    filterEntry(asset: Asset): Asset | undefined;
    findValues(filter: {
        id?: number;
        name?: string;
        description?: string;
        material?: string;
        weigth?: number;
        crown_value?: number;
    }): Asset[];
    deleteEntry(filter: {
        id?: number;
        name?: string;
        description?: string;
        material?: string;
        weigth?: number;
        crown_value?: number;
    }): void;
    modifyEntry(id: number, filter: {
        name?: string;
        description?: string;
        material?: string;
        weigth?: number;
        crown_value?: number;
    }): void;
}
