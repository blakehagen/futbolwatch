angular.module('futbolApp').controller('mainCtrl', function($scope, mainService){
    
    $scope.getData = function(){
        mainService.getPremierLeagueData().then(function(response){
            // console.log(response);
            $scope.epl = response;
        })
    }
    
    $scope.getData();
    
    
    
    
    
    
    
    
});