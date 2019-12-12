const audio = document.querySelector("audio");
audio.controls = true;

const tracks = [
  {
    trackNumber: 1,
    trackTitle: "Dueling Auroras",
    trackArtist: "Lone",
    albumTitle: "Everything Is Changing Colour",
    src: "./assets/track_1.mp3"
  },
  {
    trackNumber: 2,
    trackTitle: "Proper Vivid",
    trackArtist: "Lone",
    albumTitle: "Everything Is Changing Colour",
    src: "./assets/track_2.mp3"
  }
];

let currentTrackID = 1;
// let currentTrack = tracks[currentTrackID];

let songDuration;
const playerToggle = document.querySelector(".play-toggle");

let songNameEl = document.querySelector(".song-name");
let artistNameEl = document.querySelector(".artist-name");
let albumNameEl = document.querySelector(".album-name");

let songList = document.querySelectorAll(".track-item");

window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentTrackID);

  songList.forEach(song => {
    if (song.dataset.trackNumber === String(currentTrackID)) {
      song.classList.add("playing");
    }
  });
});

loadTrack = tracknum => {
  let track = tracks[tracknum - 1];

  songNameEl.textContent = track.trackTitle;
  artistNameEl.textContent = track.trackArtist;
  albumNameEl.textContent = track.albumTitle;

  audio.src = track.src;
  audio.play();
};

songList.forEach(song => {
  song.addEventListener("click", () => {
    songList.forEach(song => song.classList.remove("playing"));

    song.classList.add("playing");

    currentTrackID = song.dataset.trackNumber;
    loadTrack(currentTrackID);
  });
});

audio.addEventListener("playing", () => {
  songDuration = audio.duration.toFixed(0);
  console.log(songDuration);
  console.log(audio.currentTime.toFixed(0));
});
