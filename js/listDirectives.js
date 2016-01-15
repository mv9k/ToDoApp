
(function () {
    'use strict';

    angular.module('listDirectives', [])

        .directive('noItems', noItems) // no-items
        .directive('displayContent', displayContent) // display-content
        .directive('focusOn', focusOn); // focuses and selects input field when editing task names


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


    function focusOn($timeout) {
        return {
            restrict : 'A',
            link : function($scope, $element, $attr) {
                $scope.$watch($attr.focusOn, function(_focusVal) {
                    $timeout(function() {
                        _focusVal ? $element.focus() : $element.blur();
                        _focusVal ? $element.select() : $element.blur();
                    });

                });
            }
        };
    }

}());
