(function(){
    'use strict';

    angular.module('listService', [])
        .service('listService', listService);

    listService.$inject = [];

    function listService() {


        var ls = this;

        ls.currentList = 0;
        ls.listCount = 1;

        ls.listNames = ['First List'];

        ls.tasks = [];
        ls.lists = [];

        ls.addTask = addTask;
        ls.delTask = delTask;
        ls.finishTask = finishTask;


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

            ls.tasks.push({'name': task.name, 'listname': task.listname, 'finished': false});

            // checks for duplicate list name in lists array before adding to it.
            if(ls.lists.indexOf(task.listname) === -1) {
                ls.lists.push(task.listname);
                ls.listCount++;
                ls.currentList = ls.listCount-1;
                ls.listNames.push(task.listname);
            }
        }

        function delTask(index) {
            ls.tasks.splice(index, 1);
        }

    }

}());
