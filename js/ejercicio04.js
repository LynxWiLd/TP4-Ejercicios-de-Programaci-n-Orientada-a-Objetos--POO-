/* 
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    document.writeln(`Código: ${this.codigo}<br>`);
    document.writeln(`Nombre: ${this.nombre}<br>`);
    document.writeln(`Precio: $${this.precio.toFixed(2)}<br><br>`);
  }
}
const productos = [];

const producto1 = new Producto(12345, "Azucar", 123.45);
productos.push(producto1);
const producto2 = new Producto(12346, "Carne", 3455.45);
productos.push(producto2);
const producto3 = new Producto(12347, "Pan", 12.45);
productos.push(producto3);

for (let i = 0; i < productos.length; i++) {
  document.writeln(`Datos del producto ${i + 1}:<br>`);
  productos[i].imprimeDatos();
}
