(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("DashboarAdministradortrolador", DashboarAdministradortrolador);
    DashboarAdministradortrolador.$inject = ['ConcursosServicio','ComunesServicio','EstadoConcurso','PatrocinadoresServicio'];
    function DashboarAdministradortrolador(Servicio,Comunes,EstadoConcurso,PatrocinadoresServicio){
        var dbc = this;
        dbc.listaPatrocinadores = [];
        dbc.listaConcursos = [];
        dbc.concursoActivo = {};
        dbc.detalleConcurso = detalleConcurso;
        dbc.configurarConcurso = configurarConcurso;
        dbc.cargaInicial = cargaInicial;
        dbc.cargaInicial();
        
        
        function detalleConcurso(concurso){
            Servicio.concurso = concurso;
            location.href="#/concursos/concursos-detalle";
            window.scrollTo(0, 0);
        };
        
        function configurarConcurso(concurso){
            Servicio.origen = 1;
            Servicio.concurso = concurso;
            location.href="#/concursos/concursos-configurar";
            window.scrollTo(0, 0);
        };
        
        /* Carga inicial */
        
        function cargaInicial(){
            Servicio.obtenerListaConcurso()
            .then(
                function(response){
                    dbc.listaConcursos = response.data;
                    for(var i=0;i<dbc.listaConcursos.length;i++){;
                        switch (dbc.listaConcursos[i].idEstadoConcurso){
                            case EstadoConcurso.PENDIENTE.id : {
                                    dbc.listaConcursos[i].estado = EstadoConcurso.PENDIENTE.descripcion;
                                    dbc.listaConcursos[i].color = EstadoConcurso.PENDIENTE.color;
                                    break;
                            }
                            case EstadoConcurso.PROGRAMADO.id : {
                                    dbc.listaConcursos[i].estado = EstadoConcurso.PROGRAMADO.descripcion;
                                    dbc.listaConcursos[i].color = EstadoConcurso.PROGRAMADO.color;
                                    break;
                            }
                            case EstadoConcurso.ACTIVO.id : {
                                    dbc.listaConcursos[i].estado = EstadoConcurso.ACTIVO.descripcion;
                                    dbc.listaConcursos[i].color = EstadoConcurso.ACTIVO.color;
                                    dbc.concursoActivo = dbc.listaConcursos[i];
                                    break;
                            }
                            case EstadoConcurso.FINALIZADO.id : {
                                    dbc.listaConcursos[i].estado = EstadoConcurso.FINALIZADO.descripcion;
                                    dbc.listaConcursos[i].color = EstadoConcurso.FINALIZADO.color;
                                    break;
                            }
                            default : {
                                    dbc.listaConcursos[i].estado = EstadoConcurso.PENDIENTE.descripcion;
                                    dbc.listaConcursos[i].color = EstadoConcurso.PENDIENTE.color;
                                    break;
                                }
                        }
                    };
                },
                function(){
                    error();
                }
            );
            
            PatrocinadoresServicio.obtieneListaPatrocinadores()
            .then(
                function(response){
                    dbc.listaPatrocinadores = response.data;
                },
                function(){
                    dbc.listaPatrocinadores = [];
                }
            );
        }
    };

})();