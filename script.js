const onOffButton = document.querySelector(".button-on");

const trybeLogo = document.querySelector(".trybe-img-on");

const playMP3 = document.querySelector(".play-mp3");

const playButton = document.querySelector(".play-pause");
const pauseButton = document.querySelector(".stop");

const muteButton = document.querySelector(".button-mute");
const muteSymbol = document.querySelector(".mute");

const volumeUp = document.querySelector(".volume-up");
const volumeDown = document.querySelector(".volume-down");

const discPlayer = document.querySelector(".inside-disc");
const discLogo = document.querySelector(".disc-logo");

const fowardButton = document.querySelector(".foward");
const backwardButton = document.querySelector(".backward");

const myMusics = [
  "./assets/mestre_testes_isaac.mp3",
  "./assets/rock.mp3",
  "./assets/patrick_patrikios.mp3",
];

const randomMusic = (number) => {
  const randomNumber = Math.floor(Math.random() * number);
  return myMusics[randomNumber];
};

let on = false;
let isMuted = false;
let volumeMP3 = 0.3;
playMP3.volume = volumeMP3;

function turnOnOff() {
  if (on) {
    playMP3.pause();
  }
  on = !on;
  discLogo.style.animationPlayState = "paused";

  trybeLogo.classList.toggle("trybe-img-on");
  trybeLogo.classList.toggle("trybe-img-off");
}

function turnDownVolume() {
  playMP3.volume -= 0.1;
  volumeMP3 = playMP3.volume;
}

function turnUpVolume() {
  playMP3.volume += 0.1;
  volumeMP3 = playMP3.volume;
}

function playMusic() {
  const song = myMusics[0];
  playMP3.src = song;
  playMP3.play();
  discLogo.style.animationPlayState = "running";
}

function pauseMusic() {
  playMP3.pause();
  discLogo.style.animationPlayState = "paused";
}

function muteMusic() {
  playMP3.volume = isMuted ? volumeMP3 : 0.0;
  isMuted = !isMuted;

  if (isMuted) {
    muteSymbol.src = "microphone-alt-solid.svg";
    muteSymbol.style.width = "12px";
  } else {
    muteSymbol.style.width = "20px";
    muteSymbol.src = "microphone-alt-slash-solid.svg";
  }
}

function previousMusic() {
  const actualSong = playMP3.src.substr(22);
  const eu = myMusics.indexOf(actualSong);

  if (eu <= 0) {
    playMP3.src = myMusics[2];
    playMP3.play();
  } else {
    playMP3.src = myMusics[eu - 1];
    playMP3.play();
  }
}

function nextMusic() {
  const actualSong = playMP3.src.substr(22);
  const eu = myMusics.indexOf(actualSong);

  if (eu >= 2) {
    playMP3.src = myMusics[0];
    playMP3.play();
  } else {
    playMP3.src = myMusics[eu + 1];
    playMP3.play();
  }
}

playButton.addEventListener("click", playMusic);

pauseButton.addEventListener("click", pauseMusic);

volumeUp.addEventListener("click", turnUpVolume);

volumeDown.addEventListener("click", turnDownVolume);

muteButton.addEventListener("click", muteMusic);

onOffButton.addEventListener("click", turnOnOff);

fowardButton.addEventListener("click", nextMusic);

backwardButton.addEventListener("click", previousMusic);
