(function(){
    'use strict';

    angular.module('listController', [])
        .controller('listController', listController);

    listController.$inject = [];

    function listController() {

        // list everything
        var lc = this;
        lc.listname = 'default value';
        //lc.sortTasks = sortTasks;
        lc.tasks = [
            {
                name: 'first',
                finished: false
            },
            {
                name: 'second',
                finished: false
            }];

        lc.addTask = addTask;
        lc.delTask = delTask;
        lc.finishTask = finishTask;


        //// define functions
        //function sortTasks() {
        //    lc.tasks = $filter('orderBy')(lc.tasks, 'priority');
        //}

        function finishTask(task) {
            task.finished = true;
        }

        function addTask(task) {
            lc.tasks.push({'name': task.name, 'finished': false});

        }

        function delTask(index) {
            lc.tasks.splice(index, 1);
        }

    }

}());
