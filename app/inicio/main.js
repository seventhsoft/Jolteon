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
                if(response.status === 500){
                    ComunesServicio.mensajes(2);
                }else{
                    ComunesServicio.mensajes(3);
                };
            }
        ).then(
            function(response){
                mc.listaUsuarios = response.data;
                mc.obtenerUsuario();
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
                mc.verificaPermisos();
                break;
            };
        };
    };
    
    function cerrarSesion(){
        localStorageService.remove("usuario");
        localStorageService.remove("token");
        mc.usuario = null;
        mc.sesion = false;
        mc.username = "";
        mc.password = "";
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