
// x function to generate computer weapon

//  on click ... 
// function to compare player weapon to comp weapon
// function to create element and display result
// function to play again / refresh button
// function to keep and display score in local storage
// function to reset score / clear local storage






const 
rockBtn = document.querySelector("#rock-btn"),
paperBtn = document.querySelector("#paper-btn"),
scissorsBtn = document.querySelector("#scissors-btn"),
message = document.querySelector("#message"),
display = document.querySelector("#result-display"),
compWinMsg = `The Computer chose ${comWep} as a weapon. THE COMPUTER WINS!!!`,
playWinMsg = `The Computer chose ${comWep} as a weapon. YOU ARE THE WINNER!!!`;

let 
compChoiceMsg = `The Computer chose ${comWep} as a weapoon`;
outcome = "", 
comWep = "",
playWep = "",
playScore = 0,
compScore = 0;

// generate computer weapon
function getCompWeapon() {
  getNum = Math.floor(Math.random() * 3);
  if (getNum === 0) {
    comWep = "rock";
  } else if (getNum === 1) {
    comWep = "paper";
  } else {
    comWep = "scissors";
  };
  
}


// event listener for rock button
rockBtn.addEventListener('click', function() {
  getCompWeapon();
  playWep = "rock";
  
  battle();
});
// event listener for paper button
paperBtn.addEventListener('click', function() {
  getCompWeapon();
  playWep = "paper";
  
  battle();
});
// event listener for scissors button
scissorsBtn.addEventListener('click', function() {
  getCompWeapon();
  playWep = "scissors";
  
  battle();
});



// battle function to determine winner
function battle() {
  switch (playWep) {
    // display stalemate
    case playWep === "rock" && comWep === "paper":
      setMessage(compWinMsg, "red");
      compScore += 1;
      break;
    case playWep === "rock" && comWep === "scissors":
      setMessage(playWinMsg, "green");
      playScore += 1;
      break;
    case playWep === "paper" && comWep === "rock":
      setMessage(playWinMsg, "green");
      playScore += 1;
      break;
    case playWep === "paper" && comWep === "scissors":
      setMessage(compWinMsg, "red");
      compScore += 1;
      break;
    case playWep === "scissors" && comWep === "rock":
      setMessage(compWinMsg, "red");
      compScore += 1;
      break;
    case playWep === "scissors" && comWep === "paper":
      setMessage(playWinMsg, "green");
      playScore += 1;
      break;
    default:
      setMessage(`The Computer chose ${comWep} as a weapon. THE BATTLE IS A STALEMATE!!!`, "yellow");
  };
}


// getCompWeapon();
// console.log(comWep);

// compute outcome to message
// function genMessage() {
//   switch (outcome) {
//     case 
//   }
//}

// set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}