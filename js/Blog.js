//====================================== MODAL NOTICIA
document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("ModalNoticia");

    window.abrirModalNoticia = function (e) {
        if (e) e.preventDefault();

        if (!modal) {
            console.error("No se encontró el modal");
            return;
        }

        modal.style.display = "flex";
    };

    window.cerrarModalNoticia = function () {
        if (!modal) return;

        modal.style.display = "none";
    };

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

});