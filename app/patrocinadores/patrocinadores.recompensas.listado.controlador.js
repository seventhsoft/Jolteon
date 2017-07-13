(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresRecompensasListadoControlador", PatrocinadoresRecompensasListadoControlador);
    PatrocinadoresRecompensasListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasListadoControlador(Servicio,Comunes){
        var prlc = this;
    };
})();