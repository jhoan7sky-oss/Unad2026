// ==================================== CAMBIO IDIOMA

const idiomasSoportados = ['es', 'en'];

function obtenerIdioma() {
    const params = new URLSearchParams(window.location.search);
    const idiomaURL = params.get('lang');

    if (idiomasSoportados.includes(idiomaURL)) {
        localStorage.setItem('lang', idiomaURL);
        return idiomaURL;
    }

    const almacenado = localStorage.getItem('lang');
    if (idiomasSoportados.includes(almacenado)) {
        return almacenado;
    }

    return 'es';
}

function obtenerValor(obj, ruta) {
    return ruta.split('.').reduce((acc, parte) => acc?.[parte], obj);
}

function aplicarTraducciones(traducciones) {

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const clave = el.dataset.i18n;
        const valor = obtenerValor(traducciones, clave);
        if (valor) el.textContent = valor;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const clave = el.dataset.i18nPlaceholder;
        const valor = obtenerValor(traducciones, clave);
        if (valor) el.placeholder = valor;
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const clave = el.dataset.i18nTitle;
        const valor = obtenerValor(traducciones, clave);
        if (valor) el.setAttribute('title', valor);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const clave = el.dataset.i18nAriaLabel;
        const valor = obtenerValor(traducciones, clave);
        if (valor) el.setAttribute('aria-label', valor);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const clave = el.dataset.i18nAlt;
        const valor = obtenerValor(traducciones, clave);
        if (valor) el.setAttribute('alt', valor);
    });
}

function cambiarIdioma(idioma) {
    localStorage.setItem('lang', idioma);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', idioma);

    window.location.href = url.toString();
}

function configurarBotonesIdioma() {
    document.querySelectorAll('#ModalIdioma .OpcionIdioma').forEach(btn => {
        btn.addEventListener('click', () => {
            cambiarIdioma(btn.dataset.lang);
        });
    });
}

function resaltarIdiomaActivo(idioma) {
    document.querySelectorAll('.OpcionIdioma').forEach(btn => {
        btn.classList.toggle('activo', btn.dataset.lang === idioma);
    });
}

function actualizarEnlaces() {
    const idioma = obtenerIdioma();

    document.querySelectorAll('a[href]').forEach(enlace => {
        const href = enlace.getAttribute('href');

        if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

        const url = new URL(href, window.location.href);
        url.searchParams.set('lang', idioma);

        enlace.href = url.toString();
    });
}

// ==================================== MODAL BIENVENIDA

function obtenerClaveSaludo() {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12)       return 'Bienvenida.BuenosDias';
    else if (hora >= 12 && hora < 19) return 'Bienvenida.BuenasTardes';
    else                               return 'Bienvenida.BuenasNoches';
}

function obtenerSaludoBilingue() {
    const clave = obtenerClaveSaludo();
    const es = obtenerValor(translationsDB['es'], clave);
    const en = obtenerValor(translationsDB['en'], clave);
    return `${es} / ${en}`;
}

function mostrarConfirmacionBienvenida(idiomaElegido) {
    const modal = document.getElementById('ModalBienvenida');
    const fnIdioma = modal.querySelector('.FnIdioma');
    const saludo = document.getElementById('SaludoBienvenida');
    const confirmacion = document.getElementById('BienvenidaConfirmacion');
    const icono = confirmacion.querySelector('.IconoOk2');
    const traducciones = translationsDB[idiomaElegido];

    localStorage.setItem('bienvenidaMostrada', 'true');
    localStorage.setItem('lang', idiomaElegido);

    fnIdioma.style.display = 'none';
    saludo.style.display = 'none';
    document.getElementById('DescIdioma').style.display = 'none';

    aplicarTraducciones(traducciones);
    resaltarIdiomaActivo(idiomaElegido);
    actualizarEnlaces();

    confirmacion.style.display = 'flex';

    icono.style.opacity = '0';
    icono.style.transform = 'scale(0) rotate(-20deg)';
    icono.style.transition = 'none';

    setTimeout(() => {
        icono.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        icono.style.opacity = '1';
        icono.style.transform = 'scale(1) rotate(0deg)';
    }, 50);

    setTimeout(() => {
        modal.classList.remove('activo');
    }, 1500);
}

function configurarBotonesBienvenida() {
    const modal = document.getElementById('ModalBienvenida');

    modal.querySelectorAll('.OpcionIdioma').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();

            const idiomaElegido = btn.dataset.lang;

            modal.querySelectorAll('.OpcionIdioma').forEach(b =>
                b.classList.toggle('activo', b.dataset.lang === idiomaElegido)
            );

            const clave = obtenerClaveSaludo();
            const traducciones = translationsDB[idiomaElegido];
            document.getElementById('SaludoBienvenida').textContent =
                obtenerValor(traducciones, clave);

            mostrarConfirmacionBienvenida(idiomaElegido);
        });
    });
}

function iniciarBienvenida() {
    if (localStorage.getItem('bienvenidaMostrada')) return;

    const modal = document.getElementById('ModalBienvenida');

    document.getElementById('SaludoBienvenida').textContent = obtenerSaludoBilingue();

    aplicarTraducciones(translationsDB['es']);
    modal.classList.add('activo');
    configurarBotonesBienvenida();
}

// ===================================================== INIT

function iniciarI18n() {
    const idioma = obtenerIdioma();
    const traducciones = translationsDB[idioma];

    if (!traducciones) {
        console.error("No hay traducciones para:", idioma);
        return;
    }

    aplicarTraducciones(traducciones);
    configurarBotonesIdioma();
    resaltarIdiomaActivo(idioma);
    actualizarEnlaces();

    iniciarBienvenida();
}

document.addEventListener('DOMContentLoaded', iniciarI18n);