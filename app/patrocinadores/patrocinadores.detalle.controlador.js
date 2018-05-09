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
        pdc.listaRecompensas = [];
        pdc.paginadoPM = 5;
        pdc.actualPM = 0;
        pdc.paginadoRE = 5;
        pdc.actualRE = 0;
        pdc.totalPaginas = totalPaginas;
        pdc.cargaInicial = cargaInicial;
        pdc.actualizarPatrocinador = actualizarPatrocinador;
        pdc.agregarPreguntaMensaje = agregarPreguntaMensaje;
        pdc.actualizarPreguntaMensaje = actualizarPreguntaMensaje;
        pdc.eliminarPreguntaMensaje = eliminarPreguntaMensaje;
        pdc.agregarRecompensa =  agregarRecompensa;
        pdc.actualizarRecompensa =  actualizarRecompensa;
        pdc.eliminarRecompensa = eliminarRecompensa;
        pdc.cargaInicial();
        
        function totalPaginas(a,b) {
            return Math.ceil(a / b);
        };
        
        function actualizarPreguntaMensaje(pregunta){
            
        }
        
        function eliminarPreguntaMensaje(pregunta){
            
        }
        
        function agregarRecompensa(){
            
        }
        
        function actualizarRecompensa(recompensa){
            
        }
        
        function eliminarRecompensa(recompensa){
            
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
            Servicio.obtieneListaRecompesa(pdc.patrocinador.idPatrocinador)
            .then(
                function(response){
                    if(response.status !== 204){
                        pdc.listaRecompensas=response.data;
                        console.log(pdc.listaRecompensas);
                    }else{
                        pdc.listaRecompensas = [];
                    }
                },
                function(){
                    error();
                }
            );
        }
        
    };
})();