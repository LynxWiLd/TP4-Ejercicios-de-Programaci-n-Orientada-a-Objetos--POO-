/*Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.*/
const libros = [];
const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros:"));
for (let i = 0; i < cantidadLibros; i++) {
  const titulo = prompt(`Ingrese el título del libro ${i + 1}:`);
  const autor = prompt(`Ingrese el autor del libro ${i + 1}:`);
  const anio = parseInt(prompt(`Ingrese el año del libro ${i + 1}:`));
  const genero = prompt(`Ingrese el género del libro ${i + 1}:`);
  libros.push({ titulo, autor, anio, genero });
}
function filtrarPorGenero(libros, genero) {
  return libros.filter(
    (libro) => libro.genero.toLowerCase() === genero.toLowerCase()
  );
}
const generoBuscado = prompt("Ingrese el género que desea buscar:");
const librosFiltrados = filtrarPorGenero(libros, generoBuscado);
console.log(`Libros del género "${generoBuscado}":`);
librosFiltrados.forEach((libro) => {
  console.log(`- ${libro.titulo} de ${libro.autor} (${libro.anio})`);
});
if (librosFiltrados.length === 0) {
  console.log("No se encontraron libros de ese género.");
}
