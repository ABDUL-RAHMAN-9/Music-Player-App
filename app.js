document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Dataset ---
    const songs = [
        {
            id: 0,
            title: "Golden Hour",
            artist: "Summer Love",
            album: "Horizon Line",
            genre: "Acoustic Pop",
            year: "2025",
            cover: "assets/images/img_11.jpg",
            audio: "assets/audio/music-11.mp3",
            duration: "2:29",
        },
        {
            id: 1,
            title: "Vapor Waves",
            artist: "Crystal Coast",
            album: "Pacific Chill",
            genre: "Vaporwave",
            year: "2024",
            cover: "assets/images/img_12.jpg",
            audio: "assets/audio/music-12.mp3",
            duration: "2:27",
        },
        {
            id: 2,
            title: "Urban Jungle",
            artist: "Metro Sound",
            album: "Street Beats",
            genre: "Lo-Fi Beats",
            year: "2023",
            cover: "assets/images/img_13.jpg",
            audio: "assets/audio/music-13.mp3",
            duration: "2:28",
        },
        {
            id: 3,
            title: "Desert Mirage",
            artist: "Sand Storm",
            album: "Dune Walker",
            genre: "Ethno Chill",
            year: "2024",
            cover: "assets/images/img_14.jpg",
            audio: "assets/audio/music-14.mp3",
            duration: "2:28",
        },
        {
            id: 4,
            title: "Neon Highway",
            artist: "Speed Limit",
            album: "Fast Track",
            genre: "Outrun Synth",
            year: "2025",
            cover: "assets/images/img_15.jpg",
            audio: "assets/audio/music-15.mp3",
            duration: "3:00",
        },
        {
            id: 5,
            title: "Velvet Sunset",
            artist: "Deep Purple",
            album: "Evening Calm",
            genre: "Jazz Fusion",
            year: "2024",
            cover: "assets/images/img_16.jpg",
            audio: "assets/audio/music-16.mp3",
            duration: "1:22",
        },
        {
            id: 6,
            title: "Solar Flare",
            artist: "Cosmic Ray",
            album: "Super Nova",
            genre: "Space Ambient",
            year: "2025",
            cover: "assets/images/img_17.jpg",
            audio: "assets/audio/music-17.mp3",
            duration: "2:09",
        },
        {
            id: 7,
            title: "Digital Rain",
            artist: "Code Blue",
            album: "Virtual Storm",
            genre: "Cyberpunk Glitch",
            year: "2026",
            cover: "assets/images/img_18.jpg",
            audio: "assets/audio/music-18.mp3",
            duration: "1:39",
        },
        {
            id: 8,
            title: "Echo Chamber",
            artist: "Lost Voice",
            album: "Reflected Sound",
            genre: "Indie Pop",
            year: "2024",
            cover: "assets/images/img_19.jpg",
            audio: "assets/audio/music-19.mp3",
            duration: "2:25",
        },
        {
            id: 9,
            title: "Stardust Glitch",
            artist: "Space Cadet",
            album: "Cosmic Dust",
            genre: "Future Bass",
            year: "2026",
            cover: "assets/images/img_20.jpg",
            audio: "assets/audio/music-20.mp3",
            duration: "2:37",
        },
        {
            id: 10,
            title: "Midnight Groove",
            artist: "Neon Drift",
            album: "Retro Future",
            genre: "Retrowave",
            year: "2024",
            cover: "assets/images/img_1.jpg",
            audio: "assets/audio/music_1.mp3",
            duration: "1:56",
        },
        {
            id: 11,
            title: "City Nights",
            artist: "Echo Avenue",
            album: "Urban Echoes",
            genre: "Lo-fi",
            year: "2023",
            cover: "assets/images/img_2.avif",
            audio: "assets/audio/music_2.mp3",
            duration: "1:46",
        },
        {
            id: 12,
            title: "Mind Horizon",
            artist: "Nova Chase",
            album: "Cosmos",
            genre: "Ambient",
            year: "2024",
            cover: "assets/images/img_3.avif",
            audio: "assets/audio/music_3.mp3",
            duration: "2:13",
        },
        {
            id: 13,
            title: "Paris Sunrise",
            artist: "Velvet Ensemble",
            album: "Traveler",
            genre: "Jazz",
            year: "2022",
            cover: "assets/images/img_4.avif",
            audio: "assets/audio/music_4.mp3",
            duration: "1:37",
        },
        {
            id: 14,
            title: "Skyline Dreams",
            artist: "Silver Motion",
            album: "Altitude",
            genre: "Chillout",
            year: "2024",
            cover: "assets/images/img_5.avif",
            audio: "assets/audio/music_5.mp3",
            duration: "2:11",
        },
        {
            id: 15,
            title: "Groovy Trap",
            artist: "Huma Huma",
            album: "Trap Essentials",
            genre: "Hip-Hop",
            year: "2021",
            cover: "assets/images/img_6.avif",
            audio: "assets/audio/music_6.mp3",
            duration: "1:58",
        },
        {
            id: 16,
            title: "Ocean Drive",
            artist: "Duke Dumont",
            album: "Duality",
            genre: "Deep House",
            year: "2015",
            cover: "assets/images/img_7.avif",
            audio: "assets/audio/music_7.mp3",
            duration: "1:05",
        },
        {
            id: 17,
            title: "Night Fall",
            artist: "Neon Vibe",
            album: "After Hours",
            genre: "Synthwave",
            year: "2023",
            cover: "assets/images/img_8.avif",
            audio: "assets/audio/music_8.mp3",
            duration: "3:11",
        },
        {
            id: 18,
            title: "Dream Scape",
            artist: "Aether Sounds",
            album: "Atmosphere",
            genre: "Chillstep",
            year: "2024",
            cover: "assets/images/img_9.avif",
            audio: "assets/audio/music_9.mp3",
            duration: "3:00",
        },
        {
            id: 19,
            title: "Sigma Art",
            artist: "Mikhail Smusev",
            album: "Cinematic Collection",
            genre: "Cinematic",
            year: "2022",
            cover: "assets/images/img_10.jpg",
            audio: "assets/audio/music_10.mp3",
            duration: "1:47",
        },
    ];

    // --- 2. State Management ---
    let currentIndex = 0;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;
    let isSeeking = false;
    let filteredSongs = [...songs];
    let currentBgIndex = 1;

    // --- 3. DOM Elements ---
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("play");
    const playIcon = document.getElementById("play-icon");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const shuffleBtn = document.getElementById("shuffle");
    const repeatBtn = document.getElementById("repeat");

    const trackTrack = document.getElementById("carousel-track");
    const miniCover = document.getElementById("mini-cover");
    const miniTitle = document.getElementById("mini-title");
    const miniArtist = document.getElementById("mini-artist");

    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");
    const progressContainer = document.getElementById("progress-container");
    const progressFill = document.getElementById("progress");

    const volumeSlider = document.getElementById("volume-slider");
    const muteBtn = document.getElementById("mute-btn");
    const muteIcon = document.getElementById("mute-icon");
    let previousVolume = parseFloat(volumeSlider.value);

    const playlist = document.getElementById("playlist");
    const queueCount = document.getElementById("queue-count");

    // Drawers Elements
    const queueBtn = document.getElementById("queue-btn");
    const queueDrawer = document.getElementById("queue-drawer");
    const closeDrawerBtn = document.getElementById("close-drawer");
    const drawerBackdrop = document.getElementById("drawer-backdrop");

    // --- 4. Initialization ---
    function init() {
        audio.volume = parseFloat(volumeSlider.value);
        updateVolumeFill();
        renderCarousel();
        loadTrack(currentIndex, false);
        renderPlaylist(filteredSongs);
        setupEventListeners();
        setupDragAndSwipe();
    }

    // --- 5. Dynamic 3D Carousel Generator ---
    function renderCarousel() {
        trackTrack.innerHTML = "";
        songs.forEach((song, idx) => {
            const card = document.createElement("div");
            card.className = "carousel-card";
            card.setAttribute("data-id", song.id);
            card.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" />
                <div class="card-meta">
                    <div class="card-title">${song.title}</div>
                    <div class="card-artist">${song.artist}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                if (idx !== currentIndex) {
                    loadTrack(idx, true);
                } else {
                    togglePlay();
                }
            });

            trackTrack.appendChild(card);
        });
    }

    function updateCarouselPositions() {
        const cards = document.querySelectorAll(".carousel-card");
        const N = songs.length;

        cards.forEach((card, idx) => {
            card.className = "carousel-card";

            let offset = idx - currentIndex;
            if (offset < -N / 2) offset += N;
            if (offset > N / 2) offset -= N;

            if (offset === 0) {
                card.classList.add("pos-active", "active-card");
            } else if (offset === 1) {
                card.classList.add("pos-next");
            } else if (offset === -1) {
                card.classList.add("pos-prev");
            } else if (offset === 2) {
                card.classList.add("pos-far-next");
            } else if (offset === -2) {
                card.classList.add("pos-far-prev");
            } else {
                card.classList.add("pos-hidden");
            }
        });
    }

    // --- 6. Hardware-Accelerated Swipe/Drag Engine ---
    function setupDragAndSwipe() {
        let isDragging = false;
        let startX = 0;
        let currentX = 0;
        const dragThreshold = 55; // pixels to swap track

        trackTrack.addEventListener("pointerdown", (e) => {
            if (e.button !== 0 && e.pointerType === "mouse") return;
            isDragging = true;
            startX = e.clientX;
            currentX = e.clientX;
            trackTrack.setPointerCapture(e.pointerId);
            document.body.classList.add("dragging");
        });

        trackTrack.addEventListener("pointermove", (e) => {
            if (!isDragging) return;
            currentX = e.clientX;

            // hardware-accelerated linear translation tracking
            const deltaX = currentX - startX;
            trackTrack.style.transform = `translateX(${deltaX * 0.4}px)`;
            trackTrack.style.transition = "none";
        });

        trackTrack.addEventListener("pointerup", (e) => {
            if (!isDragging) return;
            isDragging = false;
            trackTrack.releasePointerCapture(e.pointerId);
            document.body.classList.remove("dragging");

            trackTrack.style.transform = "";
            trackTrack.style.transition = "transform 0.45s var(--ease-out)";

            const deltaX = currentX - startX;
            if (Math.abs(deltaX) > dragThreshold) {
                if (deltaX > 0) {
                    prevTrack();
                } else {
                    nextTrack();
                }
            }
        });

        trackTrack.addEventListener("pointercancel", () => {
            if (!isDragging) return;
            isDragging = false;
            document.body.classList.remove("dragging");
            trackTrack.style.transform = "";
            trackTrack.style.transition = "transform 0.45s var(--ease-out)";
        });
    }

    // --- 7. Fading Color Atmospheric Backdrops ---
    function updateDynamicBackground(coverUrl) {
        const bg1 = document.getElementById("bg-fade-1");
        const bg2 = document.getElementById("bg-fade-2");
        if (!bg1 || !bg2) return;

        if (currentBgIndex === 1) {
            bg2.style.backgroundImage = `url(${coverUrl})`;
            bg2.classList.add("active");
            bg1.classList.remove("active");
            currentBgIndex = 2;
        } else {
            bg1.style.backgroundImage = `url(${coverUrl})`;
            bg1.classList.add("active");
            bg2.classList.remove("active");
            currentBgIndex = 1;
        }
    }

    // --- 8. Track Controls & Immediate States (Optimistic UI) ---
    function loadTrack(index, autoPlay = true) {
        if (index < 0 || index >= songs.length) return;

        currentIndex = index;
        const song = songs[currentIndex];

        // Sync Metadata Display immediately
        if (miniTitle) miniTitle.textContent = song.title;
        if (miniArtist) miniArtist.textContent = song.artist;
        if (miniCover) miniCover.src = song.cover;

        updateDynamicBackground(song.cover);

        // Reset Source & Timelines
        audio.src = song.audio;
        progressFill.style.width = "0%";
        currentTimeEl.textContent = "0:00";

        if (autoPlay) {
            playTrack();
        } else {
            pauseTrack();
        }

        updateCarouselPositions();
        updateActivePlaylistState();
        scrollPlaylistToActive();
    }

    function playTrack() {
        // Optimistic State rendering to avoid engine delays
        isPlaying = true;
        playIcon.className = "fa-solid fa-pause";
        playBtn.classList.add("playing");
        playBtn.title = "Pause";
        updateActivePlaylistState();

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Handled optimistically
                })
                .catch((err) => {
                    console.warn("Playback interrupted:", err);
                    // Rollback if play is blocked or fails
                    isPlaying = false;
                    playIcon.className = "fa-solid fa-play";
                    playBtn.classList.remove("playing");
                    playBtn.title = "Play";
                    updateActivePlaylistState();
                });
        }
    }

    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        playIcon.className = "fa-solid fa-play";
        playBtn.classList.remove("playing");
        playBtn.title = "Play";
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

    // --- 9. Playlist Queue Display Engine ---
    function renderPlaylist(list) {
        playlist.innerHTML = "";

        if (queueCount) {
            queueCount.textContent = `${list.length} ${list.length === 1 ? "Song" : "Songs"}`;
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
                <span class="song-duration">${s.duration}</span>
            `;

            row.addEventListener("click", () => {
                const targetIndex = songs.findIndex((item) => item.id === s.id);
                if (targetIndex !== -1) {
                    if (targetIndex === currentIndex) {
                        togglePlay();
                    } else {
                        loadTrack(targetIndex, true);
                    }
                    closeDrawer(); // Automatically close drawer upon song selection
                }
            });

            playlist.appendChild(row);
        });
    }

    function updateActivePlaylistState() {
        const rows = playlist.querySelectorAll(".song-row");
        rows.forEach((row) => {
            const rowId = parseInt(row.getAttribute("data-id"));
            if (rowId === songs[currentIndex].id) {
                row.classList.add("active");
            } else {
                row.classList.remove("active");
            }
        });
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
        }, 120);
    }

    // --- 10. Volume Engine ---
    function updateVolumeFill() {
        const val = parseFloat(volumeSlider.value);
        audio.volume = val;
        audio.muted = val === 0;

        const pct = val * 100;
        volumeSlider.style.background = `linear-gradient(to right, var(--accent-blue) ${pct}%, rgba(255, 255, 255, 0.2) ${pct}%)`;

        if (val === 0) {
            muteIcon.className = "fa-solid fa-volume-xmark";
        } else if (val < 0.5) {
            muteIcon.className = "fa-solid fa-volume-low";
        } else {
            muteIcon.className = "fa-solid fa-volume-high";
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

    // --- 11. Timeline Tracking & Seeking Events ---
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

        if (!isNaN(audio.duration) && audio.duration > 0) {
            audio.currentTime = percent * audio.duration;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    }

    // --- 12. Shared Drawer Helpers ---
    function closeDrawer() {
        queueDrawer.classList.remove("open");
        document.body.classList.remove("drawer-open");
        if (drawerBackdrop) drawerBackdrop.classList.remove("active");
    }

    function openDrawer() {
        queueDrawer.classList.add("open");
        document.body.classList.add("drawer-open");
        if (drawerBackdrop) drawerBackdrop.classList.add("active");
    }

    // --- 13. Setup Handlers ---
    function setupEventListeners() {
        // Playback Buttons
        playBtn.addEventListener("click", togglePlay);
        nextBtn.addEventListener("click", nextTrack);
        prevBtn.addEventListener("click", prevTrack);

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

        // Toggle Drawer Sheets with backdrop logic
        queueBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = queueDrawer.classList.contains("open");
            if (isOpen) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });

        closeDrawerBtn.addEventListener("click", closeDrawer);
        drawerBackdrop.addEventListener("click", closeDrawer);

        // Hide Side Drawer on Backdrop Click
        document.addEventListener("click", (e) => {
            if (!queueDrawer.contains(e.target) && e.target !== queueBtn) {
                closeDrawer();
            }
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

        // Dragging & Seeking Events (Pointer unified)
        progressContainer.addEventListener("pointerdown", (e) => {
            isSeeking = true;
            seekProgress(e);
            progressContainer.setPointerCapture(e.pointerId);

            const onPointerMove = (moveEvent) => {
                if (isSeeking) seekProgress(moveEvent);
            };
            const onPointerUp = () => {
                isSeeking = false;
                progressContainer.releasePointerCapture(e.pointerId);
                progressContainer.removeEventListener(
                    "pointermove",
                    onPointerMove,
                );
                progressContainer.removeEventListener("pointerup", onPointerUp);
            };

            progressContainer.addEventListener("pointermove", onPointerMove);
            progressContainer.addEventListener("pointerup", onPointerUp);
        });

        // Volume Interaction Slides
        volumeSlider.addEventListener("input", () => {
            updateVolumeFill();
            if (audio.volume > 0) {
                previousVolume = audio.volume;
            }
        });
        muteBtn.addEventListener("click", toggleMute);

        // Key shortcuts
        window.addEventListener("keydown", (e) => {
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

    // --- 14. Helpers ---
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

    init();
});
