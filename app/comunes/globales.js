/* Mensaje solo informativo. */
function mensaje(tipo, titulo, mensaje, duracion) {
    if (duracion === undefined) {
        duracion = 3000;
    }
    var img = "assets/img/icons/ballicons/alert.png";
    switch (tipo) {
        case "alert":
        {
            img = "assets/img/icons/ballicons/alert.png";
            break;
        }
        case "info":
        {
            img = "assets/img/icons/ballicons/info.png";
            break;
        }
        case "success":
        {
            img = "assets/img/icons/ballicons/success.png";
            break;
        }
        case "error":
        {
            img = "assets/img/icons/ballicons/error.png";
            break;
        }
        default:
            break;
    }
    var options = {
        "type": tipo,
        "img": img,
        "width": "400",
        "content": "<strong>" + titulo + "</strong>  <br/>" + mensaje,
        "html": true,
        "autoClose": true,
        "timeOut": duracion,
        "position": "topRight",
        "effect": "slide",
        "easing": "jswing",
        "duration": 200
    };
    $.notification(options);
};

/* Mensaje de confirmación genérico para la plantilla*/
function confirmaMsj(titulo,mensaje,bottonOK,accionOK,bottonCancelar,accionCancelar){
    
    var options = {
        "type": "notificacion",
        "img": "assets/img/icons/ballicons/info.png",
        "width": "400",
        "content": "<strong>" + titulo + "</strong> <br/>" + mensaje,
        "html": true,
        "autoClose": false,
        "timeOut": 5,
        "position": "topRight",
        "effect": "slide",
        "easing": "jswing",
        "duration": 200,
        "buttons":[
            {
                "text" : bottonOK,
                "addClass": "btn btn-primary",
                "click" : function (id){
                     accionOK();
                     $.notification('close',id);
                }
            },
            {
                "text" : bottonCancelar,
                "addClass": "btn btn-default",
                "click" : function (id){
                     accionCancelar();
                     $.notification('close',id);
                     
                }
            }
        ]
    };
    $.notification(options);
};

var fechaSistema = new Date();

function error(){
    location.href = "#/";
}