angular.module('waterCoolerFC').controller('leagueCtrl', function ($scope, leagueService, upcomingMatchesService, idService, mapService) {
    
    // Get League ID from idService
    $scope.id = function () {
        $scope.leagueData = idService.getLeagueId();
    }

    $scope.id();
    
    // Get League Standings
    $scope.toggleStandings = false;

    $scope.getStandings = function () {
        if ($scope.toggleStandings === false) {
            leagueService.getLeagueData($scope.leagueData.leagueId).then(function (response) {
                $scope.league = response;
            })
        }
        $scope.toggleStandings = !$scope.toggleStandings;
        $scope.toggleNextMatches = false;
    };
    
    // Get Upcoming Matches
    $scope.toggleNextMatches = false;

    $scope.getNextMatches = function () {
        if ($scope.toggleNextMatches === false) {
            upcomingMatchesService.getNextMatches($scope.leagueData.leagueId).then(function (response) {
                $scope.next = response;
            })
        }
        $scope.toggleNextMatches = !$scope.toggleNextMatches;
        $scope.toggleStandings = false;
    };
    
    
    // // // // // // // // // // // // // // // // // MAP TESTS // // // // // // // // // // // 
    
    //Data
    var cities = [
        {
            city: 'India',
            desc: 'This is the best country in the world!',
            lat: 23.200000,
            long: 79.225487
        },
        {
            city: 'New Delhi',
            desc: 'The Heart of India!',
            lat: 28.500000,
            long: 77.250000
        },
        {
            city: 'Mumbai',
            desc: 'Bollywood city!',
            lat: 19.000000,
            long: 72.90000
        },
        {
            city: 'Kolkata',
            desc: 'This is test text',
            lat: 22.500000,
            long: 88.400000
        },
        {
            city: 'Chennai  ',
            desc: 'Kathipara Bridge!',
            lat: 13.000000,
            long: 80.250000
        }
    ];

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (var i = 0; i < cities.length; i++) {
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

    // // // // // // // // // /// // // // // /// // // /// // // /// // / // /// // /// /// // //



});