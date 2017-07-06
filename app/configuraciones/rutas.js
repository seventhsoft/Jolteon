(function () { 
    'use strict';
    angular
    .module("kuni")
    .constant('Rutas',{
        RUTABK : 'http://localhost:8080/SEPI-Backend',
        RUTAFR : 'http://localhost:8383/LSF-FRONT'
    });
})();