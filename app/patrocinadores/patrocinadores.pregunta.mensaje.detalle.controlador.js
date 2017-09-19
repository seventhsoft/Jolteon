(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresPreguntaMensajeDetalleControlador", PatrocinadoresPreguntaMensajeDetalleControlador);
    PatrocinadoresPreguntaMensajeDetalleControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeDetalleControlador(Servicio,Comunes){
        var ppmdc = this;
    };
})();