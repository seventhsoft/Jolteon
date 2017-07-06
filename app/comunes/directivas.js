(function () { 
    'use strict';
    angular
    .module("kuni")
    .directive("resize", function () {
        return function (scope, element) {
            element.bind("mousedown", function () {
                scope.resize(element);
                scope.$apply();
            });
        };
    })
    .directive("remove", function () {
        return function (scope, element) {
            element.bind("mousedown", function () {
                scope.remove(element);
                scope.$apply();
            });
        };
    })
    .directive('fileModel', ['$parse', function ($parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;

                    element.bind('change', function () {
                        scope.$apply(function () {
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }
    ]);
})();
