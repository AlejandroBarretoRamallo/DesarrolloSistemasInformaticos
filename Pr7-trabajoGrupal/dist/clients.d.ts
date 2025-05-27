export declare enum Race {
    HUMAN = 0,
    ELF = 1,
    DEAMON = 2,
    WIZARD = 3,
    WITCH = 4,
    GOBLIN = 5,
    GIGANT = 6
}
export interface Clients {
    id: number;
    name: string;
    race: Race;
    location: string;
}
