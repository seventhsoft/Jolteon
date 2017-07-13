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
                if(texto !== undefined && parametros !== undefined){
                    mensaje = mensaje + texto +(parametros !== undefined ? JSON.stringify(parametros) : "");
                    $log.info(mensaje);
                }else if(texto !== undefined && parametros === undefined){
                    if(typeof texto === 'string' || typeof texto === 'number' || typeof texto === 'boolean'){
                        mensaje = mensaje + (texto !== undefined ? texto : "");
                        $log.info(mensaje);
                    }else{
                        $log.info(mensaje,texto);
                    };
                }else{
                    $log.info(mensaje + texto);
                };
            };
        };
        
        function debug(texto,parametros){    
            if(Log.DEBUG){
                var mensaje = "debug: ";
                if(texto !== undefined && parametros !== undefined){
                    mensaje = mensaje + texto +(parametros !== undefined ? JSON.stringify(parametros) : "");
                    $log.info(mensaje);
                }else if(texto !== undefined && parametros === undefined){
                    if(typeof texto === 'string' || typeof texto === 'number' || typeof texto === 'boolean'){
                        mensaje = mensaje + (texto !== undefined ? texto : "");
                        $log.info(mensaje);
                    }else{
                        $log.info(mensaje,texto);
                    };
                }else{
                    $log.info(mensaje + texto);
                };
            };
        };
    };
})();