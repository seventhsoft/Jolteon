(function () {
    'use strict';
    angular
        .module("kuni")
        .controller("PatrocinadoresListadoControlador", PatrocinadoresListadoControlador);
    PatrocinadoresListadoControlador.$inject = ['PatrocinadoresServicio','ComunesServicio'];
    function PatrocinadoresListadoControlador(Servicio,Comunes){
        var plc = this;
        plc.listaPatrocinadoresO = [];
        plc.listaPatrocinadores = [];
        plc.estado = "";
        plc.patrocinios = "";
        plc.verPatrocinador = verPatrocinador;
        plc.agregarPatrocinador = agregarPatrocinador;
        plc.agregarRecompensa = agregarRecompensa;
        plc.agregarPreguntaMensaje = agregarPreguntaMensaje;
        plc.limpiar = limpiar;
        plc.filtrar = filtrar;
        plc.limpiar();
        
        function limpiar(){
            Servicio.obtieneListaPatrocinadores()
            .then(
                function(response){
                    plc.listaPatrocinadoresO = [];
                    plc.listaPatrocinadores = [];
                    plc.listaPatrocinadoresO = response.data;
                    plc.listaPatrocinadores = response.data;
                }
            );
        }
        
        function filtrar(){
            plc.listaPatrocinadores = [];
            if(plc.estado !== "" || plc.patrocinios !== "" ){
                for(var i=0;i<plc.listaPatrocinadoresO.length;i++){
                    var ban = false;
                    var p = plc.listaPatrocinadoresO[i];
                    if(plc.estado !== "" && plc.estado !== null){
                        ban = p.activo === plc.estatus;
                    };
                    if(plc.patrocinios !== "" && plc.patrocinios !== null){
                        if(plc.patrocinios){
                            ban = (p.totalRecompensas > 0) || ban;
                        }else{
                            ban = (p.totalRecompensas === 0) || ban;
                        }
                    }
                    if(ban){
                        plc.listaPatrocinadores.push(p);
                    }
                }
            }else{
                plc.listaPatrocinadores = plc.listaPatrocinadoresO;
            }
        }
        
        function agregarPatrocinador(){
            location.href = "#/patrocinadores/patrocinadores-agregar";
        }
        
        function verPatrocinador(patrocinador){
            location.href = "#/patrocinadores/patrocinadores-detalle";
        }
        
        function agregarRecompensa(patrcinador){
            location.href = "#/patrocinadores/patrocinadores-recompensas-agregar";
        }
        
        function agregarPreguntaMensaje(patrcinador){
            location.href = "#/patrocinadores/patrocinadores-pregunta-mensaje-agregar";
        }
    };
})();