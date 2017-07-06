(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresDetalleControlador", PatrocinadoresDetalleControlador);
    PatrocinadoresDetalleControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresDetalleControlador(Servicio,Comunes){
        var pdc = this;
    };
})();