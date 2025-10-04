/* 
Crear una clase Libro que contenga al menos las siguientes propiedades:

-ISBN
-Título
-Autor
-Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    getISBN() {
        return this.ISBN;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    getNumPaginas() {
        return this.numPaginas;
    }
    setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    mostrarLibro() {
        return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}`;
    }
}

const libro1 = new Libro("978-3-16-148410-0", "El Quijote", "Miguel de Cervantes", 863);
const libro2 = new Libro("978-0-14-044913-6", "La Iliada", "Homero", 704);

console.log(libro1.mostrarLibro());
console.log(libro2.mostrarLibro());

if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
    console.log(`El libro con más páginas es: ${libro1.getTitulo()} con ${libro1.getNumPaginas()} páginas.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
    console.log(`El libro con más páginas es: ${libro2.getTitulo()} con ${libro2.getNumPaginas()} páginas.`);
} else {
    console.log("Ambos libros tienen el mismo número de páginas.");
}


