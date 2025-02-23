"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artista = void 0;
/**
 * Clase para representar un artista
 */
class Artista {
    nombre;
    numeroOyentes;
    discografia;
    /**
     * Constructor de la clase
     * @param nombre - Nombre del artista
     * @param numeroOyentes - Número de oyentes mensuales del artista
     * @param discografia - Discografía del artista
     * @throws {Error} - Si el número de oyentes es negativo
     */
    constructor(nombre, numeroOyentes, discografia) {
        this.nombre = nombre;
        this.numeroOyentes = numeroOyentes;
        this.discografia = discografia;
        if (numeroOyentes < 0) {
            throw new Error('El número de oyentes no puede ser negativo');
        }
    }
}
exports.Artista = Artista;
