
// x function to generate computer weapon

//  on click ... 
// function to compare player weapon to comp weapon
// function to create element and display result
// function to play again / refresh button
// function to keep and display score in local storage
// function to reset score / clear local storage

let 
outcome = "", 
comWep = "",
playWep = "",
playScore = 0,
compScore = 0;


const 
rockBtn = document.querySelector("#rock-btn"),
paperBtn = document.querySelector("#paper-btn"),
scissorsBtn = document.querySelector("#scissors-btn"),
message = document.querySelector("#message"),
wepMessage = document.querySelector("#compWepChoice"),
display = document.querySelector("#result-display"),
compWinMsg = `THE COMPUTER WINS!!!`,
playWinMsg = `YOU ARE THE WINNER!!!`;

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
  comWepMsg = `The Computer chose ${comWep.toUpperCase()} as a weapon.`;
}

// battle function to determine winner
function battle() {
  
  if (playWep === comWep) {
    setMessage(`THE BATTLE IS A STALEMATE!!!`, comWepMsg, "#007bff");
  } else if (playWep === "rock" && comWep === "paper") {
      setMessage(compWinMsg, comWepMsg, "red");
      compScore += 1;
  } else if (playWep === "rock" && comWep === "scissors") {
    setMessage(playWinMsg, comWepMsg, "green");
      playScore += 1;
  }  else if (playWep === "paper" && comWep === "rock") {
    setMessage(playWinMsg, comWepMsg, "green");
      playScore += 1;
  }   else if (playWep === "paper" && comWep === "scissors") {
    setMessage(compWinMsg, comWepMsg, "red");
      compScore += 1;
  }  else if (playWep === "scissors" && comWep === "rock") {
    setMessage(compWinMsg, comWepMsg, "red");
      compScore += 1;
  }  else if (playWep === "scissors" && comWep === "paper") {
    setMessage(playWinMsg, comWepMsg, "green",);
      playScore += 1;
  };
}

// set message function
function setMessage(msg, msg2, color,) {
  message.style.color = color;
  message.textContent = msg;
  wepMessage.textContent = msg2;
  wepMessage.style.color = color;
}