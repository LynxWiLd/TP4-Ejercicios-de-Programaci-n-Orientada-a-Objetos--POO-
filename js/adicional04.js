/*Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).*/

var alumno = {
  nombre: prompt("Ingrese el nombre del alumno:"),
  curso: prompt("Ingrese el curso del alumno:"),
  calificaciones: [],
};

const nuevaCalificacion = parseFloat(
  prompt("Ingrese una nueva calificación (0-10):")
);

function agregarCalificacion(alumno, calificacion) {
  alumno.calificaciones.push(calificacion);
}

agregarCalificacion(alumno, nuevaCalificacion);

console.log(`Calificaciones de ${alumno.nombre}:`);

for (let i = 0; i < alumno.calificaciones.length; i++) {
  console.log(`- ${alumno.calificaciones[i]}`);
}

let calificacionMasAlta = -1;
for (let i = 0; i < alumno.calificaciones.length; i++) {
  if (alumno.calificaciones[i] > calificacionMasAlta) {
    calificacionMasAlta = alumno.calificaciones[i];
  }
}
console.log(
  `La calificación más alta de ${alumno.nombre} es: ${calificacionMasAlta}`
);
var clasificacion;
switch (true) {
  case calificacionMasAlta >= 9 && calificacionMasAlta <= 10:
    clasificacion = "A";
    break;

  case calificacionMasAlta >= 7 && calificacionMasAlta < 9:
    clasificacion = "B";
    break;
  case calificacionMasAlta >= 5 && calificacionMasAlta < 7:
    clasificacion = "C";
    break;
  case calificacionMasAlta >= 0 && calificacionMasAlta < 5:
    clasificacion = "D";
    break;
  default:
    clasificacion = "Sin calificaciones válidas";
}
console.log(
  `La clasificación de ${alumno.nombre} según su calificación más alta es: ${clasificacion}`
);
