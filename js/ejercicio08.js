/* 
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
    despedirse() {
        console.log(`Adiós, fue un placer conocerte. Soy ${this.nombre}.`);
    }
}

const persona1 = new Persona("Ana", 28, "Ingeniera");
const persona2 = new Persona("Luis", 35, "Médico");
persona1.saludar();
persona1.despedirse();
persona2.saludar();
persona2.despedirse();
