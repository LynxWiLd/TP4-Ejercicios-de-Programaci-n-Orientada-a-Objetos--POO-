/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  setAlto(alto) {
    this.alto = alto;
  }

  setAncho(ancho) {
    this.ancho = ancho;
  }

  getAlto() {
    return this.alto;
  }

  getAncho() {
    return this.ancho;
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

let alto = parseFloat(prompt("Ingrese el alto del rectángulo:"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

let rectangulo = new Rectangulo(alto, ancho);

alert(`El perímetro del rectángulo es: ${rectangulo.calcularPerimetro()}`);
alert(`El área del rectángulo es: ${rectangulo.calcularArea()}`);   


