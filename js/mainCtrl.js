angular.module('futbolApp').controller('mainCtrl', function($scope, mainService){
    
    $scope.getData = function(){
        mainService.getPremierLeagueData().then(function(response){
            // console.log(response);
            $scope.ePL = response;
        })
    }
    
    $scope.getData();
    
    
    
    
    
    
    
    
});