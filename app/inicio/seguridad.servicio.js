(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("SeguridadServicio", ComunesServicio);
    ComunesServicio.$inject = ['$http','Rutas','log','Llaves'];
    function ComunesServicio($http,Rutas,log,Llaves){
        var servicio = {
            login : login,
            logout : logout,
            obtenerListaUsuarios : obtenerListaUsuarios
        };
        return servicio;
        
        function login(username,password){
            log.debug("Inicia el login");
            var ruta = Rutas.RUTABK +"/oauth/token";
            var parmetros = {
                username:username,
                password: password,
                client_id : "webClient",
                grant_type : "password"
            };
            return $http(
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': Llaves.BASIC
                    },
                    url : ruta,
                    method: "POST",
                    data : parmetros,
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    }
                }
            );
        };
        
        function logout(){
            return false;
        };
        
        function obtenerListaUsuarios(){
            var ruta = Rutas.RUTABK + "/usuarios";
            return $http.get(ruta);
        };
    };
})();
