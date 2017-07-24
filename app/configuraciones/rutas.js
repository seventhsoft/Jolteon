(function () { 
    'use strict';
    angular
    .module("kuni")
    .constant('Rutas',{
        /* DEV */
        RUTABK : 'http://localhost:8080/SEPI-Backend',
        RUTAFR : 'http://localhost:8888/jolteon'
        /* DEV */
        /* PRODUCCION *
        RUTABK : 'http://api.juegakuni.com.mx/lfs',
        RUTAFR : 'http://administracion.juegakuni.com.mx'
        /* PRODUCCION */
    });
})();