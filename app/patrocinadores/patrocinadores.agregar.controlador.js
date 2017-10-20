(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresAgregarControlador", PatrocinadoresAgregarControlador);
    PatrocinadoresAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresAgregarControlador(Servicio,Comunes){
        var pac = this;
        pac.organizacion = "";
        pac.nombre = "";
        pac.apaterno = "";
        pac.telefono = "";
        pac.correo = "";
        pac.guardar = guardar;
        pac.cancelar = cancelar;
        
        function guardar(){
            var ban = true;
            if(pac.organizacion === ""){
                ban = false; 
            }
            if(pac.nombre === ""){
                ban = false; 
            }
            if(pac.apaterno === ""){
                ban = false; 
            }
            if(pac.telefono === ""){
                ban = false; 
            }
            if(pac.correo === ""){
                ban = false; 
            }
            if(ban){
                mensaje("success","Aviso.","Patrocinador agregado correctamente",5000);
                location.href = "#/patrocinadores/patrocinadores-listado";
            }else{
                mensaje("alert","Aviso.","Todos los datos son requeridos",5000);
            }
            
            var parametros ={
                "nombre": pac.nombre,
                "apaterno": pac.apaterno,
                "organizacion":pac.organizacion,
                "telefono":pac.telefono,
                "correo":pac.correo,
                "activo":false
            };
            
            Servicio.insertaPatrocinador(parametros)
            .then(
                function(){
                    Comunes.mensajes(9);
                },
                function(){
                    Comunes.mensajes(8);
                }
            );
        }
        
        function cancelar(){
            location.href = "#/patrocinadores/patrocinadores-listado";
        }
    };
})();