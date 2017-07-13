angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = ['ComunesServicio','log','SeguridadServicio','localStorageService'];
function MainController(ComunesServicio,log,SeguridadServicio,localStorageService){
    log.info("Inicia Main Controller");
    var mc = this;
    mc.sesion = false;
    mc.user = "";
    mc.pass = "";
    mc.usuario = localStorageService.get("usuario");
    mc.banConcurso = false;
    mc.banPatrocinador = false;
    mc.iniciarSesion = iniciarSesion;
    mc.cerrarSesion = cerrarSesion;
    mc.verificaPermisos = verificaPermisos;
    
    if(mc.usuario !== null ){
        log.debug("usuario: ",mc.usuario);
        mc.sesion = true;
        mc.verificaPermisos();
    };
    
    function iniciarSesion(){
        log.debug("user:",mc.user);
        log.debug("pass:",mc.pass);
        mc.usuario = SeguridadServicio.login(mc.user,mc.pass);
        localStorageService.set("usuario",mc.usuario);
        mc.sesion = true;
        mc.verificaPermisos();
        /*
        SeguridadServicio.login(mc.user,mc.pass)
        .then(
            function(usuario){
                if(usuario.idUsuario !== undefined){
                    mc.sesion = true;
                    ComunesServicio.bitacora(1);
                    localStorageService.set("usuario",usuario);
                }else{
                    mc.sesion = false;
                };
            }
        );
        */
    };
    
    function cerrarSesion(){
        localStorageService.remove("usuario");
        mc.usuario = null;
        mc.sesion = false;
    };
    
    function verificaPermisos(){
        mc.banConcurso = true;
        mc.banPatrocinador = true;
    };
    
};