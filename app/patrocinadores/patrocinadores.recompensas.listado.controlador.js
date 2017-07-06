(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresRecompensasListadoControlador", PatrocinadoresRecompensasListadoControlador);
    PatrocinadoresRecompensasListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasListadoControlador(Servicio,Comunes){
        var prlc = this;
    };
})();