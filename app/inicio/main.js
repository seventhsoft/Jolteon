angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = ['ComunesServicio','log'];
function MainController(ComunesServicio,log){
    log.info("Inicia Main Controller");
    var mc = this;
    mc.sesion = false;
    mc.user = "";
    mc.pass = "";
    mc.iniciarSesion = iniciarSesion;
    function iniciarSesion(){
        log.info("info:",mc);
        log.debug("debug");
    };  
};