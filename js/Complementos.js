// ================================== SLIDER DE BIENVENIDA

const slides = document.querySelectorAll(".Slide");
const BotonSiguiente = document.querySelector(".BotonSlider.Siguiente");
const BotonAnterior = document.querySelector(".BotonSlider.Anterior");
const contenedorPuntos = document.querySelector(".Indicadores");
const botonPause = document.getElementById("pausarSlider");

let indexSlide = 0;
let intervalo;
let autoplay = true;

slides.forEach((_, i) => {
    const punto = document.createElement("div");
    punto.classList.add("Punto");

    if (i === 0) punto.classList.add("Activo");

    punto.addEventListener("click", () => {
        indexSlide = i;
        mostrarSlide(indexSlide);
    });

    contenedorPuntos.appendChild(punto);
});

const puntos = document.querySelectorAll(".Punto");

// FUNCIONES 
function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("Activa"));
    puntos.forEach(p => p.classList.remove("Activo"));

    slides[i].classList.add("Activa");
    puntos[i].classList.add("Activo");
}

function siguienteSlide() {
    indexSlide++;
    if (indexSlide >= slides.length) indexSlide = 0;
    mostrarSlide(indexSlide);
}

function anteriorSlide() {
    indexSlide--;
    if (indexSlide < 0) indexSlide = slides.length - 1;
    mostrarSlide(indexSlide);
}

if (BotonSiguiente) BotonSiguiente.addEventListener("click", siguienteSlide);
if (BotonAnterior) BotonAnterior.addEventListener("click", anteriorSlide);

function iniciarSlider() {
    intervalo = setInterval(siguienteSlide, 6000);
}

function detenerSlider() {
    clearInterval(intervalo);
}

if (botonPause) {
    botonPause.addEventListener("click", () => {
        autoplay = !autoplay;

        if (autoplay) {
            iniciarSlider();
            botonPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            detenerSlider();
            botonPause.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });
}

iniciarSlider();

// ================================== TABS

document.querySelectorAll(".TabsBotones button").forEach(boton => {
    boton.addEventListener("click", function () {

        const tabID = this.getAttribute("data-tab");

        document.querySelectorAll(".TabsBotones button")
            .forEach(b => b.classList.remove("TabActiva"));

        document.querySelectorAll(".ContenidoTab")
            .forEach(c => c.classList.remove("Activo"));

        this.classList.add("TabActiva");
        document.getElementById(tabID).classList.add("Activo");
    });
});

// ================================== MODAL FORMULARIO (RESERVAS)

const formulario = document.querySelector(".Formulario");
const modalOk = document.getElementById("ModalOk");
const cerrarModalOk = document.getElementById("CerrarModalOk");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    modalOk.classList.add("Activo");
    setTimeout(() => {
        modalOk.classList.remove("Activo");
    }, 2000);
});

cerrarModalOk.addEventListener("click", function () {
    modalOk.classList.remove("Activo");
});

window.addEventListener("click", function (e) {
    if (e.target === modalOk) modalOk.classList.remove("Activo");
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


// ================================== SLIDER INSTAGRAM (IG)
document.addEventListener("DOMContentLoaded", function () {

    const trackIG = document.querySelector(".TrackIG");
    const slidesIG = document.querySelectorAll(".SlideIG");
    const prev = document.querySelector(".PrevIG");
    const next = document.querySelector(".NextIG");
    const dotsContainer = document.querySelector(".DotsIG");

    const modal = document.getElementById("ModalExpand");
    const imgExpandida = document.getElementById("ImagenExpandida");
    const cerrar = document.querySelector(".CerrarExpand");

    let currentIndex = 0;
    let slidesPerView = 4;
    let totalPages = 0;
    let autoplay;

    function updateSlidesPerView() {
        if (window.innerWidth <= 600) {
            slidesPerView = 1;
        } else if (window.innerWidth <= 900) {
            slidesPerView = 2;
        } else {
            slidesPerView = 4;
        }
        totalPages = Math.ceil(slidesIG.length / slidesPerView);
    }

    function crearDots() {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement("div");
            dot.classList.add("DotIG");
            if (i === 0) dot.classList.add("Activo");
            dot.addEventListener("click", () => {
                currentIndex = i * slidesPerView;
                moveSlider();
                actualizarDots();
                reiniciarAutoplay();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function moveSlider() {
        const slideWidth = slidesIG[0].offsetWidth;
        trackIG.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function actualizarDots() {
        const dots = document.querySelectorAll(".DotIG");
        dots.forEach(dot => dot.classList.remove("Activo"));
        const paginaActual = Math.floor(currentIndex / slidesPerView);
        if (dots[paginaActual]) dots[paginaActual].classList.add("Activo");
    }

    function iniciarAutoplay() {
        autoplay = setInterval(() => {
            if (currentIndex < slidesIG.length - slidesPerView) {
                currentIndex += slidesPerView;
            } else {
                currentIndex = 0;
            }
            moveSlider();
            actualizarDots();
        }, 6000);
    }

    function reiniciarAutoplay() {
        clearInterval(autoplay);
        iniciarAutoplay();
    }

    function cerrarModal() {
        modal.classList.remove("Activo");
    }

    next.addEventListener("click", () => {
        currentIndex = currentIndex < slidesIG.length - slidesPerView
            ? currentIndex + slidesPerView
            : 0;
        moveSlider();
        actualizarDots();
        reiniciarAutoplay();
    });

    prev.addEventListener("click", () => {
        currentIndex = currentIndex > 0
            ? currentIndex - slidesPerView
            : (totalPages - 1) * slidesPerView;
        moveSlider();
        actualizarDots();
        reiniciarAutoplay();
    });

    slidesIG.forEach(slide => {
        const img = slide.querySelector("img");
        img.addEventListener("click", function () {
            imgExpandida.src = this.src;
            modal.classList.add("Activo");
        });
    });

    cerrar.addEventListener("click", cerrarModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) cerrarModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("Activo")) {
            cerrarModal();
        }
    });

    window.addEventListener("resize", () => {
        updateSlidesPerView();
        crearDots();
        moveSlider();
    });

    updateSlidesPerView();
    crearDots();
    iniciarAutoplay();

});

// ================================== SLIDER DE NOTICIAS

const track = document.querySelector('.TrackNoticias');
const slidesNoticias = document.querySelectorAll('.SlideNoticia');
const prevBoton = document.querySelector('.PrevNoticias');
const nextBoton = document.querySelector('.NextNoticias');
const contenedorPuntosNoticias = document.querySelector('.DotsNoticias');

let indice = 0;

function obtenerSlidesVisibles() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 992) return 2;
    return 4;
}

let slidesVisibles = obtenerSlidesVisibles();
let maxIndice = slidesNoticias.length - slidesVisibles;

function crearIndicadores() {
    contenedorPuntosNoticias.innerHTML = "";
    slidesVisibles = obtenerSlidesVisibles();
    maxIndice = slidesNoticias.length - slidesVisibles;

    for (let i = 0; i <= maxIndice; i++) {
        const punto = document.createElement('div');
        punto.classList.add('DotNoticia');
        if (i === 0) punto.classList.add('Activo');

        punto.addEventListener('click', () => moverA(i));

        contenedorPuntosNoticias.appendChild(punto);
    }
}

function actualizarSlider() {
    track.style.transform = `translateX(-${indice * (100 / slidesVisibles)}%)`;

    document.querySelectorAll('.DotNoticia')
        .forEach(d => d.classList.remove('Activo'));

    const puntos = document.querySelectorAll('.DotNoticia');
    if (puntos[indice]) puntos[indice].classList.add('Activo');
}

function moverA(i) {
    indice = i;
    actualizarSlider();
}

nextBoton.addEventListener('click', () => {
    indice = indice >= maxIndice ? 0 : indice + 1;
    actualizarSlider();
});

prevBoton.addEventListener('click', () => {
    indice = indice <= 0 ? maxIndice : indice - 1;
    actualizarSlider();
});

setInterval(() => {
    indice = indice >= maxIndice ? 0 : indice + 1;
    actualizarSlider();
}, 5000);

window.addEventListener('resize', () => {
    slidesVisibles = obtenerSlidesVisibles();
    maxIndice = slidesNoticias.length - slidesVisibles;
    indice = 0;
    crearIndicadores();
    actualizarSlider();
});

crearIndicadores();
actualizarSlider();

// ================================== SLIDER DE LOGOS

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".TrackLogos");
    const slides = document.querySelectorAll(".SlideLogo");

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

});


