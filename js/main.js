const nav = document.querySelector("#menu-list");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("menu-list-visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("menu-list-visible");
})