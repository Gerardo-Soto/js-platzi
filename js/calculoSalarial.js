/*
function calcularSalarioPorAño(año) {
    const salario;
}
*/

const startJS = function js() {
    const resultado = document.getElementById("js");
    resultado.innerHTML = "JS running";
    
}
startJS();


// funcion para calcular el salario anual mediante el salario mensual

function onclickCalcularSalarioAnual() {
    const salarioMensual = document.getElementById("input__salario-mensual");
    let salarioAnual = (parseFloat(salarioMensual.value) * 12).toFixed(2);
    //console.log(salarioAnual);
    const outputSalarioAnual = document.getElementById("returnSalarioAnual");

    let strSalary = salarioAnual.toString();
    let entero_decimal = strSalary.split('.');
    
    let text = document.createTextNode("Tu salario anual es de:  $ "+ numberWithCommas(entero_decimal[0]) + "." + entero_decimal[1]);
    //console.log(typeof(entero_decimal));
    //console.log(entero_decimal);
    outputSalarioAnual.innerText = ''
    outputSalarioAnual.appendChild(text);
}

// funcion para calcular el crecimiento salarial mediante el salario anual actual del usuario y los años a calcular

function onclickCalcularCrecimientoSalarial() {
    const salarioAnual = document.getElementById("input__salario-anual");
    const years = document.getElementById("input__years");
    
    let minimumSalary = Number(salarioAnual.value);
    let averageSalary = 0
    let maximumSalary = minimumSalary;

    for (let i = 0; i < Number(years.value); i++) {
      minimumSalary *= 1.13;
      maximumSalary *= 1.19;
      averageSalary = (minimumSalary + maximumSalary) / 2;
    }

    let strMinimumSalary = minimumSalary.toFixed(2).toString();
    let strAverageSalary = averageSalary.toFixed(2).toString();
    let strMaximumSalary = maximumSalary.toFixed(2).toString();

    let splitMinimumSalary = strMinimumSalary.split('.');
    let splitAverageSalary = strAverageSalary.split('.');
    let splitMaximumSalary = strMaximumSalary.split('.');
/*
    let text_minimumSalary = document.createTextNode(" en " + years.value +" años es de: $ "+ parseFloat(minimumSalary).toFixed(2));
    let text_averageSalary = document.createTextNode(" en " + years.value +" años es de: $ "+ parseFloat(averageSalary).toFixed(2));
    let text_maximumSalary = document.createTextNode(" en " + years.value +" años es de: $ "+ parseFloat(maximumSalary).toFixed(2));
*/

    let text_minimumSalary = document.createTextNode("Crecimiento salarial mínimo en " + years.value + " años es de: $ " + numberWithCommas(splitMinimumSalary[0]) + "." + splitMinimumSalary[1]);
    let text_averageSalary = document.createTextNode("Crecimiento salarial promedio en " + years.value + " años es de: $ " + numberWithCommas(splitAverageSalary[0]) + "." + splitAverageSalary[1]);
    let text_maximumSalary = document.createTextNode("Crecimiento salarial máximo en " + years.value + " años es de: $ " + numberWithCommas(splitMaximumSalary[0]) + "." + splitMaximumSalary[1]);

    const outputSalarioMinimo = document.getElementById("salarialMinimo");
    const outputSalarioPromedio = document.getElementById("salarialPromedio");
    const outputSalarioMaximo = document.getElementById("salarialMaximo");

    outputSalarioMinimo.innerText = '';
    outputSalarioPromedio.innerText = '';
    outputSalarioMaximo.innerText = '';
    
    outputSalarioMinimo.appendChild(text_minimumSalary);
    outputSalarioPromedio.appendChild(text_averageSalary);
    outputSalarioMaximo.appendChild(text_maximumSalary);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}