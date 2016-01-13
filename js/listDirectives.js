
(function () {
    'use strict';

    angular.module('listDirectives', [])

        .directive('noItems', noItems) // no-items
        .directive('displayContent', displayContent); // display-content


    function noItems() {
        return {
            restrict: 'EA',
            template: '<br><div<h2>No items to show</h2></div>'
        };
    }

    function displayContent() {
        return {
            restrict: 'A',
            templateUrl: './templates/content.html'
        };
    }
}());
