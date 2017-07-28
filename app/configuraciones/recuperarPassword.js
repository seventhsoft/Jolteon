angular.module('recuperar', [])
.run(['$rootScope', function (){}])
 .controller("RecuperarControlador", RecuperarControlador);
    RecuperarControlador.$inject = ['$http','$location'];
    function RecuperarControlador($http,$location){
        console.log("IniciaRecuperacion");
        var rc = this;
    };