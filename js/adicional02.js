/* Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.*/

const estudiantes = [];
const cantidadEstudiantes = parseInt(
  prompt("Ingrese la cantidad de estudiantes:")
);

for (let i = 0; i < cantidadEstudiantes; i++) {
  const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
  const nota = parseFloat(
    prompt(`Ingrese la nota del estudiante ${i + 1} (0-10):`)
  );
  estudiantes.push({ nombre, nota });
}
function calcularNotaMedia(estudiantes) {
  let sumaNotas = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    sumaNotas += estudiantes[i].nota;
  }
  return sumaNotas / estudiantes.length;
}
const notaMedia = calcularNotaMedia(estudiantes);
console.log(`La nota media de los estudiantes es: ${notaMedia.toFixed(2)}`);
