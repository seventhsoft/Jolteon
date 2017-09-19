(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresRecompensasAgregarControlador", PatrocinadoresRecompensasAgregarControlador);
    PatrocinadoresRecompensasAgregarControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresRecompensasAgregarControlador(Servicio,Comunes){
        var prac = this;
        prac.descripcion = "";
        prac.cantidad = 0;
        prac.codigo = "";
        prac.vigencia = fechaSistema;
        prac.fechaSistema = fechaSistema;
    };
})();