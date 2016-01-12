/**
 * Created by kris on 1/12/16.
 */

(function () {
    'use strict';

    angular.module('listDirectives', [])

        .directive('noItems', noItems); // no-items


    function noItems() {
        return {
            restrict: 'EA',
            template: '<br><hr><div<h3>No items to show</h3></div><hr>'
        };
    }
}());
