// routes
angular.module("kuni")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/inicio/dashboard.html'
  }).when('/:folder/:tpl', {
      templateUrl: function(attr){
        return 'app/' + attr.folder + '/' + attr.tpl + '.html';
      }
    }).when('/:tpl', {
      templateUrl: function(attr){
        return 'app/' + attr.tpl + '.html';
      }
    }).otherwise({ redirectTo: '/' });
}])
// loading bar settings
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 300;
}])
// defaults for date picker
.config(['$datepickerProvider', function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd/MM/yyyy',
    iconLeft: 'md md-chevron-left',
    iconRight: 'md md-chevron-right',
    autoclose: true
  });
}])
// defaults for date picker
.config(['$timepickerProvider', function($timepickerProvider) {
  angular.extend($timepickerProvider.defaults, {
    timeFormat: 'HH:mm',
    iconUp: 'md md-expand-less',
    iconDown: 'md md-expand-more',
    hourStep: 1,
    minuteStep: 1,
    arrowBehavior: 'picker',
    modelTimeFormat: 'HH:mm'
  });
}])
// disable nganimate with adding class
.config(['$animateProvider', function($animateProvider) {
  $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);
}])
.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('kuni');
})

/* agregar autorización comun, es diferente a la del login 
.config(['$httpProvider','Rutas', function($httpProvider,Rutas) {; 

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push(function ($q, $location,$cookies) {
        return {
                request: function (config) {//req
                    return config;
                },

                response: function (result) {//res
                    return result;
                },

                responseError: function (rejection) {
                    if (rejection.status === 401) {
                        $cookies.remove('session_key');
                        $cookies.remove('userdata');
                        window.location.href = Rutas.RUTAFR + "/index.html";
                    }

                    return $q.reject(rejection);
                }
            };
        });
    }
])
*/

// set constants
.run(['$rootScope', function (){}]);

