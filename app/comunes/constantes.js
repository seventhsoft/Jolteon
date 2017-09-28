(function () { 
    'use strict';
    angular
    .module("kuni")
    .constant('Log',{
        INFO : true,
        DEBUG : true
    })
    .constant('EstadoConcurso',{
        PENDIENTE : { id:1, color:"label label-warning", descripcion : "Pendiente" },
        PROGRAMADO : { id:2, color:"label label-info", descripcion : "Programado" },
        ACTIVO : { id:3, color:"label label-success", descripcion : "Activo" },
        FINALIZADO : { id:4, color:"label label-default", descripcion : "Finalizado" }
    }).constant('Perfiles',{
        ADMINISTRADOR: 1,
        JUGADOR : 2,
        PATROCINADOR : 3,
        ANUNCIANTE : 4
    }).constant('TipoRecompensa',{
        NVL1: 1,
        NVL2 : 2,
        NVL3 : 3,
        NVL4 : 4,
        NVL5 : 5,
        CONCURSO : 6
    });
})();

