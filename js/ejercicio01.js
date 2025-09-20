/* 
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender(); auto encendido
objeto.apagar();    El auto se apagó
*/

function onOff(opcion) {
  switch (opcion) {
    case "1": {
      console.log(auto.encender);
      break;
    }
    case "2": {
      console.log(auto.apagar);
      break;
    }
    default:
      console.log("Opcion Invalida");
      break;
  }
}

var auto = {
  color: "Azul",
  marca: "Toyota",
  modelo: "2015",
  encender: "Auto encendido",
  apagar: "El auto se apagó",
};

let opcion = prompt("Opcion(1)Encender Auto/Opcion(2)Apagar Auto");
onOff(opcion);
