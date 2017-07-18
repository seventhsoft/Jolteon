(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosDetalleControlador", ConcursosDetalleControlador);
    ConcursosDetalleControlador.$inject = ['ConcursosServicio','ComunesServicio','log'];
    function ConcursosDetalleControlador(Servicio,Comunes,log){
        log.info("Inicia detalle del concurso");
        var cdc = this;
        cdc.concurso = {};
        cdc.concurso = Servicio.concurso;
        cdc.listaNiveles = [];
        cdc.listaParticipantes = [];
        cdc.cuadroParticipante = 0;
        cdc.cambiaCuadro = cambiaCuadro;
        
        function cambiaCuadro(valor){
           cdc.cuadroParticipante = valor; 
        };
        
        /* Carga inicial */
        cdc.concurso = {
            "fechaInicial" : "02/07/2017",
            "fechaFinal":"05/07/2017",
            "totalParticipantes":14140,
            "totalGanadores":140,
            "totalPreguntasContestadas":1404,
            "totalSeriesContestadas":1404
        };
        
        cdc.listaParticipantes =[
            {
                "username":"andres",
                "respuestasCorrectas":5,
                "respuestasErroneas":10,
                "recompensas" : [
                    {
                        "nivel" : 1
                    },
                    {
                        "nivel" : 2
                    },
                    {
                        "nivel" : 3
                    },
                    {
                        "nivel" : 4
                    },
                    {
                        "nivel" : 5
                    }
                ]
            }  
        ];
        
        cdc.listaNiveles = [
            {
                "consecutivo" : 1,
                "series" : 5,
                "tiempo" : 10,
                "recompensa" : {
                        "cantidad" : 5,
                        "descripcion" : "Cafes",
                        "patrocinador" : "Starbuck"
                    }
            }
        ];
        
    };
})();