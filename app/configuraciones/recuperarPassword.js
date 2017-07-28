angular.module('recuperar', [])
.run(['$rootScope', function (){}])
 .controller("RecuperarControlador", RecuperarControlador);
    RecuperarControlador.$inject = ['$http','$location'];
    function RecuperarControlador($http,$location){
        console.log("IniciaRecuperacion");
        var rc = this;
        rc.password = "";
        rc.confirmacion = "";
        rc.usuario = {};
        rc.usuario = $location.search();
        rc.restablecer = restablecer;
        
        function restablecer(){
            if(rc.password !== rc.confirmacion){
                return mensaje("error","Aviso","La contraseñas no coinciden.");
            };
            if(rc.usuario.idUsuario === undefined || rc.usuario.key === undefined){
                return mensaje("error","Aviso","Vigencia terminada.");
            };
            /*
            $http(
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer "+rc.usuario.key
                    },
                    url : "http://localhost:8080/lfs/usuarios/recuperarPassword",
                    method : "PUT",
                    data : {
                        "idUsuario":rc.usuario.idUsuario,
                        "password":rc.password
                    }
                }
            ).then(
                function(){
                    mensajes("success","Aviso","Constraseña modificada.");
                },
                function(response){
                    if(response.status === 401){
                        mensajes("error","Aviso","Vigencia terminada.");
                    }else{
                        mensajes("error","Aviso","Ocurrio un error inesperado, por favor intentelo más tarde.");
                    }
                }
            );
            */
            
        };
    };