var home = false;
$(window).on("load", function () {

    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
});

function onDeviceReady() {
    document.addEventListener("backbutton", backbutton, false);
}

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
function backbutton() {
    if (home == true) {
        verPartidas();
    } else {
        window.location.href = '../index.html';
    }

}
function gethome() {
    return home;
}

function editUser() {

    var user = {
        user: document.getElementById('edit-perfil-user').value,
        new_first_name: document.getElementById('edit-perfil-nombre').value,
        new_last_name: document.getElementById('edit-perfil-apellido').value,
        email: document.getElementById('edit-perfil-email').value,
        //password: document.getElementById('edit-perfil-pass').value
    };
    var JsonData = JSON.stringify(user);
    console.log(JsonData);
    $.post("https://ceosim.cl/user/edit_perfil_mobile", { data: JsonData });
    perfilUsuario();
}

function verPerfil() {
    home = true;
    document.getElementById('menupartida').innerHTML = '<li id="user" class="p-2" onclick="verPartidas()">Ver Partidas</li>' +
        '<li class="p-2" "><button class="btn btn-modal pl-0" style="background-color: white" data-toggle="modal" data-target="#fsModal">Editar Perfil </button></li>' +
        '<li class="p-2" onclick="app.logout()">Cerrar Sesión</li>';
    document.getElementById('perfilUser').style.display = 'block';
    document.getElementById('listPartidas').style.display = 'none';
}

function verPartidas() {
    home = false;
    document.getElementById('menupartida').innerHTML = '<li id="mercado" class="p-2" onclick="verMercados()">Mercados</li>' + '<li id="user" class="p-2" onclick="verPerfil()">Perfil usuario</li>' +
        '<li class="p-2" onclick="app.logout()">Cerrar Sesión</li>';
    document.getElementById('perfilUser').style.display = 'none';
    document.getElementById('listPartidas').style.display = 'block';
}

function verMercados() {
    home = true;
    document.getElementById('menupartida').innerHTML = '<li id="user" class="p-2" onclick="verPartidas()">Ver Partidas</li>';
    window.location.href = '../pages/mercado.html';
}
function firstStep() {
    event.preventDefault();
    var a1 = $("input[name='user_invitation']").val();
    $('#mensajes').html('');
    if (a1.length > 1) {
        $.get("https://ceosim.cl/register/verifyGift/" + a1).done(function (data) {
            if (data.return == true) {
                $('#stepFirst').animate({ height: 'toggle' }, 400);
                $('#stepOne').animate({ height: 'toggle' }, 800);
            }
            else {
                navigator.notification.alert(
                    'Error',  // message
                    this.okCallBack,         // callback
                    'Código inválido',            // title
                    'vale'                  // buttonName
                );
            }
        });
    }
}

function perfilUsuario() {

    $.get("https://ceosim.cl/user/usermobile", function (data) {
        console.log(data);
        $('#nombreUser').html(data.first_name + "  " + data.last_name);
        $('#emailUser').html(data.email);
        document.getElementById('edit-perfil-nombre').value = data.first_name;
        document.getElementById('edit-perfil-apellido').value = data.last_name;
        document.getElementById('edit-perfil-email').value = data.email;
        document.getElementById('edit-perfil-user').value = data.user_name;
    });
}

function secondStep() {
    event.preventDefault();

    var a1 = $("input[name='user_name']").val();
    var a2 = $("input[name='user_apellido']").val();
    var a3 = $("input[name='user_email']").val();

    if (a1.length < 1) {
        $("input[name='user_name']").addClass('form-control-danger');
        $("input[name='user_name']").parent().addClass('has-danger');
        return
    } else {
        $("input[name='user_name']").removeClass('form-control-danger');
        $("input[name='user_name']").parent().removeClass('has-danger');
        a1 = true;
    }

    if (a2.length < 1) {
        $("input[name='user_apellido']").addClass('form-control-danger');
        $("input[name='user_apellido']").parent().addClass('has-danger');
        return
    } else {
        $("input[name='user_apellido']").removeClass('form-control-danger');
        $("input[name='user_apellido']").parent().removeClass('has-danger');
        a2 = true;
    }
    if (a3.length < 1 || vEmail(a3) == false) {
        $("input[name='user_email']").addClass('form-control-danger');
        $("input[name='user_email']").parent().addClass('has-danger');
        return
    }
    else if (vEmail(a3)) {
        $("input[name='user_email']").removeClass('form-control-danger');
        $("input[name='user_email']").parent().removeClass('has-danger');
        a3 = true;
    }

    if (a1 == true && a2 == true && a3 == true) {
        $('#stepOne').animate({ height: 'toggle' }, 400);
        $('#stepTwo').animate({ height: 'toggle' }, 800);
    }
}

function thirdStep() {
    event.preventDefault();

    var a1 = $("input[name='user_password_new']").val();
    var a2 = $("input[name='user_password_repeat']").val();

    if (a1.length < 1) {
        $("input[name='user_password_new']").addClass('form-control-danger');
        $("input[name='user_password_new']").parent().addClass('has-danger');
        return
    } else {
        $("input[name='user_password_new']").removeClass('form-control-danger');
        $("input[name='user_password_new']").parent().removeClass('has-danger');
        a1 = true;
    }

    if (a2.length < 1 || vPassword() == false) {
        $("input[name='user_password_repeat']").addClass('form-control-danger');
        $("input[name='user_password_repeat']").parent().addClass('has-danger');
        return
    } else {
        $("input[name='user_password_repeat']").removeClass('form-control-danger');
        $("input[name='user_password_repeat']").parent().removeClass('has-danger');
        a2 = true;
    }

    if (a1 == true && a2 == true) {
        $('#stepTwo').animate({ height: 'toggle' }, 800);
        $('#stepThree').animate({ height: 'toggle' }, 400);
        $("input[name='terminos']").prop('required', true);
    }
}

function vPassword() {
    $('#mensajes').html('');
    if ($("input[name='user_password_new']").val() == $("input[name='user_password_repeat']").val()) {
        return true
    }
    else {
        $('#mensajes').html('Las contraseña no coincide');
        return false
    }
}


function vEmail(email) {
    $('#mensajes').html('');
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) == false) {
        $('#mensajes').html('Correo inválido');
    }
    return re.test(email);
}

$("#regist").on("click", function (event) {
    event.preventDefault();
    var name = $("input[name='user_name']").val();
    var ape = $("input[name='user_apellido']").val();
    var email = $("input[name='user_email']").val();
    var pas1 = $("input[name='user_password_new']").val();
    var pas2 = $("input[name='user_password_repeat']").val();
    var code = $("input[name='user_invitation']").val();
    $.post("https://go.ceosim.cl/register/register_action_mobile", { user_name: name, user_apellido: ape, user_email: email, user_password_new: pas1, user_password_repeat: pas2, user_invitation: code }).done(function (data) {
        var datas = JSON.parse(data);
        if (datas.value == true) {
            window.location.href = '../index.html';
        } else {
            console.log("error: " + datas.value);
        }
    });
});

function resetpass() {
    var email = $("input[name='user_name_or_email']").val();
    var captcha = $("input[name='captcha']").val();
    $.post("https://ceosim.cl/login/requestPasswordReset_action_mobile", { user_name_or_email: email, captcha: captcha }).done(function (data) {
        var datas = JSON.parse(data);
        if (datas.value == true) {
            $('#postpass').animate({ height: 'toggle' }, 400);
            $('#getpass').animate({ height: 'toggle' }, 800);
        } else {
            $('#mensajes').html('Error en solicitud');
        }
    });
}
function verifycode() {
    var code = $("input[name='codigo']").val();
    console.log("codigo: " + code);
    $('#getpass').animate({ height: 'toggle' }, 400);
    $('#newpass').animate({ height: 'toggle' }, 800);
}

function newpass() {
    if (vPassword()) {
        var pass1 = $("input[name='user_password_new']").val();
        var pass2 = $("input[name='user_password_repeat']").val();
        console.log("codigo: " + code);
        $.post("https://ceosim.cl/login/setNewPasswordMobile", { user_name: user_name, user_password_new: pass1, user_password_repeat: pass2 }).done(function (data) {
            var datas = JSON.parse(data);
            if (datas.value == true) {
                window.location.href = '../index.html';
            } else {
                $('#mensajes').html('Error en solicitud');
            }
        });
    }
}