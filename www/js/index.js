var log = false;
var name = "f.acuna08@ufromail.cl";
var pass = "123456";

function gotologin() {
    window.location.href = 'pages/login.html';
}
function login() {
    var jqxhr = $.post("http://192.168.0.16/backend-pizarron/public/api/login", { email: 'f.acuna08@ufromail.cl', password: '123456' }, function () {
    })
        .done(function () {
            window.location.href = 'home.html';
        })
        .fail(function () {
            document.getElementById("errorlog").style.display = "block";
            navigator.notification.alert(
                'Nombre de usuario o contraseña incorrecta',  // message
                this.okCallBack,         // callback
                'Error al iniciar sesion',            // title
                'Entendido'                  // buttonName
            );
        });
}
function resetpass() {
    var jqxhr = $.post("http://192.168.0.16/backend-pizarron/public/api/resetpassword", { email: 'f.acuna08@ufromail.cl' }, function () {
    })
        .done(function () {
            window.location.href = 'login.html';
        })
        .fail(function () {
            document.getElementById("errorlog").style.display = "block";
            navigator.notification.alert(
                'Nombre de usuario o contraseña incorrecta',  // message
                this.okCallBack,         // callback
                'Error al iniciar sesion',            // title
                'Entendido'                  // buttonName
            );
        });
}