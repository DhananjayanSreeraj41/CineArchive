# MyBox — Film Tracking & Review Platform (Frontend)

MyBox is a high-fidelity, premium frontend web application inspired by the Letterboxd design aesthetic. It serves as a personal cinema journal where users can discover films, write reviews, manage a watchlist, track watched history in a diary, and create custom movie lists. 

This project was built from scratch as a pure front-end web application, utilizing **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

---

## 🚀 Live Demo & How to Run

Since the application is built entirely as a client-side Single-Page Application (SPA), it does not require a complex build system, Node.js, or server setup.

### Option 1: Direct Execution
1. Download or clone this repository.
2. Locate the [index.html](file:///home/dhanan/Documents/LetterBox/index.html) file.
3. Double-click or open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Edge).

### Option 2: Live Server (Recommended for development)
If you are using Visual Studio Code, you can run a local development server:
1. Install the **Live Server** extension by Ritwick Dey.
2. Right-click [index.html](file:///home/dhanan/Documents/LetterBox/index.html) and select **Open with Live Server**.
3. The project will open automatically at `http://127.0.0.1:5500/`.

---

## 🎨 Visual Identity & Theme (Gruvbox Dark)
* **Dark Mode Core**: A retro-groove dark charcoal-brown background (`#1d2021`) combined with medium dark panels (`#282828`) to create a warm, vintage aesthetics.
* **Warm Accent Palette**: 
  * 🟢 **Green** (`#b8bb26`) — Active indicators, log confirmations, and watched checkmarks.
  * 🟠 **Orange** (`#fe8019`) — Primary branding logo marks, review highlights, and tags.
  * 🟡 **Yellow** (`#fabd2f`) — Star ratings and highlighted reviews.
  * 🔵 **Blue** (`#83a598`) — Watchlists, profile links, and navigation tags.
  * 🔴 **Red** (`#fb4934`) — Liked hearts and destructive elements.
* **Responsive Layouts**: Designed using CSS Flexbox, Grid, and Media Queries to ensure a seamless interface on Desktop, Tablet, and Mobile devices.
* **Modern Typography**: Integrated Google Fonts (`Outfit` for headings/brand and `Inter` for content) to provide sharp, premium-looking text.

---

## ✨ Features Implemented

1. **SPA Router**: Smooth rendering transitions between the **Home**, **Films**, **Reviews**, **Lists**, and **Profile** tabs without reloading the page.
2. **Persistent State Management**: Full integration with the browser's `localStorage`. Added reviews, watchlists, diaries, and custom collections will persist across page refreshes.
3. **Interactive Film Detail View**:
   * Hover over any poster to see quick stats (likes, rating, watched indicators).
   * Click on a movie poster to open a detailed modal overlay showing high-resolution backdrops, movie synopsis, directors, full cast, average rating, and community reviews.
   * Toggle Watched status, Likes (heart), and Watchlist markers in real-time.
4. **Interactive Movie Log Modal**:
   * Open from the navigation bar or Hero banner.
   * Search and select a movie from the database.
   * Rate films using an interactive 5-star selection tool (supports hover states and clicks).
   * Write text reviews, toggle likes, configure watchlist settings, and log a specific watch date.
5. **Real-time Autocomplete Search**:
   * Type in the global navigation search bar to query movies instantly by title or director.
   * Click a search result to immediately view that movie's details.
6. **Curated Lists Creator**:
   * Click "Create List" under the Lists tab to name, describe, and select multiple movies to build a custom collection.
7. **Personal Profile & Diary**:
   * Interactive dashboard showing your stats (watched count, watchlist count, liked films count, custom lists count).
   * Detailed **Diary Table** displaying log dates, movie ratings, liked status, review snippets, and a delete button to remove logs.

---

## 📁 File Structure

```text
LetterBox/
├── index.html        # Semantic HTML5 layout (navigation, tab panels, and modal containers)
├── styles.css        # Responsive styling, color tokens, layout systems, and animations
├── app.js            # Movies database, state management, autocomplete engine, and event handlers
├── movies/           # Local folder containing downloaded poster & backdrop images
└── README.md         # Project documentation and guide (this file)
```

---

## 🎬 Seeded Film Database
The application is pre-seeded with 10 legendary films to provide immediate content upon launch:
* *Dune: Part Two* (2024)
* *Spider-Man: Across the Spider-Verse* (2023)
* *Interstellar* (2014)
* *Parasite* (2019)
* *Everything Everywhere All at Once* (2022)
* *Spirited Away* (2001)
* *The Dark Knight* (2008)
* *Pulp Fiction* (1994)
* *Whiplash* (2014)
* *La La Land* (2016)

Thank you for using. 
