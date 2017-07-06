(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresRecompensasAgregarControlador", PatrocinadoresRecompensasAgregarControlador);
    PatrocinadoresRecompensasAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasAgregarControlador(Servicio,Comunes){
        var prac = this;
    };
})();