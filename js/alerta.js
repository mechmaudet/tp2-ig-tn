// Alert de bienvenida
document.addEventListener("DOMContentLoaded", function bienvenida(){
    swal("๋ ࣭ ⭑๋ ࣭ ⭑Bienvenide a mi página๋ ࣭ ⭑๋ ࣭ ⭑", "deseas continuar?", {

        buttons: ["no :(", "sip"]
    }).then((value) => {
        if (value === null) {
            // Si elige no continuar
            window.location.href = "https://www.instagram.com/catalinalberici/"; // Redirige al instagram del artista
        }
    });
});
