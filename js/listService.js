(function(){
    'use strict';

    angular.module('listService', [])
        .service('listService', listService);

    listService.$inject = [];

    function listService() {

        var ls = this;
        ls.tasks = [];
        ls.lists = [];

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
        }

        function clearFinished() {
            for(var t=ls.tasks.length-1; t>=0; t--) {
                if(ls.tasks[t].finished) {
                    ls.tasks.splice(t, 1);
                }
            }
        }

        function addTask(task) {

            ls.tasks.push({'name': task.name, 'listname': task.listname, 'finished': false});

            // checks for duplicate list name in lists array before adding list to lists array.
            if(ls.lists.indexOf(task.listname) === -1) {
                ls.lists.push(task.listname);
            }
        }

        function delTask(task) {
            var index = ls.tasks.indexOf(task);
            ls.tasks.splice(index, 1);
            //
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
        }

    }

}());
