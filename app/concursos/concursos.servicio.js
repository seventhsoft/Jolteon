(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("ConcursosServicio", ConcursosServicio);
    ConcursosServicio.$inject = ['$http','Rutas','log'];
    function ConcursosServicio($http,Rutas,log){
        var servicio = {
            origen : 0,
            consurso : {},
            nivel : {},
            listaNiveles : []
        };
        return servicio;
    };
})();