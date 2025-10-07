/*Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.*/

var persona = {
    nombre: prompt("Ingrese su nombre:"),
    edad: parseInt(prompt("Ingrese su edad:")),
    hobbies: []
};

const nuevoHobby = prompt("Ingrese un nuevo hobby:");

function agregarHobby(persona, hobby) {
    persona.hobbies.push(hobby);
}

agregarHobby(persona, nuevoHobby);

console.log(`Hobbies de ${persona.nombre}:`);

for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(`- ${persona.hobbies[i]}`);
}   
