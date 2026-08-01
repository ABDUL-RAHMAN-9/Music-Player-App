const songs = [
    {
        id: 0,
        title: "Midnight Groove",
        artist: "Neon Drift",
        album: "Retro Future",
        cover: "assets/img_1.avif",
        audio: "assets/music_1.mp3",
    },
    {
        id: 1,
        title: "City Nights",
        artist: "Echo Avenue",
        album: "Urban Echoes",
        cover: "assets/img_2.avif",
        audio: "assets/music_2.mp3",
    },
    {
        id: 2,
        title: "Mind Horizon",
        artist: "Nova Chase",
        album: "Cosmos",
        cover: "assets/img_3.avif",
        audio: "assets/music_3.mp3",
    },
    {
        id: 3,
        title: "Paris Sunrise",
        artist: "Velvet Ensemble",
        album: "Traveler",
        cover: "assets/img_4.avif",
        audio: "assets/music_4.mp3",
    },
    {
        id: 4,
        title: "Skyline Dreams",
        artist: "Silver Motion",
        album: "Altitude",
        cover: "assets/img_5.avif",
        audio: "assets/music_5.mp3",
    },
    {
        id: 5,
        title: "Groovy Trap",
        artist: "Huma-Huma",
        album: "Trap Essentials",
        cover: "assets/img_6.avif",
        audio: "assets/music_6.mp3",
    },
    {
        id: 6,
        title: "Ocean Drive",
        artist: "Duke Dumont",
        album: "Duality",
        cover: "assets/img_7.avif",
        audio: "assets/music_7.mp3",
    },
    {
        id: 7,
        title: "Nightfall",
        artist: "Neon Vibe",
        album: "After Hours",
        cover: "assets/img_8.avif",
        audio: "assets/music_8.mp3",
    },
    {
        id: 8,
        title: "Dreamscape",
        artist: "Aether Sounds",
        album: "Atmosphere",
        cover: "assets/img_9.avif",
        audio: "assets/music_9.mp3",
    },
    {
        id: 9,
        title: "SigmaMusicArt",
        artist: "Mikhail Smusev",
        album: "Cinematic Collection",
        cover: "assets/img_10.avif",
        audio: "assets/music_10.mp3",
    },
];

// --- State Management ---
let songIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// --- DOM Elements ---
const audio = document.getElementById("audio-player");
const cover = document.getElementById("cover");
const bgImg = document.getElementById("bg-img");
const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("player-progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const playBtn = document.getElementById("play");
const playIcon = document.getElementById("play-icon");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const volumeSlider = document.getElementById("volume-slider");
const playlistContainer = document.getElementById("playlist");

// --- 4. Audio Controller ---

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.audio;
    cover.src = song.cover;
    bgImg.src = song.cover; // Dynamic blurred background

    updatePlaylistUI();
}

function playSong() {
    isPlaying = true;
    playIcon.classList.replace("fa-play", "fa-pause");
    audio.play();
}

function pauseSong() {
    isPlaying = false;
    playIcon.classList.replace("fa-pause", "fa-play");
    audio.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    if (isShuffle) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === songIndex);
        songIndex = newIndex;
    } else {
        songIndex++;
        if (songIndex > songs.length - 1) songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return; // Prevent errors before load

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Format Time
    const formatTime = (time) =>
        Math.floor(time / 60) +
        ":" +
        String(Math.floor(time % 60)).padStart(2, "0");
    durationEl.innerText = formatTime(duration);
    currentTimeEl.innerText = formatTime(currentTime);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function updatePlaylistUI() {
    playlistContainer.innerHTML = "";
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.classList.add("playlist-item");
        if (index === songIndex) li.classList.add("active");

        li.innerHTML = `
            <img src="${song.cover}" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover;">
            <div style="flex: 1;">
                <p style="font-size: 13px; font-weight: 600;">${song.title}</p>
                <p style="font-size: 11px; color: #86868b;">${song.artist}</p>
            </div>
            <i class="fa-solid ${index === songIndex && isPlaying ? "fa-volume-high" : "fa-play"}" style="font-size: 10px; opacity: 0.5;"></i>
        `;

        li.addEventListener("click", () => {
            songIndex = index;
            loadSong(songs[songIndex]);
            playSong();
        });
        playlistContainer.appendChild(li);
    });
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Progress bar click
progressContainer.addEventListener("click", setProgress);

// Audio events
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", () => (isRepeat ? playSong() : nextSong()));

// Volume
volumeSlider.addEventListener("input", (e) => (audio.volume = e.target.value));

// Shuffle & Repeat Toggles
shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
});

// --- Initialization ---
loadSong(songs[songIndex]);
