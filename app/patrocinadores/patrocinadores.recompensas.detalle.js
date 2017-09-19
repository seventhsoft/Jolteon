(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresRecompensasDetalleControlador", PatrocinadoresRecompensasDetalleControlador);
    PatrocinadoresRecompensasDetalleControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasDetalleControlador(Servicio,Comunes){
        var prdc = this;
    };
})();