(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresListadoControlador", PatrocinadoresListadoControlador);
    PatrocinadoresListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresListadoControlador(Servicio,Comunes){
        var plc = this;
    };
})();