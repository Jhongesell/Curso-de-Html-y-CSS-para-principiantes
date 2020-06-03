var touch = "0";

function rojo(numero) {

    if (touch == $("#selecciona").val()) {
        $("#op1").css("background-color", "red");
        touch = numero;
    } else if ("1" == $("#selecciona").val()) {
        $("#op1").css("background-color", "");

    } else {
        alert("mal");
    }

}

function verde() {
    $("#op1").css("background-color", "green");
}

function azul() {
    $("#op1").css("background-color", "blue");
}