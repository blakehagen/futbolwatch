angular.module('waterCoolerFC').service('topScorerService', function ($http, $q) {

  this.getTopScorers = function (id) {
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://intense-mesa-4543.herokuapp.com/topscorers/' + id
    }).then(function (response) {
      var topScorersData = response.data;
      // Format Names to not be just initial of first name
      var formatName     = function (str) {
        var formatted;
        var arr     = str.split(' ');
        var scorers = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr.length === 2) {
            scorers.push(arr[i].charAt(0).toUpperCase() + '. ' + arr[i + 1]);
            break;
          } else if (arr.length === 3) {
            scorers.push(arr[i].charAt(0).toUpperCase() + '. ' + arr[i + 1] + ' ' + arr[i + 2]);
            break;
          } else {
            scorers.push(arr[i]);
          }
        }
        formatted = scorers.join(' ');
        return formatted;
      }
      var topScorers     = [];
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
        if (topScorersData[i].team === 'PSV') {
          topScorersData[i].team = 'PSV Eindhoven';
        }
        if (topScorersData[i].team === 'AZ') {
          topScorersData[i].team = 'AZ Alkmaar';
        }
        if (topScorersData[i].team === 'FC Girondins de Bordeaux') {
          topScorersData[i].team = 'Girondins Bordeaux';
        }
        if (topScorersData[i].team === 'Olympique de Marseille') {
          topScorersData[i].team = 'Olympique Marseille';
        }
        if (topScorersData[i].team === 'Borussia Mönchengladbach') {
          topScorersData[i].team = 'M.Gladbach';
        }
        if (topScorersData[i].team === 'Futbol Club Barcelona') {
          topScorersData[i].team = 'Barcelona';
        }
        if (topScorersData[i].team === 'Deportivo La Coruña') {
          topScorersData[i].team = 'La Coruña';
        }
        if (topScorersData[i].team === 'Tottenham Hotspur') {
          topScorersData[i].team = 'Tottenham';
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
          name: formatName(topScorersData[i].name).toUpperCase(),
          team: topScorersData[i].team.toUpperCase(),
          goals: topScorersData[i].goals,
          penalties: topScorersData[i].penalties,
          matches: topScorersData[i].matchesPlayed
        })
      }
      deferred.resolve(topScorers)
    })
    return deferred.promise
  };

});