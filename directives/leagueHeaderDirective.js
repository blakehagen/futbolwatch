angular.module('futbolApp').directive('leagueHeader', function () {
    return {
        
        template: '<div class="league-table-row"><div class="table-item">{{team}}</div><div class="table-item big">{{team}}</div><div class="table-item"><h5>GP</h5></div><div class="table-item"><h5>W</h5></div><div class="table-item"><h5>L</h5></div><div class="table-item"><h5>D</h5></div><div class="table-item"><h5>Pts</h5></div></div>'
    }






});