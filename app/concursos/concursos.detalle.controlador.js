(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosDetalleControlador", ConcursosDetalleControlador);
    ConcursosDetalleControlador.$inject = ['ConcursosServicio','ComunesServicio'];
    function ConcursosDetalleControlador(Servicio,Comunes){
        var cdc = this;
    };
})();