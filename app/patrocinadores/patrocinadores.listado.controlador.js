(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresListadoControlador", PatrocinadoresListadoControlador);
    PatrocinadoresListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresListadoControlador(Servicio,Comunes){
        var plc = this;
    };
})();