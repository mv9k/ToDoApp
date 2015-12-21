(function(){
    'use strict';

    angular.module('listController', [])
        .controller('listController', listController);

    listController.$inject = ['listService'];

    function listController(listService, $localStorage) {

        var lc = this;

        lc.saveData = saveData;
        lc.loadData = loadData;

        lc.currentList = 0;
        lc.tasks = listService.tasks;
        lc.lists = listService.lists;

        lc.addTask = addTask;
        lc.delTask = delTask;
        lc.finishTask = finishTask;
        lc.delList = delList;
        lc.selectList = selectList;
        lc.clearFinished = clearFinished;

        function finishTask(task) {
            listService.finishTask(task);
        }

        function addTask(task) {
            listService.addTask(task);
            lc.selectList(lc.lists.indexOf(task.listname));
        }

        function delTask(task) {
            listService.delTask(task);
        }

        function delList(list) {
            listService.delList(list);
        }

        function selectList($index) {
            lc.currentList=$index;
        }

        function clearFinished() {
            listService.clearFinished();
        }

        function saveData() {
            $localStorage.message = "Hello World";
        }

        function loadData() {
            lc.message = $localStorage.message;
        }

    }

}());
