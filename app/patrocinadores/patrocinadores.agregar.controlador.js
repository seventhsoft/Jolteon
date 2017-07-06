(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresAgregarControlador", PatrocinadoresAgregarControlador);
    PatrocinadoresAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresAgregarControlador(Servicio,Comunes){
        var pac = this;
    };
})();