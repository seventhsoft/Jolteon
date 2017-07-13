(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresAgregarControlador", PatrocinadoresAgregarControlador);
    PatrocinadoresAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresAgregarControlador(Servicio,Comunes){
        var pac = this;
    };
})();