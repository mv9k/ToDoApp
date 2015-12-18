(function(){
    'use strict';

    angular.module('listController', [])
        .controller('listController', listController);

    listController.$inject = [];

    function listController() {

        // list everything
        var lc = this;
        lc.currentList = 0;
        //lc.listname = 'default value';
        //lc.sortTasks = sortTasks;
        lc.tasks = [];
        lc.lists = [];

        lc.addTask = addTask;
        lc.delTask = delTask;
        lc.finishTask = finishTask;
        //lc.listNames = listService.listNames;


        //// define functions
        //function sortTasks() {
        //    lc.tasks = $filter('orderBy')(lc.tasks, 'priority');
        //}

        function finishTask(task) {
            if(task.finished == false) {
                task.finished = true;
            }
            else {
                task.finished = false;
            }
        }

        function addTask(task) {

            lc.tasks.push({'name': task.name, 'listname': task.listname, 'finished': false});

            // checks for duplicate list name in lists array before adding to it
            if(lc.lists.indexOf(task.listname) === -1) {
                lc.lists.push(task.listname);

            }
        }

        function delTask(task) {
            var index = lc.tasks.indexOf(task);
            lc.tasks.splice(index, 1);
            //
        }

    }

}());
