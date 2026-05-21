document.addEventListener("DOMContentLoaded", function () {

    // ================================== MENÚ RESPONSIVE
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = navLinks ? navLinks.querySelectorAll("a") : [];

    let menuAbierto = false;

    if (toggle && navLinks) {

        toggle.addEventListener("click", function () {

            menuAbierto = !menuAbierto;

            navLinks.classList.toggle("active");
            toggle.setAttribute("aria-expanded", menuAbierto);

            if (menuAbierto) {
                const primerLink = navLinks.querySelector("a, button");
                if (primerLink) primerLink.focus();
            } else {
                toggle.focus();
            }
        });

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                menuAbierto = false;
                toggle.focus();
            });
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && menuAbierto) {
                navLinks.classList.remove("active");
                toggle.setAttribute("aria-expanded", "false");
                menuAbierto = false;
                toggle.focus();
            }
        });
    }

    // ================================== SCROLL SUAVE PERSONALIZADO

    function scrollSuave(destino, duracion = 700) {

        const offsetTop = destino.getBoundingClientRect().top + window.pageYOffset;
        const inicio = window.pageYOffset;
        const distancia = offsetTop - inicio;
        let startTime = null;

        function animacionScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const tiempoTranscurrido = currentTime - startTime;
            const progreso = Math.min(tiempoTranscurrido / duracion, 1);

            window.scrollTo(0, inicio + distancia * easeInOut(progreso));

            if (tiempoTranscurrido < duracion) {
                requestAnimationFrame(animacionScroll);
            }
        }

        function easeInOut(t) {
            return t < 0.5
                ? 2 * t * t
                : 1 - Math.pow(-2 * t + 2, 2) / 2;
        }

        requestAnimationFrame(animacionScroll);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            if (href === "#") return;

            const destino = document.querySelector(href);
            if (!destino) return;

            e.preventDefault();
            scrollSuave(destino, 800);
        });
    });

    // ================================== MODAL DE IDIOMA

    const BotonIdioma = document.getElementById("BotonIdioma");
    const modalIdioma = document.getElementById("ModalIdioma");
    const cerrarModal = document.getElementById("CerrarModal");
    const opcionesIdioma = document.querySelectorAll(".OpcionIdioma");

    let ultimoFoco = null;

    if (BotonIdioma && modalIdioma && cerrarModal) {

        BotonIdioma.addEventListener("click", () => {
            ultimoFoco = document.activeElement;

            modalIdioma.style.display = "flex";
            BotonIdioma.setAttribute("aria-expanded", "true");

            const focusable = modalIdioma.querySelector("button, [href], input, select, textarea");
            if (focusable) focusable.focus();
        });

        function cerrarModalIdioma() {
            modalIdioma.style.display = "none";
            BotonIdioma.setAttribute("aria-expanded", "false");

            if (ultimoFoco) ultimoFoco.focus();
        }

        cerrarModal.addEventListener("click", cerrarModalIdioma);

        window.addEventListener("click", (e) => {
            if (e.target === modalIdioma) cerrarModalIdioma();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modalIdioma.style.display === "flex") {
                cerrarModalIdioma();
            }
        });

        modalIdioma.addEventListener("keydown", (e) => {
            if (e.key !== "Tab") return;

            const elementos = modalIdioma.querySelectorAll(
                "button, [href], input, select, textarea"
            );

            if (elementos.length === 0) return;

            const primero = elementos[0];
            const ultimo = elementos[elementos.length - 1];

            if (e.shiftKey && document.activeElement === primero) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && document.activeElement === ultimo) {
                e.preventDefault();
                primero.focus();
            }
        });
    }

    opcionesIdioma.forEach(opcion => {
        opcion.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");

            cambiarIdioma(lang);
            localStorage.setItem("idioma", lang);

            if (modalIdioma) modalIdioma.style.display = "none";
        });
    });

    function cambiarIdioma(lang) {
        document.querySelectorAll("[data-es]").forEach(el => {
            const texto = el.getAttribute("data-" + lang);
            if (texto) el.textContent = texto;
        });
    }

    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cambiarIdioma(idiomaGuardado);

    // ================================== MENÚ ACTIVO AL HACER SCROLL

    const secciones = document.querySelectorAll("section[id]");
    const linksMenu = document.querySelectorAll(".EnlacesNav li a[href^='#']:not([href='#'])");

    window.addEventListener("scroll", function () {

        let scrollY = window.pageYOffset;

        secciones.forEach(seccion => {
            const sectionHeight = seccion.offsetHeight;
            const sectionTop = seccion.offsetTop - 120;
            const sectionId = seccion.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                linksMenu.forEach(link => {
                    link.classList.remove("ActivoMenu");

                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("ActivoMenu");
                    }
                });
            }
        });
    });

    // =============================== MODAL MAPA

    const botonMapa = document.getElementById("abrirMapa");
    const modalMapa = document.getElementById("ModalMapa");
    const cerrarMapa = document.getElementById("CerrarMapa");

    let ultimoFocoMapa = null;

    if (botonMapa && modalMapa) {

        botonMapa.addEventListener("click", function (e) {
            e.preventDefault();

            ultimoFocoMapa = document.activeElement;

            modalMapa.classList.add("MostrarModalMapa");
            botonMapa.setAttribute("aria-expanded", "true");

            const focusable = modalMapa.querySelector("button, [href], input, select, textarea");
            if (focusable) focusable.focus();
        });
    }

    function cerrarMapaModal() {
        if (!modalMapa || !botonMapa) return;

        modalMapa.classList.remove("MostrarModalMapa");
        botonMapa.setAttribute("aria-expanded", "false");

        if (ultimoFocoMapa) ultimoFocoMapa.focus();
    }

    if (cerrarMapa && modalMapa) {
        cerrarMapa.addEventListener("click", cerrarMapaModal);
    }

    if (modalMapa) {

        modalMapa.addEventListener("click", function (e) {
            if (e.target === modalMapa) {
                cerrarMapaModal();
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && modalMapa.classList.contains("MostrarModalMapa")) {
                cerrarMapaModal();
            }
        });

        modalMapa.addEventListener("keydown", function (e) {
            if (e.key !== "Tab") return;

            const elementos = modalMapa.querySelectorAll(
                "button, [href], input, select, textarea"
            );

            if (elementos.length === 0) return;

            const primero = elementos[0];
            const ultimo = elementos[elementos.length - 1];

            if (e.shiftKey && document.activeElement === primero) {
                e.preventDefault();
                ultimo.focus();
            } else if (!e.shiftKey && document.activeElement === ultimo) {
                e.preventDefault();
                primero.focus();
            }
        });
    }

});