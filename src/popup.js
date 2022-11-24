import { allButtons, players } from "./app.js";

//inside of popup conect two players - if they are not conect load the screen

export const popupField = document.querySelector(".popupField");
export const popup = document.querySelector(".popup");
const loading = document.querySelector(".lds-ellipsis");
const playButton = document.querySelector(".playButton");

popupField.style.display = "none";
popup.style.display = "none";
loading.style.display = "none";

playButton.addEventListener("click", () => {
  loading.style.display = "flex";
  playButton.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (!popup.contains(e.target)) {
    popup.style.display = "none";
    popupField.style.display = "none";
    players.style.display = "flex";
    allButtons.style.display = "flex";
    loading.style.display = "none";
    playButton.style.display = "flex";
  }
});
