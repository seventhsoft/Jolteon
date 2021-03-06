(function () {
    'use strict';
    
    angular
        .module("kuni")
        .factory("ComunesServicio", ComunesServicio);
    ComunesServicio.$inject = ['$http','Rutas'];
    function ComunesServicio($http,Rutas){
        var servicio = {
            mensajes : mensajes,
            bitacora : bitacora,
            listaEstadosConcurso : [],
            listaPerfiles : [],
            obtenerListaEsCon : obtenerListaEsCon,
            obtenerPerfiles : obtenerPerfiles
            
        };
        return servicio;
        function mensajes(id){
            var ruta = Rutas.RUTAFR + "/app/comunes/comunes.mensajes.json";
            $http.get(ruta)
            .then(
                function(response){
                    response.data;
                    for(var i =0; i<response.data.length; i++){
                        var msg = response.data[i];
                        if(id === msg.id){
                            mensaje(msg.tipo,msg.titulo,msg.mensaje,msg.duracion);
                            break;
                        };
                    };
                }
            );  
        };
        
        function bitacora(id){
            var ruta = Rutas.RUTAFR + "/app/comunes/comunes.bitacora.json";
            $http.get(ruta)
            .then(
                function(response){
                    response.data;
                    for(var i =0; i<response.data.length; i++){
                        var bitacora = response.data[i];
                        if(id === bitacora.id){
                            /* serivcio de la bitacora */
                            break;
                        };
                    };
                }
            );  
        };
        
        function obtenerListaEsCon(){
            var ruta = Rutas.RUTABK + '/catalogos/estadosConcurso';  
            return $http.get(ruta);
        };
        
        function obtenerPerfiles(){
            var ruta = Rutas.RUTABK + '/catalogos/perfiles';  
            return $http.get(ruta);
        };
    };
})();