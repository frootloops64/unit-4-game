$(document).ready(function () {

    var targetNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1Num;
    var crystal2Num;
    var crystal3Num;
    var crystal4Num;

    function newNumbers() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        crystal1Num = Math.floor(Math.random() * 12) + 1;
        crystal2Num = Math.floor(Math.random() * 12) + 1;
        crystal3Num = Math.floor(Math.random() * 12) + 1;
        crystal4Num = Math.floor(Math.random() * 12) + 1;

    }
    newNumbers();
    console.log(targetNumber);
    console.log(crystal1Num);

    function newGame() {
        newNumbers();
        totalScore = 0;
        $("#targetNumber").text(targetNumber);
        $("#totalScore").text(totalScore);
        $("#crystal1").attr("crystalValue", crystal1Num);
        $("#crystal2").attr("crystalValue", crystal2Num);
        $("#crystal3").attr("crystalValue", crystal3Num);
        $("#crystal4").attr("crystalValue", crystal4Num);
        $("#wins").text(wins);
        $("#losses").text(losses);

        console.log(crystal1Num);
    }

    function youWin() {
        $("#winOrLose").text("You Win!")
        wins++;
        $("#wins").text(wins);
    }

    function youLose() {
        $("#winOrLose").text("You Lose!")
        losses++;
        $("#losses").text(losses);
    }

    newGame();

    $(".crystalimage").on("click", function () {
        if (totalScore >= targetNumber) {
            return;
        }
        console.log(crystalValue);
        var crystalValue = $(".crystalimage").attr("crystalValue");
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#totalScore").text(totalScore);

        console.log(totalScore);
        console.log(crystalValue);

        if (totalScore === targetNumber) {
            youWin();
        } else if (totalScore > targetNumber) {
            youLose();
        }

    });

    $(".btn").on("click", function () {
        newGame();
    });

});