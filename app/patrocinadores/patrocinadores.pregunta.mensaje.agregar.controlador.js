(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresPreguntaMensajeAgregarControlador", PatrocinadoresPreguntaMensajeAgregarControlador);
    PatrocinadoresPreguntaMensajeAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresPreguntaMensajeAgregarControlador(Servicio,Comunes){
        var ppmac = this;
        if(Servicio.patrocinador.idPatrocinador === undefined){
            location.href="#/";
        }
        ppmac.patrocinador=Servicio.patrocinador;
        Servicio.patrocinador ={};
        ppmac.pregunta=Servicio.pregunta;
        Servicio.pregunta={};
        ppmac.edit=ppmac.pregunta.idPreguntaMensaje !== undefined; 
        ppmac.guardar = guardar;
        ppmac.cancelar = cancelar;
        ppmac.cargaInicial = cargaInicial;
        ppmac.listaConcurso=[];
        
        ppmac.cargaInicial();
        
        
        function cargaInicial(){
            Servicio.obtenerListaConcurso()
            .then(
                function(response){
                    ppmac.listaConcurso=response.data;
                }
            );
            console.log(ppmac.pregunta);
        }
        
        function guardar(){
            
        }
        
        function cancelar(){
            Servicio.pregunta=ppmac.pregunta;
            location.href = "#/patrocinadores/patrocinadores-detalle";
        }
    };
})();