angular.module('waterCoolerFC').service('leagueService', function ($http, $q) {

  this.getLeagueData = function (leagueId) {
    if (leagueId === null) {
      return false;
    }
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://intense-mesa-4543.herokuapp.com/standings/' + leagueId
    }).then(function (response) {

      var leagueStandings;

      if(leagueId === 440){
        leagueStandings = response;
      } else {
        var leagueData = response.data;

        for (var i = 0; i < leagueData.length; i++) {
          leagueData[i].team = leagueData[i].team.trim();
        }

        leagueStandings = [];

        for (var i = 0; i < leagueData.length; i++) {
          if (leagueData[i].team === 'Rayo Vallecano de Madrid') {
            leagueData[i].team = 'Rayo Vallecano';
          }
          if (leagueData[i].team === 'Real Sociedad de Fútbol') {
            leagueData[i].team = 'Real Sociedad';
          }
          if (leagueData[i].team === 'RCD Espanyol') {
            leagueData[i].team = 'Espanyol';
          }
          if (leagueData[i].team === 'Olympique Lyonnais') {
            leagueData[i].team = 'Olympique Lyon';
          }
          if (leagueData[i].team === 'PSV') {
            leagueData[i].team = 'PSV Eindhoven';
          }
          if (leagueData[i].team === 'AZ') {
            leagueData[i].team = 'AZ Alkmaar';
          }
          if (leagueData[i].team === 'FC Girondins de Bordeaux') {
            leagueData[i].team = 'Girondins Bordeaux';
          }
          if (leagueData[i].team === 'Olympique de Marseille') {
            leagueData[i].team = 'Olympique Marseille';
          }
          if (leagueData[i].team === 'Borussia Mönchengladbach') {
            leagueData[i].team = 'M.Gladbach';
          }
          if (leagueData[i].team === 'Futbol Club Barcelona') {
            leagueData[i].team = 'Barcelona';
          }
          if (leagueData[i].team === 'Deportivo de La Coruña') {
            leagueData[i].team = 'La Coruña';
          }
          if (leagueData[i].team === 'Tottenham Hotspur') {
            leagueData[i].team = 'Tottenham';
          }
          leagueData[i].team = leagueData[i].team.replace('ACF', '');
          leagueData[i].team = leagueData[i].team.replace('AFC', '');
          leagueData[i].team = leagueData[i].team.replace('CFC', '');
          leagueData[i].team = leagueData[i].team.replace('FC', '');
          leagueData[i].team = leagueData[i].team.replace('CF', '');
          leagueData[i].team = leagueData[i].team.replace('UD', '');
          leagueData[i].team = leagueData[i].team.replace('RC', '');
          leagueData[i].team = leagueData[i].team.replace('TSG', '');
          leagueData[i].team = leagueData[i].team.replace('SSC', '');
          leagueData[i].team = leagueData[i].team.replace('BSC', '');
          leagueData[i].team = leagueData[i].team.replace('SCO', '');
          leagueData[i].team = leagueData[i].team.replace('OSC', '');
          leagueData[i].team = leagueData[i].team.replace('SC', '');
        }

        for (var i = 0; i < leagueData.length; i++) {

          leagueStandings.push({
            team: leagueData[i].team.toUpperCase().trim(),
            position: leagueData[i].position,
            points: leagueData[i].points,
            wins: leagueData[i].wins,
            losses: leagueData[i].losses,
            draws: leagueData[i].draws,
            gamesPlayed: leagueData[i].gamesPlayed
          });
        }
      }

      deferred.resolve(leagueStandings)
    });
    return deferred.promise
  }
});