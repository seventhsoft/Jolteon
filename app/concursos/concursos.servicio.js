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
            listaTiposRecompensa : [],
            obtenerListaTipoReconpensa : obtenerListaTipoReconpensa
        };
        return servicio;
        
        function obtenerListaTipoReconpensa(){
            var ruta = Rutas.RUTABK + "/catalogos/tiposrecompensa";
            return $http.get(ruta);
        };
        
    };
})();