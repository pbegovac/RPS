import { popupField, popup } from "./popup.js";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import {
//   getFirestore,
//   getDocs,
//   collection,
// } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDnyLZt3uMsr5mg-AAWRdJroDE8ZEtI9Ao",
  authDomain: "rock-paper-scissors-191b5.firebaseapp.com",
  projectId: "rock-paper-scissors-191b5",
  storageBucket: "rock-paper-scissors-191b5.appspot.com",
  messagingSenderId: "477817302474",
  appId: "1:477817302474:web:8b7a25326b38977160b333",
});

const auth = getAuth(firebaseApp);

//Detect auth state

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in");
  } else {
    console.log("No user");
  }
});

const form = document.querySelector(".form");
export const players = document.querySelector(".players");
export const allButtons = document.querySelector(".allButtons");

nickname.focus();

const leftPlayer = {
  choice: null,
  isReady: false,
};

const rightPlayer = {
  choice: null,
  isReady: false,
};

form.addEventListener("submit", (e) => {
  //fill nickname - popup button to start game - loading till next player comes into the game - when he is in start game automatically
  const nickname = document.querySelector("#nickname");
  e.preventDefault();
  if (nickname.value !== "") {
    popupField.style.display = "flex";
    popup.style.display = "flex";
    allButtons.style.display = "none";
    players.style.display = "none";
    nickname.value = "";
  }
});

let getPlayerChoice = (selection, player) => {
  player.choice = selection;
  player.isReady = true;
};

let playGame = () => {
  const rightButtons = document.querySelectorAll(".buttons2");
  const handGesture = document.querySelector(".handGesture");
  const handGesture2 = document.querySelector(".handGesture2");
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const rock2 = document.querySelector("#rock2");
  const paper2 = document.querySelector("#paper2");
  const scissors2 = document.querySelector("#scissors2");
  let scoreOne = document.querySelector(".player1score");
  let scoreTwo = document.querySelector(".player2score");

  let score1 = document.createTextNode("0");
  let score2 = document.createTextNode("0");
  scoreOne.appendChild(score1);
  scoreTwo.appendChild(score2);

  //if rightPlayer was last to click shake right pic
  rightButtons.forEach((rightButton) =>
    rightButton.addEventListener("click", () => {
      handGesture2.style.backgroundImage = "url('images/rock.png')";
      handGesture2.classList.add("handAnimation2");
      setTimeout(() => {
        handGesture2.style.backgroundImage =
          "url('images/" + rightPlayer.choice + ".png')";
        handGesture2.classList.remove("handAnimation2");
      }, "500");

      handGesture.style.backgroundImage = "url('images/rock.png')";
      handGesture.classList.add("handAnimation");
      setTimeout(() => {
        handGesture.style.backgroundImage =
          "url('images/" + leftPlayer.choice + ".png')";
        handGesture.classList.remove("handAnimation");
        let calculateResult = (player1, player2) => {
          let result = null;

          if (player1 === player2) {
            result = "X";
          } else if (player1 === "rock" && player2 === "paper") {
            result = 2;
          } else if (player1 === "scissors" && player2 === "rock") {
            result = 2;
          } else if (player1 === "paper" && player2 === "scissors") {
            result = 2;
          } else {
            result = 1;
          }

          if (result === 1) {
            parseInt(scoreOne.innerHTML);
            scoreOne.innerHTML++;
          } else if (result === 2) {
            parseInt(scoreTwo.innerHTML);
            scoreTwo.innerHTML++;
          }
        };

        calculateResult(leftPlayer.choice, rightPlayer.choice);

        //display score and start from rock image again
        if (scoreOne.innerHTML == 5) {
          //first show handGesture - then display result and then proclaim a winner
        } else if (scoreTwo.innerHTML == 5) {
        }
      }, "500");
    })
  );

  //event Listeners
  rock.addEventListener("click", () => {
    getPlayerChoice("rock", leftPlayer);
  });

  paper.addEventListener("click", () => {
    getPlayerChoice("paper", leftPlayer);
  });

  scissors.addEventListener("click", () => {
    getPlayerChoice("scissors", leftPlayer);
  });

  rock2.addEventListener("click", () => {
    getPlayerChoice("rock", rightPlayer);
  });

  paper2.addEventListener("click", () => {
    getPlayerChoice("paper", rightPlayer);
  });

  scissors2.addEventListener("click", () => {
    getPlayerChoice("scissors", rightPlayer);
  });

  //try to make a placeholder for above events and use this
};

playGame();

//on rightbuttons click - animate and keep score
