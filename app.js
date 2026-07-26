// ==========================================================================
// MYBOX APPLICATION JAVASCRIPT
// ==========================================================================

// 1. DEFAULT DATASET (Seeded Films)
const DEFAULT_FILMS = [
    {
        id: "dune-2",
        title: "Dune: Part Two",
        year: 2024,
        director: "Denis Villeneuve",
        runtime: 166,
        genres: ["Sci-Fi", "Adventure", "Drama"],
        synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
        cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Austin Butler",
        avgRating: 4.7,
        likesCount: 15402,
        poster: "movies/dune-2-poster.jpg",
        backdrop: "movies/dune-2-backdrop.jpg"
    },
    {
        id: "spider-verse",
        title: "Spider-Man: Across the Spider-Verse",
        year: 2023,
        director: "Joaquim Dos Santos, Kemp Powers",
        runtime: 140,
        genres: ["Animation", "Action", "Sci-Fi"],
        synopsis: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders.",
        cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac, Jake Johnson",
        avgRating: 4.6,
        likesCount: 22841,
        poster: "movies/spider-verse-poster.jpg",
        backdrop: "movies/spider-verse-backdrop.jpg"
    },
    {
        id: "interstellar",
        title: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        runtime: 169,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        synopsis: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
        avgRating: 4.8,
        likesCount: 38402,
        poster: "movies/interstellar-poster.jpg",
        backdrop: "movies/interstellar-backdrop.jpg"
    },
    {
        id: "parasite",
        title: "Parasite",
        year: 2019,
        director: "Bong Joon Ho",
        runtime: 132,
        genres: ["Thriller", "Drama", "Comedy"],
        synopsis: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
        avgRating: 4.7,
        likesCount: 29402,
        poster: "movies/parasite-poster.jpg",
        backdrop: "movies/parasite-backdrop.jpg"
    },
    {
        id: "everything-everywhere",
        title: "Everything Everywhere All at Once",
        year: 2022,
        director: "Daniel Kwan, Daniel Scheinert",
        runtime: 139,
        genres: ["Sci-Fi", "Action", "Comedy"],
        synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
        cast: "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu, Jamie Lee Curtis",
        avgRating: 4.5,
        likesCount: 25103,
        poster: "movies/everything-everywhere-poster.jpg",
        backdrop: "movies/everything-everywhere-backdrop.jpg"
    },
    {
        id: "spirited-away",
        title: "Spirited Away",
        year: 2001,
        director: "Hayao Miyazaki",
        runtime: 125,
        genres: ["Animation", "Fantasy", "Family"],
        synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naito",
        avgRating: 4.7,
        likesCount: 19803,
        poster: "movies/spirited-away-poster.jpg",
        backdrop: "movies/spirited-away-backdrop.jpg"
    },
    {
        id: "dark-knight",
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        runtime: 152,
        genres: ["Action", "Crime", "Drama"],
        synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Maggie Gyllenhaal",
        avgRating: 4.8,
        likesCount: 35123,
        poster: "movies/dark-knight-poster.jpg",
        backdrop: "movies/dark-knight-backdrop.jpg"
    },
    {
        id: "pulp-fiction",
        title: "Pulp Fiction",
        year: 1994,
        director: "Quentin Tarantino",
        runtime: 154,
        genres: ["Crime", "Thriller"],
        synopsis: "A burger-loving hitman, his philosophical partner, a drug-addled gangster's moll, and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that weave back and forth through time.",
        cast: "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis",
        avgRating: 4.6,
        likesCount: 32091,
        poster: "movies/pulp-fiction-poster.jpg",
        backdrop: "movies/pulp-fiction-backdrop.jpg"
    },
    {
        id: "whiplash",
        title: "Whiplash",
        year: 2014,
        director: "Damien Chazelle",
        runtime: 106,
        genres: ["Drama", "Music"],
        synopsis: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        cast: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        avgRating: 4.6,
        likesCount: 24109,
        poster: "movies/whiplash-poster.jpg",
        backdrop: "movies/whiplash-backdrop.jpg"
    },
    {
        id: "la-la-land",
        title: "La La Land",
        year: 2016,
        director: "Damien Chazelle",
        runtime: 128,
        genres: ["Romance", "Drama", "Music"],
        synopsis: "Sebastian and Mia are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain.",
        cast: "Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt",
        avgRating: 4.4,
        likesCount: 26802,
        poster: "movies/la-la-land-poster.jpg",
        backdrop: "movies/la-la-land-backdrop.jpg"
    }
];

// Pre-seeded lists
const DEFAULT_LISTS = [
    {
        id: "list-scifi",
        name: "Mind-Bending Science Fiction",
        desc: "A handpicked selection of movies that will challenge your perception of reality and take you to space and beyond.",
        author: "CinephileExplorer",
        films: ["interstellar", "dune-2", "everything-everywhere"]
    },
    {
        id: "list-modern-masterpieces",
        name: "Modern Cinema Masterpieces",
        desc: "Films from the last decade that redefine cinematic visual storytelling and direction.",
        author: "MyBoxOfficial",
        films: ["parasite", "spider-verse", "whiplash", "la-la-land"]
    }
];

// Pre-seeded public community reviews
const DEFAULT_REVIEWS = [
    {
        id: "rev-seed-1",
        filmId: "interstellar",
        username: "InterstellarNerd",
        rating: 5,
        reviewText: "An absolute masterclass in sci-fi filmmaking. Hans Zimmer's pipe organ score is transcendent, and the emotional core between Cooper and Murph hits like a freight train. Every single frame is cinematic poetry.",
        date: "2026-07-15",
        likes: 120,
        likedByUser: false,
        isCustom: false
    },
    {
        id: "rev-seed-2",
        filmId: "spirited-away",
        username: "GhibliFanatic",
        rating: 5,
        reviewText: "Miyazaki creates a dreamscape that is so immersive you can practically smell the sulfur in the bathhouse. Beautiful, terrifying, and deeply moving. Truly the peak of animated storytelling.",
        date: "2026-07-20",
        likes: 85,
        likedByUser: false,
        isCustom: false
    },
    {
        id: "rev-seed-3",
        filmId: "whiplash",
        username: "JazzDrummer99",
        rating: 4,
        reviewText: "J.K. Simmons is terrifyingly brilliant. The tension in the practice room is thicker than in most thriller films. An exhausting but thoroughly satisfying watch.",
        date: "2026-07-22",
        likes: 42,
        likedByUser: false,
        isCustom: false
    }
];

// 2. STATE MANAGER (Local Storage Reactive State)
let state = {
    films: [...DEFAULT_FILMS],
    reviews: [...DEFAULT_REVIEWS],
    lists: [...DEFAULT_LISTS],
    userProfile: {
        username: "CinephileExplorer",
        bio: "Watching films, writing reviews, and curating collections. Letterboxd fanatic turned MyBox loyalist.",
        watchedFilms: ["interstellar", "spirited-away", "whiplash"], // pre-watched
        likedFilms: ["interstellar", "spirited-away"],
        watchlist: ["dune-2", "parasite", "everything-everywhere"]
    }
};

// Initialize State from Local Storage
function loadState() {
    const savedState = localStorage.getItem("mybox_state");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            // Force update film poster and backdrop images to use the local downloaded assets
            state.films.forEach(film => {
                const defaultFilm = DEFAULT_FILMS.find(f => f.id === film.id);
                if (defaultFilm) {
                    film.poster = defaultFilm.poster;
                    film.backdrop = defaultFilm.backdrop;
                }
            });
            saveState(); // Save the updated paths back to local storage
        } catch (e) {
            console.error("Error loading local storage state, using defaults.", e);
        }
    } else {
        saveState(); // Seed local storage on first load
    }
}

function saveState() {
    localStorage.setItem("mybox_state", JSON.stringify(state));
}

// 3. CORE DYNAMIC RENDER ENGINE (SPA TABS)
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    initApp();
});

function initApp() {
    // Navigation Elements
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");
    const redirectButtons = document.querySelectorAll(".nav-redirect-btn");
    const logoBtn = document.getElementById("nav-logo");

    // SPA View Router
    function switchTab(tabId) {
        // Toggle Nav item highlights
        navItems.forEach(item => {
            if (item.getAttribute("data-tab") === tabId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Hide/Show Tab panels with simple class swaps
        tabContents.forEach(tab => {
            if (tab.id === `${tabId}-tab`) {
                tab.classList.remove("hidden");
                tab.classList.add("active");
            } else {
                tab.classList.add("hidden");
                tab.classList.remove("active");
            }
        });

        // Render tab contents
        renderTab(tabId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Connect Main Navigation
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Handle internal link redirects
    document.body.addEventListener("click", (e) => {
        const redirectBtn = e.target.closest(".nav-redirect-btn");
        if (redirectBtn) {
            e.preventDefault();
            const target = redirectBtn.getAttribute("data-target");
            switchTab(target);
        }
    });

    logoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("home");
    });

    // Modals Initialization
    initLogModal();
    initDetailModal();
    initListModal();
    initSearch();
    
    // Initial Render
    switchTab("home");
}

// RENDER ROUTER
function renderTab(tabId) {
    updateGlobalStats();
    
    switch (tabId) {
        case "home":
            renderHomeGrid();
            break;
        case "films":
            renderFilmsCatalog();
            break;
        case "reviews":
            renderReviewsFeed();
            break;
        case "lists":
            renderListsCatalog();
            break;
        case "profile":
            renderProfileView();
            break;
    }
}

// Global dashboard stats counter update
function updateGlobalStats() {
    const totalFilms = state.films.length;
    const userLogs = state.reviews.filter(r => r.username === state.userProfile.username).length;
    const userReviews = state.reviews.filter(r => r.username === state.userProfile.username && r.reviewText.trim() !== "").length;

    // Update Hero elements if they exist
    const totalFilmsEl = document.getElementById("stat-total-films");
    const totalLogsEl = document.getElementById("stat-total-logs");
    const totalReviewsEl = document.getElementById("stat-total-reviews");

    if (totalFilmsEl) totalFilmsEl.textContent = totalFilms;
    if (totalLogsEl) totalLogsEl.textContent = state.userProfile.watchedFilms.length;
    if (totalReviewsEl) totalReviewsEl.textContent = userReviews;
}

// 4. HOME PAGE RENDERER
function renderHomeGrid() {
    const filmsGrid = document.getElementById("popular-films-grid");
    const listsGrid = document.getElementById("popular-lists-grid");
    const reviewsList = document.getElementById("home-reviews-list");

    if (!filmsGrid || !listsGrid || !reviewsList) return;

    // Render Popular Films (sorted by initial likesCount descending, limit 6)
    const popularFilms = [...state.films].sort((a, b) => b.likesCount - a.likesCount).slice(0, 6);
    filmsGrid.innerHTML = popularFilms.map(film => createFilmCardHtml(film)).join("");

    // Render Curated Lists (limit 2)
    listsGrid.innerHTML = state.lists.slice(0, 2).map(list => createListCardHtml(list)).join("");

    // Render Recent Reviews (limit 3)
    const recentReviews = [...state.reviews].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    reviewsList.innerHTML = recentReviews.map(rev => {
        const film = state.films.find(f => f.id === rev.filmId);
        if (!film) return "";
        return `
            <div class="compact-review-item">
                <div class="compact-review-header">
                    <span class="compact-review-title film-detail-trigger" data-id="${film.id}">${film.title}</span>
                    <span class="compact-review-stars">${getStarsHtml(rev.rating)}</span>
                </div>
                <p class="compact-review-text">${rev.reviewText}</p>
                <div class="compact-review-user">by @${rev.username}</div>
            </div>
        `;
    }).join("");
}

// 5. FILMS CATALOG & FILTERS
function renderFilmsCatalog() {
    const catalogGrid = document.getElementById("films-catalog-grid");
    const genreSelect = document.getElementById("filter-genre");
    const sortSelect = document.getElementById("sort-films");

    if (!catalogGrid) return;

    // Dynamic Genre Gathering (All available genres from database)
    const allGenres = new Set();
    state.films.forEach(film => film.genres.forEach(g => allGenres.add(g)));
    
    // Save current selection to preserve filters
    const currentGenre = genreSelect.value || "all";
    genreSelect.innerHTML = `<option value="all">All Genres</option>` + 
        Array.from(allGenres).sort().map(g => `<option value="${g}" ${g === currentGenre ? "selected" : ""}>${g}</option>`).join("");

    // Catalog filtering and sorting logic
    function applyFilters() {
        const selectedGenre = genreSelect.value;
        const selectedSort = sortSelect.value;

        let filteredFilms = [...state.films];

        // 1. Genre filter
        if (selectedGenre !== "all") {
            filteredFilms = filteredFilms.filter(f => f.genres.includes(selectedGenre));
        }

        // 2. Sort apply
        if (selectedSort === "popularity") {
            filteredFilms.sort((a, b) => b.likesCount - a.likesCount);
        } else if (selectedSort === "rating") {
            filteredFilms.sort((a, b) => b.avgRating - a.avgRating);
        } else if (selectedSort === "year-desc") {
            filteredFilms.sort((a, b) => b.year - a.year);
        } else if (selectedSort === "year-asc") {
            filteredFilms.sort((a, b) => a.year - b.year);
        }

        // Render catalog
        if (filteredFilms.length === 0) {
            catalogGrid.innerHTML = `<div class="no-results">No films match your criteria. Keep reviewing!</div>`;
        } else {
            catalogGrid.innerHTML = filteredFilms.map(film => createFilmCardHtml(film)).join("");
        }
    }

    // Attach listeners once
    genreSelect.onchange = applyFilters;
    sortSelect.onchange = applyFilters;

    applyFilters();
}

// 6. REVIEWS TIMELINE FEED
function renderReviewsFeed() {
    const feedContainer = document.getElementById("full-reviews-feed");
    const sidebarReviewed = document.getElementById("sidebar-reviewed-count");
    const sidebarAvg = document.getElementById("sidebar-avg-rating");
    const sidebarLikes = document.getElementById("sidebar-likes-count");

    if (!feedContainer) return;

    // Filter out simple empty logged entries without textual reviews
    const textReviews = state.reviews.filter(r => r.reviewText.trim() !== "");

    // Render feed
    if (textReviews.length === 0) {
        feedContainer.innerHTML = `<div class="no-results">No reviews have been written yet. Be the first to log a film and write your thoughts!</div>`;
    } else {
        // Sort newest first
        const sortedReviews = [...textReviews].sort((a, b) => new Date(b.date) - new Date(a.date));
        feedContainer.innerHTML = sortedReviews.map(rev => {
            const film = state.films.find(f => f.id === rev.filmId);
            if (!film) return "";

            const isUserReview = rev.username === state.userProfile.username;
            const likedClass = rev.likedByUser ? "liked" : "";
            const heartIcon = rev.likedByUser ? "fa-solid fa-heart" : "fa-regular fa-heart";

            return `
                <div class="review-card" data-rev-id="${rev.id}">
                    <img class="review-card-poster film-detail-trigger" src="${film.poster}" alt="${film.title}" data-id="${film.id}">
                    <div class="review-card-body">
                        <div class="review-card-header">
                            <div class="review-film-info">
                                <h3><a href="#" class="film-detail-trigger" data-id="${film.id}">${film.title}</a> <span>(${film.year})</span></h3>
                                <div class="review-user-info">
                                    <span class="review-user-avatar"><i class="fa-solid fa-user-astronaut"></i></span>
                                    <span class="review-username">@${rev.username}</span>
                                    <span class="review-date">watched ${formatDate(rev.date)}</span>
                                </div>
                            </div>
                            <div class="review-stars">
                                ${getStarsHtml(rev.rating)}
                            </div>
                        </div>
                        <p class="review-card-text">${rev.reviewText}</p>
                        <div class="review-card-footer">
                            <button class="like-button-action ${likedClass}" data-rev-id="${rev.id}">
                                <i class="${heartIcon}"></i> <span>${rev.likes} Likes</span>
                            </button>
                            ${isUserReview ? `<button class="review-delete-btn" data-rev-id="${rev.id}"><i class="fa-solid fa-trash-can"></i> Delete</button>` : ""}
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }

    // Render User Stats in Sidebar
    const userReviews = state.reviews.filter(r => r.username === state.userProfile.username);
    const ratedReviews = userReviews.filter(r => r.rating > 0);
    const avgRating = ratedReviews.length > 0 ? (ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length).toFixed(1) : "0.0";
    
    if (sidebarReviewed) sidebarReviewed.textContent = state.userProfile.watchedFilms.length;
    if (sidebarAvg) sidebarAvg.textContent = `${avgRating} ★`;
    if (sidebarLikes) sidebarLikes.innerHTML = `${state.userProfile.likedFilms.length} <i class="fa-solid fa-heart text-danger"></i>`;

    // Hook like clicks & delete clicks in feed
    attachFeedActionListeners(feedContainer);
}

function attachFeedActionListeners(container) {
    container.querySelectorAll(".like-button-action").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const revId = btn.getAttribute("data-rev-id");
            const rev = state.reviews.find(r => r.id === revId);
            if (rev) {
                if (rev.likedByUser) {
                    rev.likes--;
                    rev.likedByUser = false;
                } else {
                    rev.likes++;
                    rev.likedByUser = true;
                }
                saveState();
                renderReviewsFeed();
            }
        };
    });

    container.querySelectorAll(".review-delete-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const revId = btn.getAttribute("data-rev-id");
            const revIndex = state.reviews.findIndex(r => r.id === revId);
            if (revIndex !== -1) {
                const confirmed = confirm("Are you sure you want to delete this log entry and review?");
                if (confirmed) {
                    state.reviews.splice(revIndex, 1);
                    saveState();
                    renderReviewsFeed();
                    updateGlobalStats();
                }
            }
        };
    });
}

// 7. LISTS VIEW
function renderListsCatalog() {
    const catalog = document.getElementById("lists-catalog-grid");
    if (!catalog) return;

    catalog.innerHTML = state.lists.map(list => createListCardHtml(list)).join("");
}

// 8. PROFILE SUB-VIEW DIARY & CONTROLLERS
function renderProfileView() {
    // Populate header stats
    document.getElementById("profile-watched-count").textContent = state.userProfile.watchedFilms.length;
    document.getElementById("profile-watchlist-count").textContent = state.userProfile.watchlist.length;
    document.getElementById("profile-likes-count").textContent = state.userProfile.likedFilms.length;
    document.getElementById("profile-lists-count").textContent = state.lists.filter(l => l.author === state.userProfile.username).length;

    // Render Sub-Sections based on active profile tab
    renderProfileSection("diary");

    const profileTabBtns = document.querySelectorAll(".profile-tab-btn");
    profileTabBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            profileTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const section = btn.getAttribute("data-profile-section");
            renderProfileSection(section);
        };
    });
}

function renderProfileSection(section) {
    const diarySec = document.getElementById("profile-diary-section");
    const watchlistSec = document.getElementById("profile-watchlist-section");
    const likesSec = document.getElementById("profile-likes-section");
    const mylistsSec = document.getElementById("profile-mylists-section");

    // Hide all profile sub-panels
    [diarySec, watchlistSec, likesSec, mylistsSec].forEach(el => el.classList.add("hidden"));

    if (section === "diary") {
        diarySec.classList.remove("hidden");
        const tbody = document.getElementById("profile-diary-table-body");
        const userLogs = state.reviews
            .filter(r => r.username === state.userProfile.username)
            .sort((a,b) => new Date(b.date) - new Date(a.date));

        if (userLogs.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No logs in your diary yet. Start logging movies!</td></tr>`;
        } else {
            tbody.innerHTML = userLogs.map(log => {
                const film = state.films.find(f => f.id === log.filmId);
                if (!film) return "";
                const isLiked = state.userProfile.likedFilms.includes(film.id);
                
                return `
                    <tr>
                        <td class="diary-date">${log.date}</td>
                        <td class="diary-film-title film-detail-trigger" data-id="${film.id}">${film.title}</td>
                        <td class="diary-year">${film.year}</td>
                        <td class="diary-stars">${log.rating > 0 ? getStarsHtml(log.rating) : '—'}</td>
                        <td>${isLiked ? '<i class="fa-solid fa-heart diary-heart"></i>' : '—'}</td>
                        <td class="diary-review-snippet">${log.reviewText || '—'}</td>
                        <td>
                            <button class="diary-action-delete" data-log-id="${log.id}"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                `;
            }).join("");

            tbody.querySelectorAll(".diary-action-delete").forEach(btn => {
                btn.onclick = (e) => {
                    const logId = btn.getAttribute("data-log-id");
                    const index = state.reviews.findIndex(r => r.id === logId);
                    if (index !== -1) {
                        if (confirm("Remove this entry from your diary?")) {
                            state.reviews.splice(index, 1);
                            saveState();
                            renderProfileView();
                        }
                    }
                };
            });
        }
    } 
    else if (section === "watchlist") {
        watchlistSec.classList.remove("hidden");
        const grid = document.getElementById("profile-watchlist-grid");
        const watchlistFilms = state.films.filter(f => state.userProfile.watchlist.includes(f.id));

        if (watchlistFilms.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color);">Your watchlist is empty.</div>`;
        } else {
            grid.innerHTML = watchlistFilms.map(f => createFilmCardHtml(f)).join("");
        }
    } 
    else if (section === "likes") {
        likesSec.classList.remove("hidden");
        const grid = document.getElementById("profile-likes-grid");
        const likedFilms = state.films.filter(f => state.userProfile.likedFilms.includes(f.id));

        if (likedFilms.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color);">You haven't liked any films yet.</div>`;
        } else {
            grid.innerHTML = likedFilms.map(f => createFilmCardHtml(f)).join("");
        }
    } 
    else if (section === "mylists") {
        mylistsSec.classList.remove("hidden");
        const grid = document.getElementById("profile-mylists-grid");
        const myLists = state.lists.filter(l => l.author === state.userProfile.username);

        if (myLists.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color);">You haven't created any movie lists yet.</div>`;
        } else {
            grid.innerHTML = myLists.map(list => createListCardHtml(list)).join("");
        }
    }
}

// ==========================================================================
// DYNAMIC MODALS FUNCTIONALITY
// ==========================================================================

// 9. LOG FILM MODAL CONTROLLER
function initLogModal() {
    const modal = document.getElementById("log-modal");
    const triggers = document.querySelectorAll(".log-btn-trigger");
    const closeBtn = document.getElementById("log-modal-close");
    const cancelBtn = document.getElementById("log-modal-cancel");
    const form = document.getElementById("log-film-form");
    const filmSelect = document.getElementById("log-film-select");
    const dateInput = document.getElementById("log-date");
    
    // Star rating elements
    const starContainer = document.getElementById("modal-star-rating");
    const stars = starContainer.querySelectorAll(".rating-star");
    const ratingInput = document.getElementById("log-rating-value");

    // Prepopulate Select options in Log Modal
    function populateDropdownOptions() {
        const sortedOpts = [...state.films].sort((a,b) => a.title.localeCompare(b.title));
        filmSelect.innerHTML = `<option value="" disabled selected>Choose a film to log...</option>` +
            sortedOpts.map(film => `<option value="${film.id}">${film.title} (${film.year})</option>`).join("");
    }

    // Toggle Modal open
    function openModal() {
        populateDropdownOptions();
        
        // Reset inputs
        form.reset();
        ratingInput.value = "0";
        resetStarsVisual();
        
        // Default watch date to today
        const today = new Date().toISOString().split("T")[0];
        dateInput.value = today;

        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    triggers.forEach(trig => {
        trig.onclick = (e) => {
            e.preventDefault();
            openModal();
        };
    });

    closeBtn.onclick = closeModal;
    cancelBtn.onclick = closeModal;

    // Close on overlay click
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    // Star Selection Interactive Hover/Click
    stars.forEach(star => {
        // Hover inside
        star.onmouseenter = () => {
            const hoverVal = parseInt(star.getAttribute("data-rating"));
            highlightStarsVisual(hoverVal);
        };

        // Leave hover
        starContainer.onmouseleave = () => {
            const currentVal = parseInt(ratingInput.value);
            highlightStarsVisual(currentVal);
        };

        // Save rating value on click
        star.onclick = () => {
            const clickVal = parseInt(star.getAttribute("data-rating"));
            ratingInput.value = clickVal;
            highlightStarsVisual(clickVal);
        };
    });

    function highlightStarsVisual(val) {
        stars.forEach(star => {
            const sVal = parseInt(star.getAttribute("data-rating"));
            if (sVal <= val) {
                star.classList.remove("fa-regular");
                star.classList.add("fa-solid", "active");
            } else {
                star.classList.remove("fa-solid", "active");
                star.classList.add("fa-regular");
            }
        });
    }

    function resetStarsVisual() {
        stars.forEach(star => {
            star.classList.remove("fa-solid", "active");
            star.classList.add("fa-regular");
        });
    }

    // Submit Log Form
    form.onsubmit = (e) => {
        e.preventDefault();
        const filmId = filmSelect.value;
        const rating = parseInt(ratingInput.value);
        const reviewText = document.getElementById("log-review-text").value;
        const liked = document.getElementById("log-like-checkbox").checked;
        const watchlist = document.getElementById("log-watchlist-checkbox").checked;
        const date = dateInput.value;

        if (!filmId) {
            alert("Please select a film to log.");
            return;
        }

        // Add to diary list
        const film = state.films.find(f => f.id === filmId);
        
        // Update user activity stats
        if (!state.userProfile.watchedFilms.includes(filmId)) {
            state.userProfile.watchedFilms.push(filmId);
        }

        // Update likes state
        if (liked) {
            if (!state.userProfile.likedFilms.includes(filmId)) {
                state.userProfile.likedFilms.push(filmId);
                film.likesCount++; // Increment movie catalog global count
            }
        }

        // Manage Watchlist State
        if (watchlist) {
            if (!state.userProfile.watchlist.includes(filmId)) {
                state.userProfile.watchlist.push(filmId);
            }
        } else {
            // Remove from watchlist since they logged it and chose not to add/keep it
            state.userProfile.watchlist = state.userProfile.watchlist.filter(id => id !== filmId);
        }

        // Append log to reviews state array
        const newLog = {
            id: "log-" + Date.now(),
            filmId: filmId,
            username: state.userProfile.username,
            rating: rating,
            reviewText: reviewText,
            date: date,
            likes: 0,
            likedByUser: false,
            isCustom: true
        };

        state.reviews.unshift(newLog);

        // Save and Rerender active view
        saveState();
        closeModal();

        // Refresh current page tab view
        const activeTab = document.querySelector(".nav-item.active").getAttribute("data-tab");
        renderTab(activeTab);
    };
}

// 10. FILM DETAILS DIALOG MODAL CONTROLLER
let activeDetailFilmId = null;

function initDetailModal() {
    const modal = document.getElementById("detail-modal");
    const closeBtn = document.getElementById("detail-modal-close");

    // Action buttons inside modal
    const watchBtn = document.getElementById("action-watch-btn");
    const likeBtn = document.getElementById("action-like-btn");
    const watchlistBtn = document.getElementById("action-watchlist-btn");

    function closeModal() {
        modal.classList.add("hidden");
        activeDetailFilmId = null;
    }

    closeBtn.onclick = closeModal;

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    // Global listener for film detail triggers (delegated click handler)
    document.body.addEventListener("click", (e) => {
        const trigger = e.target.closest(".film-detail-trigger");
        if (trigger) {
            e.preventDefault();
            const filmId = trigger.getAttribute("data-id");
            if (filmId) openDetailModal(filmId);
        }
    });

    // Wire action panel events
    watchBtn.onclick = () => {
        if (!activeDetailFilmId) return;
        const list = state.userProfile.watchedFilms;
        if (list.includes(activeDetailFilmId)) {
            state.userProfile.watchedFilms = list.filter(id => id !== activeDetailFilmId);
            watchBtn.classList.remove("active");
            watchBtn.querySelector("i").className = "fa-regular fa-circle-check";
        } else {
            list.push(activeDetailFilmId);
            watchBtn.classList.add("active");
            watchBtn.querySelector("i").className = "fa-solid fa-circle-check";
            
            // Automatically remove from watchlist on watched
            state.userProfile.watchlist = state.userProfile.watchlist.filter(id => id !== activeDetailFilmId);
            watchlistBtn.classList.remove("active");
            watchlistBtn.querySelector("i").className = "fa-regular fa-bookmark";
        }
        saveState();
        refreshActiveTab();
    };

    likeBtn.onclick = () => {
        if (!activeDetailFilmId) return;
        const list = state.userProfile.likedFilms;
        const film = state.films.find(f => f.id === activeDetailFilmId);
        
        if (list.includes(activeDetailFilmId)) {
            state.userProfile.likedFilms = list.filter(id => id !== activeDetailFilmId);
            likeBtn.classList.remove("active");
            likeBtn.querySelector("i").className = "fa-regular fa-heart";
            if (film) {
                film.likesCount = Math.max(0, film.likesCount - 1);
                document.getElementById("detail-likes-count-val").textContent = film.likesCount.toLocaleString();
            }
        } else {
            list.push(activeDetailFilmId);
            likeBtn.classList.add("active");
            likeBtn.querySelector("i").className = "fa-solid fa-heart";
            if (film) {
                film.likesCount++;
                document.getElementById("detail-likes-count-val").textContent = film.likesCount.toLocaleString();
            }
        }
        saveState();
        refreshActiveTab();
    };

    watchlistBtn.onclick = () => {
        if (!activeDetailFilmId) return;
        const list = state.userProfile.watchlist;
        if (list.includes(activeDetailFilmId)) {
            state.userProfile.watchlist = list.filter(id => id !== activeDetailFilmId);
            watchlistBtn.classList.remove("active");
            watchlistBtn.querySelector("i").className = "fa-regular fa-bookmark";
        } else {
            list.push(activeDetailFilmId);
            watchlistBtn.classList.add("active");
            watchlistBtn.querySelector("i").className = "fa-solid fa-bookmark";
            
            // Automatically remove from watched when putting back in watchlist
            state.userProfile.watchedFilms = state.userProfile.watchedFilms.filter(id => id !== activeDetailFilmId);
            watchBtn.classList.remove("active");
            watchBtn.querySelector("i").className = "fa-regular fa-circle-check";
        }
        saveState();
        refreshActiveTab();
    };
}

function openDetailModal(filmId) {
    const film = state.films.find(f => f.id === filmId);
    if (!film) return;

    activeDetailFilmId = filmId;

    // Fill Backdrop & Details
    const backdropEl = document.getElementById("detail-backdrop-img");
    backdropEl.style.backgroundImage = `url('${film.backdrop}')`;

    document.getElementById("detail-poster").src = film.poster;
    document.getElementById("detail-title").textContent = film.title;
    document.getElementById("detail-year").textContent = film.year;
    document.getElementById("detail-director").textContent = film.director;
    document.getElementById("detail-runtime").textContent = `${film.runtime} mins`;
    document.getElementById("detail-genres").textContent = film.genres.join(", ");
    document.getElementById("detail-synopsis").textContent = film.synopsis;
    document.getElementById("detail-cast").textContent = film.cast;

    // Get ratings stats
    const filmReviews = state.reviews.filter(r => r.filmId === filmId);
    const ratedReviews = filmReviews.filter(r => r.rating > 0);
    const avgRating = ratedReviews.length > 0 ? (ratedReviews.reduce((sum, r) => sum + r.rating, 0) / ratedReviews.length).toFixed(1) : film.avgRating.toFixed(1);

    document.getElementById("detail-avg-rating-val").textContent = `${avgRating} ★`;
    document.getElementById("detail-likes-count-val").textContent = film.likesCount.toLocaleString();

    // Set interactive panel active states
    const isWatched = state.userProfile.watchedFilms.includes(filmId);
    const isLiked = state.userProfile.likedFilms.includes(filmId);
    const isWatchlisted = state.userProfile.watchlist.includes(filmId);

    const watchBtn = document.getElementById("action-watch-btn");
    const likeBtn = document.getElementById("action-like-btn");
    const watchlistBtn = document.getElementById("action-watchlist-btn");

    if (isWatched) {
        watchBtn.classList.add("active");
        watchBtn.querySelector("i").className = "fa-solid fa-circle-check";
    } else {
        watchBtn.classList.remove("active");
        watchBtn.querySelector("i").className = "fa-regular fa-circle-check";
    }

    if (isLiked) {
        likeBtn.classList.add("active");
        likeBtn.querySelector("i").className = "fa-solid fa-heart";
    } else {
        likeBtn.classList.remove("active");
        likeBtn.querySelector("i").className = "fa-regular fa-heart";
    }

    if (isWatchlisted) {
        watchlistBtn.classList.add("active");
        watchlistBtn.querySelector("i").className = "fa-solid fa-bookmark";
    } else {
        watchlistBtn.classList.remove("active");
        watchlistBtn.querySelector("i").className = "fa-regular fa-bookmark";
    }

    // Populate reviews for this film
    const reviewsList = document.getElementById("detail-reviews-list");
    const textReviews = filmReviews.filter(r => r.reviewText.trim() !== "");

    if (textReviews.length === 0) {
        reviewsList.innerHTML = `<p style="font-size: 13px; color: var(--text-color); font-style: italic; margin-top: 8px;">No reviews logged for this film yet. Tap the green "+ Log" button above to share your thoughts!</p>`;
    } else {
        reviewsList.innerHTML = textReviews.map(rev => `
            <div class="detail-review-item">
                <div class="detail-review-meta">
                    <span class="detail-review-user">@${rev.username}</span>
                    <span class="detail-review-rating">${rev.rating > 0 ? getStarsHtml(rev.rating) : ""}</span>
                </div>
                <p class="detail-review-text">${rev.reviewText}</p>
            </div>
        `).join("");
    }

    // Show Detail Modal
    document.getElementById("detail-modal").classList.remove("hidden");
}

function refreshActiveTab() {
    const activeTab = document.querySelector(".nav-item.active").getAttribute("data-tab");
    renderTab(activeTab);
}

// 11. CREATE CURATED LIST MODAL
function initListModal() {
    const modal = document.getElementById("create-list-modal");
    const trigger = document.getElementById("create-list-trigger-btn");
    const closeBtn = document.getElementById("create-list-modal-close");
    const cancelBtn = document.getElementById("create-list-modal-cancel");
    const form = document.getElementById("create-list-form");
    const checkboxList = document.getElementById("list-films-checkboxes");

    function openModal() {
        // Populate selection list of films
        const sortedFilms = [...state.films].sort((a,b) => a.title.localeCompare(b.title));
        checkboxList.innerHTML = sortedFilms.map(film => `
            <label>
                <input type="checkbox" name="list-film-choice" value="${film.id}">
                <span>${film.title} (${film.year})</span>
            </label>
        `).join("");

        form.reset();
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    if (trigger) trigger.onclick = openModal;
    closeBtn.onclick = closeModal;
    cancelBtn.onclick = closeModal;

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };

    form.onsubmit = (e) => {
        e.preventDefault();
        const listName = document.getElementById("list-name").value;
        const listDesc = document.getElementById("list-desc").value;
        
        // Grab checked films
        const checkedBoxes = checkboxList.querySelectorAll("input[name='list-film-choice']:checked");
        const filmIds = Array.from(checkedBoxes).map(cb => cb.value);

        if (filmIds.length < 2) {
            alert("Please select at least 2 films to create a list!");
            return;
        }

        // Add to state
        const newList = {
            id: "list-" + Date.now(),
            name: listName,
            desc: listDesc,
            author: state.userProfile.username,
            films: filmIds
        };

        state.lists.unshift(newList);
        saveState();
        closeModal();
        renderTab("lists");
    };
}

// 12. DYNAMIC AUTOCOMPLETE SEARCH
function initSearch() {
    const searchInput = document.getElementById("global-search");
    const searchDropdown = document.getElementById("search-results-dropdown");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length < 1) {
            searchDropdown.classList.add("hidden");
            searchDropdown.innerHTML = "";
            return;
        }

        // Search matching titles, directors, or genres
        const matches = state.films.filter(film => 
            film.title.toLowerCase().includes(query) || 
            film.director.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            searchDropdown.innerHTML = `<div class="search-result-item" style="color: var(--text-color); cursor: default;">No matching films found</div>`;
        } else {
            searchDropdown.innerHTML = matches.map(film => `
                <div class="search-result-item" data-id="${film.id}">
                    <img class="search-result-poster" src="${film.poster}" alt="${film.title}">
                    <div class="search-result-info">
                        <span class="search-result-title">${film.title}</span>
                        <span class="search-result-year">${film.year} &middot; Directed by ${film.director}</span>
                    </div>
                </div>
            `).join("");
        }

        searchDropdown.classList.remove("hidden");
    });

    // Handle clicking a search result item
    searchDropdown.addEventListener("click", (e) => {
        const item = e.target.closest(".search-result-item");
        if (item) {
            const filmId = item.getAttribute("data-id");
            if (filmId) {
                // Clear input
                searchInput.value = "";
                searchDropdown.classList.add("hidden");
                // Open movie details dialog
                openDetailModal(filmId);
            }
        }
    });

    // Close search dropdown on blur
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.add("hidden");
        }
    });
}

// ==========================================================================
// RENDER HELPERS & FORMATTING
// ==========================================================================

function createFilmCardHtml(film) {
    const isLiked = state.userProfile.likedFilms.includes(film.id);
    const isWatched = state.userProfile.watchedFilms.includes(film.id);
    const likeClass = isLiked ? "liked" : "";
    const watchClass = isWatched ? "watched" : "";
    const likeIcon = isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    const watchIcon = isWatched ? "fa-solid fa-circle-check" : "fa-regular fa-circle-check";

    return `
        <div class="film-card film-detail-trigger" data-id="${film.id}">
            <img src="${film.poster}" alt="${film.title}">
            <div class="film-card-overlay">
                <div class="film-overlay-top">
                    <span class="film-action-icon ${watchClass}"><i class="${watchIcon}"></i></span>
                    <span class="film-action-icon ${likeClass}"><i class="${likeIcon}"></i></span>
                </div>
                <div class="film-overlay-bottom">
                    <span class="film-overlay-title">${film.title}</span>
                    <span class="film-overlay-year">${film.year}</span>
                    <span class="film-overlay-rating"><i class="fa-solid fa-star"></i> ${film.avgRating}</span>
                </div>
            </div>
        </div>
    `;
}

function createListCardHtml(list) {
    // Collect up to 4 film covers for the overlapping stack
    const coversHtml = list.films.slice(0, 4).map(filmId => {
        const film = state.films.find(f => f.id === filmId);
        return film ? `<img class="list-stack-poster" src="${film.poster}" alt="${film.title}">` : "";
    }).join("");

    return `
        <div class="list-card nav-redirect-btn" data-target="profile" onclick="sessionStorage.setItem('activeProfileSec','mylists')">
            <div class="list-card-details">
                <h3>${list.name}</h3>
                <p class="list-card-desc">${list.desc}</p>
                <div class="list-covers-stack">
                    ${coversHtml}
                </div>
            </div>
            <div class="list-card-footer">
                <span>Created by <strong class="list-author">@${list.author}</strong></span>
                <span>${list.films.length} films</span>
            </div>
        </div>
    `;
}

function getStarsHtml(rating) {
    let starsStr = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsStr += '<i class="fa-solid fa-star"></i>';
        } else {
            starsStr += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsStr;
}

function formatDate(dateStr) {
    if (!dateStr) return "";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('en-US', options);
}
