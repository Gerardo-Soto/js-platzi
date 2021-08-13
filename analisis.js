// Extraer el salario de cada objeto persona
const salariosMx = mexico.map(
    function (persona) {
        return persona.salary;
    }
);
//console.log(salariosMx);


// Ordenar los salarios para el algoritmo de la Mediana
const salarySorted = salariosMx.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


// Algoritmo para calcular el top n% salarial
const cantidadSalaros = salariosMx.length;
const topSalarios = [];
let i = 0;
const topLevel = parseInt(cantidadSalaros * .10);
console.log(topLevel);
while (i < topLevel) {
    i++;
    topSalarios.push(salarySorted[cantidadSalaros - i]);
}
//console.log(topSalarios);


//Calcular la mediana:
/*
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}*/
function esPar(numero) {
    return (numero % 2 === 0);
}


// Algoritmo para calcular la media dependiendo si la cantidad
// de sueldos es par o impar
function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([persona1, persona2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Algoritmo para calcular la media de 2 numeros
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

console.log(salarySorted);
console.log(medianaSalario(topSalarios));
