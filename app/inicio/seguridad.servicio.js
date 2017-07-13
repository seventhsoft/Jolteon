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
        
        function login(user,pass){
            var usuario = {
                idUsuario : 1,
                user : user,
                pass : pass,
                sesion : true       
            };
            return usuario;
        };
        
        function logout(){
            return false;
        };
    }

})();
