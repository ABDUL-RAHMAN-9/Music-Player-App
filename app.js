document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Dataset ---
    const songs = [
        {
            id: 0,
            title: "Midnight Groove",
            artist: "Neon Drift",
            album: "Retro Future",
            genre: "Retrowave",
            year: "2024",
            cover: "assets/img_1.avif",
            audio: "assets/music_1.mp3",
            duration: "3:45",
        },
        {
            id: 1,
            title: "City Nights",
            artist: "Echo Avenue",
            album: "Urban Echoes",
            genre: "Lo-fi",
            year: "2023",
            cover: "assets/img_2.avif",
            audio: "assets/music_2.mp3",
            duration: "4:12",
        },
        {
            id: 2,
            title: "Mind Horizon",
            artist: "Nova Chase",
            album: "Cosmos",
            genre: "Ambient",
            year: "2024",
            cover: "assets/img_3.avif",
            audio: "assets/music_3.mp3",
            duration: "2:58",
        },
        {
            id: 3,
            title: "Paris Sunrise",
            artist: "Velvet Ensemble",
            album: "Traveler",
            genre: "Jazz",
            year: "2022",
            cover: "assets/img_4.avif",
            audio: "assets/music_4.mp3",
            duration: "3:15",
        },
        {
            id: 4,
            title: "Skyline Dreams",
            artist: "Silver Motion",
            album: "Altitude",
            genre: "Chillout",
            year: "2024",
            cover: "assets/img_5.avif",
            audio: "assets/music_5.mp3",
            duration: "4:32",
        },
        {
            id: 5,
            title: "Groovy Trap",
            artist: "Huma-Huma",
            album: "Trap Essentials",
            genre: "Hip-Hop",
            year: "2021",
            cover: "assets/img_6.avif",
            audio: "assets/music_6.mp3",
            duration: "3:10",
        },
        {
            id: 6,
            title: "Ocean Drive",
            artist: "Duke Dumont",
            album: "Duality",
            genre: "Deep House",
            year: "2015",
            cover: "assets/img_7.avif",
            audio: "assets/music_7.mp3",
            duration: "3:26",
        },
        {
            id: 7,
            title: "Nightfall",
            artist: "Neon Vibe",
            album: "After Hours",
            genre: "Synthwave",
            year: "2023",
            cover: "assets/img_8.avif",
            audio: "assets/music_8.mp3",
            duration: "3:50",
        },
        {
            id: 8,
            title: "Dreamscape",
            artist: "Aether Sounds",
            album: "Atmosphere",
            genre: "Chillstep",
            year: "2024",
            cover: "assets/img_9.avif",
            audio: "assets/music_9.mp3",
            duration: "4:05",
        },
        {
            id: 9,
            title: "SigmaMusicArt",
            artist: "Mikhail Smusev",
            album: "Cinematic Collection",
            genre: "Cinematic",
            year: "2022",
            cover: "assets/img_10.avif",
            audio: "assets/music_10.mp3",
            duration: "2:45",
        },
    ];

    // --- 2. State Management ---
    let currentIndex = 0;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;
    let isSeeking = false;
    let filteredSongs = [...songs];

    // --- 3. DOM Elements ---
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("play");
    const playIcon = document.getElementById("play-icon");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const shuffleBtn = document.getElementById("shuffle");
    const repeatBtn = document.getElementById("repeat");

    const cover = document.getElementById("cover");
    const dynamicBg = document.getElementById("dynamic-bg");
    const titleEl = document.getElementById("music-title");
    const artistEl = document.getElementById("music-artist");
    const albumEl = document.getElementById("music-album");
    const genreEl = document.getElementById("music-genre");
    const yearEl = document.getElementById("music-year");

    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");
    const progressContainer = document.getElementById("player-progress");
    const progressFill = document.getElementById("progress");

    const volumeSlider = document.getElementById("volume-slider");
    const muteBtn = document.getElementById("mute-btn");
    let previousVolume = parseFloat(volumeSlider.value);

    const searchInput = document.getElementById("search-input");
    const playlist = document.getElementById("playlist");
    const queueCount = document.getElementById("queue-count");
    const statusText = document.getElementById("status-text");

    // --- 4. Initialization & Setup ---
    function init() {
        audio.volume = parseFloat(volumeSlider.value);
        updateVolumeFill();
        loadTrack(currentIndex, false);
        renderPlaylist(filteredSongs);
        setupEventListeners();
    }

    // --- 5. Track Management & UI Synchronization ---
    function loadTrack(index, autoPlay = true) {
        if (index < 0 || index >= songs.length) return;

        currentIndex = index;
        const song = songs[currentIndex];

        // Metadata Updates
        titleEl.textContent = song.title;
        artistEl.textContent = song.artist;
        if (albumEl) albumEl.textContent = song.album;
        if (genreEl) genreEl.textContent = song.genre;
        if (yearEl) yearEl.textContent = song.year;

        // Artwork & Dynamic Background Fade Effect
        cover.style.opacity = "0.4";
        cover.style.transform = "scale(0.96)";

        setTimeout(() => {
            cover.src = song.cover;
            if (dynamicBg) {
                dynamicBg.style.backgroundImage = `url(${song.cover})`;
            }
            cover.style.opacity = "1";
            cover.style.transform = "scale(1)";
        }, 150);

        // Audio Source Update
        audio.src = song.audio;
        progressFill.style.width = "0%";
        currentTimeEl.textContent = "0:00";

        setStatus("Ready");

        if (autoPlay) {
            playTrack();
        } else {
            pauseTrack();
        }

        renderPlaylist(filteredSongs);
        scrollPlaylistToActive();
    }

    function playTrack() {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isPlaying = true;
                    playIcon.className = "fa-solid fa-pause";
                    playBtn.classList.add("playing");
                    playBtn.title = "Pause";
                    setStatus("Playing");
                    updateActivePlaylistState();
                })
                .catch((err) => {
                    console.warn("Playback error or interrupted:", err);
                    isPlaying = false;
                    setStatus("Ready");
                });
        }
    }

    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        playIcon.className = "fa-solid fa-play";
        playBtn.classList.remove("playing");
        playBtn.title = "Play";
        setStatus("Paused");
        updateActivePlaylistState();
    }

    function togglePlay() {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    }

    function nextTrack() {
        if (isShuffle) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * songs.length);
            } while (randomIndex === currentIndex && songs.length > 1);
            loadTrack(randomIndex, true);
        } else {
            const nextIndex = (currentIndex + 1) % songs.length;
            loadTrack(nextIndex, true);
        }
    }

    function prevTrack() {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            return;
        }
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        loadTrack(prevIndex, true);
    }

    function setStatus(text) {
        if (statusText) statusText.textContent = text;
    }

    // --- 6. Playlist & Search Engine ---
    function renderPlaylist(list) {
        playlist.innerHTML = "";

        if (queueCount) {
            queueCount.textContent = `${list.length} ${list.length === 1 ? "Song" : "Songs"}`;
        }

        if (list.length === 0) {
            playlist.innerHTML = `
                <div style="text-align:center; padding: 24px 0; color: var(--text-muted); font-size: 13px;">
                    No tracks match your search
                </div>
            `;
            return;
        }

        list.forEach((s) => {
            const isActive = songs[currentIndex].id === s.id;
            const row = document.createElement("div");
            row.className = `song-row ${isActive ? "active" : ""}`;
            row.setAttribute("data-id", s.id);

            row.innerHTML = `
                <img src="${s.cover}" alt="${s.title}" class="song-thumb" />
                <div class="song-info">
                    <h4>${escapeHtml(s.title)}</h4>
                    <p>${escapeHtml(s.artist)}</p>
                </div>
                ${
                    isActive && isPlaying
                        ? `<div class="playing-bars">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                           </div>`
                        : `<span class="song-duration">${s.duration}</span>`
                }
            `;

            row.addEventListener("click", () => {
                const targetIndex = songs.findIndex((item) => item.id === s.id);
                if (targetIndex !== -1) {
                    if (targetIndex === currentIndex && isPlaying) {
                        pauseTrack();
                    } else if (targetIndex === currentIndex && !isPlaying) {
                        playTrack();
                    } else {
                        loadTrack(targetIndex, true);
                    }
                }
            });

            playlist.appendChild(row);
        });
    }

    function updateActivePlaylistState() {
        renderPlaylist(filteredSongs);
    }

    function scrollPlaylistToActive() {
        setTimeout(() => {
            const activeRow = playlist.querySelector(".song-row.active");
            if (activeRow) {
                activeRow.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }, 100);
    }

    function handleSearch(query) {
        const cleanQuery = query.toLowerCase().trim();
        filteredSongs = songs.filter(
            (s) =>
                s.title.toLowerCase().includes(cleanQuery) ||
                s.artist.toLowerCase().includes(cleanQuery) ||
                s.album.toLowerCase().includes(cleanQuery),
        );
        renderPlaylist(filteredSongs);
    }

    // --- 7. Dynamic Volume Fill & Audio Events ---
    function updateVolumeFill() {
        const val = parseFloat(volumeSlider.value);
        audio.volume = val;
        audio.muted = val === 0;

        // Dynamic linear gradient fill for volume slider
        const pct = val * 100;
        volumeSlider.style.background = `linear-gradient(to right, var(--accent) ${pct}%, rgba(255, 255, 255, 0.15) ${pct}%)`;

        if (val === 0) {
            muteBtn.className = "fa-solid fa-volume-xmark";
        } else if (val < 0.5) {
            muteBtn.className = "fa-solid fa-volume-low";
        } else {
            muteBtn.className = "fa-solid fa-volume-high";
        }
    }

    function toggleMute() {
        if (audio.muted || audio.volume === 0) {
            volumeSlider.value = previousVolume;
        } else {
            previousVolume = audio.volume;
            volumeSlider.value = 0;
        }

        updateVolumeFill();
    }

    function updateProgress() {
        if (isSeeking) return;

        const { duration, currentTime } = audio;
        if (isNaN(duration) || duration === 0) return;

        const percent = (currentTime / duration) * 100;
        progressFill.style.width = `${percent}%`;
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }

    function seekProgress(e) {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = clickX / rect.width;
        progressFill.style.width = `${percent * 100}%`;

        if (!isNaN(audio.duration)) {
            audio.currentTime = percent * audio.duration;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    }

    // --- 8. Event Listener Registrations ---
    function setupEventListeners() {
        // Playback Controls
        playBtn.addEventListener("click", togglePlay);
        nextBtn.addEventListener("click", nextTrack);
        prevBtn.addEventListener("click", prevTrack);

        // Shuffle & Repeat
        shuffleBtn.addEventListener("click", () => {
            isShuffle = !isShuffle;
            shuffleBtn.classList.toggle("active", isShuffle);
            shuffleBtn.title = isShuffle ? "Shuffle On" : "Shuffle Off";
        });

        repeatBtn.addEventListener("click", () => {
            isRepeat = !isRepeat;
            repeatBtn.classList.toggle("active", isRepeat);
            repeatBtn.title = isRepeat ? "Repeat Single On" : "Repeat Off";
        });

        // Audio Events
        audio.addEventListener("timeupdate", updateProgress);

        audio.addEventListener("ended", () => {
            if (isRepeat) {
                audio.currentTime = 0;
                playTrack();
            } else {
                nextTrack();
            }
        });

        audio.addEventListener("error", (e) => {
            console.error("Audio Load Error:", e);
            setStatus("Playback Error");
        });

        // Dragging & Seeking
        progressContainer.addEventListener("mousedown", (e) => {
            isSeeking = true;
            seekProgress(e);

            const onMouseMove = (moveEvent) => seekProgress(moveEvent);
            const onMouseUp = () => {
                isSeeking = false;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });

        // Volume Events
        volumeSlider.addEventListener("input", () => {
            updateVolumeFill();

            if (audio.volume > 0) {
                previousVolume = audio.volume;
            }
        });
        muteBtn.addEventListener("click", toggleMute);

        // Instant Search
        searchInput.addEventListener("input", (e) => {
            handleSearch(e.target.value);
        });

        // Key Shortcuts
        window.addEventListener("keydown", (e) => {
            if (document.activeElement === searchInput) return;

            if (e.code === "Space") {
                e.preventDefault();
                togglePlay();
            } else if (e.code === "ArrowRight") {
                e.preventDefault();
                nextTrack();
            } else if (e.code === "ArrowLeft") {
                e.preventDefault();
                prevTrack();
            }
        });
    }

    // --- 9. Helpers ---
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Launch App
    init();
});
