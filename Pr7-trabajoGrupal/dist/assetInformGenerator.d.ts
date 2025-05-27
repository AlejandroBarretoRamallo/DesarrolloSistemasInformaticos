import { AssetsDB, AssetType } from "./AssetsDB.js";
import { InformGenerator } from "./informGenerator.js";
export declare class AssetInformGenerator extends InformGenerator {
    constructor(assetsDB: AssetsDB);
    generateInform(id?: number): void;
    generateTypeInform(type: AssetType): void;
}
