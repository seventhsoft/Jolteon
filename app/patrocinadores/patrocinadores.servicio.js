(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("PatrocinadoresServicio", PatrocinadoresServicio);
    PatrocinadoresServicio.$inject = ['$http','Rutas','ConcursosServicio'];
    function PatrocinadoresServicio($http,Rutas,ConcursosServicio){
        var servicio = {
            patrocinador : {},
            pregunta:{},
            obtieneListaPatrocinadores : obtieneListaPatrocinadores,
            insertaPatrocinador : insertaPatrocinador,
            actualizaPatrocinador : actualizaPatrocinador,
            obtieneListaPreguntaMensaje : obtieneListaPreguntaMensaje,
            obtieneListaRecompesa : obtieneListaRecompesa,
            insertarPreguntaMensaje:insertarPreguntaMensaje,
            actualizarPreguntaMensaje:actualizarPreguntaMensaje,
            obtenerListaConcurso : ConcursosServicio.obtenerListaConcurso
        };
        return servicio;
        
        function insertarPreguntaMensaje(parametros){
            var ruta = Rutas.RUTABK + "/pregunta"; // actualizar ruta
            return $http.post(ruta,parametros);
        }
        
        function actualizarPreguntaMensaje(parametros){
            var ruta = Rutas.RUTABK + "/pregunta"; // actualizar ruta
            return $http.post(ruta,parametros);
        }
        
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
        
        function actualizaPatrocinador(parametros){
             var ruta = Rutas.RUTABK + "/patrocinador";
            return $http.put(ruta,parametros);
        }
    };
})();