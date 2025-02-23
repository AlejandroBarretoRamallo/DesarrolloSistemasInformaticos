import { Pokemon, stats, pokemonType } from "./pokemon";

/**
 * This type represent a Pokemon´s list
 */
export type listPokemons = Pokemon[];

/**
 * This interface represents what ever Pokedex class should hace
 */
export interface pokedex {
  searchPokemonByName(name: string): Pokemon | undefined;
  searchPokemonByHP(hp: number): listPokemons;
  searchPokemonByStats(stadistics: stats): listPokemons;
  searchPokemonByType(type: pokemonType): listPokemons;
  searchPokemon(
    filters: [string, string | number | stats][],
  ): listPokemons | undefined;
  showPokemons(): listPokemons;
}

/**
 * This class represents a pokedex
 */
export class Pokedex implements pokedex {
  /**
   * This is the pokedex list
   */
  private _pokemons: listPokemons;
  /**
   * Constructor of the class
   * @param pokemons - List of pokemons
   */
  constructor(pokemons: listPokemons) {
    this._pokemons = pokemons;
  }
  /**
   * Añade pokemons a la pokedex
   * @param pokemons - List of pokemons to add
   */
  addPokemons(...pokemons: listPokemons) {
    pokemons.forEach((pokemon) => {
      if (!this.isAdded(pokemon.name)) {
        this._pokemons.push(pokemon);
      }
    });
  }
  /**
   * Compueba si un pokemon está en la pokedex
   * @param name - Name of the pokemon to search
   * @returns Si el pokemon está en la pokedex
   */
  private isAdded(name: string): boolean {
    let found: boolean = false;
    this._pokemons.forEach((pokemon) => {
      if (pokemon.name === name) {
        found = true;
      }
    });
    return found;
  }
  /**
   * Busca un pokemon por su nombre
   * @param name - Name of the pokemon to search
   * @returns El pokemon buscado
   */
  searchPokemonByName(name: string): Pokemon | undefined {
    let wantedPokemon: Pokemon | undefined = undefined;
    this._pokemons.forEach((pokemon) => {
      if (pokemon.name === name) {
        wantedPokemon = pokemon;
      }
    });
    return wantedPokemon;
  }
  /**
   * Busca pokemons por su tipo
   * @param type - Type of the pokemon to search
   * @returns El pokemon buscado
   */
  searchPokemonByType(type: pokemonType): listPokemons {
    let wantedPokemons: listPokemons = [];
    this._pokemons.forEach((pokemon) => {
      if (pokemon.type === type) {
        wantedPokemons.push(pokemon);
      }
    });
    return wantedPokemons;
  }
  /**
   * Busca pokemons por sus puntos de vida
   * @param hp - Los puntos de vida del pokemon a buscar
   * @returns El pokemon buscado
   */
  searchPokemonByHP(hp: number): listPokemons {
    let wantedPokemons: listPokemons = [];
    this._pokemons.forEach((pokemon) => {
      if (pokemon.healthPoints === hp) {
        wantedPokemons.push(pokemon);
      }
    });
    return wantedPokemons;
  }
  /**
   * Busca pokemons por sus stats
   * @param stadistics - Los stats del pokemon a buscar
   * @returns El pokemon buscado
   */
  searchPokemonByStats(stadistics: stats): listPokemons {
    let wantedPokemons: listPokemons = [];
    this._pokemons.forEach((pokemon) => {
      if (
        pokemon.stadistics[0][1] === stadistics[0][1] &&
        pokemon.stadistics[1][1] === stadistics[1][1] &&
        pokemon.stadistics[2][1] === stadistics[2][1] &&
        pokemon.stadistics[3][1] === stadistics[3][1]
      ) {
        wantedPokemons.push(pokemon);
      }
    });
    return wantedPokemons;
  }
  /**
   * Busca pokemons por alguas de sus características
   * @param filters - Los filtros para buscar pokemons
   * @returns - El pokemon buscado
   */
  searchPokemon(
    filters: [string, string | number | stats][],
  ): listPokemons | undefined {
    let badFilters = false;
    let wantedPokemons = this._pokemons.filter((pokemon) => {
      return filters.every((filter) => {
        switch (filter[0]) {
          case "name":
            return pokemon.name === filter[1];
          case "type":
            return pokemon.type === filter[1];
          case "healthpoints":
            return pokemon.healthPoints === filter[1];
          case "stadistics":
            let stadistics = filter[1] as stats;
            if (
              pokemon.stadistics[0][1] === stadistics[0][1] &&
              pokemon.stadistics[1][1] === stadistics[1][1] &&
              pokemon.stadistics[2][1] === stadistics[2][1] &&
              pokemon.stadistics[3][1] === stadistics[3][1]
            ) {
              return true;
            }
            return false;
          default:
            badFilters = true;
            return true;
        }
      });
    });
    return badFilters ? undefined : wantedPokemons;
  }
  /**
   * @returns La lista de pokemons
   */
  showPokemons(): listPokemons {
    return this._pokemons;
  }
}