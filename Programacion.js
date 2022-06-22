function uno()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 1;
    preguntar(1);
}

function dos()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 2;
    preguntar(2);
}

function tres()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 3;
    preguntar(3);
}
function cuatro()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 4;
    preguntar(4);
}
function cinco()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 5;
    preguntar(5);
}
function seis()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 6;
    preguntar(6);
}
function siete()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 7;
    preguntar(7);
}
function ocho()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 8;
    preguntar(8);
}
function nueve()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 9;
    preguntar(9);
}
function cero()
{
    document.getElementById("pantalla").value = document.getElementById("pantalla").value + 0;
    preguntar(0);
}

var yapunto = false;
var puntoinmediato = false;
function punto()
{
    if (yapunto === false)
    {
        document.getElementById("pantalla").value = document.getElementById("pantalla").value + ".0"; 
        yapunto = true;
        puntoinmediato = true;
    }
}

function preguntar(num){
    if (puntoinmediato === true)
    {
        puntoinmediato = false;
        var str = String(document.getElementById("pantalla").value);
        var str2 = str.substring(0, str.length - 2);
        document.getElementById("pantalla").value =  str2 + num;
    }
}
var a = 0;
var b = 0;
var operador = "";
var resul = document.getElementById("pantalla");

function sumar()
{
    a = document.getElementById("pantalla").value*1;
    operador = "sumar";
    document.getElementById("pantalla").value = "";
    yapunto = false;
    puntoinmediato = false;
}

function restar()
{
    a = document.getElementById("pantalla").value*1;
    document.getElementById("pantalla").value = "";
    operador = "restar";
    yapunto = false;
    puntoinmediato = false;
}

function multiplicar()
{
    a = document.getElementById("pantalla").value*1;
    document.getElementById("pantalla").value = "";
    operador = "multiplicar";
    yapunto = false;
    puntoinmediato = false;
}

function dividir()
{
    a = document.getElementById("pantalla").value*1;
    document.getElementById("pantalla").value = "";
    operador = "dividir";
    yapunto = false;
    puntoinmediato = false;
}
function eliminar()
{
    var str = String(document.getElementById("pantalla").value);
    var str2 = str.substring(0, str.length - 1);
    var str3 = str2.split("")[str2.length - 1];

    if (str3 == ".")
    {
        var str4 = str2.substring(0, str2.length - 1);
        document.getElementById("pantalla").value =  str4;
        yapunto = false;
    }
    else
    {
        document.getElementById("pantalla").value =  str2;
    }
}
function resultado()
{
    b = document.getElementById("pantalla").value*1;
    switch(operador)
    {
        case "sumar":
            document.getElementById("pantalla").value = a+b;
            break;

        case "restar":
            document.getElementById("pantalla").value = a-b;
            break;

        case "multiplicar":
            document.getElementById("pantalla").value = a*b;
            break;
        case "dividir":
            document.getElementById("pantalla").value = a/b;
            break;
        default:
            break;
    }

    operador = "";
}

function borrar()
{
    document.getElementById("pantalla").value = "";
    yapunto = false;
    puntoinmediato = false;
    operador = "";
    a = 0;
    b = 0;
}