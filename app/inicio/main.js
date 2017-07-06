angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = ['ComunesServicio'];
function MainController(ComunesServicio){
    var mc = this;
    mc.sesion = false;
    mc.olvida = olvida;
    function olvida(){
        ComunesServicio.mensajes(1);
    };
};