(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("DashboarAdministradortrolador", DashboarAdministradortrolador);
    DashboarAdministradortrolador.$inject = ['ConcursosServicio','ComunesServicio','log'];
    function DashboarAdministradortrolador(Servicio,Comunes,log){
        var dbc = this;
        dbc.listaPatrocinadores = [];
        dbc.listaAnunciantes = [];
        dbc.listaConcursos = [];
        dbc.concursoActivo = {};
        dbc.concursoProximo = {};
        dbc.detalleConcurso = detalleConcurso;
        dbc.configurarConcurso = configurarConcurso;
        
        function detalleConcurso(concurso){
            
        };
        
        function configurarConcurso(concurso){
            
        };
        
        /* Carga inicial */
        dbc.concursoActivo = {
            clave : "KUNI201707",
            fechaInicio : "01/01/2017",
            fechaFin : "31/01/2017",
            recompensas :[
                {
                    idTipoRecompensa : 1,
                    remitidos : 18,
                    cantidad : 50
                },
                {
                    idTipoRecompensa : 2,
                    remitidos : 14,
                    cantidad : 40
                },
                {
                    idTipoRecompensa : 3,
                    remitidos : 18,
                    cantidad : 30
                },
                {
                    idTipoRecompensa : 4,
                    remitidos : 6,
                    cantidad : 20
                },
                {
                    idTipoRecompensa : 5,
                    remitidos : 1,
                    cantidad : 10
                }
            ]
        };
        
        dbc.concursoProximo = {
            clave : "KUNI201708",
            dias: 14,
            fechaInicio : "1 de julio de 2017",
            fechaFin : "31 de julio de 2017",
            idEstado : 2,
            estado : "Programado",
            color : "label label-success"
        };
        
        dbc.listaPatrocinadores = [
            {
                organizacion : "Patrocinador 1",
                preguntas : 20
            }
        ];
        
        dbc.listaAnunciantes = [
            {
                organizacion : "Anunciante 1",
                campanas : 2,
                banners : 6
            }
        ];
        
        dbc.listaConcursos = [
            { 
                clave : "KUNI201707",
                fechaInicio : "01/01/2017",
                fechaFin : "31/01/2017",
                idEstado : 1,
                estado : "Programado",
                color : "label label-success",
                cantidadRecompensas : 280,
                cantidadParticipantes : 12380
            }
        ];
        
    };

})();