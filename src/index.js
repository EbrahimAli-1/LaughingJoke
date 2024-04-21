import generateJoke from "./generatejoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

let laughingImg = document.querySelector("#laughingImg");
laughingImg.src = laughing;

let jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
