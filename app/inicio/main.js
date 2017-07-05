angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = [];
function MainController(){
    var mc = this;
    mc.sesion = false;
    
    mc.olvida = olvida;
    function olvida(){
        mensaje('success','Aviso.','mensaje de prueba',5000);
    };
};