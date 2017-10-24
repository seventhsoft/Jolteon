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
        pdc.cargaInicial = cargaInicial;
        
        
        
        pdc.cargaInicial();

        
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