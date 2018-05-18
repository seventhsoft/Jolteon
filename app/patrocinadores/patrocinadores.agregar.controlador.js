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
        pac.edit = false;
        pac.patrocinador={};
        
        
        if(Servicio.patrocinador !== {}){
            pac.edit = true;
            pac.patrocinador=Servicio.patrocinador;
            pac.organizacion = pac.patrocinador.organizacion;
            pac.nombre = pac.patrocinador.nombre;
            pac.apaterno = pac.patrocinador.apaterno;
            pac.telefono = pac.patrocinador.telefono;
            pac.correo = pac.patrocinador.correo;
            Servicio.patrocinador ={};
        }
        
        function guardar(){
            if(pac.organizacion === ""){
                return Comunes.mensajes(10);
            }
            if(pac.nombre === ""){
                return Comunes.mensajes(10);
            }
            if(pac.apaterno === ""){
                return Comunes.mensajes(10);
            }
            if(pac.telefono === ""){
                return Comunes.mensajes(10);
            }
            if(pac.correo === ""){
                return Comunes.mensajes(10);
            }
            if(pac.edit){
                console.log("Actualiza");
               var parametros ={
                    "nombre": pac.nombre,
                    "apaterno": pac.apaterno,
                    "organizacion":pac.organizacion,
                    "telefono":pac.telefono,
                    "correo":pac.correo,
                    "idPersona": pac.patrocinador.idPersona,
                    "idPatrocinador": pac.patrocinador.idPatrocinador
                };
                Servicio.actualizaPatrocinador(parametros)
                .then(
                    function(){
                        Comunes.mensajes(9);
                        pac.patrocinador.nombre =  pac.nombre;
                        pac.patrocinador.apaterno =  pac.apaterno;
                        pac.patrocinador.organizacion =  pac.organizacion;
                        pac.patrocinador.telefono =  pac.telefono;
                        pac.patrocinador.correo =  pac.correo;
                        Servicio.patrocinador=pac.patrocinador;
                        location.href = "#/patrocinadores/patrocinadores-detalle";
                    },
                    function(){
                        Comunes.mensajes(8);
                    }
                );  
            }else{
                console.log("Inserta");
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
                        location.href = "#/patrocinadores/patrocinadores-listado";
                    },
                    function(){
                        Comunes.mensajes(8);
                    }
                );
            }

        }
        
        function cancelar(){
            location.href = "#/patrocinadores/patrocinadores-listado";
        }
    };
})();