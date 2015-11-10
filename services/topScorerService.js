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
                if (topScorersData[i].team === 'Rayo Vallecano de Madrid') {
                    topScorersData[i].team = 'Rayo Vallecano';
                }
                if (topScorersData[i].team === 'Real Sociedad de Fútbol') {
                    topScorersData[i].team = 'Real Sociedad';
                }
                if (topScorersData[i].team === 'RCD Espanyol') {
                    topScorersData[i].team = 'Espanyol';
                }
                if (topScorersData[i].team === 'Olympique Lyonnais') {
                    topScorersData[i].team = 'Olympique Lyon';
                }
                if (topScorersData[i].team === 'FC Girondins de Bordeaux') {
                    topScorersData[i].team = 'Girondins Bordeaux';
                }
                if (topScorersData[i].team === 'Olympique de Marseille') {
                    topScorersData[i].team = 'Olympique Marseille';
                }
                if (topScorersData[i].team === 'Borussia Mönchengladbach') {
                    topScorersData[i].team = 'B. Mönchengladbach';
                }
                if (topScorersData[i].team === 'Futbol Club Barcelona') {
                    topScorersData[i].team = 'Barcelona';
                }
                topScorersData[i].team = topScorersData[i].team.replace('ACF', '');
                topScorersData[i].team = topScorersData[i].team.replace('AFC', '');
                topScorersData[i].team = topScorersData[i].team.replace('CFC', '');
                topScorersData[i].team = topScorersData[i].team.replace('FC', '');
                topScorersData[i].team = topScorersData[i].team.replace('CF', '');
                topScorersData[i].team = topScorersData[i].team.replace('UD', '');
                topScorersData[i].team = topScorersData[i].team.replace('RC', '');
                topScorersData[i].team = topScorersData[i].team.replace('TSG', '');
                topScorersData[i].team = topScorersData[i].team.replace('SSC', '');
                topScorersData[i].team = topScorersData[i].team.replace('BSC', '');
                topScorersData[i].team = topScorersData[i].team.replace('SCO', '');
                topScorersData[i].team = topScorersData[i].team.replace('OSC', '');
                topScorersData[i].team = topScorersData[i].team.replace('SC', '');

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