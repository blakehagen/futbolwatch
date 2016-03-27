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
      var leagueData = response.data;
      leagueData     = JSON.stringify(leagueData);
      // leagueData     = leagueData.replace(/playedGames/g, 'gamesPlayed');
      // leagueData     = leagueData.replace(/matchesPlayed/g, 'gamesPlayed');
      leagueData = JSON.parse(leagueData);

      var leagueStandings = [];
      for (var i = 0; i < leagueData.length; i++) {
        if (leagueData[i].team === 'Rayo Vallecano de Madrid') {
          leagueData[i].team = 'Rayo Vallecano';
        }
        if (leagueData[i].team === 'Futbol Club Barcelona') {
          leagueData[i].team = 'Barcelona';
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
        if (leagueData[i].team.text === 'FC Girondins de Bordeaux') {
          leagueData[i].team.text = 'Girondins Bordeaux';
        }
        if (leagueData[i].team.text === 'Olympique de Marseille') {
          leagueData[i].team.text = 'Olympique Marseille';
        }
        if (leagueData[i].team.text === 'Club Atlético de Madrid') {
          leagueData[i].team.text = 'Atlético Madrid';
        }
        if (leagueData[i].team.text === 'Deportivo La Coruna') {
          leagueData[i].team = 'La Coruña';
        }
        if (leagueData[i].team === 'Borussia Mönchengladbach') {
          leagueData[i].team = 'M.Gladbach';
        }
        if (leagueData[i].team === 'Internazionale') {
          leagueData[i].team = 'Inter Milano';
        }
        if (leagueData[i].team === 'Académica de Coimbra') {
          leagueData[i].team = 'Académica Coimbra';
        }
        if (leagueData[i].team === 'West Bromwich Albion') {
          leagueData[i].team = 'West Brom';
        }
        if (leagueData[i].team === 'Tottenham Hotspur') {
          leagueData[i].team = 'Tottenham';
        }
        if (leagueData[i].team === 'PSV') {
          leagueData[i].team = 'PSV Eindhoven';
        }
        if (leagueData[i].team === 'AZ') {
          leagueData[i].team = 'AZ Alkmaar';
        }

        leagueData[i].team = leagueData[i].team.replace('ACF', '');
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
          team: leagueData[i].team.toUpperCase(),
          position: leagueData[i].position,
          points: leagueData[i].points,
          wins: leagueData[i].wins,
          losses: leagueData[i].losses,
          draws: leagueData[i].draws,
          gamesPlayed: leagueData[i].gamesPlayed,
        });
      }
      // console.log(leagueStandings);
      deferred.resolve(leagueStandings)
    })
    return deferred.promise
  }
});