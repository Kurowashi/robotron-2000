const braco = document.querySelector("#braco")
const add = document.querySelector("#add")
const sub = document.querySelector("#sub")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operador) {
    if (operador === "-") {
        if (parseInt(braco.value) > 0) {
            braco.value = parseInt(braco.value) - 1
        } else {
            return
        }
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}