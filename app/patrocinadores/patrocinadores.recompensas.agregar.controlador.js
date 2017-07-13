(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresRecompensasAgregarControlador", PatrocinadoresRecompensasAgregarControlador);
    PatrocinadoresRecompensasAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasAgregarControlador(Servicio,Comunes){
        var prac = this;
    };
})();