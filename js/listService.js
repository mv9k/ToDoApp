(function(){
    'use strict';

    angular.module('listService', ['ngStorage'])
        .service('listService', listService);

    listService.$inject = ['$localStorage'];

    function listService($localStorage) {

        var ls = this;
        ls.tasks = $localStorage.tasks || [];
        ls.lists = $localStorage.lists || [];



        ls.addTask = addTask;
        ls.delTask = delTask;
        ls.finishTask = finishTask;
        ls.delList = delList;
        ls.clearFinished = clearFinished;


        function finishTask(task) {
            if(task.finished == false) {
                task.finished = true;
            }
            else {
                task.finished = false;
            }

            $localStorage.tasks = ls.tasks;
            $localStorage.lists = ls.lists;

        }

        function clearFinished() {
            for(var t=ls.tasks.length-1; t>=0; t--) {
                if(ls.tasks[t].finished) {
                    ls.tasks.splice(t, 1);
                }
            }
            $localStorage.tasks = ls.tasks;
            $localStorage.lists = ls.lists;
        }

        function addTask(task) {

            ls.tasks.push({'name': task.name, 'listname': task.listname, 'finished': false});

            // checks for duplicate list name in lists array before adding list to lists array.
            if(ls.lists.indexOf(task.listname) === -1) {
                ls.lists.push(task.listname);
            }
            $localStorage.tasks = ls.tasks;
            $localStorage.lists = ls.lists;
        }

        function delTask(task) {
            var index = ls.tasks.indexOf(task);
            ls.tasks.splice(index, 1);

            $localStorage.tasks = ls.tasks;
            $localStorage.lists = ls.lists;
        }

        function delList(list) {

            var index = ls.lists.indexOf(list);

            // backwards for-loop to delete all the tasks in the list that's being deleted.
            for(var t=ls.tasks.length-1; t>=0; t--) {
                if(list==ls.tasks[t].listname) {
                    ls.tasks.splice(t, 1);
                }
            }
            ls.lists.splice(index, 1);

            $localStorage.tasks = ls.tasks;
            $localStorage.lists = ls.lists;
        }

    }

}());
