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
            obtenerListaTipoReconpensa : obtenerListaTipoReconpensa,
            obtenerListaConcurso : obtenerListaConcurso,
            insertarConcurso : insertarConcurso,
            actualizarConcurso : actualizarConcurso
        };
        return servicio;
        
        function obtenerListaTipoReconpensa(){
            var ruta = Rutas.RUTABK + "/catalogos/tiposrecompensa";
            return $http.get(ruta);
        };
        
        function obtenerListaConcurso(){
            var ruta = Rutas.RUTABK + "/concurso";
            return $http.get(ruta);
        };
        
        function insertarConcurso(concurso){
            var ruta = Rutas.RUTABK + "/concurso";
            return $http.post(ruta,concurso);
        }
        
        function actualizarConcurso(concurso){
            var ruta = Rutas.RUTABK + "/concurso";
            return $http.put(ruta,concurso);
        }
    };
})();