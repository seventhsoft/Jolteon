(function () { 
    'use strict';
    angular
    .module("kuni")
    .constant('Log',{
        INFO : true,
        DEBUG : true
    })
    .constant('EstadoConcurso',{
        NO_CONFIGURADO : 0,
        CONFIGURADO : 1,
        ACTIVO : 2,
        FINALIZADO : 3
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

