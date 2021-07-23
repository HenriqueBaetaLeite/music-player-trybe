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
  "/assets/mestre_testes_isaac.mp3",
  "/assets/rock.mp3",
  "/assets/patrick_patrikios.mp3",
];

let on = false;
let isMuted = false;
let songNow = myMusics[0];
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
  volumeMP3 -= 0.1;
  playMP3.volume = volumeMP3;
}

function turnUpVolume() {
  volumeMP3 += 0.1;
  playMP3.volume = volumeMP3;
}

function playMusic() {
  if (!on) return;
  playMP3.src = songNow;
  playMP3.play();
  discLogo.style.animationPlayState = "running";
}

function pauseMusic() {
  playMP3.pause();
  discLogo.style.animationPlayState = "paused";
}

function muteMusic() {
  isMuted ? (playMP3.volume = volumeMP3) : (playMP3.volume = 0);

  isMuted = !isMuted;
  if (isMuted) {
    muteSymbol.src = "./assets/microphone-alt-solid.svg";
    muteSymbol.style.width = "12px";
  } else {
    muteSymbol.style.width = "20px";
    muteSymbol.src = "./assets/microphone-alt-slash-solid.svg";
  }
}

function previousMusic() {
  if (!on) return;
  const actualSong = playMP3.src.substr(21);
  const indexOfActualSong = myMusics.indexOf(actualSong);

  if (indexOfActualSong <= 0) {
    songNow = myMusics[2];
    playMP3.src = songNow;
    playMP3.play();
  } else {
    songNow = myMusics[indexOfActualSong - 1];
    playMP3.src = songNow;
    playMP3.play();
  }
}

function nextMusic() {
  if (!on) return;
  const actualSong = playMP3.src.substr(21);
  const indexOfActualSong = myMusics.indexOf(actualSong);

  if (indexOfActualSong >= 2) {
    songNow = myMusics[0];
    playMP3.src = songNow;
    playMP3.play();
  } else {
    songNow = myMusics[indexOfActualSong + 1];
    playMP3.src = songNow;
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
