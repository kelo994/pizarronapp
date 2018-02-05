//variables
var prodCapacity, loans, research, xpagar, topay, automation;
//Marketing Revisar PPFIN01 y PVFIN01
var CO01 = 0, CO04Random = 0, CO05 = 0, CO02 = 0, PPFIN01 = 0, CO03 = 0, PVFIN01 = 0, CO06SIM = 0, CO06 = 0,
    CO07SIM = 0, CO07ASIM = 0, CO08SIM = 0, COXXSIM = 0, CO09SIM = 0;

function mCO01() {
    CO01 = document.getElementById("CO01").value;
    document.getElementById("CO01").value = addThousands(Number(CO01));
    calcularCO06();
}

function mCO04Random() {
    CO04Random = document.getElementById("CO04Random").value;
}

function mCO05() {
    CO05 = document.getElementById("CO05").value;
    PR01 = CO05;
    document.getElementById("CO05").value = addThousands(CO05);
    calcularCO06();
}

function mCO02() { CO02 = document.getElementById("CO02").value; mCO08SIM(); }

function mPPFIN01() {
    PPFIN01 = document.getElementById("PPFIN01").value;
    document.getElementById("PPFIN01").value = addThousands(PPFIN01);
}

function mCO03() { CO03 = document.getElementById("CO03").value; mCO08SIM(); }

function mPVFIN01() {
    PVFIN01 = document.getElementById("PVFIN01").value;
    document.getElementById("PVFIN01").value = addThousands(Number(PVFIN01));
}

function mCO06SIM() {
    CO06SIM = document.getElementById("CO06SIM").value;
    calcularCO7SIM(); calcularCO7ASIM(); calcularCO08();
}

function mCO06() {
    CO06 = document.getElementById("CO06").value;
}

function mCO07SIM() {
    CO07SIM = document.getElementById("CO07SIM").value;
    calcularCO7ASIM(); calcularCO08();
}

function mCO07ASIM() {
    CO07ASIM = document.getElementById("CO07ASIM").value;
    calcularCO7SIM(); calcularCO08(); mCO08SIM();
}

function mCO08SIM() {
    var COXX = Number(CO02) + Number(CO03);
    if (!isNaN(COXX)) {
        $('#COXXSIM').val(COXX).trigger("focusout");
    }
    else {
        $('#COXXSIM').val('0');
    }
    var CO09 = Number(CO08SIM) - Number(COXXSIM);

    if (!isNaN(CO09)) {
        CO09SIM = CO09;
    }
    else {
        CO09SIM = 0;
    }
}

function mCOXXSIM() { COXXSIM = document.getElementById("COXXSIM"); } function mCO09SIM() { CO09SIM = document.getElementById("CO09SIM"); }
//presupuesto de promocion
var PP02M = 0, PP03M = 0, PP04M = 0, PP05M = 0, PP06M = 0, PP07M = 0,
    PP02G = 0, PP03G = 0, PP04G = 0, PP05G = 0, PP06G = 0, PP07G = 0,
    PP02B = 0, PP03B = 0, PP04B = 0, PP05B = 0, PP06B = 0, PP07B = 0,
    PP08A = 0, PP08B = 0, PP08C = 0, PP08D = 0, PP08E = 0, PP09 = 0;

function mPP02M() {
    PP07M = Number(PP07M) - Number(PP02M);
    PP02M = document.getElementById("PP02M").value;
    document.getElementById("PP02M").value = addThousands(Number(PP02M));
    PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07M();
    mPP08A();
}

function mPP03M() {
    PP07M = Number(PP07M) - Number(PP03M);
    PP03M = document.getElementById("PP03M").value;
    document.getElementById("PP03M").value = addThousands(Number(PP03M));
    PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07M();
    mPP08B();
}

function mPP04M() {
    PP07M = Number(PP07M) - Number(PP04M);
    PP04M = document.getElementById("PP04M").value;
    document.getElementById("PP04M").value = addThousands(Number(PP04M));
    PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07M();
    mPP08C();
}

function mPP05M() {
    PP07M = Number(PP07M) - Number(PP05M);
    PP05M = document.getElementById("PP05M").value;
    document.getElementById("PP05M").value = addThousands(Number(PP05M));
    PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07M();
    mPP08D();
}

function mPP06M() {
    PP07M = Number(PP07M) - Number(PP06M);
    PP06M = document.getElementById("PP06M").value;
    document.getElementById("PP06M").value = addThousands(Number(PP06M));
    PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07M();
    mPP08A();
}

function mPP07M() {
    document.getElementById("PP07M").value = addThousands(Number(PP07M));
}

function mPP02G() {
    PP07G = Number(PP07G) - Number(PP02G);
    PP02G = document.getElementById("PP02G").value;
    document.getElementById("PP02G").value = addThousands(Number(PP02G));
    PP07G = Number(PP02G) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07G();
    mPP08A();
}

function mPP03G() {
    PP07G = Number(PP07G) - Number(PP03G);
    PP03G = document.getElementById("PP03G").value;
    document.getElementById("PP03G").value = addThousands(Number(PP03G));
    PP07G = Number(PP02G) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07G();
    mPP08B();
}

function mPP04G() {
    PP07G = Number(PP07G) - Number(PP04G);
    PP04G = document.getElementById("PP04G").value;
    document.getElementById("PP04G").value = addThousands(Number(PP04G));
    PP07G = Number(PP02G) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07G();
    mPP08C();
}

function mPP05G() {
    PP07G = Number(PP07G) - Number(PP05G);
    PP05G = document.getElementById("PP05G").value;
    document.getElementById("PP05G").value = addThousands(Number(PP05G));
    PP07G = Number(PP02G) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07G();
    mPP08D();
}

function mPP06G() {
    PP07G = Number(PP07G) - Number(PP06G);
    PP06G = document.getElementById("PP06G").value;
    document.getElementById("PP06G").value = addThousands(Number(PP06G));
    PP07G = Number(PP02G) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
    mPP07G();
    mPP08E();
}

function mPP07G() {
    document.getElementById("PP07G").value = addThousands(Number(PP07G));
}

function mPP02B() {
    PP07B = Number(PP07B) - Number(PP02B);
    PP02B = document.getElementById("PP02B").value;
    document.getElementById("PP02B").value = addThousands(Number(PP02B));
    PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
    mPP07B();
    mPP08A();
}

function mPP03B() {
    PP07B = Number(PP07B) - Number(PP03B);
    PP03B = document.getElementById("PP03B").value;
    document.getElementById("PP03B").value = addThousands(Number(PP03B));
    PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
    mPP07B();
    mPP08B();
}

function mPP04B() {
    PP07B = Number(PP07B) - Number(PP04B);
    PP04B = document.getElementById("PP04B").value;
    document.getElementById("PP04B").value = addThousands(Number(PP04B));
    PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
    mPP07B();
    mPP08C();
}

function mPP05B() {
    PP07B = Number(PP07B) - Number(PP05B);
    PP05B = document.getElementById("PP05B").value;
    document.getElementById("PP05B").value = addThousands(Number(PP05B));
    PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
    mPP07B();
    mPP08D();
}
function mPP06B() {
    PP07B = Number(PP07B) - Number(PP06B);
    PP06B = document.getElementById("PP06B").value;
    document.getElementById("PP06B").value = addThousands(Number(PP06B));
    PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
    mPP07B();
    mPP08E();
}
function mPP07B() {
    document.getElementById("PP07B").value = addThousands(Number(PP07B));
}
function mPP08A() {
    PP08A = Number(PP02M) + Number(PP02B) + Number(PP02G);
    document.getElementById("PP08A").value = addThousands(Number(PP08A));
    mPP09();
}
function mPP08B() {
    PP08B = Number(PP03M) + Number(PP03B) + Number(PP03G);
    document.getElementById("PP08B").value = addThousands(Number(PP08B));
    mPP09();
}
function mPP08C() {
    PP08C = Number(PP04M) + Number(PP04B) + Number(PP04G);
    document.getElementById("PP08C").value = addThousands(Number(PP08C));
    mPP09();
}
function mPP08D() {
    PP08D = Number(PP05M) + Number(PP05B) + Number(PP05G);
    document.getElementById("PP08D").value = addThousands(Number(PP08D));
    mPP09();
}
function mPP08E() {
    PP08E = Number(PP06M) + Number(PP06B) + Number(PP06G);
    document.getElementById("PP08E").value = addThousands(Number(PP08E));
    mPP09();
}
function mPP09() {
    PP09 = Number(PP08A) + Number(PP08B) + Number(PP08C) + Number(PP08D) + Number(PP08E);
    document.getElementById("PP09").value = addThousands(Number(PP09));
}

//presupuesto de ventas
var PV02M = 0, PV03M = 0, PV04M = 0, PV05M = 0, PV06M = 0,
    PV02G = 0, PV03G = 0, PV04G = 0, PV05G = 0, PV06G = 0,
    PV02B = 0, PV03B = 0, PV04B = 0, PV05B = 0, PV06B = 0,
    PV07A = 0, PV07B = 0, PV07C = 0, PV07D = 0, PV08 = 0;

function mPV02M() {
    PV02M = document.getElementById("PV02M").value;
    document.getElementById("PV02M").value = addThousands(Number(PV02M));
    PV06M = Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M);
    mPV06M();
    mPV07A();
}
function mPV03M() {
    PV03M = document.getElementById("PV03M").value;
    document.getElementById("PV03M").value = addThousands(Number(PV03M));
    PV06M = Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M);
    mPV06M();
    mPV07B();
}
function mPV04M() {
    PV04M = document.getElementById("PV04M").value;
    document.getElementById("PV04M").value = addThousands(Number(PV04M));
    PV06M = Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M);
    mPV06M();
    mPV07C();
}
function mPV05M() {
    PV05M = document.getElementById("PV05M").value;
    document.getElementById("PV05M").value = addThousands(Number(PV05M));
    PV06M = Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M);
    mPV06M();
    mPV07D();
}
function mPV06M() {
    document.getElementById("PV06M").value = addThousands(Number(PV06M));
}

function mPV02G() {
    PV02G = document.getElementById("PV02G").value;
    document.getElementById("PV02G").value = addThousands(Number(PV02G));
    PV06G = Number(PV02G) + Number(PV03) + Number(PV04) + Number(PV05);
    mPV06G();
    mPV07A();
}
function mPV03G() {
    PV03G = document.getElementById("PV03G").value;
    document.getElementById("PV03G").value = addThousands(Number(PV03G));
    PV06G = Number(PV02G) + Number(PV03) + Number(PV04) + Number(PV05);
    mPV06G();
    mPV07B();
}
function mPV04G() {
    PV04G = document.getElementById("PV04G").value;
    document.getElementById("PV04G").value = addThousands(Number(PV04G));
    PV06G = Number(PV02G) + Number(PV03) + Number(PV04) + Number(PV05);
    mPV06G();
    mPV07C();
}
function mPV05G() {
    PV05G = document.getElementById("PV05G").value;
    document.getElementById("PV05G").value = addThousands(Number(PV05G));
    PV06G = Number(PV02G) + Number(PV03) + Number(PV04) + Number(PV05);
    mPV06G();
    mPV07D();
}
function mPV06G() {
    document.getElementById("PV06G").value = addThousands(Number(PV06G));
}

function mPV02B() {
    PV02B = document.getElementById("PV02B").value;
    document.getElementById("PV02B").value = addThousands(Number(PV02B));
    PV06B = Number(PV02B) + Number(PV03B) + Number(PV04B) + Number(PV05B);
    mPV06B();
    mPV07A();
}
function mPV03B() {
    PV03B = document.getElementById("PV03B").value;
    document.getElementById("PV03B").value = addThousands(Number(PV03B));
    PV06B = Number(PV02B) + Number(PV03B) + Number(PV04B) + Number(PV05B);
    mPV06B();
    mPV07B();
}
function mPV04B() {
    PV04B = document.getElementById("PV04B").value;
    document.getElementById("PV04B").value = addThousands(Number(PV04B));
    PV06B = Number(PV02B) + Number(PV03B) + Number(PV04B) + Number(PV05B);
    mPV06B();
    mPV07C();
}
function mPV05B() {
    PV05B = document.getElementById("PV05B").value;
    document.getElementById("PV05B").value = addThousands(Number(PV05B));
    PV06B = Number(PV02B) + Number(PV03B) + Number(PV04B) + Number(PV05B);
    mPV06B();
    mPV07D();
}
function mPV06B() {
    document.getElementById("PV06B").value = addThousands(Number(PV06B));
}
function mPV07A() {
    PV07A = Number(PV02M) + Number(PV02B) + Number(PV02G);
    document.getElementById("PV07A").value = addThousands(Number(PV07A));
    mPV08();
}
function mPV07B() {
    PV07B = Number(PV03M) + Number(PV03B) + Number(PV03G);
    document.getElementById("PV07B").value = addThousands(Number(PV07B));
    mPV08();
}
function mPV07C() {
    PV07C = Number(PV04M) + Number(PV04B) + Number(PV04G);
    document.getElementById("PV07C").value = addThousands(Number(PV07C));
    mPV08();
}
function mPV07D() {
    PV07D = Number(PV05M) + Number(PV05B) + Number(PV05G);
    document.getElementById("PV07D").value = addThousands(Number(PV07D));
    mPV08();
}
function mPV08() {
    PV08 = Number(PV07A) + Number(PV07B) + Number(PV07C) + Number(PV07D);
    document.getElementById("PV08").value = addThousands(Number(PV08));
}
//Finanzas
var FIN18 = 0, FIN19 = 0, FIN03 = 0, FIN06 = 0, FIN08 = 0, FIN04 = 0,
    FIN07 = 0, FIN09 = 0, FIN10 = 0, FIN11 = 0, FIN12 = 0, FIN15 = 0, FIN13 = 0, FIN14 = 0, PVFIN01 = 0, prestamo_corto_plazo = 0, prestamo_largo_plazo = 0;

function FIN18() { FIN18 = document.getElementById("FIN18"); } function FIN19() { FIN19 = document.getElementById("FIN19"); } function FIN03() { FIN03 = document.getElementById("FIN03"); } function FIN06() { FIN06 = document.getElementById("FIN06"); } function FIN08() { FIN08 = document.getElementById("FIN08"); } function FIN04() { FIN04 = document.getElementById("FIN04"); } function FIN07() { FIN07 = document.getElementById("FIN07"); } function FIN09() { FIN09 = document.getElementById("FIN09"); } function FIN10() { FIN10 = document.getElementById("FIN10"); } function PVFIN01() { PVFIN01 = document.getElementById("PVFIN01"); }
//movimientos de efectivo previsto
var EFE01 = 0, EFE02 = 0, EFE03 = 0, EFE04 = 0, EFE05 = 0, EFE06 = 0, EFE07 = 0, EFE08 = 0, EFE09 = 0,
    EFE10 = 0, EFE11 = 0, EFE12 = 0, EFE13 = 0, EFE14 = 0, EFE15 = 0, EFE16 = 0, EFE17 = 0, EFE18 = 0,
    EFE19 = 0, EFE20 = 0, EFE21 = 0, EFE22 = 0, EFE23 = 0, EFE24 = 0, EFE25 = 0, EFE26 = 0, EFE27 = 0, EFE28 = 0;

function EFE01() { EFE01 = document.getElementById("EFE01"); } function EFE02() { EFE02 = document.getElementById("EFE02"); } function EFE03() { EFE03 = document.getElementById("EFE03"); } function EFE04() { EFE04 = document.getElementById("EFE04"); } function EFE05() { EFE05 = document.getElementById("EFE05"); } function EFE06() { EFE06 = document.getElementById("EFE06"); } function EFE07() { EFE07 = document.getElementById("EFE07"); } function EFE08() { EFE08 = document.getElementById("EFE08"); } function EFE09() { EFE09 = document.getElementById("EFE09"); } function EFE10() { EFE10 = document.getElementById("EFE10"); }
function EFE11() { EFE11 = document.getElementById("EFE11"); } function EFE12() { EFE12 = document.getElementById("EFE12"); } function EFE13() { EFE13 = document.getElementById("EFE13"); } function EFE14() { EFE14 = document.getElementById("EFE14"); } function EFE15() { EFE15 = document.getElementById("EFE15"); } function EFE16() { EFE16 = document.getElementById("EFE16"); } function EFE17() { EFE17 = document.getElementById("EFE17"); } function EFE18() { EFE18 = document.getElementById("EFE18"); } function EFE19() { EFE19 = document.getElementById("EFE19"); } function EFE20() { EFE20 = document.getElementById("EFE20"); }
function EFE21() { EFE21 = document.getElementById("EFE21"); } function EFE22() { EFE22 = document.getElementById("EFE22"); } function EFE23() { EFE23 = document.getElementById("EFE23"); } function EFE24() { EFE24 = document.getElementById("EFE24"); } function EFE25() { EFE25 = document.getElementById("EFE25"); } function EFE26() { EFE26 = document.getElementById("EFE26"); }

//Produccion
var PR01 = 0, PR02 = 0, PR03 = 0, PR05 = 0, PR04 = 0, PR06 = 0, PR07 = 0, PR08 = 0, PR10 = 0, PR11 = 0, PR12 = 0,
    PR13 = 0, PR14 = 0;

function PR01() { PR01 = document.getElementById("PR01"); } function PR02() { PR02 = document.getElementById("PR02"); } function PR03() { PR03 = document.getElementById("PR03"); } function PR04() { PR04 = document.getElementById("PR04"); } function PR05() { PR05 = document.getElementById("PR05"); } function PR06() { PR06 = document.getElementById("PR06"); } function PR07() { PR07 = document.getElementById("PR07"); } function PR08() { PR08 = document.getElementById("PR08"); } function PR10() { PR10 = document.getElementById("PR10"); } function PR13() { PR13 = document.getElementById("PR13"); } function PR14() { PR14 = document.getElementById("PR14"); }

//Reportes
var RR01MAJ = 0, RR01GAJ = 0, RR01BAJ = 0, RR01 = 0, RR02M = 0, RR02G = 0, RR02B = 0, RR02 = 0;
//Indicadores
var RA01 = 0, RA02 = 0, RA03 = 0, RA04 = 0, RA05 = 0, RA06 = 0, RA07 = 0, RA08 = 0, RA09 = 0,
    RA10 = 0, RA11 = 0, RA12 = 0, RA13 = 0, RA18 = 0, RA17 = 0;
//Balance de Situación - IFRS
var BS01 = 0, BS01B = 0, BS01C = 0, BS02 = 0, BS03 = 0, BS04 = 0, BS05 = 0, BS06A = 0, BS06B = 0,
    BS07 = 0, BS08 = 0, BS09 = 0, BS10 = 0, BS11 = 0, BS12 = 0, BS15 = 0, BS16 = 0, BS17 = 0, BS18 = 0,
    BS19 = 0, BS20 = 0, BS22 = 0, BS23 = 0, BS24 = 0, BS25 = 0, BS26 = 0, BS27 = 0, BS28 = 0, BS30 = 0,
    BS31 = 0, BS32 = 0, BS33 = 0, BS34 = 0, BS35 = 0;
//Estado de Resultados - IFRS
var ER01 = 0, ER02 = 0, ER03 = 0, ER04 = 0, ER05 = 0, ER06 = 0, ER07 = 0, ER08 = 0, ER09 = 0, ER10 = 0,
    ER11 = 0, ER12 = 0, ER13 = 0, ER14 = 0, ER15 = 0, ER16 = 0, ER17 = 0, ER19 = 0;

var CONFIG18 = 0, CONFIG19 = 0, CONFIG57 = 0, CONFIG22A = 0, CONFIG23A = 0, CONFIG23B = 0;

var roundState, workerTime, workerUpdate, popGuardar, taskAction;
var CO07 = 0, PR16 = 0, FIN14 = 0, FIN16 = 0, status = 0, statusf = 0, imenu = 0, modal = 0;

//obejtivos
var readyM = 0, readyF = 0, readyP = 0;

$(document).ready(function () {
    ActualizarDatos();
    //cargar los datos base de mercado
    $.getJSON("https://ceosim.cl/market/getmarket/" + localStorage.market, function (data) {
        $('#nombreMercado').html(data.mercado.nombre);
        $('#dificultadJuego').html(data.mercado.dificultad);

        CONFIG19 = data.finanzas.tasaInteresLP;
        CONFIG19 = String(CONFIG19).replace(/\,/g, '.');
        CONFIG19 = parseInt(CONFIG19);
        CONFIG18 = data.finanzas.tasaInteresCP;
        CONFIG18 = String(CONFIG18).replace(/\,/g, '.');
        CONFIG18 = parseFloat(CONFIG18);

        //produccion
        CONFIG57 = data.produccion.costosDistrib;
        CONFIG22A = data.produccion.costosUnidCapProd;
        CONFIG23A = data.produccion.costosFijos;
        CONFIG23B = data.produccion.costoAutomatizacion;

        if (currendRound == 1) {
            PR02 = data.produccion.invDisponible;
            PR13 = data.produccion.indAutomatizacion;
        }

        calcularCO7SIM();
        calcularCO7ASIM();

        $.getJSON("https://ceosim.cl/market/getproducts/" + localStorage.market, function (data) {
            $.each(data, function (key, val) {
                if (val.codigo == product) {
                    $('#nombreProducto').html(val.nombre);

                    PR07 = val.costoMaterial;
                    PR07 += "";
                    //corregir error de , decimal
                    PR07 = PR07.replace(",", ".");
                    PR07 = Number(PR07) * 1000;
                    PR06 = val.costoMDO;
                    PR06 += "";
                    PR06 = PR06.replace(",", ".");
                    PR06 = Number(PR06) * 1000;
                    PR08 = PR06 + PR07;
                    EFE08 = EFE._08(PR04, PR07);
                    EFE09 = EFE._09(PR06, PR04);

                    calcularCO7SIM();
                    var cEach = 0;
                    ActualizarDatos();
                }
            });
        });

    });
});
currendRound = 0;
roundState = 0;
var flag = 0;
workerTime = setInterval(tiempo, 1000);
var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

function openNav() {
    statusf = status;
    status = 9;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("matchDetail").style.position = "fixed";

}

function closeNav() {
    status = statusf;
    document.getElementById("overlay").style.display = "none";
    document.getElementById("matchDetail").style.position = "";
    aria();
}

function closeNavOver() {
    status = statusf;
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("matchDetail").style.position = "";
    aria();
}

function aria() {
    document.getElementById("menu1").setAttribute("aria-expanded", false);
    $('#menu1').removeClass("show").removeClass("in");
    document.getElementById("menu2").setAttribute("aria-expanded", false);
    $('#menu2').removeClass("show").removeClass("in");
    document.getElementById("menu3").setAttribute("aria-expanded", false);
    $('#menu3').removeClass("show").removeClass("in");
    document.getElementById("menu4").setAttribute("aria-expanded", false);
    $('#menu4').removeClass("show").removeClass("in");
    document.getElementById("menu5").setAttribute("aria-expanded", false);
    $('#menu5').removeClass("show").removeClass("in");
}

function finalmatch() {
    modal = 4;
    $("#final-match").load("../pages/resultados.html");
    $.getJSON('https://ceosim.cl/team/datateam/' + localStorage.id_team + '/' + localStorage.id_match, function (data) {
        $('#teamName').html(data.teams.name);
        $('#puntaje').html('<p class="txt-azul m-0" style="font-size:1.5em" id="puntaje">' + data.teams.points_match + '</p>');
        $('#nota').html('<p class="txt-azul m-0" style="font-size:1.5em" id="puntaje">' + data.teams.calificacion + '</p>');
        $('#readyM').html(readyM);
        $('#readyF').html(readyF);
        $('#readyP').html(readyP);
    });
}

function mostrarRanking() {
    modal = 2;
    $("#final-rank").load("../pages/ranking.html");
}

function mostrartimplemen() {
    $("#t-imple").load("../pages/implementacion.html");
}

$(function () {
    $("#matchDetail").load("../pages/marketing.html");
});
function buildMarketing() {
    status = 0;
    ActualizarDatos();
    $("#matchDetail").load("../pages/marketing.html");
}

function saveMarketing() {
    var promotion = {
        PP03M: parseInt(document.getElementById('PP03M').value),
        PP04M: parseInt(document.getElementById('PP04M').value),
        PP05M: parseInt(document.getElementById('PP05M').value),
        PP06M: parseInt(document.getElementById('PP06M').value),
        PP02M: parseInt(document.getElementById('PP02M').value),
        PP02G: parseInt(document.getElementById('PP02G').value),
        PP03G: parseInt(document.getElementById('PP03G').value),
        PP04G: parseInt(document.getElementById('PP04G').value),
        PP05G: parseInt(document.getElementById('PP05G').value),
        PP06G: parseInt(document.getElementById('PP06G').value),
        PP02B: parseInt(document.getElementById('PP02B').value),
        PP03B: parseInt(document.getElementById('PP03B').value),
        PP04B: parseInt(document.getElementById('PP04B').value),
        PP05B: parseInt(document.getElementById('PP05B').value),
        PP06B: parseInt(document.getElementById('PP06B').value),
        PPFIN01: 0
    };

    var sales = {
        PV02M: parseInt(document.getElementById('PV02M').value),
        PV03M: parseInt(document.getElementById('PV03M').value),
        PV04M: parseInt(document.getElementById('PV04M').value),
        PV05M: parseInt(document.getElementById('PV05M').value),
        PV02G: parseInt(document.getElementById('PV02G').value),
        PV03G: parseInt(document.getElementById('PV03G').value),
        PV04G: parseInt(document.getElementById('PV04G').value),
        PV05G: parseInt(document.getElementById('PV05G').value),
        PV02B: parseInt(document.getElementById('PV02B').value),
        PV03B: parseInt(document.getElementById('PV03B').value),
        PV04B: parseInt(document.getElementById('PV04B').value),
        PV05B: parseInt(document.getElementById('PV05B').value),
        PPFIN01: 0
    };

    var marketing = {
        CO01: parseInt(document.getElementById('CO01').value),
        CO05: parseInt(document.getElementById('CO05').value),
        promotion: promotion,
        sales: sales,
    };

    var JsonData = JSON.stringify(marketing);

    $.post("https://ceosim.cl/match/saveround", { match: localStorage.id_match, team: localStorage.id_team, round: localStorage.ronda_actual, key: "marketing", data: JsonData });

}

function buildFinance() {
    status = 3;
    ActualizarDatos();
    $("#matchDetail").load("../pages/finance.html");
}

function saveFinance() {
    //$("#mensajeGuardar").addClass("datosGuardados-40");

    var finance = {
        FIN07: document.getElementById('FIN07').value,
        FIN09: document.getElementById('FIN09').value,
        FIN10: document.getElementById('FIN10').value,
        FIN13: 0, //document.getElementById('FIN13').value,
        FIN13C: 0,//document.getElementById('FIN13C').value,
        FIN15: 0, //document.getElementById('FIN15').value,
        FIN16: 0,//document.getElementById('FIN16').value,
        FIN18: document.getElementById('FIN18').value,
        FIN19: document.getElementById('FIN19').value
    };

    var JsonData = JSON.stringify(finance);

    $.post("https://ceosim.cl/match/saveround", { match: localStorage.id_match, team: localStorage.id_team, round: localStorage.ronda_actual, key: "finance", data: JsonData });
}
function buildProducction() {
    status = 5;
    ActualizarDatos();
    $("#matchDetail").load("../pages/produccion.html");
}

function saveProduccion() {
    //$("#mensajeGuardar").addClass("datosGuardados-40");
    var production = {
        PR02: document.getElementById('PR02').value,
        PR03: document.getElementById('PR03').value,
        PR05: document.getElementById('PR05').value,
        PR10: document.getElementById('PR10').value,
        PR11: document.getElementById('PR11').value,
        PR12: document.getElementById('PR12').value,
        PR13: document.getElementById('PR13').value,
        PR14: document.getElementById('PR14').value,
        PR16: 0,
        PR06: document.getElementById('PR06').value,
        PR06B: PR06B(),
        PR07: document.getElementById('PR07').value
    };

    var JsonData = JSON.stringify(production);

    $.post("https://ceosim.cl/match/saveround", { match: localStorage.id_match, team: localStorage.id_team, round: localStorage.ronda_actual, key: "production", data: JsonData });

}

function buildID() {
    status = 10;
    $("#matchDetail").load("../pages/id.html");

    $.getJSON("https://ceosim.cl/market/getproducts/" + localStorage.market, function (data) {
        $.each(data, function (key, val) {
            if (val.codigo == product) {
                var cEach = 0;
                var ids = '<div class="swiper-container"><div class="swiper-wrapper" style="min-height:90%">';
                $.each(val.desarrollos, function (key, des) {

                    ids += '<div class="swiper-slide pb-5 mb-3"><div class="card text-center bg-outline-azul">' +
                        '<div class="card-header bg-azul m-0 p-0"><p class="txt-blanco m-0 my-1" style="font-size:0.938em">' + des.nombre + '</p></div>' +
                        '<div class="card-block"><img src="../img/smart-block.jpg" width="100%" height="150"></div>' +
                        '<div class="card-footer text-muted m-0 p-0 scroll-text" style="background-color:#fff; min-height:6.250em; max-height: 6.250em"><p class="txt-azul m-0 my-1 px-1" style="font-size:0.625em">' + des.descripcion + '</p></div>' +
                        '<div class="card-footer text-muted p-0" style="background-color:#fff">' +
                        '<ul class="list-inline mb-0 txt-azul text-center ">' +
                        '<li class="list-inline-item align-middle bg-blanco m-0 p-0 mr-1">' +
                        '<i class="fa fa-cogs"></i> ' + des.tiempoImpl + ' <i class="fa fa-check" aria-hidden="true" style="color:#38E327;';
                    if (Number(currendRound) < Number(des.tiempoImpl)) {
                        ids += 'display:none"';
                    } else {
                        ids += '"';
                    }
                    ids += '></i></li>' +
                        '<li class="list-inline-item align-middle bg-blanco m-0 p-0 mr-1">' +
                        '<i class="fa fa-industry"></i> ' + addThousands(des.reqPlanta) + ' <i class="fa fa-check" aria-hidden="true" style="color:#38E327;';
                    if (Number(PR10) < Number(des.reqPlanta)) {
                        ids += 'display:none"';
                    } else {
                        ids += '"';
                    }
                    ids += '></i></li>' +
                        '<li class="list-inline-item align-middle bg-blanco m-0 p-0 mr-1">' +
                        '<i class="fa fa-dashboard"></i> ' + des.reqPorcentajeAuto + ' <i class="fa fa-check" aria-hidden="true" style="color:#38E327;';
                    if (Number(PR13) < Number(des.reqPorcentajeAuto)) {
                        ids += 'display:none"';
                    } else {
                        ids += '"';
                    }
                    ids += '></i></li>' +
                        '<li class="list-inline-item align-middle bg-blanco m-0 p-0 mr-1">' +
                        '<i class="fa fa-usd"></i> ' + addThousands(des.importe) + ' <i class="fa fa-check" aria-hidden="true" style="color:#38E327;'
                    if (Number(BS01) < Number(des.importe)) {
                        ids += 'display:none"';
                    } else {
                        ids += '"';
                    }
                    ids += '></i></li></ul></div>' +
                        '<div class="card-footer text-muted bg-azul p-0">' +
                        '<button class="btn btn-azul btn-lg pt-1 pb-1 p-0 w-100" disabled  data-id="' + cEach + '">' +
                        '<i class="fa fa-fw fa-shopping-cart"></i> Adquirir</button></div></div></div>';
                    cEach++;

                });
                ids += '</div><div class="swiper-pagination pb-3"></div></div>' +
                    '<script>var swiper = new Swiper(".swiper-container", {slidesPerView: 1,spaceBetween: 30,loop: false,pagination: {' +
                    'el: ".swiper-pagination",clickable: true,},navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",' +
                    '},});</script>';

                $('#investigaciones').append(ids);
                tryBuyResearch();
            }
        });
    });
}

function tiempo() {

    $.getJSON("https:ceosim.cl/match/time/" + localStorage.id_match, function (data) {
        if (data.estado == 1) {
            currendRound = data.ronda;

            $('#tiempo-ronda').html('<p class="" style="width:30%; font-size: 12px;"><small class="tiempo">Pausado</small></p>');
            document.getElementById("ronda-actual").innerHTML = " " + currendRound;
            document.getElementById("dinero-actual").innerHTML = " " + addThousands(Number(EFE._26(Number(EFE07), Number(EFE25))));
            localStorage.ronda_actual = currendRound;
        }
        else if (data.estado == 2) {
            //ActualizarDatos();

            $('#tiempo-ronda').html('<p style="width:30%"><small class="tiempo">Finalizada</small></p>');
            document.getElementById("ronda-actual").innerHTML = " " + currendRound;
            document.getElementById("dinero-actual").innerHTML = " " + addThousands(Number(EFE._26(Number(EFE07), Number(EFE25))));
            localStorage.ronda_actual = currendRound;
            $('#solicitarPrestamoCorto').prop("disabled", true);
            if (roundState == 0) {
                finalmatch();
            }
            $('#showGameOver').removeClass("d-none");
        }
        else {
            $('#tiempo-ronda').html(' <small class="tiempo pt-2">' + data.tiempo + '</small>');
            if (currendRound < data.ronda) {
                currendRound = data.ronda;
                console.log("cambio de ronda, N " + data.tiempo);
                localStorage.ronda_actual = currendRound;
                //document.getElementById("titleMatch").innerHTML = localStorage.team_name + "Ronda: " + currendRound;
                document.getElementById("ronda-actual").innerHTML = " " + currendRound;
                document.getElementById("dinero-actual").innerHTML = " " + addThousands(Number(EFE._26(Number(EFE07), Number(EFE25))));
                getDashboardMarketing();
                //getDashboardFinance();
                //getDashboardProduction();
                ActualizarDatos();

            }
            currendRound = data.ronda;
            $.getJSON('http://ceosim.cl/team/datateam/' + localStorage.id_team + '/' + localStorage.id_match, function (data) {

                if (data.teams.data) {
                    if (data.teams.data != "NULL") {
                        var load = JSON.parse(data.teams.data);
                        if (load) {
                            if (load.result == "CO01") {
                                CO01 = load.mensaje;
                            }
                            if (load.result == "CO05") {
                                CO05 = load.mensaje;
                            }
                            if (status == 0) {
                                document.getElementById("CO01").value = addThousands(Number(CO01));
                                document.getElementById("CO05").value = addThousands(Number(CO05));
                            }

                            if (load.result == "PP02M") {
                                PP02 = load.mensaje;
                            }
                            if (load.result == "PP02G") {
                                PP02 = load.mensaje;
                            }
                            if (load.result == "PP02B") {
                                PP02 = load.mensaje;
                            }
                            if (load.result == "PP03M") {
                                PP03 = load.mensaje;
                            }
                            if (load.result == "PP03G") {
                                PP03 = load.mensaje;
                            }
                            if (load.result == "PP03B") {
                                PP03 = load.mensaje;
                            }
                            if (load.result == "PP04M") {
                                PP04 = load.mensaje;
                            }
                            if (load.result == "PP04G") {
                                PP04 = load.mensaje;
                            }
                            if (load.result == "PP04B") {
                                PP04 = load.mensaje;
                            }
                            if (load.result == "PP05M") {
                                PP05 = load.mensaje;
                            }
                            if (load.result == "PP05G") {
                                PP05 = load.mensaje;
                            }
                            if (load.result == "PP05B") {
                                PP05 = load.mensaje;
                            }
                            if (load.result == "PP06M") {
                                PP06 = load.mensaje;
                            }
                            if (load.result == "PP06G") {
                                PP06 = load.mensaje;
                            }
                            if (load.result == "PP06B") {
                                PP06 = load.mensaje;
                            }
                            if (status == 1) {
                                document.getElementById("PP02M").value = addThousands(Number(PP02M));

                                document.getElementById("PP02G").value = addThousands(Number(PP02G));

                                document.getElementById("PP02B").value = addThousands(Number(PP02B));

                                document.getElementById("PP03M").value = addThousands(Number(PP03M));

                                document.getElementById("PP03G").value = addThousands(Number(PP03G));

                                document.getElementById("PP03B").value = addThousands(Number(PP03B));

                                document.getElementById("PP04M").value = addThousands(Number(PP04M));

                                document.getElementById("PP04G").value = addThousands(Number(PP04G));

                                document.getElementById("PP04B").value = addThousands(Number(PP04B));

                                document.getElementById("PP05M").value = addThousands(Number(PP05M));

                                document.getElementById("PP05G").value = addThousands(Number(PP05G));

                                document.getElementById("PP05B").value = addThousands(Number(PP05B));

                                document.getElementById("PP06M").value = addThousands(Number(PP06M));

                                document.getElementById("PP06G").value = addThousands(Number(PP06G));

                                document.getElementById("PP06B").value = addThousands(Number(PP06B));
                            }

                            if (load.result == "PV02M") {
                                PV02 = load.mensaje;
                            }
                            if (load.result == "PV02G") {
                                PV02 = load.mensaje;
                            }
                            if (load.result == "PV02B") {
                                PV02 = load.mensaje;
                            }
                            if (load.result == "PV03M") {
                                PV03 = load.mensaje;
                            }
                            if (load.result == "PV03G") {
                                PV03 = load.mensaje;
                            }
                            if (load.result == "PV03B") {
                                PV03 = load.mensaje;
                            }
                            if (load.result == "PV04M") {
                                PV04 = load.mensaje;
                            }
                            if (load.result == "PV04G") {
                                PV04 = load.mensaje;
                            }
                            if (load.result == "PV04B") {
                                PV04 = load.mensaje;
                            }
                            if (load.result == "PV05M") {
                                PV05 = load.mensaje;
                            }
                            if (load.result == "PV05G") {
                                PV05 = load.mensaje;
                            }
                            if (load.result == "PV05B") {
                                PV05 = load.mensaje;
                            }
                            if (status == 2) {
                                document.getElementById("PV02M").value = addThousands(Number(PV02M));
                                document.getElementById("PV02G").value = addThousands(Number(PV02G));
                                document.getElementById("PV02B").value = addThousands(Number(PV02B));
                                document.getElementById("PV03M").value = addThousands(Number(PV03M));
                                document.getElementById("PV03G").value = addThousands(Number(PV03G));
                                document.getElementById("PV03B").value = addThousands(Number(PV03B));
                                document.getElementById("PV04M").value = addThousands(Number(PV04M));
                                document.getElementById("PV04G").value = addThousands(Number(PV04G));
                                document.getElementById("PV04B").value = addThousands(Number(PV04B));
                                document.getElementById("PV05M").value = addThousands(Number(PV05M));
                                document.getElementById("PV05G").value = addThousands(Number(PV05G));
                                document.getElementById("PV05B").value = addThousands(Number(PV05B));
                            }
                            if (load.result == "FIN18") {
                                FIN18 = load.mensaje;
                            }
                            if (load.result == "FIN19") {
                                FIN19 = load.mensaje;
                            }
                            if (load.result == "FIN10") {
                                FIN10 = load.mensaje;
                            }
                            if (status == 3) {

                                document.getElementById("FIN11").value = addThousands(Number(FIN11));
                                document.getElementById("FIN13").value = addThousands(Number(FIN13));
                                document.getElementById("FIN18").value = addThousands(Number(FIN18));
                                document.getElementById("FIN19").value = addThousands(Number(FIN19));
                                document.getElementById("FIN10").value = FIN10;
                            }
                            if (load.result == "PR03") {
                                PR03 = load.mensaje;
                            }
                            if (load.result == "PR05") {
                                PR05 = load.mensaje;
                            }
                            if (load.result == "PR11") {
                                PR11 = load.mensaje;
                            }
                            if (load.result == "PR12") {
                                PR12 = load.mensaje;
                            }
                            if (load.result == "PR14") {
                                PR14 = load.mensaje;
                            }

                            if (status == 5) {
                                document.getElementById("PR03").value = addThousands(Number(PR03));
                                document.getElementById("PR05").value = addThousands(Number(PR05));
                                document.getElementById("PR11").value = addThousands(Number(PR11));
                                document.getElementById("PR12").value = addThousands(Number(PR12));
                                document.getElementById("PR14").value = PR14;
                            }
                        }
                    }
                }
            });
        }
        if (flag == 0) {
            //buildMarketing();
            flag = 1;
            //inicia();
        }
        //inicia();
        roundState = data.estado;
    });

}
function internetoff() {
    while (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {

    }
}
function producto() {
    window.location.href = 'http://ceosim.cl/match/game/' + localStorage.id_match + '#/pdf/Productos.pdf';
}
function mercado() {
    window.location.href = 'http://ceosim.cl/match/game/' + localStorage.id_match + '#/pdf/Mercado_High_End_Smartphone.pdf';
}
function segmento() {
    window.location.href = 'http://ceosim.cl/match/game/' + localStorage.id_match + '#/pdf/Segmentos_de_Mercados_CEOSIM.pdf';
}

function ActualizarDatos() {
    $.getJSON("https://ceosim.cl/match/roundata/" + localStorage.id_match + '/' + localStorage.id_team + '/' + localStorage.ronda_actual, function (data) {
        product = data.productId;

        //actualiza los input cada cierto tiempo, ya que si los comprañeros del equico escriben valores, los deben ver todos
        //datos de marketing
        var marketing = data.marketing;
        var promotion = marketing.promotion;
        var sales = marketing.sales;
        var finanzas = data.finance;
        var produccion = data.production;
        var efectivo = data.calculation.efectivo;
        var ratios = data.calculation.ratios;
        var statementIncome = data.calculation.statementIncome;
        var balanceSheet = data.calculation.balanceSheet;
        var resultRound = data.calculation.resultRound;
        var marketingCalculado = data.calculation.marketing;
        var objetivos = data.objetivos;

        //$('#puntaje-ronda').html("Puntaje ronda anterior: " + (data.resultPoints).toFixed(0));

        //marketing
        CO01 = (marketing.CO01);
        CO04Random = data.random.randomCO04;
        CO05 = (marketing.CO05);
        PR01 = CO05;
        CO07 = (marketingCalculado.CO07);
        if (status == 0) {
            document.getElementById("CO01").value = addThousands(CO01);//precio venta
            document.getElementById("CO04Random").value = addThousands(CO04Random); //pronóstico ventas (ref)
            TotalPromocionT();
            document.getElementById("CO02").value = addThousands(CO02); //Presupuesto de Promoción
            TotalVentasT();
            document.getElementById("CO03").value = Number(CO03);
            document.getElementById("CO05").value = addThousands(CO05); //pronóstico de ventas
            calcularCO06();
            document.getElementById("CO06SIM").value = addThousands(CO06SIM);
            CO10SIM = Number(CO06SIM) * Number(CONFIG57);
            PR08 = produccion.PR08;
            CO07SIM = ((Number(PR08) * Number(CO05)) / 1000) + Number(CO10SIM);
            document.getElementById("CO07SIM").value = addThousands(Number(CO07SIM));
            calcularCO7ASIM(); calcularCO08();
            document.getElementById("CO07ASIM").value = addThousands(CO07ASIM);
            calcularCO7SIM(); calcularCO08(); mCO08SIM();
            CO08SIM = Number(CO06SIM) - Number(CO07SIM) - Number(CO07ASIM);
            document.getElementById("CO08SIM").value = addThousands(CO08SIM);
            document.getElementById("COXXSIM").value = addThousands(COXXSIM);
            document.getElementById("CO09SIM").value = addThousands(CO09SIM);
            document.getElementById("PPFIN01").value = addThousands(Number(PPFIN01));
            document.getElementById("PVFIN01").value = addThousands(Number(PVFIN01));

        }
        //presupuesto de promocion
        PP02M = (promotion.PP02M);
        PP03M = (promotion.PP03M);
        PP04M = (promotion.PP04M);
        PP05M = (promotion.PP05M);
        PP06M = (promotion.PP06M);
        PP02G = (promotion.PP02G);
        PP03G = (promotion.PP03G);
        PP04G = (promotion.PP04G);
        PP05G = (promotion.PP05G);
        PP06G = (promotion.PP06G);
        PP02B = (promotion.PP02B);
        PP03B = (promotion.PP03B);
        PP04B = (promotion.PP04B);
        PP05B = (promotion.PP05B);
        PP06B = (promotion.PP06B);
        PP07M = Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M);
        PP07G = Number(PP02G) + Number(PP03G) + Number(PP04G) + Number(PP05G) + Number(PP06G);
        PP07B = Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B);
        PP08A = Number(PP02M) + Number(PP02B) + Number(PP02G);
        PP08B = Number(PP03M) + Number(PP03B) + Number(PP03G);
        PP08C = Number(PP04M) + Number(PP04B) + Number(PP04G);
        PP08D = Number(PP05M) + Number(PP05B) + Number(PP05G);
        PP08E = Number(PP06M) + Number(PP06B) + Number(PP06G);
        PP09 = Number(PP08A) + Number(PP08B) + Number(PP08C) + Number(PP08D) + Number(PP08E);


        if (status == 1) {
            document.getElementById("PP02M").value = addThousands(Number(PP02M));
            document.getElementById("PP03M").value = addThousands(Number(PP03M));
            document.getElementById("PP04M").value = addThousands(Number(PP04M));
            document.getElementById("PP05M").value = addThousands(Number(PP05M));
            document.getElementById("PP06M").value = addThousands(Number(PP06M));
            document.getElementById("PP07M").value = addThousands(Number(PP02M) + Number(PP03M) + Number(PP04M) + Number(PP05M) + Number(PP06M));
            document.getElementById("PP02G").value = addThousands(Number(PP02G));
            document.getElementById("PP03G").value = addThousands(Number(PP03G));
            document.getElementById("PP04G").value = addThousands(Number(PP04G));
            document.getElementById("PP05G").value = addThousands(Number(PP05G));
            document.getElementById("PP06G").value = addThousands(Number(PP06G));
            document.getElementById("PP07G").value = addThousands(Number(PP02G) + Number(PP03G) + Number(PP04G) + Number(PP05G) + Number(PP06G));
            document.getElementById("PP02B").value = addThousands(Number(PP02B));
            document.getElementById("PP03B").value = addThousands(Number(PP03B));
            document.getElementById("PP04B").value = addThousands(Number(PP04B));
            document.getElementById("PP05B").value = addThousands(Number(PP05B));
            document.getElementById("PP06B").value = addThousands(Number(PP06B));
            document.getElementById("PP07B").value = addThousands(Number(PP02B) + Number(PP03B) + Number(PP04B) + Number(PP05B) + Number(PP06B));
            document.getElementById("PP08A").value = addThousands(Number(PP08A));
            document.getElementById("PP08B").value = addThousands(Number(PP08B));
            document.getElementById("PP08C").value = addThousands(Number(PP08C));
            document.getElementById("PP08D").value = addThousands(Number(PP08D));
            document.getElementById("PP08E").value = addThousands(Number(PP08E));
            document.getElementById("PP09").value = addThousands(Number(PP09));
            //getDashboardMarketing();

        }
        //presupuesto ventas
        PV02M = (sales.PV02M);
        PV03M = (sales.PV03M);
        PV04M = (sales.PV04M);
        PV05M = (sales.PV05M);
        PV02G = (sales.PV02G);
        PV03G = (sales.PV03G);
        PV04G = (sales.PV04G);
        PV05G = (sales.PV05G);
        PV02B = (sales.PV02B);
        PV03B = (sales.PV03B);
        PV04B = (sales.PV04B);
        PV05B = (sales.PV05B);
        PV06M = Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M);
        PV06G = Number(PV02G) + Number(PV03G) + Number(PV04G) + Number(PV05G);
        PV06B = Number(PV02B) + Number(PV03B) + Number(PV04B) + Number(PV05B);
        PV07A = Number(PV02M) + Number(PV02B) + Number(PV02G);
        PV07B = Number(PV03M) + Number(PV03B) + Number(PV03G);
        PV07C = Number(PV04M) + Number(PV04B) + Number(PV04G);
        PV07D = Number(PV05M) + Number(PV05B) + Number(PV05G);
        PV08 = Number(PV07A) + Number(PV07B) + Number(PV07C) + Number(PV07D);

        if (status == 2) {
            document.getElementById("PV02M").value = addThousands(Number(PV02M));
            document.getElementById("PV03M").value = addThousands(Number(PV03M));
            document.getElementById("PV04M").value = addThousands(Number(PV04M));
            document.getElementById("PV05M").value = addThousands(Number(PV05M));
            document.getElementById("PV06M").value = addThousands(Number(PV02M) + Number(PV03M) + Number(PV04M) + Number(PV05M));
            document.getElementById("PV02G").value = addThousands(Number(PV02G));
            document.getElementById("PV03G").value = addThousands(Number(PV03G));
            document.getElementById("PV04G").value = addThousands(Number(PV04G));
            document.getElementById("PV05G").value = addThousands(Number(PV05G));
            document.getElementById("PV06G").value = addThousands(Number(PV02G) + Number(PV03G) + Number(PV04G) + Number(PV05G));
            document.getElementById("PV02B").value = addThousands(Number(PV02B));
            document.getElementById("PV03B").value = addThousands(Number(PV03B));
            document.getElementById("PV04B").value = addThousands(Number(PV04B));
            document.getElementById("PV05B").value = addThousands(Number(PV05B));
            document.getElementById("PV06B").value = addThousands(Number(PV02B) + Number(PV03B) + Number(PV04G) + Number(PV05B));
            document.getElementById("PV07A").value = addThousands(Number(PV07A));
            document.getElementById("PV07B").value = addThousands(Number(PV07B));
            document.getElementById("PV07C").value = addThousands(Number(PV07C));
            document.getElementById("PV07D").value = addThousands(Number(PV07D));
            document.getElementById("PV08").value = addThousands(Number(PV08));
        }
        //finanzas
        FIN03 = (finanzas.FIN03);
        FIN04 = (finanzas.FIN04);
        FIN06 = finanzas.FIN06;
        FIN07 = finanzas.FIN07;
        FIN08 = finanzas.FIN08;
        FIN09 = finanzas.FIN09;
        FIN10 = finanzas.FIN10;
        FIN18 = (finanzas.FIN18);
        FIN19 = (finanzas.FIN19);
        $("#FIN10").find('option').remove().end();
        $("#FIN10").append(new Option(finanzas.FIN10 + " %", finanzas.FIN10));
        $("#FIN10").append(new Option(parseInt(finanzas.FIN10) + 10 + " %", parseInt(finanzas.FIN10) + 10));
        $("#FIN10").append(new Option(parseInt(finanzas.FIN10) + 20 + " %", parseInt(finanzas.FIN10) + 20));
        if (status == 3) {
            if (Number(localStorage.rounds <= 12)) {
                document.getElementById("plplazobutton").style.display = "none";
            }
            document.getElementById("FIN11").value = CONFIG18;
            document.getElementById("FIN14").value = CONFIG19;
            document.getElementById("FIN18").value = addThousands(Number(FIN18));
            document.getElementById("FIN19").value = addThousands(Number(FIN19));
            document.getElementsByTagName("EFE26").value = addThousands(Number(EFE26));
            document.getElementById("FIN03").value = addThousands(Number(FIN03));
            document.getElementById("FIN06").value = addThousands(Number(FIN06));
            document.getElementById("FIN08").value = addThousands(Number(FIN08));
            document.getElementById("FIN04").value = addThousands(Number(FIN04));
            document.getElementById("FIN07").value = addThousands(Number(FIN07));
            document.getElementById("FIN09").value = addThousands(Number(FIN09));
            document.getElementById("FIN10").value = addThousands(Number(FIN10));
        }
        //movimientos de efectivo
        EFE01 = (efectivo.EFE01);
        EFE02 = (resultRound.RR02);
        EFE02 = (resultRound.RR02);
        EFE03 = EFE._03(Number(FIN07), Number(FIN04));
        EFE04 = 0;
        EFE05 = EFE._05(Number(FIN15));
        EFE06 = EFE._06(CONFIG22A, Number(PR12), currendRound);
        EFE07 = EFE._07(balanceSheet.BS01, resultRound.RR02, Number(FIN07), Number(FIN04), Number(FIN13), Number(FIN15), CONFIG22A, Number(PR12), currendRound);
        EFE08 = EFE._08(Number(PR04), Number(PR07));
        EFE09 = EFE._09(Number(PR06), Number(PR03));
        EFE10 = EFE._10(PR06B(), Number(PR05));
        EFE11 = EFE._11(CONFIG22A, Number(PR11));
        EFE12 = EFE._12(Number(PR13), Number(PR14), CONFIG23B);
        EFE14 = EFE._14(Number(FIN04), Number(FIN07));
        EFE15 = EFE._15(Number(FIN04), Number(FIN09));
        EFE16 = EFE._16(Number(FIN04), Number(FIN09));

        //calcular los montos pagados por préstamos a corto plazo
        if (data.panels.loans.shortTerm.length > 0) {
            var FIN12T = 0;
            $.each(data.panels.loans.shortTerm, function (key, des) {

                if (des.paid_out == false) {
                    FIN12T = FIN12T + des.monthly_fee;
                }

            });
            EFE17 = EFE._17(FIN12T);
        }
        else {
            EFE17 = 0;
        }

        EFE18 = EFE._18(FIN17(0, Number(FIN15), Number(FIN16)));
        EFE19 = EFE._19(Number(PP09));
        EFE20 = EFE._20(Number(PV08));
        EFE21 = EFE._21(resultRound.RR01, resultRound.RR02, CONFIG57);
        EFE22 = EFE._22(0);
        EFE23 = efectivo.EFE23;
        EFE24 = EFE._24(statementIncome.ER16);
        EFE25 = EFE._25(Number(EFE08), Number(EFE09), Number(EFE10), Number(EFE11), Number(EFE12), Number(PR16), Number(EFE14), Number(EFE15), Number(EFE16), Number(EFE17), Number(EFE18), Number(EFE19), Number(EFE20), Number(EFE21), Number(EFE22), Number(EFE23), Number(EFE24));
        EFE26 = EFE._26(Number(EFE07), Number(EFE25));

        if (status == 4) {
            document.getElementById("EFE01").value = addThousands(Number(EFE01));
            document.getElementById("EFE02").value = addThousands(Number(EFE02));
            document.getElementById("EFE03").value = addThousands(Number(EFE03));
            document.getElementById("EFE04").value = addThousands(Number(EFE04));
            document.getElementById("EFE05").value = addThousands(Number(EFE05));
            document.getElementById("EFE06").value = addThousands(Number(EFE06));
            document.getElementById("EFE07").value = addThousands(Number(EFE07));
            document.getElementById("EFE08").value = addThousands(Number(EFE08));
            document.getElementById("EFE09").value = addThousands(Number(EFE09));
            document.getElementById("EFE10").value = addThousands(Number(EFE10));
            document.getElementById("EFE11").value = addThousands(Number(EFE11));
            document.getElementById("EFE12").value = addThousands(Number(EFE12));
            document.getElementById("PR16").value = addThousands(Number(PR16));
            document.getElementById("EFE14").value = addThousands(Number(EFE14));
            document.getElementById("EFE15").value = addThousands(Number(EFE15));
            document.getElementById("EFE16").value = addThousands(Number(EFE16));
            document.getElementById("EFE17").value = addThousands(Number(EFE17));
            document.getElementById("EFE18").value = addThousands(Number(EFE18));
            document.getElementById("EFE19").value = addThousands(Number(EFE19));
            document.getElementById("EFE20").value = addThousands(Number(EFE20));
            document.getElementById("EFE21").value = addThousands(Number(EFE21));
            document.getElementById("EFE22").value = addThousands(Number(EFE22));
            document.getElementById("EFE23").value = addThousands(Number(EFE23));
            document.getElementById("EFE24").value = addThousands(Number(EFE24));
            document.getElementById("EFE25").value = addThousands(Number(EFE25));
            document.getElementById("EFE26").value = addThousands(Number(EFE26));
        }

        //produccion
        PR02 = (produccion.PR02);
        PR03 = (produccion.PR03);
        PR05 = (produccion.PR05);
        PR06 = (produccion.PR06);
        PR07 = (produccion.PR07);
        PR10 = (produccion.PR10);
        PR11 = (produccion.PR11);
        PR12 = (produccion.PR12);
        PR13 = (produccion.PR13);
        PR14 = (produccion.PR14);
        PR16 = (produccion.PR16);
        calcularCO7ASIM();

        $('#PR14').val(produccion.PR14).trigger("focusout");
        $('#PR14').find('option').remove().end();
        $("#PR14").append(new Option(produccion.PR14 + " %", produccion.PR14));
        $("#PR14").append(new Option(parseInt(produccion.PR14) + 10 + " %", parseInt(produccion.PR14) + 10));
        $("#PR14").append(new Option(parseInt(produccion.PR14) + 20 + " %", parseInt(produccion.PR14) + 20));
        $("#PR14").val(produccion.PR14);
        if (status == 5) {
            document.getElementById("PR01").value = addThousands(Number(PR01));
            document.getElementById("PR02").value = addThousands(Number(PR02));
            document.getElementById("PR03").value = addThousands(Number(PR03));
            document.getElementById("PR04").value = addThousands(Number(PR04));
            document.getElementById("PR05").value = addThousands(Number(PR05));
            document.getElementById("PR06").value = addThousands(Number(PR06));
            document.getElementById("PR07").value = addThousands(Number(PR07));
            document.getElementById("PR08").value = addThousands(Number(PR08));
            document.getElementById("PR10").value = addThousands(Number(PR10));
            document.getElementById("PR11").value = addThousands(Number(PR11));
            if (PR11 > 0) {
                document.getElementById("PR11").disabled = true;
            } else {
                document.getElementById("PR11").disabled = false;
            }
            document.getElementById("PR12").value = Number(PR12);
            if (PR12 > 0) {
                document.getElementById("PR12").disabled = "true";
            } else {
                document.getElementById("PR12").disabled = "false";
            }
            document.getElementById("PR13").value = Number(PR13);
            document.getElementById("PR14").value = Number(PR14);
            //document.getElementById("PR16").value = Number(PR16);
        }
        /**/
        calcularCO7SIM();
        calcularCO7ASIM();

        //reportes
        RR01MAJ = addThousands(resultRound.RR01MAJ);
        RR01GAJ = addThousands(resultRound.RR01GAJ);
        RR01BAJ = addThousands(resultRound.RR01BAJ);
        RR01 = addThousands(resultRound.RR01);
        RR02M = addThousands(resultRound.RR02M);
        RR02G = addThousands(resultRound.RR02G);
        RR02B = addThousands(resultRound.RR02B);
        RR02 = addThousands(resultRound.RR02);
        if (status == 11) {
            document.getElementById("RR01MAJ").innerHTML = addThousands(resultRound.RR01MAJ);
            document.getElementById("RR01GAJ").innerHTML = addThousands(resultRound.RR01GAJ);
            document.getElementById("RR01BAJ").innerHTML = addThousands(resultRound.RR01BAJ);
            document.getElementById("RR01").innerHTML = addThousands(resultRound.RR01);
            document.getElementById("RR02M").innerHTML = addThousands(resultRound.RR02M);
            document.getElementById("RR02G").innerHTML = addThousands(resultRound.RR02G);
            document.getElementById("RR02B").innerHTML = addThousands(resultRound.RR02B);
            document.getElementById("RR02").innerHTML = addThousands(resultRound.RR02);
        }
        RA01 = ratios.RA01;
        RA02 = ratios.RA02;
        RA03 = ratios.RA03;
        RA04 = ratios.RA04;
        RA05 = ratios.RA05;
        RA06 = ratios.RA06;
        RA07 = ratios.RA07;
        RA08 = ratios.RA08;
        RA09 = ratios.RA09;
        RA10 = ratios.RA10;
        RA11 = ratios.RA11;
        RA12 = ratios.RA12;
        RA13 = ratios.RA13;
        RA18 = ratios.RA18;
        RA27 = ratios.RA27;
        RA28 = ratios.RA28;
        RA29 = ratios.RA29;
        RA17 = (ratios.RA17);
        RA19 = (ratios.RA19);
        RA20 = (ratios.RA20);
        RA21 = (ratios.RA21);
        RA22 = (ratios.RA22);

        //produccion
        RA23 = (ratios.RA23);
        RA24 = (ratios.RA24);
        RA25 = (ratios.RA25);
        RA26 = (ratios.RA26);
        if (status == 12) {
            //economicos financieros
            document.getElementById("RA01").innerHTML = ratios.RA01;
            document.getElementById("RA02").innerHTML = ratios.RA02;
            document.getElementById("RA03").innerHTML = ratios.RA03;
            document.getElementById("RA04").innerHTML = ratios.RA04;
            document.getElementById("RA05").innerHTML = ratios.RA05;
            document.getElementById("RA06").innerHTML = ratios.RA06;
            document.getElementById("RA07").innerHTML = ratios.RA07;
            document.getElementById("RA08").innerHTML = ratios.RA08;
            document.getElementById("RA09").innerHTML = ratios.RA09;
            document.getElementById("RA10").innerHTML = ratios.RA10;
            document.getElementById("RA11").innerHTML = ratios.RA11;
            document.getElementById("RA12").innerHTML = ratios.RA12;
            document.getElementById("RA13").innerHTML = ratios.RA13;
            document.getElementById("RA18").innerHTML = ratios.RA18;
            document.getElementById("RA27").innerHTML = ratios.RA27;
            document.getElementById("RA28").innerHTML = ratios.RA28;
            document.getElementById("RA29").innerHTML = ratios.RA29;

            //marketing
            document.getElementById("RA17").innerHTML = (ratios.RA17);
            document.getElementById("RA19").innerHTML = (ratios.RA19);
            document.getElementById("RA20").innerHTML = (ratios.RA20);
            document.getElementById("RA21").innerHTML = (ratios.RA21);
            document.getElementById("RA22").innerHTML = (ratios.RA22);

            //produccion
            document.getElementById("RA23").innerHTML = (ratios.RA23);
            document.getElementById("RA24").innerHTML = (ratios.RA24);
            document.getElementById("RA25").innerHTML = (ratios.RA25);
            document.getElementById("RA26").innerHTML = (ratios.RA26);
        }
        BS01 = (balanceSheet.BS01);
        BS01B = (balanceSheet.BS01B);
        BS01C = (balanceSheet.BS01C);
        BS02 = (balanceSheet.BS02);
        BS03 = (balanceSheet.BS03);
        BS04 = (balanceSheet.BS04);
        BS05 = (balanceSheet.BS05);

        //Activos No Corrientes
        BS06A = (balanceSheet.BS06A);
        BS06B = (balanceSheet.BS06B);
        BS07 = (balanceSheet.BS07);
        BS08 = (balanceSheet.BS08);
        BS09 = (balanceSheet.BS09);
        BS10 = (balanceSheet.BS10);
        BS11 = (balanceSheet.BS11);
        //total activos
        BS12 = (balanceSheet.BS12);

        //Pasivos
        //Pasivos Corrientes
        BS15 = (balanceSheet.BS15);
        BS16 = (balanceSheet.BS16);
        BS17 = (balanceSheet.BS17);
        BS18 = (balanceSheet.BS18);
        BS19 = (balanceSheet.BS19);
        BS20 = (balanceSheet.BS20);

        //Pasivos No Corrientes
        BS22 = (balanceSheet.BS22);
        BS23 = (balanceSheet.BS23);
        BS24 = (balanceSheet.BS24);
        BS25 = (balanceSheet.BS25);
        BS26 = (balanceSheet.BS26);
        BS27 = (balanceSheet.BS27);
        //total pasivos
        BS28 = (balanceSheet.BS28);

        //Patrimonio Neto
        BS30 = (balanceSheet.BS30);
        BS31 = (balanceSheet.BS31);
        BS32 = (balanceSheet.BS32);
        BS33 = (balanceSheet.BS33);
        BS34 = (balanceSheet.BS34);
        BS35 = (balanceSheet.BS35);
        if (status == 13) {
            //Balance de Situación - IFRS
            //activos
            document.getElementById("BS01").innerHTML = addThousands(balanceSheet.BS01);
            document.getElementById("BS01B").innerHTML = addThousands(balanceSheet.BS01B);
            document.getElementById("BS01C").innerHTML = addThousands(balanceSheet.BS01C);
            document.getElementById("BS02").innerHTML = addThousands(balanceSheet.BS02);
            document.getElementById("BS03").innerHTML = addThousands(balanceSheet.BS03);
            document.getElementById("BS04").innerHTML = addThousands(balanceSheet.BS04);
            document.getElementById("BS05").innerHTML = addThousands(balanceSheet.BS05);

            //Activos No Corrientes
            document.getElementById("BS06A").innerHTML = addThousands(balanceSheet.BS06A);
            document.getElementById("BS06B").innerHTML = addThousands(balanceSheet.BS06B);
            document.getElementById("BS07").innerHTML = addThousands(balanceSheet.BS07);
            document.getElementById("BS08").innerHTML = addThousands(balanceSheet.BS08);
            document.getElementById("BS09").innerHTML = addThousands(balanceSheet.BS09);
            document.getElementById("BS10").innerHTML = addThousands(balanceSheet.BS10);
            document.getElementById("BS11").innerHTML = addThousands(balanceSheet.BS11);
            //total activos
            document.getElementById("BS12").innerHTML = addThousands(balanceSheet.BS12);

            //Pasivos
            //Pasivos Corrientes
            document.getElementById("BS15").innerHTML = addThousands(balanceSheet.BS15);
            document.getElementById("BS16").innerHTML = addThousands(balanceSheet.BS16);
            document.getElementById("BS17").innerHTML = addThousands(balanceSheet.BS17);
            document.getElementById("BS18").innerHTML = addThousands(balanceSheet.BS18);
            document.getElementById("BS19").innerHTML = addThousands(balanceSheet.BS19);
            document.getElementById("BS20").innerHTML = addThousands(balanceSheet.BS20);

            //Pasivos No Corrientes
            document.getElementById("BS22").innerHTML = addThousands(balanceSheet.BS22);
            document.getElementById("BS23").innerHTML = addThousands(balanceSheet.BS23);
            document.getElementById("BS24").innerHTML = addThousands(balanceSheet.BS24);
            document.getElementById("BS25").innerHTML = addThousands(balanceSheet.BS25);
            document.getElementById("BS26").innerHTML = addThousands(balanceSheet.BS26);
            document.getElementById("BS27").innerHTML = addThousands(balanceSheet.BS27);
            //total pasivos
            document.getElementById("BS28").innerHTML = addThousands(balanceSheet.BS28);

            //Patrimonio Neto
            document.getElementById("BS30").innerHTML = addThousands(balanceSheet.BS30);
            document.getElementById("BS31").innerHTML = addThousands(balanceSheet.BS31);
            document.getElementById("BS32").innerHTML = addThousands(balanceSheet.BS32);
            document.getElementById("BS33").innerHTML = addThousands(balanceSheet.BS33);
            document.getElementById("BS34").innerHTML = addThousands(balanceSheet.BS34);
            document.getElementById("BS35").innerHTML = addThousands(balanceSheet.BS35);
        }

        if (status == 14) {
            //Estado de Resultados - IFRS
            //activos
            document.getElementById("ER01").innerHTML = addThousands(Number(statementIncome.ER01));
            document.getElementById("ER02").innerHTML = addThousands(Number(statementIncome.ER02));
            document.getElementById("ER03").innerHTML = addThousands(Number(statementIncome.ER03));
            document.getElementById("ER04").innerHTML = addThousands(Number(statementIncome.ER04));
            document.getElementById("ER05").innerHTML = addThousands(Number(statementIncome.ER05));
            document.getElementById("ER06").innerHTML = addThousands(Number(statementIncome.ER06));
            document.getElementById("ER07").innerHTML = addThousands(Number(statementIncome.ER07));
            document.getElementById("ER08").innerHTML = addThousands(Number(statementIncome.ER08));
            document.getElementById("ER09").innerHTML = addThousands(Number(statementIncome.ER09));
            document.getElementById("ER10").innerHTML = addThousands(Number(statementIncome.ER10));
            document.getElementById("ER11").innerHTML = addThousands(Number(statementIncome.ER11));
            document.getElementById("ER12").innerHTML = addThousands(Number(statementIncome.ER12));
            document.getElementById("ER13").innerHTML = addThousands(Number(statementIncome.ER13));
            document.getElementById("ER14").innerHTML = addThousands(Number(statementIncome.ER14));
            document.getElementById("ER15").innerHTML = addThousands(Number(statementIncome.ER15));
            document.getElementById("ER16").innerHTML = addThousands(Number(statementIncome.ER16));
            document.getElementById("ER17").innerHTML = addThousands(Number(statementIncome.ER17));
            document.getElementById("ER19").innerHTML = addThousands(Number(statementIncome.ER19));
        }
        $("input[name='RA30']").val(ratios.RA30);

        RR02 = resultRound.RR02;
        //objetivos
        if (status == 6) {
            $("span[name='RR02Ob']").html(objetivos.marketing.RR02);
            $("span[name='RR02']").html(resultRound.RR02);
            $("span[name='RR01Ob']").html(objetivos.marketing.RR01);
            $("span[name='RR01']").html(resultRound.RR01);
            $("span[name='RA17Ob']").html(objetivos.marketing.RA17);
            $("span[name='RA17']").html(ratios.RA17);
            $("span[name='RA19Ob']").html(objetivos.marketing.RA19);
            $("span[name='RA19']").html(ratios.RA19);
            $("span[name='RA30Ob']").html(objetivos.marketing.RA30);
            $("span[name='RA30']").html(ratios.RA30);
            $("span[name='ER19Ob']").html(objetivos.marketing.ER19);
            $("span[name='ER19']").html(statementIncome.ER19);

        }
        if (status == 7) {
            $("span[name='RA01Ob']").html(objetivos.finance.RA01);
            $("span[name='RA01']").html(ratios.RA01);
            $("span[name='RA02Ob']").html(objetivos.finance.RA02);
            $("span[name='RA02']").html(ratios.RA02);
            $("span[name='RA04Ob']").html(objetivos.finance.RA04);
            $("span[name='RA04']").html(ratios.RA04);
            $("span[name='RA27Ob']").html(objetivos.finance.RA27);
            $("span[name='RA27']").html(ratios.RA27);
            $("span[name='RA18Ob']").html(objetivos.finance.RA18);
            $("span[name='RA18']").html(ratios.RA18);
            $("span[name='RA28Ob']").html(objetivos.finance.RA28);
            $("span[name='RA28']").html(ratios.RA28);
            $("span[name='RA29Ob']").html(objetivos.finance.RA29);
            $("span[name='RA29']").html(ratios.RA29);
        }
        if (status == 8) {
            $("span[name='RA23Ob']").html(objetivos.production.RA23);
            $("span[name='RA23']").html(ratios.RA23);
            $("span[name='RA24Ob']").html(objetivos.production.RA24);
            $("span[name='RA24']").html(ratios.RA24);
            $("span[name='RA25Ob']").html(objetivos.production.RA25);
            $("span[name='RA25']").html(ratios.RA25);
            $("span[name='RA26Ob']").html(objetivos.production.RA26);
            $("span[name='RA26']").html(ratios.RA26);
        }
        //cosas que se estan ejecutando en varias rondas

        $("#tasks").empty();
        prodCapacity = data.panels.prodCapacity;
        loans = data.panels.loans;
        research = data.research;
        xpagar = data.panels.toCharge;
        topay = data.panels.toPay;
        automation = data.panels.automation;

        var SellCapacity = data.panels.prodCapacity.sell.length;
        var BuyCapacity = data.panels.prodCapacity.buy.length;
        var shortTerm = data.panels.loans.shortTerm.length;
        var toPay = data.panels.toPay.length;
        var toCharge = data.panels.toCharge.length;
        var id1 = data.research.length;
        var plantAutom = data.panels.automation.length;
        var plantafag = false, prestamoflag = false;
        if (shortTerm == 0 && SellCapacity == 0 && BuyCapacity == 0 && id1 == 0 && toPay == 0 && toCharge == 0 && plantAutom == 0) {
            $("#task").addClass("d-none").removeClass("task-view");
            taskAction = false;
        } else {
            $("#task").removeClass("d-none");
        }
        readyM = objetivos.marketing.ready;
        readyF = (objetivos.finance.ready);
        readyP = objetivos.production.ready;
        loadGraficosObjetivo();
    });
}

function tryBuyResearch() {
    //obtener las investigaciones que se están investigando
    $.getJSON("https://ceosim.cl/match/roundata/" + localStorage.id_match + '/' + localStorage.id_team + '/' + localStorage.ronda_actual, function (data) {
        var researchMake = data.research;

        //verificar si cumple con los requisitos para investigar
        $.getJSON("https://ceosim.cl/market/getproducts/" + localStorage.market, function (data) {
            var cEach = 0;

            $.each(data, function (key, val) {
                if (val.codigo == product) {

                    $.each(val.desarrollos, function (key2, val2) {
                        var a, b, c;
                        if (Number(PR10) >= val2.reqPlanta) { a = true; } else { a = false; }
                        if (Number(PR13) >= val2.reqPorcentajeAuto) { b = true; } else { b = false; }
                        if (Number(BS01) >= val2.importe) { c = true; } else { c = false; }
                        if (a == true && b == true && c == true) {
                            //verificar si ya ha solicitado investigar esta opcion
                            if (researchMake.length == 0 || researchMake.length > 0 && researchMake[cEach].id_research !== cEach) {
                                $('[data-id="' + cEach + '"]').off();
                                $('[data-id="' + cEach + '"]').prop("disabled", false)
                                    //$('[data-id="' + cEach + '"]').children('.col').children('.media-body').children('.card').children('.list-inline').children('.float-right').children('button').off();
                                    //$('[data-id="' + cEach + '"]').children('.col').children('.media-body').children('.card').children('.list-inline').children('.float-right').children('button').prop("disabled", false)
                                    .data("research", cEach)
                                    .on("click", function () {
                                        if (!$(this).prop('disabled')) {
                                            var research_data = {
                                                action: "set",
                                                id: $(this).data('research') + 1
                                            };
                                            research_data = JSON.stringify(research_data);

                                            var research = {
                                                match_id: localStorage.id_match,
                                                id_team: localStorage.id_team,
                                                round: currendRound,
                                                market: localStorage.market,
                                                research: research_data
                                            };

                                            if (currendRound < Rounds) {
                                                $.post("https://ceosim.cl/match/research/", research).done(function (data) { ActualizarDatos(); });
                                            }
                                        }
                                    });
                            }
                        }
                        else {
                            $('[data-id="' + cEach + '"]').prop("disabled", true);
                            $('[data-id="' + cEach + '"]').off();
                        }
                        cEach++;
                    });
                }
            });
        });
    });
}

function reportes() {
    document.getElementById("menu1").setAttribute("aria-expanded", false);
    $('#menu1').removeClass("show").removeClass("in");
    document.getElementById("scroll-content").style.display = "block";
    document.getElementById('matchDetail').style.display = 'none';
    document.getElementById('footerMatch').style.display = 'none';
    document.getElementById('indicadores').style.display = 'none';
    document.getElementById('bifrs').style.display = 'none';
    document.getElementById('eifrs').style.display = 'none';
    document.getElementById('reportes').style.display = 'block';
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("imenu1").style.display = 'none';
    $('#imenu1').removeClass('list-group-item').removeClass('d-inline-block');
    document.getElementById("imenu2").style.display = 'block';
    document.getElementById("imenu3").style.display = 'block';
    document.getElementById("imenu4").style.display = 'block';
    document.getElementById("imenu5").style.display = 'block';
    status = 11;
    classMenu();
    imenu = 1;

    ActualizarDatos();
}

function dashboard() {
    document.getElementById("menu5").setAttribute("aria-expanded", false);
    $('#menu5').removeClass("show").removeClass("in");
    document.getElementById("scroll-content").style.display = "block";
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('indicadores').style.display = 'none';
    document.getElementById('bifrs').style.display = 'none';
    document.getElementById('matchDetail').style.display = 'block';
    document.getElementById('footerMatch').style.display = 'block';
    document.getElementById('eifrs').style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("matchDetail").style.position = "";
    document.getElementById("imenu1").style.display = 'block';
    document.getElementById("imenu2").style.display = 'block';
    document.getElementById("imenu3").style.display = 'block';
    document.getElementById("imenu4").style.display = 'block';
    document.getElementById("imenu5").style.display = 'none';
    $('#imenu5').removeClass('list-group-item').removeClass('d-inline-block');
    status = 0;
    classMenu();
    imenu = 5;
}

function indicadores() {
    document.getElementById("menu4").setAttribute("aria-expanded", false);
    $('#menu4').removeClass("show").removeClass("in");
    document.getElementById("scroll-content").style.display = "block";
    document.getElementById('matchDetail').style.display = 'none';
    document.getElementById('footerMatch').style.display = 'none';
    document.getElementById('bifrs').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('eifrs').style.display = 'none';
    document.getElementById('indicadores').style.display = 'block';
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("imenu1").style.display = 'block';
    document.getElementById("imenu2").style.display = 'block';
    document.getElementById("imenu3").style.display = 'block';
    document.getElementById("imenu4").style.display = 'none';
    $('#imenu4').removeClass('list-group-item').removeClass('d-inline-block');
    document.getElementById("imenu5").style.display = 'block';
    status = 12;
    classMenu();
    imenu = 4;
    ActualizarDatos();
}

function bifrs() {
    document.getElementById("menu2").setAttribute("aria-expanded", false);
    $('#menu2').removeClass("show").removeClass("in");
    document.getElementById("scroll-content").style.display = "block";
    document.getElementById('matchDetail').style.display = 'none';
    document.getElementById('footerMatch').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('indicadores').style.display = 'none';
    document.getElementById('bifrs').style.display = 'block';
    document.getElementById('eifrs').style.display = 'none';
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("imenu1").style.display = 'block';
    document.getElementById("imenu2").style.display = 'none';
    $('#imenu2').removeClass('list-group-item').removeClass('d-inline-block');
    document.getElementById("imenu3").style.display = 'block';
    document.getElementById("imenu4").style.display = 'block';
    document.getElementById("imenu5").style.display = 'block';
    status = 13;
    classMenu();
    imenu = 2;
    ActualizarDatos();
}

function eifrs() {
    document.getElementById("menu3").setAttribute("aria-expanded", false);
    $('#menu3').removeClass("show").removeClass("in");
    document.getElementById("scroll-content").style.display = "block";
    document.getElementById('matchDetail').style.display = 'none';
    document.getElementById('footerMatch').style.display = 'none';
    document.getElementById('reportes').style.display = 'none';
    document.getElementById('indicadores').style.display = 'none';
    document.getElementById('bifrs').style.display = 'none';
    document.getElementById('eifrs').style.display = 'block';
    document.getElementById("overlay").style.display = "none";
    $('#sidebar').removeClass("show").removeClass("in");
    document.getElementById("imenu1").style.display = 'block';
    document.getElementById("imenu2").style.display = 'block';
    document.getElementById("imenu3").style.display = 'none';
    $('#imenu3').removeClass('list-group-item').removeClass('d-inline-block');
    document.getElementById("imenu4").style.display = 'block';
    document.getElementById("imenu5").style.display = 'block';
    status = 14;
    classMenu();
    imenu = 3;
    ActualizarDatos();
}

function exit() {
    document.getElementById("menu6").setAttribute("aria-expanded", false);
    $('#menu6').removeClass("show").removeClass("in");
    window.location.href = '../pages/home.html';
}

function classMenu() {
    if (imenu == 1) {
        $('#imenu1').addClass('list-group-item').addClass('d-inline-block');
    } else if (imenu == 2) {
        $('#imenu2').addClass('list-group-item').addClass('d-inline-block');

    } else if (imenu == 3) {
        $('#imenu3').addClass('list-group-item').addClass('d-inline-block');

    } else if (imenu == 4) {
        $('#imenu4').addClass('list-group-item').addClass('d-inline-block');

    } else if (imenu == 5 || imenu == 0) {
        $('#imenu5').addClass('list-group-item').addClass('d-inline-block');

    }
}

function getDashboardMarketing() {
    status = 6;
    ActualizarDatos();
    var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;
    $("#marketingdash").load("../pages/mdash.html");
    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'marketing', function (data) {
        m1 = data[0];
        m2 = data[1];
        m3 = data[2];
        m4 = data[3];
        m5 = data[4];
        m6 = data[5];
        m7 = data[6];
        m8 = data[7];
        m9 = data[8];
        m10 = data[9];
        calcularCO06();
        calcularCO7SIM();
        //Margen ingresos por ventas
        var iVentas = Number(CO06SIM);
        var cVariables = Number(CO07SIM);
        var cfijos = Number(CO07ASIM);
        var CO02 = Number(PP08A) + Number(PP08B) + Number(PP08C) + Number(PP08D) + Number(PP08E);
        var CO03 = Number(PV07A) + Number(PV07B) + Number(PV07C) + Number(PV07D)
        var gMKT = Number(CO02) + Number(CO03);

        m1.series[0].data[0] = iVentas;
        m1.series[1].data[0] = cVariables;
        m1.series[2].data[0] = cfijos;
        m1.series[3].data[0] = gMKT;

        Highcharts.chart('margenpronostico', m1);

        //hide
        //Highcharts.chart('p-mercado', m2);
        //Highcharts.chart('t-exito', m3);
        //Highcharts.chart('d-relativa', m4);

        //Gastos Presupuesto de Promoción (RA)
        var mImpresos = Number(PP08A);
        var rSociales = Number(PP08B);
        var mWeb = Number(PP08C);
        var email = Number(PP08D);
        var ferias = Number(PP08E);

        if (mImpresos > 0 || rSociales > 0 || mWeb > 0 || email > 0 || ferias > 0) {
            $('#gppromocion').html("");
            m5.series[0].data = [{ "name": "Medios Impresos", "y": mImpresos }, { "name": "Redes Sociales", "y": rSociales, "sliced": true, "selected": true }, { "name": "Medios Web", "y": mWeb }, { "name": "Email", "y": email }, { "name": "Ferias", "y": ferias }];
            Highcharts.chart('gppromocion', m5);
        }
        else {
            $('#gppromocion').html("");
            $('#gppromocion').html('<h4 class="text-center p-5" style="color: #D0D0D0;display: table-cell; vertical-align: middle;">No hay datos para graficar</h4>');
        }
        //base
        if (m6 == true) {
            $('#gppromocionra').html("");
            $('#gppromocionra').html('<h4 class="text-center p-5" style="color: #D0D0D0;display: table-cell; vertical-align: middle;">No hay datos para graficar</h4>');
        } else {
            Highcharts.chart('gppromocionra', m6);
        }
        //Gastos Presupuesto de Ventas (RA)
        var vTerreno = Number(PV07A);
        var vStore = Number(PV07B);
        var vDistribuidores = Number(PV07C);
        var vEcommerce = Number(PV07D);

        if (vTerreno > 0 || vStore > 0 || vDistribuidores > 0 || vEcommerce > 0) {
            $('#gp-ventas').html("");
            m7.series[0].data = [{ "name": "Ventas en Terreno", "y": vTerreno }, { "name": "Ventas en Store", "y": vStore, "sliced": true, "selected": true }, { "name": "Ventas por Distribuidores", "y": vDistribuidores }, { "name": "Ventas por E-Commerce", "y": vEcommerce }];
            Highcharts.chart('gp-ventas', m7);
        }
        else {
            $('#gp-ventas').html("");
            $('#gp-ventas').html('<h4 class="text-center p-5" style="color: #D0D0D0;display: table-cell; vertical-align: middle;">No hay datos para graficar</h4>');
        }
        //base
        if (m8 == true) {
            $('#gp-ventasra').html("");
            $('#gp-ventasra').html('<h4 class="text-center p-5" style="color: #D0D0D0;display: table-cell; vertical-align: middle;">No hay datos para graficar</h4>');
        } else {
            Highcharts.chart('gp-ventasra', m8);
        }
    });
}

function getObjetiveMarketing() {
    status = 6;
    ActualizarDatos();
    $("#marketingobj").load("../pages/mobj.html", function () {
        loadGraficosObjetivo();
        $("button[name='graphics']").click(function () {
            var graphic = $(this).data("id");
            //gráficos de Marketing
            if (graphic == "gVentasMensuales") {
                $("#setgraft").html("Objetivos Marketing || Ventas mensuales");
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[0]);
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gCantidadVendida") {
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[1]);
                $("#setgraft").html("Objetivos Marketing || Cantidad Vendida");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gCuotaMercado") {
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[2]);
                $("#setgraft").html("Objetivos Marketing || Cuota de Mercado");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gDimensionRelativa") {
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[3]);
                $("#setgraft").html("Objetivos Marketing || Dimensión Relativa");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gRentabilidadAcumulada") {
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[4]);
                $("#setgraft").html("Objetivos Marketing || Rentabilidad");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gGananciaAccion") {
                var data = JSON.parse(localStorage["objetivosMarketing"]);
                Highcharts.chart('setgrafg', data[5]);
                $("#setgraft").html("Objetivos Marketing || Ganancia por Acción");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
        });

    });
}
function getDashboardFinance() {
    status = 7;
    $("#financedash").load("../pages/fdash.html");
    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'finance', function (data) {

        //Movimientos de efectivo
        f1 = data[0];
        var iVentas = parseInt(CO01 * CO05);
        var cVariables = parseInt(((PR08 * CO05) / 1000) + (CO01 * CO05 * CONFIG57));
        var cfijos = parseInt(CONFIG23A * PR10);
        CO02 = Number(PP08A) + Number(PP08B) + Number(PP08C) + Number(PP08D) + Number(PP08E);
        var CO03 = Number(PV07A) + Number(PV07B) + Number(PV07C) + Number(PV07D)
        var gMKT = CO02 + CO03;

        f1.series[0].data[0] = iVentas;
        f1.series[1].data[0] = cVariables;
        f1.series[2].data[0] = cfijos;
        f1.series[3].data[0] = gMKT;

        Highcharts.chart('mov-ing', f1);

        f2 = data[1];
        Highcharts.chart('mov-egr', f2);
        f3 = data[2];
        f3.series[0].data = [parseFloat(Number(RA01))];
        Highcharts.chart('liquid', f3);
        f4 = data[3];
        f4.series[0].data = [parseFloat(Number(RA03))];
        Highcharts.chart('disponible', f4);
        f5 = data[4];
        f5.series[0].data = [parseFloat(Number(RA18))];
        Highcharts.chart('f-propios', f5);

        f6 = data[5];
        f6.series[0].data = [{ "id": "B", "name": "", "color": "#F7A35C" },
        { "id": "A", "name": "", "color": "#7CB5EC" },
        { "name": "Activo Corriente", "parent": "A", "value": parseInt(BS05) },
        { "name": "Activo No Corriente", "parent": "A", "value": parseInt(BS11) },
        { "name": "Pasivo Corriente", "parent": "B", "value": parseInt(BS20) },
        { "name": "Pasivo No Corriente", "parent": "B", "value": parseInt(BS27) },
        { "name": "Patrimonio Neto", "parent": "B", "value": parseInt(BS34) }];

        Highcharts.chart('cube', f6);

        f7 = data[6];
        $gOperacional = 100 - parseInt(ER02) - parseInt(ER17);
        f7.series[0].data = [{ "name": "Costos de Ventas", "y": parseInt(ER02) }, { "name": "Utilidad Neta", "y": parseInt(ER17), "sliced": true, "selected": true }, { "name": "Gastos Operacionales", "y": $gOperacional }];
        Highcharts.chart('graf', f7);
    });
}
function getObjetiveFinance() {

    status = 7;
    ActualizarDatos();
    $("#financeobj").load("../pages/fobj.html", function () {
        loadGraficosObjetivo();
        $("button[name='graphics']").click(function () {
            var graphic = $(this).data("id");
            //gráficos de finanzas
            if (graphic == "gLiquidez") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[0]);
                $("#setgraft").html("Objetivos Marketing || Liquidez");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gTesoreria") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[1]);
                $("#setgraft").html("Objetivos Marketing || Tesorería");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);

            }
            else if (graphic == "gEndeudamiento") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[2]);
                $("#setgraft").html("Objetivos Marketing || Endeudamiento");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gLeverage") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[3]);
                $("#setgraft").html("Objetivos Marketing || Leverage");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gFondosPropios") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[4]);
                $("#setgraft").html("Objetivos Marketing || Fondos propios");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gROA") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[5]);
                $("#setgraft").html("Objetivos Marketing || Rentabilidad de los Activos (ROA)");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gROE") {
                var data = JSON.parse(localStorage["objetivosFinanzas"]);
                Highcharts.chart('setgrafg', data[6]);
                $("#setgraft").html("Objetivos Marketing || Rentabilidad del Capital (ROE)");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
        });
        //ActualizarDatos();
    });
}
function getPCPlazoone() {

    var prestamo = document.getElementById("prestamo").value;
    var cuota = document.getElementById("cuotas").value;
    //$('#mensajes').html('');
    if (prestamo.length > 1) {
        $('#pcplazoone').animate({ height: 'toggle' }, 400);
        $('#pcplazotwo').animate({ height: 'toggle' }, 800);
    }
}
function getDashboardProduction() {
    status = 8;
    $("#producciondash").load("../pages/pdash.html");
    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'production', function (data) {
        //costo total unidad
        if (parseInt($("#PR08").val()) > 0) {
            //document.getElementById("PR08graf").innerHTML = "$" + $("#PR08").val();
        } else {
            //document.getElementById("PR08graf").innerHTML = "$" + 0;
        }
        //margen contribución
        if (parseInt($("#PR09").val()) > 0) {
            //document.getElementById("PR09graf").innerHTML = "$" + $("#PR09").val();
        } else {
            //document.getElementById("PR09graf").innerHTML = "$" + 0;
        }

        p1 = data[0];
        p2 = data[1]
        p3 = data[2];
        Highcharts.chart('cost-man-obra', p1);
        Highcharts.chart('cost-mat', p2);
        Highcharts.chart('prod-bar', p3);
    });
}

function getObjetiveProduction() {
    status = 8;
    ActualizarDatos();
    $("#productionobj").load("../pages/pobj.html", function () {
        loadGraficosObjetivo();
        $("button[name='graphics']").click(function () {
            var graphic = $(this).data("id");
            //gráficos de produccion
            if (graphic == "gCapacidadUtilizada") {
                var data = JSON.parse(localStorage["objetivosProduccion"]);
                Highcharts.chart('setgrafg', data[0]);
                $("#setgraft").html("Objetivos Marketing || Capacidad Utilizada");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gEstructuraCostesProduccion") {
                var data = JSON.parse(localStorage["objetivosProduccion"]);
                Highcharts.chart('setgrafg', data[1]);
                $("#setgraft").html("Objetivos Marketing || Estructuras de Costes de Producción");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gSincroniaMercado") {
                var data = JSON.parse(localStorage["objetivosProduccion"]);
                Highcharts.chart('setgrafg', data[2]);
                $("#setgraft").html("Objetivos Marketing || Sincronía con el Mercado");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
            else if (graphic == "gProductividadaManoObra") {
                var data = JSON.parse(localStorage["objetivosProduccion"]);
                Highcharts.chart('setgrafg', data[3]);
                $("#setgraft").html("Objetivos Marketing || Productividad de la Mano de Obra");
                $('#objetivos').animate({ height: 'toggle' }, 800);
                $('#grafico').animate({ height: 'toggle' }, 400);
                $('#botonCerrarGrafico').animate({ height: 'toggle' }, 400);
            }
        });
        //ActualizarDatos();
    });
}
function des() {
    $("#dash").removeClass("active");
    $("#obj").removeClass("active");
}

function dash() {
    $("#des").removeClass("active");
    $("#obj").removeClass("active");
}

function obj() {
    $("#des").removeClass("active");
    $("#dash").removeClass("active");
}

function ppro() {
    status = 1;
    ActualizarDatos();
    $("#matchDetail").load("../pages/ppromocion.html");
}
function pven() {
    status = 2;
    ActualizarDatos();
    $("#matchDetail").load("../pages/pventas.html");
}

function mefectivo() {
    status = 4;
    ActualizarDatos();
    $("#matchDetail").load("../pages/mefectivo.html");
}

function getNumber(input) {
    var num = input;
    num = String(num).replace(/\./g, '');
    if (!isNaN(num)) {
        return parseFloat(num);
    }
    else {
        return 0;
    }
}

function calcularCuota(interes, monto, cuota) {
    interes = parseFloat(interes) / 100;
    monto = parseFloat(monto);
    cuota = parseFloat(cuota) - (parseFloat(cuota) * 2);
    return Math.round((interes * monto) / (1 - (Math.pow((interes + 1), cuota))));
}

function calcularCO06() {
    CO06 = (getNumber(CO01) * getNumber(CO05)) / 1000;
    if (!isNaN(Number(CO06))) {
        CO06SIM = CO06;
    }
    else {
        CO06SIM = 0;
    }
}

function calcularCO08() {
    var CO08 = CO06SIM - CO07SIM - CO07ASIM;
    CO08SIM = CO08;
    mCO08SIM();
}

function calcularPR04Inicial() {
    if (PR05 < 1) {
        PR05 = 0;
    }
    if (PR03 < 1) {
        PR03 = 0;
    }
    PR04 = PR05 + PR03;
}

function calcularPR08Inicial() {
    if (PR07 < 1) {
        PR07 = 0;
    }
    if (PR06 < 1) {
        PR06 = 0;
    }
    PR08 = PR07 + PR06;
    calcularCO7SIM();
}

//Calculos Promoción
function calcularPromocionMilenars() {
    if (PP02M < 1) {
        PP02M = 0;
    }
    if (PP03M < 1) {
        PP03M = 0;
    }
    if (PP04M < 1) {
        PP04M = 0;
    }
    if (PP05M < 1) {
        PP05M = 0;
    }
    if (PP06M < 1) {
        PP06M = 0;
    }
    PP07M = PP02M + PP03M + PP04M + PP05M + PP06M;
    TotalPromocionMI();
    TotalPromocionRS();
    TotalPromocionMW();
    TotalPromocionE();
    TotalPromocionF();
}

function calcularPromocionX() {
    if (PP02G < 1) {
        PP02G = 0;
    }
    if (PP03G < 1) {
        PP03G = 0;
    }
    if (PP04G < 1) {
        PP04G = 0;
    }
    if (PP05G < 1) {
        PP05G = 0;
    }
    if (PP06G < 1) {
        PP06G = 0;
    }
    PP07G = PP02G + PP03G + PP04G + PP05G + PP06G;
    TotalPromocionMI();
    TotalPromocionRS();
    TotalPromocionMW();
    TotalPromocionE();
    TotalPromocionF();
}

function calcularPromocionB() {
    if (PP02B < 1) {
        PP02B = 0;
    }
    if (PP03B < 1) {
        PP03B = 0;
    }
    if (PP04B < 1) {
        PP04B = 0;
    }
    if (PP05B < 1) {
        PP05B = 0;
    }
    if (PP06B < 1) {
        PP06B = 0;
    }
    PP07B = PP02B + PP03B + PP04B + PP05B + PP06B;

    TotalPromocionMI();
    TotalPromocionRS();
    TotalPromocionMW();
    TotalPromocionE();
    TotalPromocionF();
}

function TotalPromocionMI() {
    if (PP02M < 1) {
        PP02M = 0;
    }
    if (PP02G < 1) {
        PP02G = 0;
    }
    if (PP02B < 1) {
        PP02B = 0;
    }

    PP08A = PP02M + PP02G + PP02B;
    TotalPromocionT();
}

function TotalPromocionRS() {
    if (PP03M < 1) {
        PP03M = 0;
    }
    if (PP03G < 1) {
        PP03G = 0;
    }
    if (PP03B < 1) {
        PP03B = 0;
    }

    PP08B = PP03M + PP03G + PP03B;
    TotalPromocionT();
}

function TotalPromocionMW() {
    if (PP04M < 1) {
        PP04M = 0;
    }
    if (PP04G < 1) {
        PP04G = 0;
    }
    if (PP04B < 1) {
        PP04B = 0;
    }

    PP08C = PP04M + PP04G + PP04B;
    TotalPromocionT();
}

function TotalPromocionE() {
    if (PP05M < 1) {
        PP05M = 0;
    }
    if (PP05G < 1) {
        PP05G = 0;
    }
    if (PP05B < 1) {
        PP05B = 0;
    }
    PP08D = PP05M + PP05G + PP05B;
    TotalPromocionT();
}

function TotalPromocionF() {
    if (PP06M < 1) {
        PP06M = 0;
    }
    if (PP06G < 1) {
        PP06G = 0;
    }
    if (PP06B < 1) {
        PP06B = 0;
    }
    PP08E = PP06M + PP06G + PP06B;
    TotalPromocionT();
}

function TotalPromocionT() {
    if (PP08A < 1) {
        PP08A = 0;
    }
    if (PP08B < 1) {
        PP08B = 0;
    }
    if (PP08C < 1) {
        PP08C = 0;
    }
    if (PP08D < 1) {
        PP08D = 0;
    }
    if (PP08E < 1) {
        PP08E = 0;
    }

    PP09 = PP08A + PP08B + PP08C + PP08D + PP08E;
    CO02 = PP08A + PP08B + PP08C + PP08D + PP08E;
}

//calculos Ventas
function calcularVentasMilenars() {
    if (PV02M < 1) {
        PV02M = 0;
    }
    if (PV03M < 1) {
        PV03M = 0;
    }
    if (PV04M < 1) {
        PV04M = 0;
    }
    if (PV05M < 1) {
        PV05M = 0;
    }

    PV06M = PV02M + PV03M + PV04M + PV05M;
    TotalVentasTerr();
    TotalVentasRS();
    TotalVentasMW();
    TotalVentasE();
}

function calcularVentasX() {
    if (PV02G < 1) {
        PV02G = 0;
    }
    if (PV03G < 1) {
        PV03G = 0;
    }
    if (PV04G < 1) {
        PV04G = 0;
    }
    if (PV05G < 1) {
        PV05G = 0;
    }

    PV06G = PV02G + PV03G + PV04G + PV05G;
    TotalVentasTerr();
    TotalVentasRS();
    TotalVentasMW();
    TotalVentasE();
}

function calcularVentasB() {
    if (PV02B < 1) {
        PV02B = 0;
    }
    if (PV03B < 1) {
        PV03B = 0;
    }
    if (PV04B < 1) {
        PV04B = 0;
    }
    if (PV05B < 1) {
        PV05B = 0;
    }

    PV06B = PV02B + PV03B + PV04B + PV05B;
    TotalVentasTerr();
    TotalVentasRS();
    TotalVentasMW();
    TotalVentasE();
}

function TotalVentasTerr() {
    if (PV02M < 1) {
        PV02M = 0;
    }
    if (PV02G < 1) {
        PV02G = 0;
    }
    if (PV02B < 1) {
        PV02B = 0;
    }

    PV07A = PV02M + PV02G + PV02B;
    TotalVentasT();
}

function TotalVentasRS() {
    if (PV03M < 1) {
        PV03M = 0;
    }
    if (PV03G < 1) {
        PV03G = 0;
    }
    if (PV03B < 1) {
        PV03B = 0;
    }

    PV07B = PV03M + PV03G + PV03B;
    TotalVentasT();
}

function TotalVentasMW() {
    if (PV04M < 1) {
        PV04M = 0;
    }
    if (PV04G < 1) {
        PV04G = 0;
    }
    if (PV04B < 1) {
        PV04B = 0;
    }

    PV07C = PV04M + PV04G + PV04B;
    TotalVentasT();
}

function TotalVentasE() {
    if (PV05M < 1) {
        PV05M = 0;
    }
    if (PV05G < 1) {
        PV05G = 0;
    }
    if (PV05B < 1) {
        PV05B = 0;
    }

    PV07D = PV05M + PV05G + PV05B;
    TotalVentasT();
}

function TotalVentasT() {
    var PV07A = 0;
    var PV07B = 0;
    var PV07C = 0;
    var PV07D = 0;
    var PV07E = 0;

    if (PV07A < 1) {
        PV07A = 0;
    }
    if (PV07B < 1) {
        PV07B = 0;
    }
    if (PV07C < 1) {
        PV07C = 0;
    }
    if (PV07D < 1) {
        PV07D = 0;
    }
    if (PV07E < 1) {
        PV07E = 0;
    }

    PV08 = PV07A + PV07B + PV07C + PV07D;
    CO03 = PV07A + PV07B + PV07C + PV07D;
}

function calcularCO7SIM() {

    var CO10SIM = Number(CO06SIM) * Number(CONFIG57);
    CO07SIM = ((Number(PR08) * Number(CO05)) / 1000) + Number(CO10SIM);
    CO07SIM.toFixed(0);
    calcularCO08();
}

function calcularCO7ASIM() {
    CO07ASIM = getNumber(PR16);
    CO07ASIM.toFixed(0);
}

function PR06B() {
    return getNumber(PR06) * 1.5;
}
function FIN14() {
    return CONFIG19;
}
function FIN17(FIN14, FIN15, FIN16) {
    return ((FIN14 / 100) * FIN15) / (Math.pow((1 + (FIN14 / 100)), FIN16));
}

function addThousands(input) {
    var negative = false;
    var num = input;
    num = String(num).replace(/\./g, '');
    if (!isNaN(num)) {
        parseFloat(num);
        if (num < 0) {
            negative = true;
            num = Math.abs(num)
        }

        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');

        if (negative == true) {
            num = '-' + num;
        }
        return num;
    }
    else {
        return 0;
    }

}

function loadGraficosObjetivo() {

    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'marketing-objetivos', function (data) {
        localStorage.objetivosMarketing = JSON.stringify(data);
    });
    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'finanzas-objetivos', function (data) {
        localStorage.objetivosFinanzas = JSON.stringify(data);
    });
    $.getJSON("https://ceosim.cl/match/getgraphic/" + localStorage.id_match + '/' + 'produccion-objetivos', function (data) {
        localStorage.objetivosProduccion = JSON.stringify(data);
    });
}

function closegrafob() {
    $('#grafico').animate({ height: 'toggle' }, 800);
    $('#objetivos').animate({ height: 'toggle' }, 400);
    $('#botonCerrarGrafico').animate({ height: 'toggle' }, 800);

}

function cprestamo() {
    var prestamo_corto_plazo = document.getElementById("cprestamo").value;
    document.getElementById("cprestamo").value = addThousands(Number(prestamo_corto_plazo));
    if (Number(prestamo_corto_plazo) > 9999) {
        document.getElementById("cprestamo").style.border = "2px solid green";
        document.getElementById("ccuotacorto").disabled = false;
        FIN12 = calcularCuota(CONFIG18, prestamo_corto_plazo, document.getElementById("rangecuotacorto").value);
        document.getElementById("FIN12").value = addThousands(Number(parseInt(FIN12)));
    } else {
        document.getElementById("cprestamo").style.border = "2px solid red";
    }
}

function lprestamo() {
    var prestamo_largo_plazo = document.getElementById("lprestamo").value;
    document.getElementById("lprestamo").value = addThousands(Number(prestamo_largo_plazo));
    if (Number(prestamo_largo_plazo) > 9999) {
        document.getElementById("lprestamo").style.border = "2px solid green";
        document.getElementById("ccuotalargo").disabled = false;
        FIN17 = calcularCuota(CONFIG19, prestamo_largo_plazo, document.getElementById("rangecuotalargo").value);
        document.getElementById("FIN17").value = addThousands(Number(parseInt(FIN17)));
    } else {
        document.getElementById("lprestamo").style.border = "2px solid red";
    }
}

function calcularCuota(interes, monto, cuota) {
    interes = parseFloat(interes) / 100;
    monto = parseFloat(monto);
    cuota = parseFloat(cuota) - (parseFloat(cuota) * 2);
    prestamo_corto_plazo = monto;
    return Math.round((interes * monto) / (1 - (Math.pow((interes + 1), cuota))));
}

function pcortoplazo() {
    var loan_data = {
        action: "set",
        term: "shortTerm",
        fee: CONFIG18,
        loan: prestamo_corto_plazo,
        share: Number(document.getElementById("rangecuotacorto").value),
        monthly_fee: FIN12,
    };

    loan_data = JSON.stringify(loan_data);

    var loan = {
        match_id: localStorage.id_match,
        id_team: localStorage.id_team,
        round: localStorage.ronda_actual,
        loan: loan_data

    };
    if (Number(localStorage.ronda_actual) < Number(localStorage.rounds)) {
        $.post("https://ceosim.cl/match/loan/", loan)
            .done(function (data) {
                ActualizarDatos();
                alert("Éxito al solicitar el préstamo");
                $("#fsModal").modal('hide');
                $(".modal-backdrop").remove();
                prestamo_corto_plazo = 0;
            });
    }
    else {
        $("#fsModal").modal('hide');
        $(".modal-backdrop").remove();
    }
}

function plargoplazo() {
    var loan_data = {
        action: "set",
        term: "longTerm",
        fee: CONFIG19,
        loan: prestamo_largo_plazo,
        share: Number(document.getElementById("rangecuotalargo").value),
        monthly_fee: Number(FIN17),
    };

    loan_data = JSON.stringify(loan_data);

    var loan = {
        match_id: localStorage.id_match,
        id_team: localStorage.id_team,
        round: localStorage.ronda_actual,
        loan: loan_data

    };

    if (currendRound < Rounds) {
        $.post("https://ceosim.cl/match/loan/", loan)
            .done(function (data) {
                ActualizarDatos();
                alert("Éxito al solicitar el préstamo");
                $("#plpmodal").modal('hide');
                $(".modal-backdrop").remove();
                prestamo_largo_plazo = 0;
            });
    }
    else {
        $("#modalGenerico").modal('hide');
    }
}

var btnfloat = false;

function openbtnfloat() {
    if (btnfloat == false) {
        document.getElementById("botonF1o").style.display = "none";
        document.getElementById("botonF1c").style.display = "block";
        document.getElementById("contenedor").style.height = "240px";
        document.getElementById("contenedor").style.width = "100%";
        document.getElementById("contenedor").style.zIndex = "1100";
        document.getElementById("contenedor").style.right = "0px";
        document.getElementById("contenedor").style.bottom = "0px";
        document.getElementById("matchDetail").style.position = "fixed";
        $('.divfloat').addClass('animacionVer');
        btnfloat = true;
    } else {
        document.getElementById("contenedor").style.height = "52px";
        document.getElementById("contenedor").style.width = "45px";
        document.getElementById("contenedor").style.zIndex = "10";
        document.getElementById("contenedor").style.right = "16px";
        document.getElementById("contenedor").style.bottom = "50px"
        document.getElementById("botonF1o").style.display = "block";
        document.getElementById("botonF1c").style.display = "none";
        document.getElementById("matchDetail").style.position = "";
        $('.divfloat').removeClass('animacionVer');
        $(".modal-backdrop").remove();
        btnfloat = false;
    }
}

function panels() {
    modal = 3;
    $("#implementm").load("../pages/implementacion.html");
}

function loadpanel() {
    var SellCapacity = 0;
    var BuyCapacity = 0;
    var shortTerm = 0;
    var toPay = 0;
    var toCharge = 0;
    var id1 = 0;
    var plantAutom = 0;
    var plantaflag = false, prestamoflag = false;

    var ids = '<div class="swiper-container"><div class="swiper-wrapper">';
    if (prodCapacity.buy.length > 0) {
        var iprod = 1;
        $.each(prodCapacity.buy, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (iprod == 1) {
                    if (plantaflag == false) {
                        ids += '<div class="swiper-slide" id="plantatop">' +
                            '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Producción Planta</h6></div>' +
                            '<div class="col-12 w-100 mt-2"><div id="planta" class="mx-3">' +
                            '<p><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-industry" aria-hidden="true"></i> <strong>Comprar capacidad de planta</strong></p>';
                        plantaflag = true;
                    }
                }
                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<div class="progress mb-3">' +
                    '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en ' + a + ' rondas más</div></div>';
                iprod++;
            }
            if (prodCapacity.buy.length <= iprod && plantaflag == true) {
                ids += "</div></div></div></div>";
            }
        });
        BuyCapacity = iprod;
    }

    if (prodCapacity.sell.length > 0) {
        var iprods = 1;
        $.each(prodCapacity.sell, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (iprods == 1) {
                    if (plantaflag == false) {
                        ids += '<div class="swiper-slide" id="plantatop">' +
                            '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Producción Planta</h6></div>' +
                            '<div class="col-12 w-100 mt-2"><div id="planta" class="mx-3">' +
                            '<p><i class="fa fa-minus" aria-hidden="true"></i> <i class="fa fa-industry" aria-hidden="true"></i> <strong>Vender capacidad de planta</strong></p>';
                        plantaflag = true;
                    }
                }
                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<div class="progress mb-3"><div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en "' + a + '" rondas más</div></div>';
                iprods++;
            }
            if (prodCapacity.sell.length <= iprods && plantaflag == true) {
                ids += '</div></div></div></div>';
            }
        });
        SellCapacity = iprods;
    }

    if (loans.shortTerm.length > 0) {
        var iloan = 1;
        $.each(loans.shortTerm, function (key, des) {
            if (des.paid_out == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (iloan == 1) {
                    if (prestamoflag == false) {
                        ids += '<div class="swiper-slide" id="prestamotop">' +
                            '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Prestamos</h6></div>' +
                            '<div class="col-12 w-100 mt-2"><div id="prestamo" class="mx-3"><p><i class="fa fa-credit-card-alt" aria-hidden="true"></i> <strong>Crédito a corto plazo</strong></p>';
                        prestamoflag = true;
                    }
                }

                var a = (parseInt(des.pay) * 100) / parseInt(des.loan).toFixed(0);
                ids += '<p>Capital $' + addThousands(des.loan) + '</p>' +
                    '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + a + '%;height:20px"><h6>$' + addThousands(des.pay) + 'pagados</h6></div></div>';
                iloan++;
            }
        });
        if (loans.shortTerm.length <= iloan && prestamoflag == true) {
            ids += '</div></div></div></div>';
        }
        shortTerm = iloan;
    }

    if (loans.longTerm.length > 0) {

        var iloans = 1;
        $.each(loans.longTerm, function (key, des) {
            if (des.paid_out == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (iloans == 1) {
                    if (prestamoflag == false) {
                        ids += '<div class="swiper-slide" id="prestamotop">' +
                            '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Prestamos</h6></div>' +
                            '<div class="col-12 w-100 mt-2"><div id="prestamo" class="mx-3"><p><i class="fa fa-credit-card-alt" aria-hidden="true"></i> <strong>Crédito a largo plazo</strong></p>';
                        prestamoflag = true;
                    }
                }

                var a = (parseInt(des.pay) * 100) / parseInt(des.loan).toFixed(0);
                ids += '<p>Capital $' + addThousands(des.loan) + '</p>' +
                    '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + a + '%;height:20px"><h6>$' + addThousands(des.pay) + ' pagados</h6></div></div>';

                iloans++;
            }
            if (loans.longTerm.length <= iloans && prestamoflag == true) {
                ids += '</div></div></div></div>';
            }
        });
        shortTerm = shortTerm + ilaoas;
    }

    if (research.length > 0) {

        var ires = 1;
        $.each(research, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (ires == 1) {
                    ids += '<div class="swiper-slide" id="investigaciontop">' +
                        '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Investigación</h6></div>' +
                        '<div class="col-12 w-100 mt-2"><div id="investigacion" class="mx-3"><p><i class="fa fa-flask" aria-hidden="true"></i> <strong>Investigando, investigacion N°' + (parseInt(des.id_research) + 1) + '</strong></p>';
                }

                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<div class="progress mb-3"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en ' + a + ' rondas más</div></div>';
                ires++;
            }
            if (research.length <= ires) {
                ids += '</div></div></div></div>';
            }
        });
        id1 = ires;
    }

    if (xpagar.length > 0) {

        var ipay = 1;
        $.each(xpagar, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (ipay == 1) {
                    ids += '<div class="swiper-slide" id="xpagartop">' +
                        '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Cuentas por Cobrar</h6></div>' +
                        '<div class="col-12 mt-2"><div id="xpagar" class="mx-3"><p><i class="fa fa-money" aria-hidden="true"></i> <strong>Cuentas por cobrar</strong></p>';
                }

                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<p>Cobrar $ <strong>' + addThousands(des.RR02) + '</strong></p>' +
                    '<div class="progress mb-3"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en ' + a + ' rondas más</div></div>';
                ipay++;
            }
            if (xpagar.length <= ipay) {
                ids += '</div></div></div></div>';
            }
        });
        toCharge = ipay;
    }

    if (toPay.length > 0) {

        var itpay = 1;
        $.each(toPay, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (itpay == 1) {
                    ids += '<div class="swiper-slide" id="topaytop">' +
                        '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Cuentas por Pagar</h6></div>' +
                        '<div class="col-12 mt-2"><div id="topay" class="mx-3"><p><i class="fa fa-money" aria-hidden="true"></i> <strong>Cuentas por pagar</strong></p>';
                }

                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<p>Pagar $ <strong>' + addThousands(des.gasto) + '</strong></p>' +
                    '<div class="progress mb-3"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en ' + a + ' rondas más</div></div>';
                itpay++;
            }
            if (toPay.length <= itpay) {
                ids += '</div></div></div></div>';
            }
        });
        toPay = itpay;
    }

    if (automation.length > 0) {

        var iauto = 1;
        $.each(automation, function (key, des) {
            if (des.implemented == false) {
                $("#task").removeClass("d-none").removeClass("task-view");
                taskAction = false;
                if (iauto == 1) {
                    ids += '<div class="swiper-slide" id="plantaAutomtop">' +
                        '<div class="row w-100" style="position:fixed; top:0"><div class="col-12"><h6 class="card-header fondo-tiempo bg-azul text-white text-center sticky-top">Automatización de Planta</h6></div>' +
                        '<div class="col-12 mt-2"><div id="plantaAutomatizacion" class="mx-3"><p><i class="fa fa-tachometer"  aria-hidden="true"></i> <strong>Automatización de plata</strong></p>';
                }

                var a = parseInt(parseInt(des.id_round) + parseInt(des.implement)) - parseInt(currendRound);
                var b = (100 / a).toFixed(0);
                ids += '<p>Incremento en automatización <strong>' + des.automation + '</strong></p>' +
                    '<div class="progress mb-3"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="' + b + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + b + '%;">Activa en ' + a + ' rondas más</div></div>';
                iauto++;
            }
            if (automation.length <= iauto) {
                ids += '</div></div></div></div>';
            }
        });
        plantAutom = iauto;
    }
    ids += '</div><div class="swiper-pagination mt-5 pb-1"></div></div>' +
        '<script>var swiper = new Swiper(".swiper-container", {slidesPerView: 1,spaceBetween: 30,loop: false,pagination: {' +
        'el: ".swiper-pagination",clickable: true,},navigation: {nextEl: ".swiper-button-next",prevEl: ".swiper-button-prev",' +
        '},});</script>';
    $('#implement-swiper').html(ids);
    console.log("ids" + ids);
}
$(document).ready(function () {
    document.addEventListener("deviceready", setOverrideBackbutton, false);
});

function setOverrideBackbutton() {
    if (typeof device != "undefined" && device.platform == "Android") {
        navigator.app.overrideBackbutton(true);
    }
    document.addEventListener("backbutton", onBackKeyDown, true);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
}

function onOnline() {
    tiempo();
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
function onBackKeyDown() {
    if (modal == 0) {
        if (status == 0 || status == 3 || status == 5) {
            navigator.notification.confirm(
                '¿Estás seguro que quieres salir de la partida?',  // message
                onConfirm,              // callback to invoke with index of button pressed
                'Confirmar',            // title
                ['Si', 'No']             // buttonLabels
            );
            //volver partidas
            status = 0;

        } else if (status == 1 || status == 2 || status == 6 || status == 9 || status == 10) {
            console.log("status " + status);
            //marketing
            if (status == 9) {
                buildMarketing();
                dashboard();
                closeNavOver();

            } else {
                buildMarketing();
                status = 0;
            }
        } else if (status == 4 || status == 7) {
            console.log("status " + status);
            //finance
            buildFinance();
            status = 3;
        } else if (status == 8) {
            console.log("status " + status);
            //production
            buildProducction();
            status = 5;
        } else if (status > 10) {
            console.log("status " + status);
            //sidenav
            $('#sidebar').addClass("show").addClass("in");
            openNav();
        }
    }
    if (modal == 1) {
        openbtnfloat();
        modal = 0;
    }
    if (modal == 2) {
        $("#rank").modal('hide');
        modal = 1;
    }
    if (modal == 3) {
        $("#implement").modal('hide');
        modal = 1;
    }
    if (modal == 4) {
        $("#resultados").modal('hide');
        modal = 1;
    }
}

function onConfirm(buttonIndex) {
    if (buttonIndex == 2) {
    } else {
        exit();
    }
}