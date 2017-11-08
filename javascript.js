angular.module('portalApp')
.controller('degreeTracker1Ctrl', ['$scope', function ($scope) {
	
	// mock data, get faculty & display relevant data from there
	$scope.items = [
		{
			title:'Applied Mathematics',
			tags: ['Joint'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},{
			title:'Combinatorics and Optimization',
			tags: ['Joint'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},{
			title:'Pure Mathematics',
			tags: ['Joint'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},{
			title:'Statistics',
			tags: ['Joint'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title:'Business',
			tags: ['Option'],
			details: 'Mauris cursus, sapien et malesuada ultrices, purus sapien iaculis tellus, quis semper magna est at leo.'
		},
		{
			title:'Cognitive Science',
			tags: ['tag A', 'tag H'],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Business',
			tags: ['tag I'],
			details: 'Proin sem quam, rutrum id ante id, scelerisque tempor quam. Curabitur pharetra turpis at sem placerat, non vehicula ligula tincidunt.'
		},
		{
			title:'',
			tags: ['tag C', 'tag K', 'tag B'],
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'Item 6',
			tags: ['tag A', 'tag B', 'tag C'],
			details: 'Curabitur scelerisque lorem risus, in luctus orci hendrerit non. Praesent quis tellus dapibus dolor consectetur volutpat.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('degreeTracker1Main.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('degreeTracker1Details.html', 2);
	}
}]);