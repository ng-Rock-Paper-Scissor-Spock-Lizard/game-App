console.log("functional");
var app = angular.module('RockPaper', []);
app.controller('RockPaperCtrl', RockPaperCtrl);

var audio = document.getElementById("myBgm");
    audio.autoplay = true;
    audio.load();

var bgm = document.getElementById("mySfx");

function RockPaperCtrl($scope){
	$scope.comScore = 0;
	$scope.myScore = 0;
	$scope.user = 0;
	$scope.show = false;
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
        $scope.myVarRock = true;
        $scope.user = 1;
        $scope.myVarPaper = false;
        $scope.myVarScissors = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
    };

    $scope.togglePaper = function() {
    	$scope.userChallenger = "Paper"
        $scope.myVarPaper = true;
        $scope.user = 2;
        $scope.myVarScissors = false;
        $scope.myVarRock = false;
        $scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
    	};

    $scope.toggleScissors = function() {
    	$scope.userChallenger = "Scissors"
        $scope.myVarScissors = true;
        $scope.user = 3;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
    };

    $scope.toggleLizard = function() {
    	$scope.userChallenger = "Lizard"
        $scope.myVarLizard = true;
        $scope.user = 4;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarSpock = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
    };

    $scope.toggleSpock = function() {
    	$scope.userChallenger = "Spock"
        $scope.myVarSpock = true;
        $scope.user = 5;
        $scope.myVarScissors = false;
        $scope.myVarPaper = false;
		$scope.myVarRock = false;
		$scope.myVarLizard = false;
		$scope.computerPaper = false;
		$scope.computerRock = false;
		$scope.computerScissors = false;
		$scope.computerLizard = false;
		$scope.computerSpock = false;
		$scope.computerMove = false;
		$scope.deviation = null;
    };

	$scope.verifyChoice = function () {	
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
		if ( ($scope.user == 1 && $scope.computer == 2 ) || ($scope.user == 5 && $scope.computer == 2) ){
			$scope.computerPaper = true;
			$scope.deviation = -1;

			$scope.comScore = $scope.comScore + 1;
		} else if ( ( $scope.user == 2 && $scope.computer == 1) || ( $scope.user == 5 && $scope.computer == 1) ){
			$scope.computerRock = true;
			$scope.deviation = 1;
			
			$scope.myScore = $scope.myScore + 1;
		} else if ( ( $scope.user == 1 && $scope.computer == 3) || ( $scope.user == 5 && $scope.computer == 3) ){
			$scope.computerScissors = true;
			$scope.deviation = 1;
			
			$scope.myScore = $scope.myScore + 1;
		} else if ( ( $scope.user == 2 && $scope.computer == 3) || ( $scope.user == 4 && $scope.computer == 3) ){
			$scope.computerScissors = true;
			$scope.deviation = -1;
			
			$scope.comScore = $scope.comScore + 1;
		} else if ( ( $scope.user == 3 && $scope.computer == 1) || ( $scope.user == 4 && $scope.computer == 1) ){
			$scope.computerRock = true;
			$scope.deviation = -1;
			
			$scope.comScore = $scope.comScore + 1;
		} else if ( ( $scope.user == 3 && $scope.computer == 2) || ( $scope.user == 4 && $scope.computer == 2) ){
			$scope.computerPaper = true;
			$scope.deviation = 1;

			$scope.myScore = $scope.myScore + 1;
		} else if ( ( $scope.user == 1 && $scope.computer == 4) || ( $scope.user == 3 && $scope.computer == 4) ){
			$scope.computerLizard = true;
			$scope.deviation = 1;
			
			$scope.myScore = $scope.myScore + 1;
		} else if ( ( $scope.user == 1 && $scope.computer == 5) || ( $scope.user == 3 && $scope.computer == 5) ){
			$scope.computerSpock = true;
			$scope.deviation = -1;
			
			$scope.comScore = $scope.comScore + 1;
		} else if ( ( $scope.user == 2 && $scope.computer == 4) || ( $scope.user == 5 && $scope.computer == 4) ){
			$scope.computerLizard = true;
			$scope.deviation = -1;
			
			$scope.comScore = $scope.comScore + 1;
		} else if ( ( $scope.user == 2 && $scope.computer == 5) || ( $scope.user == 4 && $scope.computer == 5) ){
			$scope.computerSpock = true;
			$scope.deviation = 1;
			
			$scope.myScore = $scope.myScore + 1;
		}
		 else if ($scope.user === $scope.computer) {
			if($scope.computer == 1){
				$scope.computerRock = true;
			}else if($scope.computer == 2){
				$scope.computerPaper = true;
			}else if($scope.computer == 3){
				$scope.computerScissors = true;
			}else if($scope.computer == 4){
				$scope.computerLizard = true;
			}else if($scope.computer == 5){
				$scope.computerSpock = true;
			} else {
				tie++;
				$scope.deviation = 0;
			}
			 $scope.computerMove = true;
			 $scope.show = true;
		}

		if ( $scope.user == 0 ) {
			alert("You haven't choose yet!");
			
		} else {
			$scope.computerMove = true;
		}
		$scope.user = 0;
		if ($scope.myScore == 3) {
			alert("Congratulation! You won.");
			$scope.initializeGame();
		} else if ($scope.comScore == 3) {
			alert("Sorry! But you lost.");
			$scope.initializeGame();
		}
		
	};

	
	$scope.initializeGame = function() {
		bgm.autoplay = false;
		bgm.load();
		$scope.comScore = 0;
		$scope.myScore = 0;
		$scope.user = 0 ;
		$scope.show = false;
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
		$scope.choice = null;
		$scope.deviation = null;
	};
	$scope.initializeGame();
}

