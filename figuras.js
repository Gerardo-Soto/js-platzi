//Figuras
console.log("Hello, world!");


//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
    return Number(ladoCuadrado) * 4;
}  
//console.log("El perimetro del cuadrado mide: "+ perimetroCuadrado + " cm^2");

function areaCuadrado(lado) {
    return Number(lado) * lado;
}

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

function perimetroTrianguloCal(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTrianguloCal(base, altura) {
    return Number(base) * Number(altura) / 2;
}

console.groupEnd();

// Triángulo Isosceles
console.group("Triangulo Isosceles");

function alturaIsoscelesCal(ladoA, base) {
    const altura = Math.sqrt((ladoA * ladoA) - ((base * base) / 4));
    return altura;
}
//Circulo

console.group("Circulo");

function diametroCirculo(radio) {
    return Number(radio) * 2;
}

function perimetroCirculoCal(radio) {
    return diametroCirculo(Number(radio)) * Math.PI;
}

function areaCirculoCal(radio) {
    return Math.PI * Number(radio) * Number(radio);
}

console.groupEnd();

// Funciones para los botones

//Cuadrado  Button
function calcularPerimetroCuadrado() {
    const lado_del_cuadrado = document.getElementById("inputCuadrado");
    const resultado = perimetroCuadrado(Number(lado_del_cuadrado.value));
    alert(resultado);
}

function calcularAreaCuadrado() {
    const lado_del_cuadrado = document.getElementById("inputCuadrado");
    const resultado = areaCuadrado(Number(lado_del_cuadrado.value));
    alert(resultado);
}

//Triángulo  Button
function perimetroTriangulo() {
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const lado3 = document.getElementById("inputLado3");

    const perimetro = perimetroTrianguloCal(Number(lado1.value), Number(lado2.value), Number(lado3.value));
    alert(perimetro);
}

function areaTriangulo() {
    const lado1 = document.getElementById("inputLado1");
    const lado2 = document.getElementById("inputLado2");
    const lado3 = document.getElementById("inputLado3");

    const area = areaTrianguloCal(Number(lado1.value), Number(lado2.value), Number(lado3.value));
    alert(area);
}

//Circulo Button
function perimetroCirculo() {
    const radio = document.getElementById("inputRadio");

    const perimetro = perimetroCirculoCal(Number(radio.value));
    alert(perimetro);
}

function areaCirculo() {
    const radio = document.getElementById("inputRadio");

    const area = areaCirculoCal(Number(radio.value));
    alert(area);
}

//Triangulo Isosceles Button
function alturaIsosceles() {
    const ladoA = document.getElementById("inputLadoIsosceles");
    const base = document.getElementById("inputBaseIsosceles");

    if (base.value > (ladoA.value * 2)) {
        alert("Ese triángulo no existe, si no preguntaselo a pitágoras");
        return;
    }
    const altura = alturaIsoscelesCal(Number(ladoA.value), Number(base.value));
    alert(altura);
}
