(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresPreguntaMensajeAgregarControlador", PatrocinadoresPreguntaMensajeAgregarControlador);
    PatrocinadoresPreguntaMensajeAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeAgregarControlador(Servicio,Comunes){
        var ppmac = this;
    };
})();