(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosConfigurarControlador", ConcursosConfigurarControlador);
    ConcursosConfigurarControlador.$inject = ['ConcursosServicio','ComunesServicio','log'];
    function ConcursosConfigurarControlador(Servicio,Comunes,log){
        log.info("Inicia configurar controlador");
        var ccc = this;
        ccc.listaAnios = [];
        ccc.anio = "";
        ccc.mes = "";
        ccc.listaNiveles = [];
        ccc.listaSeries = [];
        ccc.listaTiempos = [];
        ccc.obtenerListaAnios = obtenerListaAnios;
        ccc.cargaInicial = cargaInicial;
        ccc.obtenerListaAnios();
        
        function obtenerListaAnios(){
            var fechaTemp = new Date();
            var anteriores = parseInt(fechaTemp.getFullYear()) - 2017;
            var fin = parseInt(fechaTemp.getFullYear()) - anteriores;
            for (var y = parseInt(fechaTemp.getFullYear()); y > fin; y--) {
                var anio = {"valor": parseInt(y), "descripcion": y};
                ccc.listaAnios.push(anio);
            };
        };
        
        function cargaInicial(){
            
        };
    };
})();