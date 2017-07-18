(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosAsignarControlador", ConcursosAsignarControlador);
    ConcursosAsignarControlador.$inject = ['ConcursosServicio','ComunesServicio','log'];
    function ConcursosAsignarControlador(Servicio,Comunes,log){
        log.info("Inicia asignar controlador");
        var cac = this;
        cac.concurso = Servicio.concurso;
        cac.nivel = Servicio.nivel;
        cac.listaNiveles = Servicio.listaNiveles;
        cac.listaPatrocinadores = [];
        cac.listaRecompensas = [];
        cac.patrocinador = cac.nivel.recompensa.agrego ? cac.nivel.recompensa.patrocinador : {};
        cac.limpiar = limpiar;
        cac.buscar = buscar;
        cac.asignarRecompensa = asignarRecompensa;
        
        Servicio.origen = 0;
        Servicio.concurso = {};
        Servicio.nivel = {};
        Servicio.listaNiveles = [];
        
        function limpiar(){
            cac.patrocinador = {};
            cac.listaRecompensas = [];
        };
        
        if(cac.nivel.recompensa.agrego){
            log.debug("edicion");
            cac.listaRecompensas = [
                {
                    "idRecompensa" : 1,
                    "idPatrocinador" : 1,
                    "descripcion" : "Bebidas Venti cafe Chiapas",
                    "cantidad" : 20,
                    "vigencia" : new Date(),
                    "activo" : true,
                    "fechaRegistro" : "15/07/2017",
                    "nivel" : cac.nivel.recompensa !== undefined ? cac.nivel.recompensa.cantidad : 0
                }
            ];
        };
        
        function buscar(){
            cac.listaRecompensas = [
                {
                    "idRecompensa" : 1,
                    "idPatrocinador" : 1,
                    "descripcion" : "Bebidas Venti cafe Chiapas",
                    "cantidad" : 20,
                    "vigencia" : new Date(),
                    "activo" : true,
                    "fechaRegistro" : "15/07/2017",
                    "nivel" : 0
                }
            ];
        };
        
        function asignarRecompensa(recompensa){
            cac.nivel.recompensa.idRecompensa = recompensa.idRecompensa;
            cac.nivel.recompensa.patrocinador = cac.patrocinador;
            cac.nivel.recompensa.descripcion = recompensa.descripcion;
            cac.nivel.recompensa.agrego = true;
            cac.nivel.recompensa.cantidad = recompensa.nivel;
            for(var i=0;i<cac.listaNiveles.length;i++){
                if(cac.nivel.idNivel === cac.listaNiveles[i].idNivel){
                    cac.listaNiveles[i] = cac.nivel;
                };
            };
            Servicio.origen = 2;
            Servicio.concurso = cac.concurso;
            Servicio.listaNiveles = cac.listaNiveles;
            location.href = "#/concursos/concursos-configurar";
        };
        
        /* Carga inicial */
        cac.listaPatrocinadores = [
            {
                "idPatrocinador" : 1,
                "nombre" : "Starbucks",
                "organizacion" : "Starbucks",
                "aPaterno" : "",
                "aMaterno" : "",
                "correo" : "",
                "activo" : true,
                "fechaRegistro" : "15/07/2017"
            }
        ];
    };
})();
