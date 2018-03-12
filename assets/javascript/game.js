//The player will have to guess the answer. 

var userWins = 0;
var userLosses = 0;
var userScore = 0;
var compChoice = 0;
//Shape Variables
    var blueStar = 0;
    var greenCylin = 0;
    var orangeSquare = 0;
    var pinkSquig = 0;

$(document).ready(function() {


gameReset();


//There will be four crystals displayed as buttons on the page.
            //Make 4 pictures/buttons
                //Give them on.click functions
              
                    //Adds a specific amount of points to player's total score b/w 1 & 12
                            //Amount is hidden until crystal is clicked---display in the score counter 


//The player will be shown a random number at the start of the game.
            //Display random number
                //Make math function for comp's choice
 

function gameReset() {
blueStar = Math.ceil(Math.random() * 12);

greenCylin = Math.ceil(Math.random() * 12);

orangeSquare = Math.ceil(Math.random() * 12);

pinkSquig = Math.ceil(Math.random() * 12);

compChoice = Math.ceil(Math.random() * 100)+21;

userScore = 0;
$("#computerOut").html(compChoice);

console.log(blueStar);
console.log(greenCylin);
console.log(orangeSquare);
console.log(pinkSquig);
console.log(compChoice);

}

//Display
    //Number of games won


    function userWon() {
        userWins++;
        gameReset();
        $("#winner").html(userWins);
    }
    //Number of games lost
    function userLost() {
        userLosses++;
        gameReset();
        $("#loser").html(userLosses);
    }


$("#star").on("click", function (){
   userScore = userScore+blueStar;
   $("#userAdd").html(userScore);
   console.log(userScore); 
   
if (compChoice === userScore) {
    userWon();
}

else if (userScore > compChoice) {
    userLost();
};
})

$("#cylinder").on("click", function (){
    userScore = userScore+greenCylin;
    $("#userAdd").html(userScore);
    console.log(userScore);  
    
if (compChoice === userScore) {
    userWon();
}

else if (userScore > compChoice) {
    userLost();
};
 })

 $("#square").on("click", function (){
    userScore = userScore+orangeSquare;
    $("#userAdd").html(userScore);
    console.log(userScore);  
    
if (compChoice === userScore) {
    userWon();
}

else if (userScore > compChoice) {
    userLost();
};
 })

 $("#squiggle").on("click", function (){
    userScore = userScore+pinkSquig;
    $("#userAdd").html(userScore);
    console.log(userScore);  
    
if (compChoice === userScore) {
    userWon();
}

else if (userScore > compChoice) {
    userLost();
};
 })

})


//To win: player's total score = comp choice displayed at beginning
//To lose: player's score goes above comp choice

    //Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)




    