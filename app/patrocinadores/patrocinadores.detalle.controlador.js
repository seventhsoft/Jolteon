(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresDetalleControlador", PatrocinadoresDetalleControlador);
    PatrocinadoresDetalleControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresDetalleControlador(Servicio,Comunes){
        var pdc = this;
        pdc.patrocinador = Servicio.patrocinador;
        Servicio.patrocinador = {};
        pdc.listaPreguntaMensaje = [];
        pdc.paginadoPM = 10;
        pdc.actualPM = 0;
        pdc.totalPaginas = totalPaginas;
        pdc.cargaInicial = cargaInicial;
        pdc.actualizarPatrocinador = actualizarPatrocinador;
        pdc.agregarPreguntaMensaje = agregarPreguntaMensaje;
        pdc.actualizarPreguntaMensaje = actualizarPreguntaMensaje;
        pdc.eliminarPreguntaMensaje = eliminarPreguntaMensaje;
        pdc.cargaInicial();
        
        function totalPaginas(a,b) {
            return Math.ceil(a / b);
        };
        
        function actualizarPreguntaMensaje(pregunta){
            Servicio.patrocinador = pdc.patrocinador;
            Servicio.pregunta = pregunta;
            location.href = "#/patrocinadores/patrocinadores-pregunta-mensaje-agregar";
        }
        
        function eliminarPreguntaMensaje(pregunta){
            
        }
        
        function actualizarPatrocinador(){
            Servicio.patrocinador = pdc.patrocinador;
            location.href = "#/patrocinadores/patrocinadores-agregar";
        }
        
        function agregarPreguntaMensaje(){
            Servicio.patrocinador = pdc.patrocinador;
            location.href = "#/patrocinadores/patrocinadores-pregunta-mensaje-agregar";
        }
        
        function cargaInicial(){
            Servicio.obtieneListaPreguntaMensaje(pdc.patrocinador.idPatrocinador)
            .then(
                function(response){
                    pdc.listaPreguntaMensaje=response.data;
                },
                function(response){
                    if(response.status === 500){
                        pdc.listaPreguntaMensaje=[];
                    }else{
                        error();
                    }
                }
            );
        }
        
    };
})();