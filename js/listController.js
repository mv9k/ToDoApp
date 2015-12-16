(function(){
    'use strict';

    angular.module('listController', [])
        .controller('listController', listController);

    listController.$inject = [];

    function listController() {

        // list everything
        var lc = this;
        lc.task = '';
        lc.listname = 'default value';
        //lc.sortTasks = sortTasks;
        lc.tasks = [
            {
                name: 'first',
                completed: false
            },
            {
                name: 'second',
                completed: false
            }];

        lc.addTask = addTask;


        //// define functions
        //function sortTasks() {
        //    lc.tasks = $filter('orderBy')(lc.tasks, 'priority');
        //}
        function addTask(task) {
            lc.tasks.push(task);

        }
    }

}());
