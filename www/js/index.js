var log = false;

$(window).on("load", function () {
    document.addEventListener("deviceready", setOverrideBackbutton, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
    $('.loading').fadeOut(3000);
    $('.loader').fadeOut(3000);
    $('.img-loading').fadeOut(3000);
});

function setOverrideBackbutton() {
    if (typeof device != "undefined" && device.platform == "Android") {
        navigator.app.overrideBackbutton(true);
    }
    document.addEventListener("backbutton", backButtonTap, true);
}

function onOnline() {
    app.initialize();
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
        'Tuvimos un problema con la conexión a internet', // message
        alertDismissed, // callback
        'Error Internet Conection', // title
        'Reintentar' // buttonName
    );
}

function inhere() {
    log = true;
}

function nothere() {
    log = false;
}

function backButtonTap() {
    if (log == true) {
        navigator.notification.confirm(
            '¿Estás seguro que quieres salir de la partida?',  // message
            onExit,              // callback to invoke with index of button pressed
            'Confirmar',            // title
            ['Si', 'No']             // buttonLabels
        );
    }
}

function onExit(buttonIndex) {
    if (buttonIndex == 2) {
    } else {
        navigator.app.exitApp();
    }
}

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        this.receivedEvent('login');
    },
    accederLogin: function () {
        var name = document.getElementById('exampleInputEmail').value;
        var pass = document.getElementById('exampleInputPassword').value;
        var tok = document.getElementById('check').value;

        if ((name == "eze.monsal@gmail.com") && (pass = "asdfas")) {
            window.location.href = 'home.html';
        } else {
            document.getElementById("errorlog").style.display = "block";
            navigator.notification.alert(
                'Nombre de usuario o contraseña incorrecta',  // message
                this.okCallBack,         // callback
                'Error al iniciar sesion',            // title
                'bye'                  // buttonName
            );
        }


    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var networkState = navigator.connection.type;
        /*$.get("https://ceosim.cl/login/islogin", function (data) {
            if (data == true && log == true) {
                document.getElementById("login").innerHTML = '<button class="btn btn-azul w-100" onclick="app.home()">' +
                    'Entrar</button>';
                //app.dataDashboard();
            } else {

            }
        });*/
    },
    okCallBack: function () {
        //nada
    },
    resetpass: function () {
        window.location.href = 'pages/resetpass.html';
    },
    logout: function (buttonIndex) {
        if (buttonIndex == 2) {
        } else {
        }
    },
    confirmlogout: function () {
        navigator.notification.confirm(
            '¿Estás seguro que quieres cerrar la sesión?',  // message
            this.logout,              // callback to invoke with index of button pressed
            'Confirmar',            // title
            ['Si', 'No']             // buttonLabels
        );
    },
    registrar: function () {
        window.location.href = 'pages/register.html';
    },
    login: function () {
        window.location.href = 'pages/login.html';
    },
    home: function () {
        log = 1;
        window.location.href = 'pages/home.html';
    }
};

app.initialize();