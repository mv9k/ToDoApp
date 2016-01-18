(function(){
    'use strict';

    angular.module('langController', [])
        .controller('langController', langController);

    langController.$inject = ["$translate"];

    function langController($translate) {

        var lang = this;

        lang.choose = langChoose;

        function langChoose(lang) {

            $translate.use(lang);

        }


    }

}());
