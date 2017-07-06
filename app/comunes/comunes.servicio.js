(function () {
    'use strict';
    
    angular
        .module("kuni")
        .factory("ComunesServicio", ComunesServicio);
    ComunesServicio.$inject = ['$http','Rutas'];
    function ComunesServicio($http,Rutas){
        var servicio = {
            mensajes : mensajes
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
    };
})();