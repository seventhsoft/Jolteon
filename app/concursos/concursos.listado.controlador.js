(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosListadoControlador", ConcursosListadoControlador);
    ConcursosListadoControlador.$inject = ['ConcursosServicio','ComunesServicio'];
    function ConcursosListadoControlador(Servicio,Comunes){
        var clc = this;
    };
})();