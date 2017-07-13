(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("ConcursosServicio", ConcursosServicio);
    ConcursosServicio.$inject = ['$http','Rutas'];
    function ConcursosServicio($http,Rutas){
        var servicio = {
            origen : 0,
            consurso : {}
        };
        return servicio;
    };
})();