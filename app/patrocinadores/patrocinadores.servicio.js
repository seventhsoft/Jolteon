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
            insertaPatrocinador : insertaPatrocinador,
            obtieneListaPreguntaMensaje : obtieneListaPreguntaMensaje,
            obtieneListaRecompesa : obtieneListaRecompesa
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
        
        function obtieneListaPreguntaMensaje(idPatrocinador){
            var ruta = Rutas.RUTABK + "/pregunta/mensaje/"+idPatrocinador;
            return $http.get(ruta);
        }
        
        function obtieneListaRecompesa(idPatrocinador){
            var ruta = Rutas.RUTABK + "/recompensa/patrocinador/"+idPatrocinador;
            return $http.get(ruta);
        }
    };
})();