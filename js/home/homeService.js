angular.module('futbolApp').service('homeService', function ($http, $q) {

    this.getPremierLeagueData = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.football-data.org/alpha/soccerseasons/398/leagueTable'
        }).then(function (response) {
            console.log(response.data);

            var epl = response.data.standing;
            var eplTable = [];

            for (var i = 0; i < epl.length; i++) {
                eplTable.push({
                    team: epl[i].teamName,
                    position: epl[i].position,
                    points: epl[i].points
                });
            }
            console.log(eplTable);

            deferred.resolve(eplTable)
        })
        return deferred.promise

    }





});