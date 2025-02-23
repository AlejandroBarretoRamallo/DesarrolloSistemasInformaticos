"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancion = void 0;
/**
 * Class para representar una canción
 */
class Cancion {
    nombre;
    duracion;
    generos;
    isASingle;
    reporducciones;
    /**
     * Constructor de la clase
     * @param nombre - Nombre de la canción
     * @param duracion - Duración de la canción
     * @param generos - Géneros de la canción
     * @param isASingle - Indica si la canción es un single
     * @param reporducciones - Número de reproducciones de la canción
     * @throws {Error} - Si la duración o las reproducciones son negativas
     */
    constructor(nombre, duracion, generos, isASingle, reporducciones) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.generos = generos;
        this.isASingle = isASingle;
        this.reporducciones = reporducciones;
        if (duracion < 0) {
            throw new Error('La duración de la canción no puede ser negativa');
        }
        if (reporducciones < 0) {
            throw new Error('Las reproducciones de la canción no pueden ser negativas');
        }
    }
}
exports.Cancion = Cancion;
