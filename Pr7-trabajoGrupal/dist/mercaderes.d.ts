export declare enum TraderTypes {
    Blacksmith = 0,
    Alchemist = 1,
    Generaltrader = 2,
    Herbalist = 3,
    Armorer = 4
}
export interface Trader {
    id: number;
    name: string;
    type: TraderTypes;
    location: string;
}
