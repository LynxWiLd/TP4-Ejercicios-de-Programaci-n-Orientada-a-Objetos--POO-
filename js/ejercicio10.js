/* 
Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

*/
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }
  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }
  buscarAvion(nombre) {
    const avionEncontrado = this.listaAviones.find(
      (avion) => avion.nombre === nombre
    );
    if (avionEncontrado) {
      console.log(
        `Avión encontrado: Nombre: ${avionEncontrado.nombre}, Capacidad: ${
          avionEncontrado.capacidad
        }, Destino: ${
          avionEncontrado.destino
        }, Pasajeros: ${avionEncontrado.listaPasajeros.join(", ")}`
      );
    } else {
      console.log(`No se encontró un avión con el nombre: ${nombre}`);
    }
    return avionEncontrado;
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }
  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);

      console.log(
        `El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`
      );
    } else {
      console.log(
        `El avión ${this.nombre} está lleno. No se puede abordar más pasajeros.`
      );
    }
  }
}

const aeropuerto = new Aeropuerto("Aeropuerto Internacional");
const avion1 = new Avion("Avión A", 2, "Nueva York");
const avion2 = new Avion("Avión B", 3, "Londres");
const avion3 = new Avion("Avión C", 1, "Tokio");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

aeropuerto.buscarAvion("Avión B");
avion1.abordar("Juan");
avion1.abordar("María");
avion1.abordar("Carlos");

aeropuerto.buscarAvion("Avión A");
avion3.abordar("Ana");
avion3.abordar("Luis");

aeropuerto.buscarAvion("Avión C");
aeropuerto.buscarAvion("Avión D");
