var app = angular.module('RockPaper', []);
app.controller('RockPaperCtrl', RockPaperCtrl);

var audio = document.getElementById("mySounds");
    audio.autoplay = true;
    audio.load();

var bgm = document.getElementById("myBgm");

function RockPaperCtrl($scope){
	$scope.user = 0;
	$scope.computer = 0;
	$scope.computerMove = false;
	$scope.computerRock = false;
	$scope.computerPaper = false;
	$scope.computerScissors = false;
	$scope.computerLizard = false;
	$scope.computerSpock = false;
	$scope.myVarRock = false;
	$scope.myVarPaper = false;
	$scope.myVarScissors = false;
	$scope.myVarLizard = false;
	$scope.myVarSpock = false;

    $scope.toggleRock = function() {
    	$scope.userChallenger = "Rock";
        $scope.myVarRock = !$scope.myVarRock;
        $scope.user = 1;
        $scope.myVarPaper = false;
        $scope.myVarScissors = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
    };

    $scope.togglePaper = function() {
    	$scope.userChallenger = "Paper"
        $scope.myVarPaper = !$scope.myVarPaper;
        $scope.user = 2;
        $scope.myVarScissors = false;
        $scope.myVarRock = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
    };

    $scope.toggleScissors = function() {
    	$scope.userChallenger = "Scissors"
        $scope.myVarScissors = !$scope.myVarScissors;
        $scope.user = 3;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
		$scope.myVarSpock = false;
    };

    $scope.toggleLizard = function() {
    	$scope.userChallenger = "Lizard"
        $scope.myVarLizard = !$scope.myVarLizard;
        $scope.user = 4;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarSpock = false;
    };

    $scope.toggleSpock = function() {
    	$scope.userChallenger = "Spock"
        $scope.myVarSpock = !$scope.myVarSpock;
        $scope.user = 5;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
    };

	$scope.verifyChoice = function () {	
		bgm.autoplay = true;
    	bgm.load();
		if (  $scope.user == 1 && $scope.computer == 2 ) {
			$scope.deviation = -1;
			$scope.computerPaper = true;
		} else if ( $scope.user == 2 && $scope.computer == 1){
			$scope.deviation = 1;
			$scope.computerRock = true;
		} else if ( $scope.user == 1 && $scope.computer == 3){
			$scope.deviation = 1;
			$scope.computerScissors = true;
		} else if ( $scope.user == 2 && $scope.computer == 3){
			$scope.deviation = -1;
			$scope.computerScissors = true;
		} else if ( $scope.user == 3 && $scope.computer == 1){
			$scope.deviation = -1;
			$scope.computerRock = true;
		} else if ( $scope.user == 3 && $scope.computer == 2){
			$scope.deviation = 1;
			$scope.computerPaper = true;
		} else if ( $scope.user == 1 && $scope.computer == 4){
			$scope.deviation = 1;
			$scope.computerLizard = true;
		} else if ( $scope.user == 1 && $scope.computer == 5){
			$scope.deviation = -1;
			$scope.computerSpock = true;
		} else if ( $scope.user == 2 && $scope.computer == 4){
			$scope.deviation = -1;
			$scope.computerLizard = true;
		} else if ( $scope.user == 2 && $scope.computer == 5){
			$scope.deviation = 1;
			$scope.computerSpock = true;
		} else if ( $scope.user == 3 && $scope.computer == 4){
			$scope.deviation = 1;
			$scope.computerLizard = true;
		} else if ( $scope.user == 3 && $scope.computer == 5){
			$scope.deviation = -1;
			$scope.computerSpock = true;
		} else if ( $scope.user == 4 && $scope.computer == 1){
			$scope.deviation = -1;
			$scope.computerRock = true;
	    } else if ( $scope.user == 4 && $scope.computer == 2){
			$scope.deviation = 1;
			$scope.computerPaper = true;
		} else if ( $scope.user == 4 && $scope.computer == 3){
			$scope.deviation = -1;
			$scope.computerScissors = true;
		} else if ( $scope.user == 4 && $scope.computer == 5){
			$scope.deviation = 1;
			$scope.computerSpock = true;
		} else if ( $scope.user == 5 && $scope.computer == 1){
			$scope.deviation = 1;
			$scope.computerRock = true;
		} else if ( $scope.user == 5 && $scope.computer == 2){
			$scope.deviation = -1;
			$scope.computerPaper = true;
		} else if ( $scope.user == 5 && $scope.computer == 3){
			$scope.deviation = 1;
			$scope.computerScissors = true;
		} else if ( $scope.user == 5 && $scope.computer == 4){
			$scope.deviation = -1;
			$scope.computerLizard = true;
		} else {
			$scope.deviation = 0;
		}
		$scope.computerMove = true;
	}

	$scope.initializeGame = function() {
		bgm.autoplay = false;
		bgm.load();
		$scope.myVarRock = false;
		$scope.myVarPaper = false;
		$scope.myVarScissors = false;
		$scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerMove = false;
		$scope.computerRock = false;
		$scope.computerPaper = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computer = Math.floor((Math.random ()*5) + 1);
		if ($scope.computer == 1){
			$scope.computerPlayer = "Rock";
		} else if ($scope.computer == 2) {
			$scope.computerPlayer = "Paper";
		} else if ($scope.computer == 3) {
			$scope.computerPlayer = "Scissors";
		} else if ($scope.computer == 4) {
			$scope.computerPlayer = "Lizard";
		} else {
			$scope.computerPlayer = "Spock";
		}

		$scope.choice = null;
		$scope.deviation = null;
	}
	$scope.initializeGame();
}
