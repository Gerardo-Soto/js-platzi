//Figuras
console.log("Hello, world!");


//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los datos del cruadrado miden: "+ ladoCuadrado + "cm");

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
const lado1 = 6;
const lado2 = 5;
const base = 4;
const altura = 4;
const perimetro_t = lado1 + lado2 + base;
const area_t = base * altura / 2;

console.log("Los lados del triangulo miden:"
+ lado1
+ "cm, "
+ lado2
+ "cm, "
+ base
+ "cm"
);

console.log("El perimetro del triangulo mide:" + perimetro_t +"cm.");

console.log("El área del triangulo mide:" + area_t + "cm^2");

console.groupEnd();

//Circulo

console.group("Circulo");

const radioCirculo = 7;
const diametro = radioCirculo * 2;
const PI = Math.PI;
const perimetro_c = diametro * PI;
const area_c = PI * radioCirculo * radioCirculo;

console.log("El radio del circulo es: "+ radioCirculo + "cm. el diametro es de: "
+diametro+" cm. y el valor de PI es: "+PI);
console.log("El perímetro del circulo es:"+ perimetro_c);
console.log("El área del circulo es: "+ area_c);

console.groupEnd();
