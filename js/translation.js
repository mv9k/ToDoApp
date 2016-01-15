(function(){
    'use strict';

    angular.module('translationfile', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider.translations('en', {
                AppTitle: 'toDo App',
                Home: 'Home',
                About: 'About'
            })
                .translations('de', {
                    AppTitle: 'De toDo App',
                    Home: 'De Home',
                    About: 'De About'
                });
            $translateProvider.preferredLanguage('en');
        });

}());


