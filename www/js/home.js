$(document).ready(function () {
    document.addEventListener("deviceready", setOverrideBackbutton, false);
    localStorage.localization = 0;
});

function setOverrideBackbutton() {
    if (typeof device != "undefined" && device.platform == "Android") {
        navigator.app.overrideBackbutton(true);
    }
    document.addEventListener("backbutton", onBackKeyDown, true);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
}
function onBackKeyDown() {
    if (localStorage.localization == 0) {
        navigator.notification.confirm(
            '¿Estás seguro que quieres salir al menú principal?',  // message
            onConfirm,              // callback to invoke with index of button pressed
            'Confirmar',            // title
            ['Si', 'No']          // buttonLabels
        );
    }if(localStorage.localization == 2){
        window.location.href = 'home.html';
    } else {
        $('#options').addClass("d-none");
        $('#modulos').removeClass("d-none");
        $('#perfilUser').addClass("d-none");
        localStorage.localization = 0;
    }
}
function onConfirm(buttonIndex) {
    if (buttonIndex == 2) {
    } else {
        window.location.href = '../index.html';
    }
}
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
    localStorage.localization = 2;
}

function buildMaterial() {
$.ajax({
    type: "GET", //GET, POST, PUT
    url: 'http://69.164.202.85:8500/api/getMaterialProfesor',  //the url to call
    //Data sent to server
    beforeSend: function (xhr) {   //Include the bearer token in header
        xhr.setRequestHeader("Authorization", localStorage.token);
    }
}).done(function (response) {
console.log(response);
    var listamaterial = '';
    $.each(response, function (key, element) {
        var fecha = element.created_at.split(" ");
        listamaterial += '<div class="card mb-2" onclick=""><div class="row m-0 p-2"><div class="col-4 p-0 text-center">'+
                         '<img src="http://69.164.202.85/app/resources/img/prueba.jpg" style="height:100%; width:100%"></div>'+
                         '<div class="col-7 p-0 ml-auto pl-1" style="background-color:white;position:relative;">'+
                         '<p class="card-title">Asignatura: <span class="card-text">' + element.asignatura.nombre_asignatura + '</span></p>'+
                         '<p class="card-title">Título: <span class="card-text">' + element.titulo_material + '</span></p>'+
                         '<p class="card-title">Fecha: <span class="card-text">' + fecha[0] + '</span></p>'+
                         '<div id="likematerial' + element.id +'" class="like mt-auto ml-auto" onclick="likematerial('+element.id+')" style="bottom:0px; position:absolute; right:0.3em">'+
                         '<i  class="far fa-heart"></i></div></div></div></div>';
    });

        $("#options").load("material.html", function () {
            $("#listamaterial").html(listamaterial);
        });

       $('#options').removeClass("d-none");
       $('#modulos').addClass("d-none");
       localStorage.localization = 1;
}).fail(function (err)  {
    alert("chao");
});
}
function likematerial(idmaterial){
        console.log("hola");
        if($("#likematerial" + idmaterial).hasClass('like')){
            $("#likematerial" + idmaterial).html('<i  class="fas fa-heart"></i>');
            $("#likematerial" + idmaterial).removeClass('like');
        }else{
            $("#likematerial" + idmaterial).html('<i  class="far fa-heart"></i>');
            $("#likematerial" + idmaterial).addClass('like');
        }
    }
function buildFavor() {
    $("#options").load("documentos.html");
    document.getElementById('options').style.display = "block";
    document.getElementById('modulos').style.display = "none";
    localStorage.localization = 1;
}

function buildOptions() {
    $("#options").load("mercado.html");
    document.getElementById('options').style.display = "block";
    document.getElementById('modulos').style.display = "none";
    localStorage.localization = 1;
}

function verPerfil() {
    $.ajax({
        type: "GET", //GET, POST, PUT
        url: 'http://69.164.202.85:8500/api/getLoggedUser',  //the url to call
        //Data sent to server
        beforeSend: function (xhr) {   //Include the bearer token in header
            xhr.setRequestHeader("Authorization", localStorage.token);
        }
    }).done(function (response) {
            console.log(response);
            document.getElementById('menupartida').innerHTML = '<li id="openperfil" class="p-2" onclick="salirtoModulos()">Ver Modulos</li>' +
                    '<li class="p-2"><button class="btn btn-modal txt-azul pl-0" style="background-color: white" data-toggle="modal" data-target="#fsModal">Editar Perfil </button></li>' +
                    '<li class="p-2"><button class="btn btn-modal txt-azul pl-0" style="background-color: white" data-toggle="modal" data-target="#passModal">Cambiar Contraseña </button></li>' +
                    '<li class="p-2 txt-azul" onclick="logout()">Cerrar Sesión</li>';
            $("#userimage").attr("src", response.profesor.url_foto_profesor);
            $("#imageuserEdit").attr("src", response.profesor.url_foto_profesor);
            $("#username").html(response.profesor.nombres_profesor + " " + response.profesor.apellidos_profesor);
            $("#nombreUserEdit").val(response.profesor.nombres_profesor);
            $("#apellidoUserEdit").val(response.profesor.apellidos_profesor);
            $("#useremail").html(response.email);
            $("#emailUserEdit").val(response.email);
            $("#userprofesion").html(response.profesor.profesion);
            $("#profesionUserEdit").val(response.profesor.profesion);
            $("#usercargo").html(response.profesor.cargo);

           $('#options').addClass("d-none");
           $('#modulos').addClass("d-none");
           $('#perfilUser').removeClass("d-none");
           localStorage.localization = 1;
    }).fail(function (err)  {
        alert("chao");
    });
}
function changeimg() {
    navigator.camera.getPicture(uploadPhoto, function (message) {
        alert('get picture failed');
    }, {
            quality: 100,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        });
}
function salirtoModulos() {
document.getElementById('menupartida').innerHTML = '<li id="openperfil" class="p-2" onclick="verPerfil()">Perfil de Usuario</li>'+
                                      '<li class="p-2" onclick="logout()">Cerrar Sesión</li>';
    $('#options').addClass("d-none");
    $('#modulos').removeClass("d-none");
    $('#perfilUser').addClass("d-none");
    localization = 0;
}

function logout() {
    window.location.href = '../index.html';
}
