import { test, describe, expect } from "vitest";
import { Pokemon, pokemonType } from "../src/ejercicio1/pokemon";
import { combat } from "../src/ejercicio1/combat";
import { listPokemons, Pokedex } from "../src/ejercicio1/pokedex";

describe("Test de la clase Pokemon", () => {
  test("Creación de un Pokemon y modificar su salud", () => {
    const pikachu = new Pokemon("Pikachu", pokemonType.electrico, 100, [
      ["ataque", 50],
      ["defensa", 30],
      ["velocidad", 60],
      ["HP", 100],
    ]);
    expect(pikachu.name).toBe("Pikachu");
    expect(pikachu.type).toBe(pokemonType.electrico);
    expect(pikachu.healthPoints).toBe(100);
    expect(pikachu.stadistics).toEqual([
      ["ataque", 50],
      ["defensa", 30],
      ["velocidad", 60],
      ["HP", 100],
    ]);
    pikachu.healthPoints = 50;
    expect(pikachu.healthPoints).toBe(50);
  });
});

describe("tets de la clase pokedex", () => {
  let pikachu = new Pokemon("Pikachu", pokemonType.electrico, 100, [
    ["ataque", 50],
    ["defensa", 30],
    ["velocidad", 60],
    ["HP", 100],
  ]);
  let Charmander = new Pokemon("Charmander", pokemonType.fuego, 100, [
    ["ataque", 50],
    ["defensa", 30],
    ["velocidad", 60],
    ["HP", 100],
  ]);
  let Squirtle = new Pokemon("Squirtle", pokemonType.agua, 100, [
    ["ataque", 50],
    ["defensa", 30],
    ["velocidad", 60],
    ["HP", 100],
  ]);
  let pokemons: listPokemons = [pikachu, Charmander, Squirtle];
  const pokedex = new Pokedex(pokemons);
  test("La lista de pokemons se crea correctamente", () => {
    expect(pokedex.showPokemons()).toEqual(pokemons);
  });
  test("Añadir un pokemon a la pokedex", () => {
    pokedex.addPokemons(
      new Pokemon("blastoise", pokemonType.agua, 100, [
        ["ataque", 50],
        ["defensa", 30],
        ["velocidad", 60],
        ["HP", 100],
      ]),
    );
    pokemons.push(
      new Pokemon("blastoise", pokemonType.agua, 100, [
        ["ataque", 50],
        ["defensa", 30],
        ["velocidad", 60],
        ["HP", 100],
      ]),
    );
    expect(pokedex.showPokemons()).toEqual(pokemons);
    pokedex.addPokemons(
      new Pokemon("blastoise", pokemonType.agua, 100, [
        ["ataque", 50],
        ["defensa", 30],
        ["velocidad", 60],
        ["HP", 100],
      ]),
    );
    expect(pokedex.showPokemons()).toEqual(pokemons);
  });
  test("Buscar un pokemon por tipo", () => {
    expect(pokedex.searchPokemonByType(pokemonType.hierba)).toEqual([]);
    expect(pokedex.searchPokemonByType(pokemonType.electrico)).toEqual([
      pikachu,
    ]);
  });
  test("buscar un pokemon por nombre", () => {
    expect(pokedex.searchPokemonByName("kaka")).toBe(undefined);
    expect(pokedex.searchPokemonByName("Pikachu")).toEqual(pikachu);
  });
  test("Buscar un pokemon por su salud", () => {
    expect(pokedex.searchPokemonByHP(100)).toEqual(pokemons);
    expect(pokedex.searchPokemonByHP(20)).toEqual([]);
  });
  test("Buscar un pokemon por sus stats", () => {
    expect(
      pokedex.searchPokemonByStats([
        ["ataque", 50],
        ["defensa", 30],
        ["velocidad", 60],
        ["HP", 100],
      ]),
    ).toEqual(pokemons);
    expect(
      pokedex.searchPokemonByStats([
        ["ataque", 51],
        ["defensa", 30],
        ["velocidad", 60],
        ["HP", 100],
      ]),
    ).toEqual([]);
  });
  test("Buscar un pokemon por varios filtros a la vez", () => {
    expect(
      pokedex.searchPokemon([
        ["name", "Pikachu"],
        ["type", pokemonType.electrico],
        ["healthpoints", 100],
        [
          "stadistics",
          [
            ["ataque", 50],
            ["defensa", 30],
            ["velocidad", 60],
            ["HP", 100],
          ],
        ],
      ]),
    ).toEqual([pikachu]);
  });
});

describe("Test de la clase combat", () => {
  test("Comprobar que el combate se realiza correctamente", () => {
    let pikachu = new Pokemon("Pikachu", pokemonType.electrico, 100, [
      ["ataque", 50],
      ["defensa", 30],
      ["velocidad", 60],
      ["HP", 100],
    ]);
    let Charmander = new Pokemon("Charmander", pokemonType.fuego, 100, [
      ["ataque", 50],
      ["defensa", 30],
      ["velocidad", 60],
      ["HP", 100],
    ]);
    let combate = new combat(pikachu, Charmander);
    expect(combate.start()).toEqual(pikachu);
    combate = new combat(Charmander, pikachu);
    expect(combate.start()).toEqual(Charmander);
    let blastoise = new Pokemon("blastoise", pokemonType.agua, 100, [
      ["ataque", 50],
      ["defensa", 30],
      ["velocidad", 60],
      ["HP", 100],
    ]);
    combate = new combat(blastoise, pikachu);
    expect(combate.start()).toEqual(blastoise);
  });
});
