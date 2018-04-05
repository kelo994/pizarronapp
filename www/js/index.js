var log = false;
var name = "eze.monsal@gmail.com";
var pass = "123456";

function gotologin() {
    window.location.href = 'pages/login.html';
}

function gotoreset() {
    window.location.href = 'resetpass.html';
}

function login() {
    var jqxhr = $.post("http://69.164.202.85:8000/api/login", { email: 'm.pinilla03@ufromail.cl', password: '123456' }, function (data) {
    })
        .done(function (data) {
            localStorage.token = data.token;
            localStorage.email = data.email;
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
    var jqxhr = $.post("http://69.164.202.85:8000/api/resetpassword", { email: 'eze.monsal@gmail.com' }, function (data) {

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