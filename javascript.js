angular.module('portalApp')
    .controller('degreeTracker1Ctrl', ['$scope', function($scope) {
        // I wanna either move this to another file or store it in a database.......(same with courses)
        var Math_Course = {title: 'math', description: 'math course!!!!?'};
        var CS_Course = {title: 'cs', description: 'cs course!!!!!'};
        var CS_Major = {
            title: 'Computer Science (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course, CS_Course]
        };
        var CS_Minor = {
            title: 'Computer Science (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course, CS_Course]
        };
        var CO_Major = {
            title: 'Combinatorics and Optimization (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course]
        };
        var CO_Minor = {
            title: 'Combinatorics and Optimization (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course]
        };
        var PMATH_Major = {
            title: 'Pure Mathematics (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course, Math_Course]
        };
        var PMATH_Minor = {
            title: 'Pure Mathematics (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course]
        };
        
        
        $scope.items = [CS_Major, CS_Minor, CO_Major, CO_Minor, PMATH_Major, PMATH_Minor];

        // Show main view in the first column as soon as controller loads
        $scope.portalHelpers.showView('degreeTracker1Main.html', 1);

        // This function gets called when user clicks an item in the list
        $scope.showDetails = function(item) {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('degreeTracker1Details.html', 2);
        };

        $scope.showDetailDetails = function(course) {
            $scope.detailDetailsItem = course;
            $scope.portalHelpers.showView('degreeTracker1DetailDetails.html', 3);
        };

        $scope.goToConfig = function() {
            $scope.portalHelpers.showView('degreeTracker1Config.html', 2);
        };

        $scope.numCoursesRequired = 0;
        $scope.numCoreCourses = 0;
        $scope.numBreadthCourses = 0;
        $scope.numCoreTaken = 0;
        $scope.numBreadthTaken = 0;

        for (var i = 0; i < $scope.items.length; i++) {
            $scope.numCoursesRequired += $scope.items[i].requirements.length;
            if ($scope.items[i].title.search("(Major)") != -1) {
                $scope.numCoreCourses += $scope.items[i].requirements.length;
            }
            if ($scope.items[i].title.search("(Minor)") != -1) {
                $scope.numBreadthCourses += $scope.items[i].requirements.length;
            }
        }
        
        //Need a way to link all the checkboxes for each course and then count them for courses taken (API could do this.....)

        $scope.first = +$scope.numCoreTaken / +$scope.numCoreCourses * (+$scope.numCoreCourses / +$scope.numCoursesRequired) * 100;
        $scope.second = +$scope.numBreadthTaken / +$scope.numBreadthCourses * (+$scope.numBreadthCourses / +$scope.numCoursesRequired) * 100;
        $scope.third = 100 - +$scope.first - +$scope.second;


        //This works with jQuery....not sure about AngularJS
        /*$(function() {
            var availableTags = [
                'tag1',
                'tag2'
                //Ideally, I would like to get this from a database (if TSQL works)
            ];
            $("#tags").autocomplete({
                source: availableTags
            });
        });*/
    }]);