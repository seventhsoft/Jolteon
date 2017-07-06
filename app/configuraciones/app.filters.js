(function () { 
    'use strict';
    angular
        .module("kuni")
        .filter('nospace', function () {
            return function (value) {
              return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        .filter('fecha', function () {
            return function (x) {
                var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                if(x !== null){
                    var date = new Date(x);
                    return date.getUTCDate() + "/" + meses[date.getUTCMonth()] + "/" + date.getUTCFullYear();
                }else{
                    return "";
                }
            };
        })
        .filter('fechaCorta', function () {
            return function (x) {
                var meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                if(x !== null){
                    var date = new Date(x);
                    var dia = date.getUTCDate() < 10 ? '0'+date.getUTCDate().toString() : date.getUTCDate();
                    var mes = meses[date.getUTCMonth()];
                    var anio =  date.getUTCFullYear().toString().substring(2);
                    return dia + "/" + mes + "/" + anio;
                }else{
                    return "";
                }
            };
        })
        .filter('startFrom', function() {
            return function(input, start) {
                start = +start;
                return input.slice(start);
            };
        });    
})();
