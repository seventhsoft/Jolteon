(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("ConcursosConfigurarControlador", ConcursosConfigurarControlador);
    ConcursosConfigurarControlador.$inject = ['ConcursosServicio','ComunesServicio','log','EstadoConcurso'];
    function ConcursosConfigurarControlador(Servicio,Comunes,log,EstadoConcurso){
        log.info("Inicia configurar controlador");
        var ccc = this;
        ccc.listaAnios = [];
        ccc.concurso = {};
        ccc.concurso.idConcurso = null;
        ccc.concurso.nuevo = true;
        ccc.concurso.anio = "";
        ccc.concurso.mes = "";
        ccc.consecutivoNivel = 0;
        ccc.listaNiveles = [];
        ccc.obtenerListaAnios = obtenerListaAnios;
        ccc.cargaNuevo = cargaNuevo;
        ccc.cargaActualiza = cargaActualiza;
        ccc.cargaAgregarRecompensa = cargaAgregarRecompensa;
        ccc.agregarRecompensa = agregarRecompensa;
        ccc.eliminarRecompensa = eliminarRecompensa;
        ccc.guardarConcurso = guardarConcurso;
        ccc.insertaConcurso = insertaConcurso;
        ccc.actualizaConcurso = actualizaConcurso;
        ccc.validaConcurso = validaConcurso;
        
        ccc.obtenerListaAnios();
        if(Servicio.origen === 0){
            ccc.cargaNuevo();
        }else if(Servicio.origen === 1){
            ccc.cargaActualiza();
        }else if(Servicio.origen === 2){
            ccc.cargaAgregarRecompensa();
        };
        Servicio.origen = 0;
        
        function agregarRecompensa(nivel){
            log.info("Inicia agregar recompensa");
            /* tomamos una foto */
            Servicio.concurso = ccc.concurso;
            Servicio.listaNiveles = ccc.listaNiveles;
            Servicio.nivel = nivel;
            location.href = "#/concursos/concursos-recompensa-asignar";
        };
        
        function eliminarRecompensa(nivel){
            nivel.recompensa = {};
        };
        
        function guardarConcurso(){
            log.info("Inicia guardar concurso");
            if(ccc.concurso.nuevo){
                ccc.insertaConcurso();
            }else{
                ccc.actualizaConcurso();
            };
        };
        
        function insertaConcurso(){
            
        };
        
        function actualizaConcurso(){
            
        };
        
        function validaConcurso(){
            var estado = EstadoConcurso.NO_CONFIGURADO;
            var ban = false;
            for(var i=0; i < ccc.listaNiveles.length; i++){
                if(ccc.listaNiveles[i].serie === "" 
                    || ccc.listaNiveles[i].serie === undefined 
                    || ccc.listaNiveles[i].serie === null 
                    || ccc.listaNiveles[i].serie === 0){  
                    ban = true;
                    break;
                };
                if(ccc.listaNiveles[i].tiempo === "" 
                    || ccc.listaNiveles[i].tiempo === undefined 
                    || ccc.listaNiveles[i].tiempo === null 
                    || ccc.listaNiveles[i].tiempo === 0){  
                    ban = true;
                    break;
                };
                if(ccc.listaNiveles[i].recompensa === {} 
                    || ccc.listaNiveles[i].recompensa === undefined 
                    || ccc.listaNiveles[i].recompensa === null){  
                    ban = true;
                    break;
                };
            };
            if(ban){
                estado = EstadoConcurso.NO_CONFIGURADO;
            }else{
                estado = EstadoConcurso.CONFIGURADO;
            };
            return estado;
        };
        
        function obtenerListaAnios(){
            var fechaTemp = new Date();
            var anteriores = parseInt(fechaTemp.getFullYear()) - 2016;
            var fin = parseInt(fechaTemp.getFullYear()) - anteriores;
            for (var y = parseInt(fechaTemp.getFullYear()); y > fin; y--) {
                var anio = {"valor": parseInt(y), "descripcion": y};
                ccc.listaAnios.push(anio);
            };
        };
        
        function cargaNuevo(){
            log.info("Inicia carga nuevo concurso");
            ccc.concurso.nuevo = true;
            for(var i=0; i<5;i++){
                ccc.consecutivoNivel++;
                var nivel = {
                    "idNivel" : ccc.consecutivoNivel,
                    "consecutivo" : ccc.consecutivoNivel,
                    "series" : 0,
                    "tiempo" : 0,
                    "nuevo" : true,
                    "recompensa":{
                        "nuevo" : true,
                        "agrego" : false
                    }
                };
                ccc.listaNiveles.push(nivel);
            };
        };
        
        function cargaActualiza(){
            log.info("Inicia carga edición de concurso");
            ccc.concurso.nuevo = false;
        };
        
        function cargaAgregarRecompensa(){
            log.info("Inicia carga agregar recompensa");
            ccc.concurso = Servicio.concurso;
            ccc.listaNiveles = Servicio.listaNiveles;
            Servicio.origen = 0;
            Servicio.concurso = {};
            Servicio.listaNiveles = [];
        };
    };
})();