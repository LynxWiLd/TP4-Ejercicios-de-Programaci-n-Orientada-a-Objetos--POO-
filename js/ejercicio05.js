/* 
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

**IMAGEN DE TAXONOMIA DE GENERACIONES**

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añonacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añonacimiento = añonacimiento;
  }

  mostrarGeneracion() {
    const año = this.añonacimiento;
    if (año >= 1994 && año <= 2010) {
      document.writeln(
        "Generación Z, el rasgo característico es la irreverencia"
      );
    } else if (año >= 1981 && año <= 1993) {
      document.writeln(
        "Generación Y, el rasgo característico es la frustración"
      );
    } else if (año >= 1969 && año <= 1980) {
      document.writeln(
        "Generación X, el rasgo característico es la obsesión por el éxito"
      );
    } else if (año >= 1949 && año <= 1968) {
      document.writeln(
        "Generación Baby Boom, el rasgo característico es la ambición"
      );
    } else if (año >= 1930 && año <= 1948) {
      document.writeln(
        "Generación Silent Generation, el rasgo característico es la austeridad"
      );
    } else {
      document.writeln("Año de nacimiento no válido");
    }
  }
  esMayorDeEdad() {
    const edad = this.edad;
    document.writeln(`<br>`);
    if (edad >= 18) {
      document.writeln("Es mayor de edad.");
    } else {
      document.writeln("Es menor de edad.");
    }
  }
  mostrarDatos() {
    document.writeln(`<br><br>`);
    document.writeln(`Datos de la persona:<br>`);
    document.writeln(`Nombre: ${this.nombre}<br>`);
    document.writeln(`Edad: ${this.edad}<br>`);
    document.writeln(`DNI: ${this.dni}<br>`);
    document.writeln(`Sexo: ${this.sexo}<br>`);
    document.writeln(`Peso: ${this.peso} kg<br>`);
    document.writeln(`Altura: ${this.altura} m<br>`);
    document.writeln(`Año de nacimiento: ${this.añonacimiento}<br>`);
  }
  generaDNI() {
    const min = 10000000;
    const max = 99999999;
    document.writeln(`<br>`);
    document.writeln(
      `DNI generado: ${Math.floor(Math.random() * (max - min + 1)) + min}`
    );
  }
}

var persona = new Persona("Maria", 23, 34534552, "M", 74.3, 1.68, 2004);
persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.mostrarDatos();
persona.generaDNI();
