/* 
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

- aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
- existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
- buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
- eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
- agendaLlena(): indica si la agenda está llena.
- huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  // Getters
  getNombre() {
    return this.nombre;
  }
  getTelefono() {
    return this.telefono;
  }
  // Setters
  setTelefono(telefono) {
    this.telefono = telefono;
  }
  // Método para comparar contactos por nombre
  comparador(otroContacto) {
    return this.nombre === otroContacto.getNombre();
  }
}
class Agenda {
  constructor(tamano = 10) {
    this.tamano = tamano;
    this.contactos = [];
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se puede añadir más contactos.");
      return;
    }

    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
      return;
    }

    this.contactos.push(contacto);

    console.log("Contacto añadido correctamente.");
  }
  existeContacto(contacto) {
    return this.contactos.some((objeto) => objeto.comparador(contacto));
  }
  listarContactos() {
    if (this.contactos.length === 0) {
      alert("La agenda está vacía.");
      return;
    }
    document.writeln("<br>");
    document.writeln("Contactos en la agenda:");
    this.contactos.forEach((objeto) => {
      document.writeln(
        `Nombre: ${objeto.getNombre()}, Teléfono: ${objeto.getTelefono()}`
      );
    });
  }
  buscarContacto(nombre) {
    const contacto = this.contactos.find(
      (objeto) => objeto.getNombre() === nombre
    );
    if (contacto) {
      document.writeln(`Teléfono de ${nombre}: ${contacto.getTelefono()}`);
    } else {
      document.writeln(`El contacto ${nombre} no existe en la agenda.`);
    }
  }
  eliminarContacto(contacto) {
    const puntero = this.contactos.findIndex((objeto) =>
      objeto.comparador(contacto)
    ); // findIndex devuelve -1 si no lo encuentra y la posición si lo encuentra
    if (puntero !== -1) {
      this.contactos.splice(puntero, 1); // 1 es la cantidad de elementos a eliminar
      document.writeln("Contacto eliminado correctamente.");
    } else {
      document.writeln("El contacto no existe en la agenda.");
    }
  }
  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }
  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

const agenda = new Agenda(3); // Agenda con tamaño 3 para pruebas
const contacto1 = new Contacto("Juan", "123456789");
const contacto2 = new Contacto("Ana", "987654321");
const contacto3 = new Contacto("Luis", "555555555");
const contacto4 = new Contacto("Maria", "444444444");

agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);
agenda.aniadirContacto(contacto4); // Debería indicar que la agenda está llena

switch (
  prompt(
    "Seleccione una opción:\n1. Listar contactos\n2. Buscar contacto\n3. Eliminar contacto\n4. Ver huecos libres\n5. Ver si la agenda está llena\n6. Salir"
  )
) {
  case "1":
    document.writeln("<br>");
    agenda.listarContactos();
    break;
  case "2": {
    const nombre = prompt("Ingrese el nombre del contacto a buscar:");
    document.writeln("<br>");
    agenda.buscarContacto(nombre);
    break;
  }
  case "3": {
    const nombre = prompt("Ingrese el nombre del contacto a eliminar:");
    const telefono = prompt("Ingrese el teléfono del contacto a eliminar:");
    const contactoAEliminar = new Contacto(nombre, telefono);
    document.writeln("<br>");
    agenda.eliminarContacto(contactoAEliminar);
    break;
  }
  case "4":
    document.writeln("<br>");
    document.writeln(`Huecos libres: ${agenda.huecosLibres()}`);
    break;
  case "5":
    document.writeln("<br>");
    document.writeln(`¿La agenda está llena? ${agenda.agendaLlena()}`);
    break;
  case "6":
    document.writeln("\nSaliendo...");
    break;
  default:
    document.writeln("\nOpción no válida.");
    break;
}
