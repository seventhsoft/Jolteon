(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("log", log);
    log.$inject = ['$log','Log'];
    function log($log,Log){
        var servicio = {
            info : info,
            debug : debug
        };
        return servicio;
        function info(texto,parametros){
            if(Log.INFO){
                var mensaje = "info: ";
                mensaje = mensaje + (texto !== undefined ? texto : "");
                mensaje = mensaje + (parametros !== undefined ? JSON.stringify(parametros) : "");
                $log.info(mensaje);  
            };
        };
        
        function debug(texto,parametros){
            if(Log.DEBUG){
                var mensaje = "debug: ";
                mensaje = mensaje + (texto !== undefined ? texto : "");
                mensaje = mensaje + (parametros !== undefined ? JSON.stringify(parametros) : "");
                $log.info(mensaje);
            };
        };
    };
})();