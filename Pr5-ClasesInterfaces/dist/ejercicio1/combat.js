"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combat = void 0;
const pokemon_1 = require("./pokemon");
/**
 * Clase que representa un combate entre dos pokemons
 */
class combat {
    firstPokemon;
    secondPokemon;
    /**
     * Constructor de la clase
     * @param firstPokemon - Primer pokemon
     * @param secondPokemon - Segundo pokemon
     */
    constructor(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    /**
     * Realiza el combate entre dos pokemons
     * @returns El pokemon ganador del combate
     */
    start() {
        let winer = this.firstPokemon;
        console.log("Comienza el combate pokemon\n");
        console.log(`${this.firstPokemon.name}---------------VS---------------${this.secondPokemon.name}`);
        let pokemonAlive = true;
        let actualPlayer = 1;
        let currentTurn = 1;
        while (pokemonAlive) {
            console.log(`Turno ${currentTurn}`);
            let currentPokemon = actualPlayer === 1 ? this.firstPokemon : this.secondPokemon;
            let opponentPokemon = actualPlayer === 1 ? this.secondPokemon : this.firstPokemon;
            console.log(`Turno de ${currentPokemon.name}`);
            opponentPokemon.healthPoints -= this.calculateDamage(actualPlayer);
            console.log(`${currentPokemon.name} ha atacado a ${opponentPokemon.name} y le ha hecho ${this.calculateDamage(actualPlayer)} de daño`);
            if (opponentPokemon.healthPoints > 0) {
                console.log(`${opponentPokemon.name} tiene ahora ${opponentPokemon.healthPoints}`);
            }
            else {
                console.log(`${opponentPokemon.name} ha sido debilitado`);
                console.log(`${currentPokemon.name} es el vencedor`);
                winer = currentPokemon;
                pokemonAlive = false;
            }
            ++currentTurn;
            actualPlayer = actualPlayer === 1 ? 2 : 1;
            console.log("------------------------------------");
        }
        return winer;
    }
    /**
     * Calcula el daño que se le va a hacer al pokemon oponente
     * @param actualPlayer - Jugador que realiza la acción
     * @returns El daño que se le va a hacer al pokemon oponente
     */
    calculateDamage(actualPlayer) {
        const efectividad = {
            fuego: {
                hierba: 2,
                agua: 0.5,
                electrico: 1,
                fuego: 1,
            },
            agua: {
                fuego: 2,
                hierba: 0.5,
                electrico: 0.5,
                agua: 1,
            },
            hierba: {
                fuego: 0.5,
                hierba: 1,
                agua: 2,
                electrico: 1,
            },
            electrico: {
                electrico: 1,
                hierba: 1,
                fuego: 1,
                agua: 2,
            },
        };
        let damage = 0;
        if (actualPlayer === 1)
            damage =
                50 *
                    (this.firstPokemon.stadistics[0][1] /
                        this.secondPokemon.stadistics[1][1]);
        else
            damage =
                50 *
                    (this.secondPokemon.stadistics[0][1] /
                        this.firstPokemon.stadistics[1][1]);
        let efectivity = efectividad[this.firstPokemon.type][this.secondPokemon.type];
        damage *= efectivity;
        return damage;
    }
}
exports.combat = combat;
let pikachu = new pokemon_1.Pokemon("Pikachu", pokemon_1.pokemonType.electrico, 1000, [
    ["ataque", 50],
    ["defensa", 30],
    ["velocidad", 60],
    ["HP", 1000],
]);
let Charmander = new pokemon_1.Pokemon("Charmander", pokemon_1.pokemonType.fuego, 1000, [
    ["ataque", 50],
    ["defensa", 30],
    ["velocidad", 60],
    ["HP", 1000],
]);
let ryquaza = new pokemon_1.Pokemon("Ryquaza", pokemon_1.pokemonType.electrico, 1000, [
    ["ataque", 80],
    ["defensa", 50],
    ["velocidad", 100],
    ["HP", 1010],
]);
