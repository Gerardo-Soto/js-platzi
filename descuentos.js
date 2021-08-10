const precioOriginal = 120;
const descuento = 17;

const porcentajeDelDescuento = 100 - descuento;
const precioConDescueto = (precioOriginal * porcentajeDelDescuento) / 100;

console.log("El articulo cuesta $"+ precioOriginal +" y con un "+ descuento +"% de descuento ahora cuesta: $"+ precioConDescueto);
console.log({
    precioOriginal,
    descuento,
    porcentajeDelDescuento,
    precioConDescueto
});

function calculateOff(precioOriginal, descuento) {
    return (precioOriginal * (100 - descuento)) / 100;
}
