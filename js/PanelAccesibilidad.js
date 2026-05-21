
// ============================================ BOTON ACCESIBILIDAD

let escalaActual = 1.0;

window.addEventListener('load', function () {
    const botonMenu = document.getElementById('btnAccesibilidad');
    const panelAcc = document.getElementById('menuAccesibilidad');
    const btnCerrarX = document.getElementById('cerrarAcc');

    if (botonMenu && panelAcc) {
        botonMenu.onclick = function (e) {
            e.stopPropagation();
            panelAcc.classList.toggle('activo');
        };

        if (btnCerrarX) {
            btnCerrarX.onclick = function () {
                panelAcc.classList.remove('activo');
            };
        }

        document.onclick = function (event) {
            if (panelAcc.classList.contains('activo')) {
                if (!panelAcc.contains(event.target) && event.target !== botonMenu) {
                    panelAcc.classList.remove('activo');
                }
            }
        };
    }
});

function alternarClase(clase) {
    document.body.classList.toggle(clase);
}

function cambiarTamano(valor) {
    let nuevaEscala = Math.round((escalaActual + valor) * 10) / 10;

    if (nuevaEscala < 0.8 || nuevaEscala > 1.3) return;

    escalaActual = nuevaEscala;

    const elementos = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, li, label, button, b, i');

    elementos.forEach(el => {
        if (el.closest('.PanelMenuAccesibilidad') || el.id === 'btnAccesibilidad') return;

        if (!el.dataset.tamOriginal) {
            let estilo = window.getComputedStyle(el).fontSize;
            el.dataset.tamOriginal = parseFloat(estilo);
        }

        let base = parseFloat(el.dataset.tamOriginal);
        el.style.setProperty('font-size', (base * escalaActual) + 'px', 'important');
    });
}

function restablecerTodo() {
    escalaActual = 1.0;
    const conTamano = document.querySelectorAll('[data-tam-original]');
    conTamano.forEach(el => {
        el.style.removeProperty('font-size');
    });
    document.body.className = "";
}