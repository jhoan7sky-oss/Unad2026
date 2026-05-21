// ============================= ACORDEON

const preguntas = document.querySelectorAll(".Pregunta");

preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

        const activa = document.querySelector(".Pregunta.activa");

        if (activa && activa !== pregunta) {

            activa.classList.remove("activa");
            activa.nextElementSibling.style.maxHeight = null;

        }

        pregunta.classList.toggle("activa");

        const respuesta = pregunta.nextElementSibling;

        if (respuesta.style.maxHeight) {

            respuesta.style.maxHeight = null;

        } else {

            respuesta.style.maxHeight = respuesta.scrollHeight + "px";

        }

    });

});

// ================================== MODAL FORMULARIO (CONTACTO)

document.addEventListener("DOMContentLoaded", function () {

    const formContacto = document.getElementById("FormularioContacto");
    const modalContacto = document.getElementById("ModalContacto");
    const cerrarModalContacto = document.getElementById("CerrarModalContacto");

    if (!formContacto || !modalContacto || !cerrarModalContacto) return;

    formContacto.addEventListener("submit", function (e) {
        e.preventDefault();
        modalContacto.classList.add("MostrarModalContacto");
        formContacto.reset();
        setTimeout(() => {
            modalContacto.classList.remove("MostrarModalContacto");
        }, 2000);
    });

    cerrarModalContacto.addEventListener("click", function () {
        modalContacto.classList.remove("MostrarModalContacto");
    });

    window.addEventListener("click", function (e) {
        if (e.target === modalContacto) {
            modalContacto.classList.remove("MostrarModalContacto");
        }
    });

});