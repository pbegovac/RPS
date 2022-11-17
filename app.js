import { popupField, popup } from "./popup.js";

//fill nickname - popup button to start game - loading till next player comes into the game - when he is in start game automatically
const nickname = document.querySelector("#nickname");
const form = document.querySelector(".form");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const handGesture = document.querySelector(".handGesture");
const leftPlayerHtml = document.querySelector(".leftPlayer");
export const players = document.querySelector(".players");
export const allButtons = document.querySelector(".allButtons");

const rock2 = document.querySelector("#rock2");
const paper2 = document.querySelector("#paper2");
const scissors2 = document.querySelector("#scissors2");

nickname.focus();
handGesture.style.backgroundImage = "url('images/rock.png')";

const leftPlayer = {
  choice: null,
  isReady: false,
};

const rightPlayer = {
  choice: null,
  isReady: false,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nickname.value !== "") {
    popupField.style.display = "flex";
    popup.style.display = "flex";
    allButtons.style.display = "none";
    players.style.display = "none";
    nickname.value = "";
  }
});

let playHand = () => {
  handGesture.style.backgroundImage = "url('images/rock.png')";
  handGesture.classList.add("handAnimation");
};

rock.addEventListener("click", () => {
  playHand();
  setTimeout(() => {
    handGesture.style.backgroundImage = "url('images/rock.png')";
    handGesture.classList.remove("handAnimation");
  }, "500");
  getPlayerChoice("rock", leftPlayer);
});

paper.addEventListener("click", () => {
  playHand();
  setTimeout(() => {
    handGesture.style.backgroundImage = "url('images/paper.png')";
    handGesture.classList.remove("handAnimation");
  }, "500");
  getPlayerChoice("paper", leftPlayer);
});

scissors.addEventListener("click", () => {
  playHand();
  setTimeout(() => {
    handGesture.style.backgroundImage = "url('images/scissors.png')";
    handGesture.classList.remove("handAnimation");
  }, "500");
  getPlayerChoice("scissors", leftPlayer);
});

function result() {
  if (rock.clicked == true) console.log("rock je kliknut");
}

result;

function calculateResult(player1, player2) {
  let result = null;
  console.log(
    "player one choice:" + player1,
    " ///",
    "player two choice: " + player2
  );

  if (player1 === "rock" && player2 === "rock") {
    result = "tie";
  } else if (player1 === "rock" && player2 === "paper") {
    result = "player two wins";
  } else if (player1 === "rock" && player2 === "scissors") {
    result = "player one wins";
  } else if (player1 === "paper" && player2 === "paper") {
    result = "tie";
  } else if (player1 === "paper" && player2 === "rock") {
    result = "player two wins";
  } else if (player1 === "paper" && player2 === "scissors") {
    result = "player two wins";
  } else if (player1 === "scissors" && player2 === "scissors") {
    result = "tie";
  } else if (player1 === "scissors" && player2 === "rock") {
    result = "player two wins";
  } else if (player1 === "scissors" && player2 === "paper") {
    result = "player one wins";
  }

  console.log(result);
}

function getPlayerChoice(selection, player) {
  player.choice = selection;
  player.isReady = true;

  calculateResult(leftPlayer.choice, rightPlayer.choice);
}

rock2.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/rock.png')";
  getPlayerChoice("rock", rightPlayer);
  console.log(leftPlayer);
});

paper2.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/paper.png')";
  getPlayerChoice("paper", rightPlayer);
});

scissors2.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/scissors.png')";
  getPlayerChoice("scissors", rightPlayer);
});

console.log(leftPlayer);
