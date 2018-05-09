
(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosListadoControlador", ConcursosListadoControlador);
    ConcursosListadoControlador.$inject = ['ConcursosServicio','ComunesServicio','log','EstadoConcurso'];
    function ConcursosListadoControlador(Servicio,Comunes,log,EstadoConcurso){
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
        
        Servicio.obtenerListaConcurso()
        .then(
            function(response){
                clc.listaConcursosOriginal = response.data;
                for(var i=0;i<clc.listaConcursosOriginal.length;i++){;
                    switch (clc.listaConcursosOriginal[i].idEstadoConcurso){
                        case EstadoConcurso.PENDIENTE.id : {
                                clc.listaConcursosOriginal[i].estado = EstadoConcurso.PENDIENTE.descripcion;
                                clc.listaConcursosOriginal[i].color = EstadoConcurso.PENDIENTE.color;
                                break;
                        }
                        case EstadoConcurso.PROGRAMADO.id : {
                                clc.listaConcursosOriginal[i].estado = EstadoConcurso.PROGRAMADO.descripcion;
                                clc.listaConcursosOriginal[i].color = EstadoConcurso.PROGRAMADO.color;
                                break;
                        }
                        case EstadoConcurso.ACTIVO.id : {
                                clc.listaConcursosOriginal[i].estado = EstadoConcurso.ACTIVO.descripcion;
                                clc.listaConcursosOriginal[i].color = EstadoConcurso.ACTIVO.color;
                                break;
                        }
                        case EstadoConcurso.FINALIZADO.id : {
                                clc.listaConcursosOriginal[i].estado = EstadoConcurso.FINALIZADO.descripcion;
                                clc.listaConcursosOriginal[i].color = EstadoConcurso.FINALIZADO.color;
                                break;
                        }
                        default : {
                                clc.listaConcursosOriginal[i].estado = EstadoConcurso.PENDIENTE.descripcion;
                                clc.listaConcursosOriginal[i].color = EstadoConcurso.PENDIENTE.color;
                                break;
                            }
                    }
                };
                clc.listaConcursos = clc.listaConcursosOriginal;
            },
            function(){
                error();
            }
        );
    };
})();