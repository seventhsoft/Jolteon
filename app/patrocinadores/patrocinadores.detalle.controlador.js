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
        pdc.cargaInicial();
        
        function totalPaginas(a,b) {
            return Math.ceil(a / b);
        };
        
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
                        console.log(pdc.listaRecompensas.length);
                        console.log(pdc.paginadoRE);
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