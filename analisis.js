const salariosMx = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

const salarySorted = salariosMx.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

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

function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const persona1 = lista[mitad - 1];
        const persona2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([persona1, persona2]);
        console.log(persona1, persona2);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        console.log(persona1, persona2);
        return personaMitad;
    }
}

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
console.log(medianaSalario(salarySorted));