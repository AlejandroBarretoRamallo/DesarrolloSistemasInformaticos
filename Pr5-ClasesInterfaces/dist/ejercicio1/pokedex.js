"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
/**
 * This class represents a pokedex
 */
class Pokedex {
    /**
     * This is the pokedex list
     */
    _pokemons;
    /**
     * Constructor of the class
     * @param pokemons - List of pokemons
     */
    constructor(pokemons) {
        this._pokemons = pokemons;
    }
    /**
     * Añade pokemons a la pokedex
     * @param pokemons - List of pokemons to add
     */
    addPokemons(...pokemons) {
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
    isAdded(name) {
        let found = false;
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
    searchPokemonByName(name) {
        let wantedPokemon = undefined;
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
    searchPokemonByType(type) {
        let wantedPokemons = [];
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
    searchPokemonByHP(hp) {
        let wantedPokemons = [];
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
    searchPokemonByStats(stadistics) {
        let wantedPokemons = [];
        this._pokemons.forEach((pokemon) => {
            if (pokemon.stadistics[0][1] === stadistics[0][1] &&
                pokemon.stadistics[1][1] === stadistics[1][1] &&
                pokemon.stadistics[2][1] === stadistics[2][1] &&
                pokemon.stadistics[3][1] === stadistics[3][1]) {
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
    searchPokemon(filters) {
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
                        let stadistics = filter[1];
                        if (pokemon.stadistics[0][1] === stadistics[0][1] &&
                            pokemon.stadistics[1][1] === stadistics[1][1] &&
                            pokemon.stadistics[2][1] === stadistics[2][1] &&
                            pokemon.stadistics[3][1] === stadistics[3][1]) {
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
    showPokemons() {
        return this._pokemons;
    }
}
exports.Pokedex = Pokedex;
