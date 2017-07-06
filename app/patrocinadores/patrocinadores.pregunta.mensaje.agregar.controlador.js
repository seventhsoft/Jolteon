(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresPreguntaMensajeAgregarControlador", PatrocinadoresPreguntaMensajeAgregarControlador);
    PatrocinadoresPreguntaMensajeAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeAgregarControlador(Servicio,Comunes){
        var ppmac = this;
    };
})();