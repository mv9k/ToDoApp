(function(){
    'use strict';

    angular.module('translationfile', ['pascalprecht.translate'])
        .config(function($translateProvider) {
            $translateProvider

                .translations('en', {
                    AppTitle: 'toDo App',
                    Home: 'Lists',
                    About: 'About',
                    ShowAllLists: 'Show All Lists',
                    ClearFinishedTasks: 'Clear Finished Tasks'
            })
                .translations('jp', {
                    AppTitle: 'De toDo App',
                    Home: 'De Home',
                    About: 'De About'
                });
            $translateProvider.preferredLanguage('en');
        });

}());


