
const coupones = {
    "Platzi": 5,
    "Web": 10,
    "Frontend": 15,
    "JavaScript": 20,
}

function calculateOff(precioOriginal, descuento) {
    return (precioOriginal * (100 - descuento)) / 100;
}

// Funciones para los botones
function onClickButtonCalcularPrecio() {
    const precio = document.getElementById("inputPrice");
    const descuento = document.getElementById("inputDiscount");
    const coupon = document.getElementById("inputCoupon");

    if (coupon.value in coupones) {
        const descuentoTotal = Number(descuento.value) + coupones[coupon.value];
        console.log('porcentaje s:::' + coupones[coupon.value] +' DT::'+descuentoTotal);
        const precioConDescuetoCupon = calculateOff(Number(precio.value), descuentoTotal);
        const resultado = document.getElementById("priceoff");

        resultado.innerHTML = "El nuevo precio con cupón es de: $" + precioConDescuetoCupon;

    }else if (coupon.value == '') {
        const precioConDescueto = calculateOff(Number(precio.value), Number(descuento.value));
        const resultado = document.getElementById("priceoff");

        resultado.innerHTML = "El nuevo precio sin cupón es de: $" + precioConDescueto;
    }else{
        alert("El cupón "+ coupon.value +" NO es valido");
    }
 
    
}

