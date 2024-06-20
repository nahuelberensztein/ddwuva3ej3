$(document).ready(function() {
    $("#ocultar").click(function() {
        $("#imagen").hide();
        document.title = "¡No tenemos ninguna imagen!";
    });

    $("#mostrar").click(function() {
        $("#imagen").show();
        document.title = "¡Mirá la siguiente imagen!";
    });
});
