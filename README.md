# Velora — Music Player

An immersive music player combining native browser audio with an album-focused visual experience, dynamic artwork, fluid interactions, and responsive design.

👉 **[Live Demo](https://velora-music-app.vercel.app/)**

---

## Why Velora Exists

I wanted to explore how far standard web technologies could go when building a polished, native-feeling music experience without relying on frontend frameworks or UI libraries.

The idea was to make the album artwork the center of the experience while keeping playback controls, track navigation, and the queue simple and accessible.

---

## The Engineering Challenge

The main challenge was keeping the audio engine, application state, and visual interface synchronized.

A track change can affect the album carousel, background artwork, playback controls, progress timeline, and queue simultaneously.

Rather than introducing a framework, I built these interactions directly around the **HTML5 Audio API, DOM events, CSS transforms, and Pointer Events**.

---

## Core Experience

### Album Carousel

A 3D-style carousel keeps the active album artwork at the center while surrounding tracks create depth and spatial positioning.

Users can navigate through:

- Previous / next controls
- Mouse dragging
- Touch swiping
- Playing Next selection

### Dynamic Visuals

The active album artwork drives the surrounding background, creating an ambient visual environment that changes with the current track.

### Playback Interface

A floating glassmorphic control capsule provides:

- Play / pause
- Previous / next
- Progress and seeking
- Shuffle
- Repeat
- Volume
- Queue access

### Playing Next

The queue opens as a desktop side drawer and adapts into a mobile overlay. Selecting another track immediately updates playback and closes the drawer.

---

## Features

- 3D album carousel
- Mouse and touch navigation
- HTML5 audio playback
- Play / pause and track navigation
- Shuffle and repeat
- Volume control
- Progress tracking and seeking
- Dynamic artwork-based backgrounds
- Playing Next queue
- Responsive mobile layout
- Adaptive drawer behavior

---

## Built With

- **HTML5** — Semantic structure and native audio
- **CSS3** — Responsive layouts, transforms, perspective, transitions, and glassmorphism
- **Vanilla JavaScript (ES6+)** — State, playback logic, carousel, queue, and interactions
- **HTML5 Audio API** — Audio playback and timeline synchronization
- **Pointer Events API** — Mouse and touch gestures
- **Vercel** — Deployment

## Project Structure

```text
music-player-app/
├── assets/          # Audio tracks and album artwork
├── index.html       # Application structure
├── style.css        # Visual system and responsive layout
├── app.js           # Player state and interaction logic
├── README.md        # Project documentation
└── LICENSE          # MIT License
```

---

## Getting Started

To run this project locally, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/abdul-rahman-0x/music-player-app.git
cd music-player-app
```

Open the project with a local development server such as VS Code Live Server.

---

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Built by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**

