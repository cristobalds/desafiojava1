const precio = 30000
const precioSpan = document.querySelector(".precio");
precioSpan.innerHTML = precio.toLocaleString();

const cantidadInput = document.querySelector("#cantidad")
const colorSelect = document.querySelector("#idcolor")
const valorTotal = document.querySelector(".valortotal")
const cantidadTotal = document.querySelector(".cantidadtotal")
const FinalColor = document.querySelector('.color-swatch');
const colorFinal = document.querySelector(".circulo div")

function calcularTotal() {
    const cantidad = cantidadInput.value
    const color = colorSelect.value
    valorTotal.innerHTML = (+cantidad * precio).toLocaleString();
    cantidadTotal.innerHTML = cantidad
    colorFinal.style.backgroundColor = color
}

