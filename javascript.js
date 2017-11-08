angular.module('portalApp')
    .controller('degreeTracker1Ctrl', ['$scope', function($scope) {
        var CS_Major = {
            title: 'Computer Science (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        var CS_Minor = {
            title: 'Computer Science (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        var CO_Major = {
            title: 'Combinatorics and Optimization (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        var CO_Minor = {
            title: 'Combinatorics and Optimization (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        var PMATH_Major = {
            title: 'Pure Mathematics (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        var PMATH_Minor = {
            title: 'Pure Mathematics (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [{
                title: 'math',
                description: 'math course!!!!?'
            }],
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        // mock data, get faculty & display relevant data from there
        $scope.items = [CS_Major, CS_Minor, CO_Major, CO_Minor, PMATH_Major, PMATH_Minor];

        // Show main view in the first column as soon as controller loads
        $scope.portalHelpers.showView('degreeTracker1Main.html', 1);

        // This function gets called when user clicks an item in the list
        $scope.showDetails = function(item) {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('degreeTracker1Details.html', 2);
        }

        $scope.showDetailDetails = function(course) {
            $scope.detailDetailsItem = course;
            $scope.portalHelpers.showView('degreeTracker1DetailDetails.html', 3);
        }


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

        $scope.first = +$scope.numCoreTaken / +$scope.numCoreCourses * (+$scope.numCoreCourses / +$scope.numCoursesRequired) * 100;
        $scope.second = +$scope.numBreadthTaken / +$scope.numBreadthCourses * (+$scope.numBreadthCourses / +$scope.numCoursesRequired) * 100;
        $scope.third = 100 - +$scope.first - +$scope.second;
        
        
        //This works with jQuery....not sure about AngularJS
        $(function() {
            var availableTags = [
                'tag1',
                'tag2'
                //Ideally, I would like to get this from a database (if TSQL works)
            ];
            $("#tags").autocomplete({
                source: availableTags
            });
        });
    }]);