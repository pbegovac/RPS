import { popupField, popup } from "./popup.js";

//fill nickname - popup button to start game - loading till next player comes into the game - when he is in start game automatically
const nickname = document.querySelector("#nickname");
const form = document.querySelector(".form");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const handGesture = document.querySelector(".handGesture");
export const players = document.querySelector(".players");
export const allButtons = document.querySelector(".allButtons");

nickname.focus();

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

//player1 choices
rock.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/rock.png')";
});

paper.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/paper.png')";
});

scissors.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/scissors.png')";
});
