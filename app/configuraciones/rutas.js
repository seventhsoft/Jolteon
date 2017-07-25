(function () { 
    'use strict';
    angular
    .module("kuni")
    .constant('Rutas',{
        /* DEV */
        RUTABK : 'http://api.juegakuni.com.mx/lfs',
        RUTAFR : 'http://localhost:8383/KUNI-FRONT'
        /* DEV */
        /* PRODUCCION *
        RUTABK : 'http://api.juegakuni.com.mx/lfs',
        RUTAFR : 'http://administracion.juegakuni.com.mx'
        /* PRODUCCION */
    })
    .constant('Llaves',{
        /* DEV */
        BASIC : 'Basic d2ViQ2xpZW50OnNlY3JldA=='
    });
})();