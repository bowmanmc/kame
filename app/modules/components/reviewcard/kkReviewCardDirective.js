angular.module('kk').directive('kkReviewCard', function() {

    'use strict';

    return {
        restrict: 'EA',
        templateUrl: 'modules/components/reviewcard/kkReviewCardTemplate.html',
        controller: 'kkReviewCardController',
        scope: {
            character: '=',
            level: '='
        }
    };
});
