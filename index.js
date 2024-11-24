const precio = 400000
let cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


const buttonSum = document.querySelector(".btn-sum");
const buttonRest = document.querySelector(".btn-rest");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

buttonSum.addEventListener("click", () => {
    cantidad += 1
    cantidadSpan.innerHTML = cantidad
    valorTotalSpan.innerHTML = precio * cantidad
})

buttonRest.addEventListener("click", () => {
    if(cantidad == 0)
    {
        return
    } else {
        cantidad -= 1
    }
    cantidadSpan.innerHTML = cantidad
    valorTotalSpan.innerHTML = precio * cantidad
})
