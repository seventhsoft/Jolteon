(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresDetalleControlador", PatrocinadoresDetalleControlador);
    PatrocinadoresDetalleControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresDetalleControlador(Servicio,Comunes){
        var pdc = this;
        pdc.patrocinador = Servicio.patrocinador;
        Servicio.patrocinador = {};
        
    };
})();