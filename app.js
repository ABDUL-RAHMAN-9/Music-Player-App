const image = document.getElementById("cover"),
    title = document.getElementById("music-title"),
    artist = document.getElementById("music-artist"),
    currentTimeEl = document.getElementById("current-time"),
    durationEl = document.getElementById("duration"),
    progress = document.getElementById("progress"),
    playerProgress = document.getElementById("player-progress"),
    prevBtn = document.getElementById("prev"),
    playBtn = document.getElementById("play"),
    nextBtn = document.getElementById("next"),
    background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
    {
        path: "assets/1.mp3",
        displayName: "The Charmer's Call",
        cover: "assets/1.jpg",
        artist: "Hanu Dixit"
    },

    {
        path: "assets/2.mp3",
        displayName: "You Will Never See Me Coming",
        cover: "assets/2.jpg",
        artist: "NEFFEX"
    },

    {
        path: "assets/3.mp3",
        displayName: "Intellect",
        cover: "assets/3.jpg",
        artist: "Yung Logos"
    },

    {
        path: "assets/4.mp3",
        displayName: "Jazz In Paris",
        cover: "assets/4.jpg",
        artist: "Media Right Productions"
    },
    {
        path: "assets/5.mp3",
        displayName: "Blue Skies",
        cover: "assets/5.jpg",
        artist: "Silent Partner"
    },
    {
        path: "assets/6.mp3",
        displayName: "Crimson Fly",
        cover: "assets/6.jpg",
        artist: "Huma-Huma"
    }
];

let musicIndex = 0;
let isPlaying = false;

let togglePlay = () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
};

let playMusic = () => {
    isPlaying = true;
    // changing play button icon
    playBtn.classList.replace("fa-play", "fa-pause");
    // set btn hover title
    playBtn.setAttribute("title", "Pause");
    music.play();
};

let pauseMusic = () => {
    isPlaying = false;
    // changing pause button icon
    playBtn.classList.replace("fa-pause", "fa-play");
    // set btn hover title
    playBtn.setAttribute("title", "Play");
    music.pause();
};

let loadMusic = song => {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
};

let changeMusic = direction => {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
};

let updateProgressBar = () => {
    const { duration, currentTime } = music;
    const progressPercent = currentTime / duration * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = time => String(Math.floor(time)).padStart(2, "0");
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
        duration % 60
    )}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}: ${formatTime(
        currentTime % 60
    )}`;
};

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const ClickX = e.offsetX;
    music.currentTime = ClickX / width * music.duration;
}

playBtn.addEventListener("click", togglePlay);

prevBtn.addEventListener("click", () => {
    changeMusic(-1);
});

nextBtn.addEventListener("click", () => {
    changeMusic(1);
});

music.addEventListener("ended", () => {
    changeMusic(1);
});

music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);
