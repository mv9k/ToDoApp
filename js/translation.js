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
                    ClearFinishedTasks: 'Clear Finished Tasks',
                    Language: 'Language',
                    ListName: 'List Name',
                    TaskName: 'Task Name',
                    Task: 'Task'
            })
                .translations('sp', {
                    AppTitle: 'To-do aplicacion',
                    Home: 'liza',
                    About: 'sobre',
                    ShowAllLists: 'mostrar todas las listas',
                    ClearFinishedTasks: 'Tareas acabados claros',
                    Language: 'idioma',
                    ListName: 'Lista de nombres',
                    TaskName: 'Nombre de la tarea',
                    Task: 'Tarea'
                })
                .translations('ru', {
                    AppTitle: 'To-Do primeneniya',
                    Home: 'Spiski',
                    About: 'Okolo',
                    ShowAllLists: 'Pokazat\' vse spiski',
                    ClearFinishedTasks: 'Ochistit\' Gotovyye zadachi',
                    Language: 'yazyk',
                    ListName: 'Imya',
                    TaskName: 'Imya zadachi',
                    Task: 'Tsel\''
                })
                .translations('fp', {
                    AppTitle: 'Gagawin app',
                    Home: 'Listahan',
                    About: 'tungkol sa',
                    ShowAllLists: 'Ipakita lahat',
                    ClearFinishedTasks: 'I-clear ang Tapos na',
                    Language: 'wika',
                    ListName: 'pangalan ng listahan',
                    TaskName: 'pangalan ng gawain',
                    Task: 'gawain'
                });
            $translateProvider.preferredLanguage('en');
        });

}());


