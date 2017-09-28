(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresServicio", PatrocinadoresServicio);
    PatrocinadoresServicio.$inject = ['$http','Rutas'];
    function PatrocinadoresServicio($http,Rutas){
        var servicio = {
            patrocinador : {},
            obtieneListaPatrocinadores : obtieneListaPatrocinadores
        };
        return servicio;
        
        function obtieneListaPatrocinadores(){
            var ruta = Rutas.RUTABK + "/patrocinador";
            console.log(ruta);
            return $http.get(ruta);
        }
    };
})();