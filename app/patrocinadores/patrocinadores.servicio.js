(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresServicio", PatrocinadoresServicio);
    PatrocinadoresServicio.$inject = ['$http','Rutas'];
    function PatrocinadoresServicio($http,Rutas){
        var servicio = {
            patrocinador : {},
            obtieneListaPatrocinadores : obtieneListaPatrocinadores,
            insertaPatrocinador : insertaPatrocinador
        };
        return servicio;
        
        function obtieneListaPatrocinadores(){
            var ruta = Rutas.RUTABK + "/patrocinador";
            return $http.get(ruta);
        }
        
        function insertaPatrocinador(parametros){
            var ruta = Rutas.RUTABK + "/patrocinador";
            return $http.post(ruta,parametros);
        }
    };
})();