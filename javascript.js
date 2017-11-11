angular.module('portalApp')
    .controller('degreeTracker1Ctrl', ['$scope', 'pouchService', '$rootScope', function($scope, pouchService, $rootScope) {
        // I wanna either move this to another file or store it in a database.......(same with courses)
        // Majors/Minors/Courses
        var selected = false;

        // handle boundary case: check if couch has any data for this widget
        if (typeof pouchService.widgetData['degreeTracker1'] != 'undefined') {
            // data exist: assume first document in the array has our data
            selected = pouchService.widgetData['degreeTracker1'][0].value;
        } else {
            // data does not exist: initialize service data to an empty array
            // so we can $watch it
            pouchService.widgetData['degreeTracker1'] = [];
        }

        // store data in a variable, so we don't have to re-type the whole thing again
        // note: have to do it here, in case it was previously undefined
        $scope.data = pouchService.widgetData['degreeTracker1'];

        var MATH_135 = {
            title: 'Math 135',
            description: 'Yoyoyo',
            checkbox: {
                value: selected
            }
        };
        var Math_Course = {
            title: 'math',
            description: 'math course!!!!?',
            checkbox: {
                value: selected
            }
        };
        var CS_Course = {
            title: 'cs',
            description: 'cs course!!!!!',
            checkbox: {
                value: selected
            }
        };
        var CS_Major = {
            title: 'Computer Science (Major)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course, CS_Course, MATH_135],
            checkbox: {
                value: selected
            }
        };
        var CO_Minor = {
            title: 'Combinatorics and Optimization (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course],
            checkbox: {
                value: selected
            }
        };
        var PMATH_Minor = {
            title: 'Pure Mathematics (Minor)',
            tags: ['Faculty of Mathematics'],
            requirements: [Math_Course],
            checkbox: {
                value: selected
            }
        };


        // SHOW VIEWS
        $scope.portalHelpers.showView('degreeTracker1Main.html', 1);

        $scope.showDetails = function(item) {
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

        //Functions
		// handle checkbox change
            $scope.checkboxChanged = function() {
                // try to get the doc from pouch
                // need to do this to get accurate revision (doc may have changed on another client)
                $rootScope.pouchDbLocal.get('degreeTracker1-checkboxValue').then(
                    function(doc) {
                        // doc found: set the value to checkbox state and save
                        doc.value = $scope.checkbox.value;
                        $rootScope.pouchDbLocal.put(doc).then(function(succ) {
                            console.log('put success: ', succ);
                        }, function(fail) {
                            console.log('put fail: ', fail);
                        });
                    },
                    function(err) {
                        if (err.status == 404) {
                            // doc not found: create it and save with current checkbox state
                            $rootScope.pouchDbLocal.put({
                                _id: 'degreeTracker1-checkboxValue',
                                widget: 'degreeTracker1',
                                value: $scope.checkbox.value
                            }).then(function(succ) {
                                console.log('put success: ', succ);
                            }, function(fail) {
                                console.log('put fail: ', fail);
                            });
                        }
                    }
                );
            };

            // watch for changes in data: this allows us to handle changes made on another client
            $scope.$watch('data', function() {
                if ($scope.data.length === 0)
                    return;
				
                // update checkbox state
                $scope.checkbox.value = $scope.data[0].value;
            }, true);

        //Variables    
        $scope.items = [CS_Major, CO_Minor, PMATH_Minor];

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

        $scope.first = 15;//+$scope.numCoreTaken / +$scope.numCoreCourses * (+$scope.numCoreCourses / +$scope.numCoursesRequired) * 100;
        $scope.second = 25;//+$scope.numBreadthTaken / +$scope.numBreadthCourses * (+$scope.numBreadthCourses / +$scope.numCoursesRequired) * 100;
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