const prompt = require('prompt-sync')({ sigint: true });

let run = true;
// let inputGuess;
while (run) {
    let compGuess = Math.floor(Math.random() * 100);
    let attempt = 1;
    let inputGuess;

    while (attempt <= 10) {
        console.log("You attempt guesses " + attempt);
        inputGuess = prompt("Enter your number or ('q' to Quit) : ");
        // inputGuess = Number(inputGuess);
        if (inputGuess.toLowerCase() == 'q') {
            run = false;
            console.log("Game Quit");
            
            break;
        }
        inputGuess = parseInt(inputGuess);
        // console.log(typeof inputGuess);
  
        if(isNaN(inputGuess) || inputGuess < 0 || inputGuess > 99){
            console.log("Please Enter Valid Input, Enter Number between 0 to 99");
            continue;
        }
        if (inputGuess < compGuess) {
            console.log("Too Low");
        }
        else if(inputGuess > compGuess){
            console.log("Too High");
        }
        else{
            console.log(`Congratulation you guess ${compGuess} number in ${attempt} attempts`);
            run = false;
        }
        attempt++;
        if(attempt > 10){
            console.log("Your Attempt is finished please try again");
            break;
        }
    }

    if(run){
        let again = prompt("Do you want to play again? Y/N : ");
        if(again.toLowerCase() !== "y"){
            run = false;
            console.log("Thank You For Playing");
        }
    }

  
}



// const prompt = require('prompt-sync')({ sigint: true });
// let compGuess = Math.floor(Math.random() * 100);
// let attempt = 1;
// let run = true;
// let inputGuess;

// while (attempt <= 10) {
//     console.log("You attempt guesses " +attempt);
//     inputGuess = prompt("Enter your number :");
//     // inputGuess = Number(inputGuess);
//     inputGuess = parseInt(inputGuess);
//     // console.log(typeof inputGuess);
    
//     if(isNaN(inputGuess) || inputGuess < 0 || inputGuess > 99){
//         console.log("Please Enter Valid Input, Enter Number between 0 to 99");
//         continue;
//     }
//     if (inputGuess < compGuess) {
//         console.log("Too Low");
//     }
//     else if(inputGuess > compGuess){
//         console.log("Too High");
//     }
//     else{
//         console.log(`Congratulation you guess ${compGuess} number in ${attempt} attempts`);
//         run = false;
//     }
//     attempt++;
//     if(attempt > 10){
//         console.log("Your Attempt is finished please try again");
//         break;
//     }
// }



