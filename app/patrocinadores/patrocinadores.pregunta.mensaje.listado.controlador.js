(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresPreguntaMensajeListadoControlador", PatrocinadoresPreguntaMensajeListadoControlador);
    PatrocinadoresPreguntaMensajeListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeListadoControlador(Servicio,Comunes){
        var ppmlc = this;
    };
})();