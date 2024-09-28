$(document).ready(function() {
    // Capturar el evento de clic en el botón de envío
    $("#enviar").click(function(event) {
        // Prevenir que el formulario se envíe y recargue la página
        event.preventDefault();

        // Obtener el valor del campo de texto
        var valorIngresado = $("#campoTexto").val();

        // Mostrar el valor en el div con id 'resultado'
        $("#resultado").text("Valor ingresado: " + valorIngresado);
    });
});