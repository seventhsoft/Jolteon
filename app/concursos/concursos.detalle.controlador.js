(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("ConcursosDetalleControlador", ConcursosDetalleControlador);
    ConcursosDetalleControlador.$inject = ['ConcursosServicio','ComunesServicio'];
    function ConcursosDetalleControlador(Servicio,Comunes){
        var cdc = this;
    };
})();