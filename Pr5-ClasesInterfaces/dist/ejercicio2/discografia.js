"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disco = void 0;
/**
 * Clase para representar un disco
 */
class Disco {
    nombre;
    añoPublicacion;
    canciones;
    /**
     * Constructor de la clase
     * @param nombre - Nombre del disco
     * @param añoPublicacion - Año de publicación del disco
     * @param canciones - Canciones del disco
     * @throws {Error} - Si el año de publicación es negativo
     */
    constructor(nombre, añoPublicacion, canciones) {
        this.nombre = nombre;
        this.añoPublicacion = añoPublicacion;
        this.canciones = canciones;
        if (añoPublicacion < 0) {
            throw new Error('El año de publicación no puede ser negativo');
        }
    }
}
exports.Disco = Disco;
