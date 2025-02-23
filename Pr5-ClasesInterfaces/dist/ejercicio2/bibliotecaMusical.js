"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibliotecaMusical = void 0;
const artista_1 = require("./artista");
const discografia_1 = require("./discografia");
const cancion_1 = require("./cancion");
/**
 * Clase para representar una biblioteca musical
 */
class BibliotecaMusical {
    biblioteca;
    /**
     *
     * @param biblioteca Biblioteca musical
     */
    constructor(biblioteca) {
        this.biblioteca = biblioteca;
    }
    /**
     * Muestra la biblioteca musical y devuelve el número de artistas en ella
     */
    mostrarBiblioteca() {
        if (this.biblioteca.length === 0) {
            console.log('La biblioteca musical está vacía');
        }
        else {
            let discos = '';
            let canciones = '';
            this.biblioteca.forEach(artista => {
                let discografia = '';
                artista.discografia.forEach(disco => {
                    discografia += disco.nombre + ', ';
                    disco.canciones.forEach(cancion => {
                        canciones += cancion.nombre + ', ';
                    });
                });
                discografia = discografia.slice(0, -2);
                discos += discografia + ', ';
            });
            discos = discos.slice(0, -2);
            canciones = canciones.slice(0, -2);
            let datosBiblioteca = {
                numeroArtistas: this.biblioteca.length,
                discos: discos,
                numeroDiscos: this.biblioteca.length,
                canciones: canciones,
                numeroCanciones: this.biblioteca.length
            };
            console.table(datosBiblioteca);
        }
        return this.biblioteca.length;
    }
    /**
     * calcula el número de reproducciones de un disco
     * @param disco - Disco del que se quiere calcular el número de reproducciones
     * @returns El número de reproducciones del disco
     */
    calcularReproducionesDisco(disco) {
        let reproducciones = 0;
        disco.canciones.forEach(cancion => {
            reproducciones += cancion.reporducciones;
        });
        return reproducciones;
    }
    /**
     * Calcula la duración de un disco
     * @param disco - Disco del que se quiere calcular la duración
     * @returns La duración del disco
     */
    calcularDuracionDisco(disco) {
        let segundos = 0;
        disco.canciones.forEach(cancion => segundos += cancion.duracion);
        return segundos;
    }
    /**
     * Calcula el número de canciones en un disco
     * @param disco - Disco del que se quiere calcular el número de canciones
     * @returns La cantidad de canciones en el disco
     */
    calcularCancionesEnDisco(disco) {
        return disco.canciones.length;
    }
    /**
     * Busca un artista en la biblioteca
     * @param nombreArtista - Nombre del artista a buscar
     * @returns El artista buscado
     */
    busquedaArtista(nombreArtista) {
        if (this.biblioteca.length === 0) {
            return undefined;
        }
        let artistaBuscado = this.biblioteca[0];
        let encontrado = false;
        this.biblioteca.forEach(artista => {
            if (encontrado) {
                return;
            }
            if (artista.nombre === nombreArtista) {
                encontrado = true;
                artistaBuscado = artista;
                return;
            }
        });
        if (artistaBuscado !== undefined) {
            let discos = '';
            artistaBuscado.discografia.forEach(disco => {
                discos += disco.nombre + ', ';
            });
            discos = discos.slice(0, -2);
            let canciones = '';
            artistaBuscado.discografia.forEach(disco => {
                disco.canciones.forEach(cancion => {
                    canciones += cancion.nombre + ', ';
                });
            });
            canciones = canciones.slice(0, -2);
            let numeroCanciones = 0;
            artistaBuscado.discografia.forEach(disco => {
                numeroCanciones += disco.canciones.length;
            });
            let datosArtista = {
                nombre: artistaBuscado.nombre,
                numeroDiscos: artistaBuscado.discografia.length,
                discos: discos,
                numeroCanciones: numeroCanciones,
                canciones: canciones,
                oyentesMensuales: artistaBuscado.numeroOyentes
            };
            console.table(datosArtista);
        }
        return encontrado ? artistaBuscado : undefined;
    }
    /**
     * Busca una canción en la biblioteca
     * @param nombreCancion - Nombre de la canción a buscar
     * @returns La canción buscada
     */
    busquedaCancion(nombreCancion) {
        let encontrado = false;
        if (this.biblioteca.length === 0) {
            return undefined;
        }
        let cancionBuscada = this.biblioteca[0].discografia[0].canciones[0];
        this.biblioteca.forEach(artista => {
            if (encontrado) {
                return;
            }
            artista.discografia.forEach(disco => {
                if (encontrado) {
                    return;
                }
                disco.canciones.forEach(cancion => {
                    if (encontrado) {
                        return;
                    }
                    if (cancion.nombre === nombreCancion) {
                        encontrado = true;
                        cancionBuscada = cancion;
                        return;
                    }
                });
            });
        });
        if (encontrado) {
            let generos = "";
            cancionBuscada.generos.forEach(genero => {
                generos += genero + ", ";
            });
            generos = generos.slice(0, -2);
            let datosCancion = {
                nombre: cancionBuscada.nombre,
                duracion_seg: cancionBuscada.duracion,
                generos: generos,
                reproudcciones: cancionBuscada.reporducciones,
                esSingle: cancionBuscada.isASingle
            };
            console.table(datosCancion);
        }
        return encontrado ? cancionBuscada : undefined;
    }
    /**
     * Busca un disco en la biblioteca
     * @param nombreDisco - Nombre del disco a buscar
     * @returns El disco buscado
     */
    busquedaDisco(nombreDisco) {
        let encontrado = false;
        if (this.biblioteca.length === 0) {
            return undefined;
        }
        let discoBuscado = this.biblioteca[0].discografia[0];
        this.biblioteca.forEach(artista => {
            if (encontrado) {
                return;
            }
            artista.discografia.forEach(disco => {
                if (encontrado) {
                    return;
                }
                if (disco.nombre === nombreDisco) {
                    encontrado = true;
                    discoBuscado = disco;
                    return;
                }
            });
        });
        if (encontrado) {
            let canciones = "";
            discoBuscado.canciones.forEach(cancion => {
                canciones += cancion.nombre + ", ";
            });
            canciones = canciones.slice(0, -2);
            let datosDisco = {
                nombre: discoBuscado.nombre,
                año: discoBuscado.añoPublicacion,
                numeroCanciones: discoBuscado.canciones.length,
                duracion_seg: this.calcularDuracionDisco(discoBuscado),
                reproducciones: this.calcularReproducionesDisco(discoBuscado),
                canciones: canciones
            };
            console.table(datosDisco);
        }
        return encontrado ? discoBuscado : undefined;
    }
    /**
     * Añade un artista a la biblioteca
     * @param artista - Artista a añadir a la biblioteca
     */
    añadirArtista(artista) {
        if (this.biblioteca.find(artista_ => artista.nombre === artista_.nombre) === undefined) {
            this.biblioteca.push(artista);
            console.log('Artista añadido a la biblioteca');
        }
        else {
            console.log('El artista ya estaba en la biblioteca');
        }
    }
}
exports.BibliotecaMusical = BibliotecaMusical;
let biblioteca = new BibliotecaMusical([new artista_1.Artista("Bad bunny", 1, [new discografia_1.Disco("x100pre", 2013, [new cancion_1.Cancion("Safaera", 240, ["trap"], true, 10000)])])]);
biblioteca.mostrarBiblioteca();
