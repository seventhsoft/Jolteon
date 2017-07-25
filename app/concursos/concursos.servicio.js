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
            listaNiveles : [],
            obtenerPerfiles : obtenerPerfiles
        };
        return servicio;
        
        function obtenerPerfiles(){
            log.debug("Inicia perfiles");
            var ruta = Rutas.RUTABK + "/catalogos/perfiles";
            return $http.get(ruta);
        };
    };
})();