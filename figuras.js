//Figuras
console.log("Hello, world!");


//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}  
//console.log("El perimetro del cuadrado mide: "+ perimetroCuadrado + " cm^2");

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Código del triangulo
console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return base * altura / 2;
}

console.groupEnd();

//Circulo

console.group("Circulo");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametro(radio) * Math.PI;
}

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}

console.groupEnd();
