angular.module('futbolApp').service('mainService', function($http, $q){
    
    var deferred = $q.defer();
    $http ({
        method: 'GET',
        url: 'http://api.football-data.org/alpha/soccerseasons/405/fixtures'
    })
    
    
    
    
});