"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.pokemonType = void 0;
/**
 * This enum represents the diferent Pokemon´s types
 */
var pokemonType;
(function (pokemonType) {
    pokemonType["agua"] = "agua";
    pokemonType["fuego"] = "fuego";
    pokemonType["electrico"] = "electrico";
    pokemonType["hierba"] = "hierba";
})(pokemonType || (exports.pokemonType = pokemonType = {}));
/**
 * This class represents a Pokemon
 */
class Pokemon {
    name;
    type;
    _healthPoints;
    stadistics;
    /**
     * Constructor of the class
     * @param name - Name of the pokemon
     * @param type - Type of the pokemon
     * @param _healthPoints - Health points of the pokemon
     * @param stadistics - Stats of the pokemon
     */
    constructor(name, type, _healthPoints, stadistics) {
        this.name = name;
        this.type = type;
        this._healthPoints = _healthPoints;
        this.stadistics = stadistics;
    }
    /**
     * Getter of the health points
     * @returns Health points of the pokemon
     */
    get healthPoints() {
        return this._healthPoints;
    }
    /**
     * Setter of the health points
     * @param value - New health points of the pokemon
     * @returns New health points of the pokemon
     */
    set healthPoints(value) {
        this._healthPoints = value;
    }
}
exports.Pokemon = Pokemon;
