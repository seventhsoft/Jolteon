(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosListadoControlador", ConcursosListadoControlador);
    ConcursosListadoControlador.$inject = ['ConcursosServicio','ComunesServicio','log'];
    function ConcursosListadoControlador(Servicio,Comunes,log){
        log.info("Incia Listado de concursos");
        var clc = this;
        clc.filtro = {
            "estatus" : "",
            "mes" : "",
            "anio":""
        };
        clc.listaEstatus = [];
        clc.listaAnios = [];
        clc.listaConcursosOriginal = [];
        clc.listaConcursos = [];
        clc.verConcurso = verConcurso;
        clc.editarConcurso = editarConcurso;
        clc.agregarConcurso = agregarConcurso;
        clc.limpiar = limpiar;
        clc.filtrar = filtrar;
        clc.obtenerListaAnios = obtenerListaAnios;
        clc.obtenerListaAnios();
        
        function verConcurso(concurso){
            Servicio.concurso = concurso;
            location.href="#/concursos/concursos-detalle";
            window.scrollTo(0, 0);
        };
        
        function editarConcurso(concurso){
            Servicio.origen = 2;
            Servicio.concurso = concurso;
            location.href="#/concursos/concursos-configurar";
            window.scrollTo(0, 0);
        };
        
        function agregarConcurso(){
            Servicio.origen = 0;
            Servicio.concurso = {};
            location.href="#/concursos/concursos-configurar";
            window.scrollTo(0, 0);
        };
        
        function limpiar(){
            clc.filtro = {
                "estatus" : "",
                "mes" : "",
                "anio":""
            };
            clc.listaConcursos = clc.listaConcursosOriginal;
        };
        
        function filtrar(){
            clc.listaConcursos = [];
            for(var i=0;i<clc.listaConcursosOriginal.length;i++){
                if(true){
                    clc.listaConcursos.push(clc.listaConcursosOriginal[i]);
                };
            };
        };
        
        function obtenerListaAnios(){
            var fechaTemp = new Date();
            var anteriores = parseInt(fechaTemp.getFullYear()) - 2016;
            var fin = parseInt(fechaTemp.getFullYear()) - anteriores;
            for (var y = parseInt(fechaTemp.getFullYear()); y > fin; y--) {
                var anio = {"valor": parseInt(y), "descripcion": y};
                clc.listaAnios.push(anio);
            };
        };
        
        /* Carga inicial */
        clc.listaConcursosOriginal = [
            {
                "clave" : "clave",
                "fechaInicio" : "02/07/2017",
                "fechaFinal":"05/07/2017",
                "totalParticipantes":14140,
                "totalRecompensas" : 150,
                "totalGanadores":140,
                "totalPreguntasContestadas":1404,
                "totalSeriesContestadas":1404,
                "estatus":"Finalizado",
                "idEstatus":5
            }
        ];
        clc.listaConcursos = clc.listaConcursosOriginal;
    };
})();