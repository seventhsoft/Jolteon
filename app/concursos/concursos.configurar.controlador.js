(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("ConcursosConfigurarControlador", ConcursosConfigurarControlador);
    ConcursosConfigurarControlador.$inject = ['ConcursosServicio','ComunesServicio'];
    function ConcursosConfigurarControlador(Servicio,Comunes){
        var ccc = this;
    };
})();