//fill nickname - popup button to start game - loading till next player comes into the game - when he is in start game automatically
const nickname = document.querySelector("#nickname");
const form = document.querySelector(".form");
const popup = document.querySelector(".popup");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const leftPlayer = document.querySelector(".leftPlayer");
const handGesture = document.querySelector(".handGesture");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nickname.value !== "") {
    console.log(1);
    popup.style.display = "flex";
  }
});

//leftDIv - pic of hand

rock.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/rock.png')";
});

paper.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/paper.png')";
});

scissors.addEventListener("click", () => {
  handGesture.style.backgroundImage = "url('images/scissors.png')";
});
