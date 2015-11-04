angular.module('futbolApp').service('mainService', function ($http, $q) {



    this.getPremierLeagueData = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/398/leagueTable',
            headers: {'Authorization': '57d24f023e8247aea4badd00e37328dc'}

        }).then(function (response) {
            console.log(response.data)

            deferred.resolve(response)
        })
        return deferred.promise

    }





});