(function () {
    'use strict';
    angular
        .module("kuni")
        .factory("SeguridadServicio", ComunesServicio);
    ComunesServicio.$inject = ['$http','Rutas'];
    function ComunesServicio($http,Rutas){
        var servicio = {
            login : login,
            logout : logout
        };
        return servicio;
        
        function login(username,password){
            var ruta = "api.juegakuni.com.mx/lfs/oauth/token";
            //return $http.get(ruta);
            return $http(
                    {
                        url : "api.juegakuni.com.mx/lfs/oauth/token",
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':'Basic d2ViQ2xpZW50OnNlY3JldA=='
                        },
                        transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data : {username:username, password: password}
                    }
                );
        };
        
        function logout(){
            return false;
        };
    }

})();
