angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = ['ComunesServicio','log','SeguridadServicio','localStorageService','Perfiles'];
function MainController(ComunesServicio,log,SeguridadServicio,localStorageService,Perfiles){
    log.info("Inicia Main Controller");
    var mc = this;
    mc.sesion = false;
    mc.username = "";
    mc.password = "";
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
        log.debug("user:",mc.username);
        log.debug("pass:",mc.password);
        SeguridadServicio.login(mc.username,mc.password)
        .then(
            function(response){
                log.debug("response",response.data);
                /*
                var listaUsuarios =[];
               listaUsuarios = response.data;
               var ban = true;
               for(var i=0;i<listaUsuarios.length;i++){
                   log.debug("i",i);
                   if(listaUsuarios[i].username === mc.username && listaUsuarios[i].password === mc.password){
                       mc.usuario = listaUsuarios[i];
                       ComunesServicio.bitacora(1);
                       localStorageService.set("usuario",mc.usuario);
                       if(mc.usuario.activo){
                           return mc.verificaPermisos();
                       };
                       
                   };
                   
               };
               if(ban){
                   ComunesServicio.mensajes(2);
               };
               */
            },function(){
                ComunesServicio.mensajes(3);
            }
        );
        
    };
    
    function cerrarSesion(){
        localStorageService.remove("usuario");
        mc.usuario = null;
        mc.sesion = false;
    };
    
    function verificaPermisos(){
        log.debug("Verificando permisos");
        switch (mc.usuario.idPerfil){
            case Perfiles.ADMINISTRADOR:{
                mc.banConcurso = true;
                mc.banPatrocinador = true;
                mc.sesion = true;
                break;
            }
            case Perfiles.PATROCINADOR:{
                mc.banPatrocinador = true;
                mc.sesion = true;
                break;
            }
            case Perfiles.ANUNCIANTE :{
                mc.sesion = true;
                break;
            }
            default : {
               ComunesServicio.mensajes(4);
               mc.cerrarSesion();     
               break;
            }
        };
    };
    
};