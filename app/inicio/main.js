angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = [];
function MainController(){
    var mc = this;
    mc.sesion = false;
};