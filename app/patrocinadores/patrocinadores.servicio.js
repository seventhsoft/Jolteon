(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresServicio", PatrocinadoresServicio);
    PatrocinadoresServicio.$inject = ['$http','Rutas'];
    function PatrocinadoresServicio($http,Rutas){
        var servicio = {
            
        };
        return servicio;
    };
})();