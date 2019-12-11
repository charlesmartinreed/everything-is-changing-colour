const audio = document.querySelector("audio");
audio.controls = true;

let songDuration;

const playerToggle = document.querySelector(".play-toggle");

let songNameEl = document.querySelector(".song-name");
let artistNameEl = document.querySelector(".artist-name");
let albumNameEl = document.querySelector(".album-name");

window.addEventListener("DOMContentLoaded", () => {
  songNameEl.textContent = audio.dataset.songName;
  artistNameEl.textContent = audio.dataset.artistName;
  albumNameEl.textContent = audio.dataset.albumName;
});

audio.addEventListener("playing", () => {
  songDuration = audio.duration.toFixed(0);
  console.log(songDuration);
  console.log(audio.currentTime.toFixed(0));
});
