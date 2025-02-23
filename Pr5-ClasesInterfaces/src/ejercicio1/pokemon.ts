/**
 * This enum represents the diferent Pokemon´s types
 */
export enum pokemonType {
  agua = "agua",
  fuego = "fuego",
  electrico = "electrico",
  hierba = "hierba",
}

/**
 * this type represetns the four basic stats of a Pokemon
 */
export type stats = [
  ["ataque", number],
  ["defensa", number],
  ["velocidad", number],
  ["HP", number],
];

/**
 * This represents how a Pokemon class should be
 */
export interface pokemons {
  name: string;
  type: pokemonType;
  healthPoints: number;
  stadistics: stats;
}

/**
 * This class represents a Pokemon
 */
export class Pokemon implements pokemons {
  /**
   * Constructor of the class
   * @param name - Name of the pokemon
   * @param type - Type of the pokemon
   * @param _healthPoints - Health points of the pokemon
   * @param stadistics - Stats of the pokemon
   */
  constructor(
    public readonly name: string,
    public readonly type: pokemonType,
    private _healthPoints: number,
    public readonly stadistics: stats,
  ) {}
  /**
   * Getter of the health points
   * @returns Health points of the pokemon
   */
  get healthPoints(): number {
    return this._healthPoints;
  }
  /**
   * Setter of the health points
   * @param value - New health points of the pokemon
   * @returns New health points of the pokemon
   */
  set healthPoints(value: number) {
    this._healthPoints = value;
  }
}
