(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresPreguntaMensajeListadoControlador", PatrocinadoresPreguntaMensajeListadoControlador);
    PatrocinadoresPreguntaMensajeListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeListadoControlador(Servicio,Comunes){
        var ppmlc = this;
    };
})();