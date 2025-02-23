import { Pokemon, pokemonType } from "./pokemon";

/**
 * Nos permite definir el jugador que va a realizar la acción
 */
export type player = 1 | 2;

/**
 * Interfaz que define el comportamiento de un combate pokemon
 */
export interface pokemonCombat {
  start(firstPlayer: player): void;
}

/**
 * Clase que representa un combate entre dos pokemons
 */
export class combat {
  /**
   * Constructor de la clase
   * @param firstPokemon - Primer pokemon
   * @param secondPokemon - Segundo pokemon
   */
  constructor(
    private firstPokemon: Pokemon,
    private secondPokemon: Pokemon,
  ) {}

  /**
   * Realiza el combate entre dos pokemons
   * @returns El pokemon ganador del combate
   */
  start(): Pokemon {
    let winer: Pokemon = this.firstPokemon;
    console.log("Comienza el combate pokemon\n");
    console.log(
      `${this.firstPokemon.name}---------------VS---------------${this.secondPokemon.name}`,
    );
    let pokemonAlive: boolean = true;
    let actualPlayer: player = 1;
    let currentTurn = 1;
    while (pokemonAlive) {
      console.log(`Turno ${currentTurn}`);
      let currentPokemon =
        actualPlayer === 1 ? this.firstPokemon : this.secondPokemon;
      let opponentPokemon =
        actualPlayer === 1 ? this.secondPokemon : this.firstPokemon;
      console.log(`Turno de ${currentPokemon.name}`);
      opponentPokemon.healthPoints -= this.calculateDamage(actualPlayer);
      console.log(
        `${currentPokemon.name} ha atacado a ${opponentPokemon.name} y le ha hecho ${this.calculateDamage(actualPlayer)} de daño`,
      );
      if (opponentPokemon.healthPoints > 0) {
        console.log(
          `${opponentPokemon.name} tiene ahora ${opponentPokemon.healthPoints}`,
        );
      } else {
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
  private calculateDamage(actualPlayer: player): number {
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
    let damage: number = 0;
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
    let efectivity: number =
      efectividad[this.firstPokemon.type][this.secondPokemon.type];
    damage *= efectivity;
    return damage;
  }
}


let pikachu = new Pokemon("Pikachu", pokemonType.electrico, 1000, [
  ["ataque", 50],
  ["defensa", 30],
  ["velocidad", 60],
  ["HP", 1000],
]);
let Charmander = new Pokemon("Charmander", pokemonType.fuego, 1000, [
  ["ataque", 50],
  ["defensa", 30],
  ["velocidad", 60],
  ["HP", 1000],
]);
let ryquaza = new Pokemon("Ryquaza", pokemonType.electrico, 1000, [
  ["ataque", 80],
  ["defensa", 50],
  ["velocidad", 100],
  ["HP", 1010],
]);
let combate = new combat(Charmander, ryquaza);
combate.start();