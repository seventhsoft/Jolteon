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
            var ruta = Rutas.RUTAFR + "/app/configuraciones/users.json";
            return $http.get(ruta);
        };
        
        function logout(){
            return false;
        };
    }

})();
