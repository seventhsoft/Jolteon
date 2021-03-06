(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("SeguridadServicio", SeguridadServicio);
    SeguridadServicio.$inject = ['$http','Rutas','log','Llaves','localStorageService'];
    function SeguridadServicio($http,Rutas,log,Llaves,localStorageService){
        var servicio = {
            login : login,
            logout : logout,
            obtenerListaUsuarios : obtenerListaUsuarios,
            obtenerUsuario : obtenerUsuario,
            recuperarPassword : recuperarPassword
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
            var token = localStorageService.get("token");
            var access = Rutas.RUTABK + '/oauth/token/revokeById/' + token.access_token;
            var refresh = Rutas.RUTABK + '/tokens/revokeRefreshToken/' + token.refresh_token;
            $http.post(refresh);
            $http.post(access);
            localStorageService.remove("usuario");
            localStorageService.remove("token");
            location.reload();
        };
        
        function obtenerListaUsuarios(){
            var ruta = Rutas.RUTABK + "/usuarios";
            return $http.get(ruta);
        };
        
        function obtenerUsuario(idUsuario){
            var ruta = Rutas.RUTABK + "/usuarios/"+idUsuario;
            return $http.get(ruta);
        };
        
        function recuperarPassword(usuario){
            var ruta = Rutas.RUTABK+"/usuarios/recuperar/password";
            var parametros = {
                "usuario" : usuario
            };
            console.log(parametros);
            return $http.post(ruta,parametros);
        }
    };
})();
