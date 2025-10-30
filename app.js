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
        path: "assets/music_1.mp3",
        displayName: "Midnight Groove",
        cover: "assets/img_1.avif",
        artist: "Neon Drift"
    },
    {
        path: "assets/music_2.mp3",
        displayName: "City Nights",
        cover: "assets/img_2.avif",
        artist: "Echo Avenue"
    },
    {
        path: "assets/music_3.mp3",
        displayName: "Mind Horizon",
        cover: "assets/img_3.avif",
        artist: "Nova Chase"
    },
    {
        path: "assets/music_4.mp3",
        displayName: "Paris Sunrise",
        cover: "assets/img_4.avif",
        artist: "Velvet Ensemble"
    },
    {
        path: "assets/music_5.mp3",
        displayName: "Skyline Dreams",
        cover: "assets/img_5.avif",
        artist: "Silver Motion"
    },
    {
        path: "assets/music_6.mp3",
        displayName: "Groovy Trap",
        cover: "assets/img_6.avif",
        artist: "Huma-Huma"
    },
    {
        path: "assets/music_7.mp3",
        displayName: "Ocean Drive",
        cover: "assets/img_7.avif",
        artist: "Duke Dumont"
    },
    {
        path: "assets/music_8.mp3",
        displayName: "Nightfall",
        cover: "assets/img_8.avif",
        artist: "Neon Vibe"
    },
    {
        path: "assets/music_9.mp3",
        displayName: "Dreamscape",
        cover: "assets/img_9.avif",
        artist: "Aether Sounds"
    },
    {
        path: "assets/music_10.mp3",
        displayName: "SigmaMusicArt",
        cover: "assets/img_10.avif",
        artist: "Mikhail Smusev"
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
