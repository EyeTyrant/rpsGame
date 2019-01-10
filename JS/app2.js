
// x function to generate computer weapon

//  on click ... 
// x function to compare player weapon to comp weapon
// x function to create element and display result
// function to play again / refresh button // not needed

//  x function to keep and display score in session storage
// function to reset score / clear local storage


let


  //outcome = "", 
  comWep = "",
  playWep = "",

  playScore = " ".
  drawScore = " ",
  compScore = " ";


const


  rockBtn = document.querySelector("#rock-btn"),
  paperBtn = document.querySelector("#paper-btn"),
  scissorsBtn = document.querySelector("#scissors-btn"),
  message = document.querySelector("#message"),
  wepMessage = document.querySelector("#compWepChoice"),
  //display = document.querySelector("#result-display"), // was going to use this for changing background colors
  compWinMsg = `THE COMPUTER WINS!!!`,
  playWinMsg = `YOU ARE THE WINNER!!!`;


if (sessionStorage.getItem("playScore")) {
  playScore = parseInt(sessionStorage.getItem("playScore")) || 0;
} else {
  playScore = 0;
}
if (sessionStorage.getItem("drawScore")) {
  drawScore = parseInt(sessionStorage.getItem("drawScore")) || 0;
} else {
  drawScore = 0;
}
if (sessionStorage.getItem("compScore")) {
  compScore = parseInt(sessionStorage.getItem("compScore")) || 0;
} else {
  compScore = 0;
}






// event listener for rock button
rockBtn.addEventListener('click', function () {
  getCompWeapon();
  playWep = "rock";
  battle();
});
// event listener for paper button
paperBtn.addEventListener('click', function () {
  getCompWeapon();
  playWep = "paper";
  battle();
});
// event listener for scissors button
scissorsBtn.addEventListener('click', function () {
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
    drawScore += 1;
    setMessage(`THE BATTLE IS A STALEMATE!!!`, comWepMsg, "#007bff");
  } else if (playWep === "rock" && comWep === "paper") {
    compScore += 1;
    setMessage(compWinMsg, comWepMsg, "red");

  } else if (playWep === "rock" && comWep === "scissors") {
    playScore += 1;
    setMessage(playWinMsg, comWepMsg, "green");

  } else if (playWep === "paper" && comWep === "rock") {
    playScore += 1;
    setMessage(playWinMsg, comWepMsg, "green");

  } else if (playWep === "paper" && comWep === "scissors") {
    compScore += 1;
    setMessage(compWinMsg, comWepMsg, "red");

  } else if (playWep === "scissors" && comWep === "rock") {
    compScore += 1;
    setMessage(compWinMsg, comWepMsg, "red");

  } else if (playWep === "scissors" && comWep === "paper") {
    playScore += 1;
    setMessage(playWinMsg, comWepMsg, "green");

  };
  sessionStorage.setItem("playScore", playScore);
  sessionStorage.setItem("drawScore", drawScore);
  sessionStorage.setItem("compScore", compScore);

  document.querySelector("#player-tally").textContent = playScore;
  document.querySelector("#draw-tally").textContent = drawScore;
  document.querySelector("#comp-tally").textContent = compScore;

}
// set message function
function setMessage(msg, msg2, color) {
  message.style.color = color;
  message.textContent = msg;
  wepMessage.textContent = msg2;
  wepMessage.style.color = color;

}

// display scores