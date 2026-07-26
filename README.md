# CinéArchive — Film Discovery, Rating & Relational Curation Platform

CinéArchive is a high-fidelity, premium frontend web application designed as an editorial, community-oriented cinema journal. Inspired by the Letterboxd design aesthetic, it serves as a personal cinema tracking log combined with a simulated client-side **Relational Database Management System (RDBMS)** running right in the browser. 

CinéArchive demonstrates the practical application of Database Management System concepts—such as normalized schemas, foreign keys, constraints, triggers, procedures, views, and transactions—in solving the real-world problem of cinematic discovery and appreciation.

This project is built as a Single-Page Application (SPA) using **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

---

## 🚀 Live Demo & How to Run

Since the application is built entirely as a client-side Single-Page Application, it does not require a complex build system, Node.js, or server setup.

### Option 1: Direct Execution
1. Locate the [index.html](file:///home/dhanan/Documents/LetterBox/index.html) file.
2. Double-click or open `index.html` in any modern web browser.

### Option 2: Live Server (Recommended for development)
If you are using Visual Studio Code, you can run a local development server:
1. Install the **Live Server** extension.
2. Right-click [index.html](file:///home/dhanan/Documents/LetterBox/index.html) and select **Open with Live Server**.
3. The project will open at `http://127.0.0.1:5500/`.

---

## 🎨 Visual Identity & Theme (Gruvbox Dark)
* **Dark Mode Core**: A retro-groove dark charcoal-brown background (`#1d2021`) combined with medium dark panels (`#282828`) to create a warm, vintage aesthetic.
* **Warm Accent Palette**: 
  * 🟢 **Green** (`#b8bb26`) — Active indicators, log confirmations, and watched checkmarks.
  * 🟠 **Orange** (`#fe8019`) — Primary branding logo marks, review highlights, and tags.
  * 🟡 **Yellow** (`#fabd2f`) — Star ratings, highlight reviews, and trophy badges.
  * 🔵 **Blue** (`#83a598`) — Watchlists, profile links, and navigation tags.
  * 🔴 **Red** (`#fb4934`) — Liked hearts and destructive elements.
* **Responsive Layouts**: Designed using CSS Flexbox, Grid, and Media Queries to ensure a seamless interface on Desktop, Tablet, and Mobile devices.
* **Modern Typography**: Integrated Google Fonts (`Outfit` for headings/brand and `Inter` for content) to provide sharp, premium-looking text.

---

## ⚙️ Simulated Relational Database Engine

The application manages state through an in-memory client-side database module (`CineArchiveDB`) that simulates core SQL functions:

### 1. Relational Entity Schema (14 Normalized Tables)
1. **Users**: User profiles, emails, joined dates, roles (`User`/`Admin`), and bios.
2. **Movies**: Titles, directors, runtime, language, country, synopses, posters.
3. **Directors**: Biographies and birth years.
4. **Actors**: Biographies and birth years.
5. **Genres**: Name category details.
6. **Movie_Genres**: Junction table for Movie-to-Genre many-to-many relationships.
7. **Movie_Actors**: Junction table for Movie-to-Actor many-to-many relationships.
8. **Reviews**: Detailed textual reviews linked to Movies and Users.
9. **Ratings**: Numerical 1-5 star ratings given by Users to Movies.
10. **Watchlists**: Movies flagged as "want to watch" by Users.
11. **Lists**: Custom themed collections created by Users.
12. **Collections**: Junction table linking Movie lists to Movie entities.
13. **Comments**: Discussion threads left on reviews.
14. **Followers**: Social graph mapping follower/following relationships.
15. **Notifications**: Log of activity alerts for active users.
16. **Awards**: Film festival and Academy Award records won by Movies.

### 2. Constraints & Data Integrity
* **Foreign Key Validation**: Inserting a review for a non-existent movie ID or user ID will prompt a foreign key validation violation error.
* **Cascading Deletes**: Deleting a movie will automatically cascade-delete all references to that movie in junction mapping tables, ratings, reviews, and watchlists.
* **Access Control**: Users can toggle between the `User` role (Read-only query access) and the `Administrator` role (Full CRUD privileges to insert or delete rows directly from the table browser).

### 3. Database Automations (Triggers & Stored Procedures)
* **Triggers**:
  * `trg_update_movie_rating`: Fired after a rating is inserted, updated, or deleted to automatically recompute and save the movie's average rating in the movies table.
  * `trg_create_comment_notification`: Fired after a comment is added, creating a notification for the review's author.
  * `trg_create_follow_notification`: Fired when a user follows another user, creating a follow notification.
* **Stored Procedures**:
  * `sp_generate_recommendations`: Computes a user's favorite genres based on high ratings (>= 4★) and selects unwatched films in those genres using database set-matching.
  * `sp_user_analytics`: Generates aggregated analytical metrics showing total watches, reviews, average rating given, favorite genre, and favorite director.
* **Views**:
  * `vw_movie_awards`: Compiles movies and directors to list awards won and highlight critically acclaimed cinema.

---

## ✨ Features Implemented

1. **SPA Router**: Smooth rendering transitions between the **Home**, **Films**, **Reviews**, **Lists**, **Profile**, and **Database** tabs.
2. **Advanced Catalog Search Filters**: Search films using genre, director, language, country, release year, awards won, and minimum rating.
3. **Interactive Relational Detail View**: Open a movie modal to view casting (linked actors), awards won (linked awards table), community reviews, and toggle ratings/watchlists.
4. **Social & Engagement Graph**:
   * **Comments**: View comments on community reviews and write your own (writes to `comments` table).
   * **Followers**: Follow/Unfollow reviewers in the reviews feed to build connections.
   * **Notifications**: Receive read/unread notifications on your profile dashboard when other users comment on your reviews or follow you.
5. **Interactive Database Dashboard (Admin Console)**:
   * **Table Explorer**: Browse and manage rows inside all 14 tables in real time (CRUD modal enabled for admins).
   * **SQL Query Sandbox**: Write custom SQL-like queries (e.g. `SELECT movies.title, directors.name FROM movies JOIN directors ON movies.director_id = directors.id WHERE movies.year > 2010`) and view tabular results and execution plans.
   * **Procedures & Views Sandbox**: Run procedures and inspect views with instant stdout output.
   * **DB Engine Log Terminal**: View live scroll outputs of trigger operations, transaction boundaries, query scans, and validation checks.

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
