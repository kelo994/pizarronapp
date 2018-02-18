$(document).ready(function () {
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
});

var finPartida = false;
var enCurso = true;
var flag = 1;
function onOnline() {
}
function alertDismissed() {
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
        onOffline();
    } else {
        onOnline();
    }
}
function onOffline() {
    navigator.notification.alert(
        'Tuvimos un problema con la conexión a internet',  // message
        alertDismissed,         // callback
        'Error Internet Conection',            // title
        'Reintentar'                  // buttonName
    );
}
$(window).on("load", function () {

    $('.loading').fadeOut(2000);
    $('.loader').fadeOut(2000);
    $('.img-loading').fadeOut(2000);
});

function buildNewDoc() {
    window.location.href = 'newdoc.html';
}

function buildMaterial() {
    $("#options").load("material.html");
    document.getElementById('options').style.display = "block";
    document.getElementById('modulos').style.display = "none";
    localization = 1;
}

function buildFavor() {
    $("#options").load("documentos.html");
    document.getElementById('options').style.display = "block";
    document.getElementById('modulos').style.display = "none";
    localization = 1;
}

function buildOptions() {
    $("#options").load("mercado.html");
    document.getElementById('options').style.display = "block";
    document.getElementById('modulos').style.display = "none";
    localization = 1;
}

function salirtoModulos() {
    document.getElementById('options').style.display = "none";
    document.getElementById('modulos').style.display = "table-cell";
    localization = 0;
}

function logout(){
    window.location.href = '../index.html';
}
