angular.module('waterCoolerFC').service('topScorerService', function ($http, $q) {

    this.getTopScorers = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://www.kimonolabs.com/api/' + id + '?apikey=Gw5PcHFe2RGyDfn2GJlUBynbruB41WWo'
        }).then(function (response) {
            // console.log(response.data.results.collection);
            var topScorersData = response.data.results.collection;
            var topScorers = [];

            for (var i = 0; i < topScorersData.length; i++) {
                topScorers.push({
                    rank: topScorersData[i].rank,
                    name: topScorersData[i].name,
                    team: topScorersData[i].team,
                    goals: topScorersData[i].goals,
                    penalties: topScorersData[i].penalties,
                    matches: topScorersData[i].matchesPlayed
                })
            }
            console.log(topScorers);
            deferred.resolve(topScorers)
        })
        return deferred.promise
    }






});