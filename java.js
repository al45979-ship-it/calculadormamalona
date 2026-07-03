function agregar(numero){
    document.getElementById("pantalla").value += numero;
}

function limpiar(){
    document.getElementById("pantalla").value = "";
}

function calcular(){
    var resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
}
