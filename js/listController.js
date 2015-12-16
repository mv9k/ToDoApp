(function(){
    'use strict';

    angular.module('listController', [])
        .controller('listController', listController);

    listController.$inject = [];

    function listController() {

        // list everything
        var lc = this;
        lc.listname = 'default value';
        lc.doSomething = doSomething;

        // define functions
        function doSomething() {
            lc.sometext = '';
        }
    }

}());
