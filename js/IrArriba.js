// ================================== BOTÓN IR ARRIBA
(function () {
    const boton = document.getElementById("BotonArriba");
    if (!boton) return;

    boton.setAttribute("tabindex", "-1");
    boton.removeAttribute("aria-hidden");

    function controlarVisibilidad() {
        if (window.scrollY > 100) {
            mostrarBoton();
        } else {
            ocultarBoton();
        }
    }

    function mostrarBoton() {
        boton.classList.add("visible");
        boton.setAttribute("tabindex", "0");
        boton.removeAttribute("aria-hidden");
    }

    function ocultarBoton() {
        if (document.activeElement === boton) {
            boton.blur();
        }
        boton.setAttribute("tabindex", "-1");
        boton.setAttribute("aria-hidden", "true");
        boton.classList.remove("visible");
    }

    function irArriba() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", controlarVisibilidad, { passive: true });
    boton.addEventListener("click", irArriba);
    boton.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            irArriba();
        }
    });

    controlarVisibilidad();
})();
