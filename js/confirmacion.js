document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("#form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío por defecto para mostrar el alert

        // Mostrar el alert de confirmación con SweetAlert
        swal("¡Enviado!", "Tu mensaje ha sido enviado correctamente", "success")
            .then(() => {
                form.submit(); // Se envia el form
            });
    });
});