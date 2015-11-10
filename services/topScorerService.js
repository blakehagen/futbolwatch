angular.module('waterCoolerFC').service('topScorerService', function ($http, $q) {

    this.getTopScorers = function (id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://www.kimonolabs.com/api/' + id + '?apikey=Gw5PcHFe2RGyDfn2GJlUBynbruB41WWo',
            crossDomain: true,
            headers: {}
        }).then(function (response) {
            var topScorersData = response.data.results.collection;

            // Format Names to not be all UPPERCase --> to be used in pushing info in final array
            var formatName = function (str) {
                var formatted;
                var arr = str.toLowerCase().split(' ');
                var caps = [];
                for (var i = 0; i < arr.length; i++) {
                    caps.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
                }
                formatted = caps.join(' ');
                return formatted;
            }

            var topScorers = [];

            for (var i = 0; i < topScorersData.length; i++) {
                if (topScorersData[i].team === 'Futbol Club Barcelona') {
                    topScorersData[i].team = 'FC Barcelona';
                }
                if (topScorersData[i].team === 'Borussia Mönchengladbach') {
                    topScorersData[i].team = 'B. Mönchengladbach';
                }

                topScorers.push({
                    rank: topScorersData[i].rank,
                    name: formatName(topScorersData[i].name),
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