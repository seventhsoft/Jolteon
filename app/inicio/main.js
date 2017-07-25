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
    mc.iniciarSesion = iniciarSesion;
    mc.listaUsuarios = [];
    mc.cerrarSesion = cerrarSesion;
    mc.obtenerUsuario = obtenerUsuario;
    mc.verificaPermisos = verificaPermisos;
    mc.cargarCatalogos = cargarCatalogos;
    
    if(mc.usuario !== null && mc.token !== null ){
        log.debug("usuario: ",mc.usuario);
        /* Agregamos una autorización global */
        $http.defaults.headers.common['Authorization'] = mc.token.token_type + " " + mc.token.access_token;
        mc.verificaPermisos();
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
                return SeguridadServicio.obtenerListaUsuarios();
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
                if(response !== undefined){
                    mc.listaUsuarios = response.data;
                    mc.obtenerUsuario();
                };
            },
            function(){
                ComunesServicio.mensajes(3);
            }
        );
        
    };
    
    function obtenerUsuario(){
        log.debug("Inicia Obtener usuario");
        for(var i=0; i<mc.listaUsuarios.length;i++){
            if(mc.listaUsuarios[i].usuario === mc.username){
                mc.usuario = mc.listaUsuarios[i];
                localStorageService.set("usuario",mc.usuario);
                mc.cargarCatalogos();
                break;
            };
        };
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