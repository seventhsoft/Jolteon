angular.module("kuni")
.controller("MainController",MainController);
 MainController.inject = ['ComunesServicio','log','SeguridadServicio','localStorageService','Perfiles','$httpProvider'];
function MainController(ComunesServicio,log,SeguridadServicio,localStorageService,Perfiles,$http){
    log.info("Inicia Main Controller");
    var mc = this;
    mc.sesion = false;
    mc.username = "";
    mc.password = "";
    mc.usuario = localStorageService.get("usuario");
    mc.token = localStorageService.get("token");
    mc.banConcurso = false;
    mc.banPatrocinador = false;
    mc.fechaSistema = new Date();
    mc.iniciarSesion = iniciarSesion;
    mc.cerrarSesion = cerrarSesion;
    mc.verificaPermisos = verificaPermisos;
    mc.cargarCatalogos = cargarCatalogos;
    mc.recuperarPassword = recuperarPassword;
    
    if(mc.usuario !== null && mc.token !== null ){
        log.debug("usuario: ",mc.usuario);
        /* Agregamos una autorización global */
        $http.defaults.headers.common['Authorization'] = mc.token.token_type + " " + mc.token.access_token;
        mc.verificaPermisos();
    };
    
    function recuperarPassword(){
        if(mc.username === null || mc.username === "" || mc.username === undefined ){
            return ComunesServicio.mensajes(5);
        };
        
        SeguridadServicio.recuperarPassword(mc.username)
        .then(
                function(response){
                    log.debug("exito:");
                    log.debug(response);
                    if(response.status === 200){
                        log.debug(1);
                        return ComunesServicio.mensajes(6);
                    }else{
                        log.debug(2);
                        return ComunesServicio.mensajes(7);
                    };
                    log.debug(3);
                },
                function(response){
                    log.debug("fallo:");
                    log.debug(response);
                    return ComunesServicio.mensajes(7);
                }
            );
    };
    
    function iniciarSesion(){
        log.debug("user:",mc.username);
        log.debug("pass:",mc.password);
        if(mc.password === "" || mc.username === ""){
            return ComunesServicio.mensajes(2);
        };
        SeguridadServicio.login(mc.username,mc.password)
        .then(
            function(response){
                log.debug("Obtiene la sesión");
                mc.token = {};
                mc.token = response.data;
                /* Agregamos una autorización global */
                localStorageService.set("token",mc.token);
                $http.defaults.headers.common['Authorization'] = mc.token.token_type + " " + mc.token.access_token;
                return SeguridadServicio.obtenerUsuario(mc.token.idUsuario);
            },
            function(response){
                log.debug("fallo:",response);
                if(response.status === 500 || response.status === 400){
                    return ComunesServicio.mensajes(2);
                }else{
                    return ComunesServicio.mensajes(3);
                };
            }
        ).then(
            function(response){
                mc.usuario =response.data;
                localStorageService.set("usuario",mc.usuario);
                mc.cargarCatalogos();
            },
            function(){
                ComunesServicio.mensajes(3);
            }
        );
        
    };
    
    function cerrarSesion(){
        SeguridadServicio.logout();
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
    
    function cargarCatalogos(){
        ComunesServicio.obtenerListaEsCon()
        .then(
            function(response){
                ComunesServicio.listaEstadosConcurso = response.data;
                return ComunesServicio.obtenerPerfiles();
            },
            function(){
                log.info("Ocurrio un error al obtener la lista de estados de concurso");
                ComunesServicio.mensajes(3);
            }
        ).then(
            function(response){
                ComunesServicio.listaPerfiles = response.data;
                mc.verificaPermisos();
            },
            function(){
                log.info("Ocurrio un error al obtener la lista de perfiles");
                ComunesServicio.mensajes(3);
            }
        );
    };
};