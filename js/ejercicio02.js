//? 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:

//*    -Una propiedad titular con el valor "Alex".
//*    -Una propiedad saldo, teniendo como valor inicial 0.
//*    -Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//*    -Un método extraer() que permita retirar la cantidad pasada como parámetro.
//*    -Un método informar() que retorne la información del estado de la cuenta.

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

var Cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar(cantidad) {
    this.saldo += cantidad;
  },
  extraer(cantidad) {
    this.saldo -= cantidad;
  },
  informar() {
    alert("Titular: " + this.titular + "\n" + "Saldo: " + this.saldo);
  },
};

while (opcion !== "4" && opcion !== null) {
  var opcion = prompt(
    "Opcion(1) Ingresar Dinero\nOpcion(2) Extraer Dinero\nOpcion(3) Consulta de saldo\nOpcion(4) Salir"
  );
  switch (opcion) {
    case "1": {
      const cantidad = Number(prompt("Ingrese la cantidad a ingresar"));
      if (!isNaN(cantidad)) {
        Cuenta.ingresar(cantidad);
        alert("Dinero ingresado correctamente.");
      } else {
        alert("Debe ingresar un número válido.");
      }
      break;
    }
    case "2": {
      const cantidad = Number(prompt("Ingrese la cantidad a extraer"));
      if (!isNaN(cantidad)) {
        if (cantidad < Cuenta.saldo) {
          Cuenta.extraer(cantidad);
          alert("Dinero extraido correctamente.");
        } else {
          alert("No contas con ese dinero en tu cuenta.");
        }
      } else {
        alert("Debe ingresar un número válido.");
      }
      break;
    }
    case "3": {
      Cuenta.informar();
      break;
    }
    case "4": {
      break;
    }
    default:
      console.log("Opcion Invalida");
      break;
  }
}
