// ==========================================================================
// CINEARCHIVE CLIENT-SIDE DATABASE SYSTEM & SPA CONTROLLER
// ==========================================================================

// 1. COMPREHENSIVE SEED DATASET (Relational 3NF Model)
const SEED_USERS = [
    { id: "u1", username: "CinephileExplorer", email: "dhananjayansreeraj41@gmail.com", role: "User", joined_date: "2026-01-10", bio: "Watching films, writing reviews, and curating collections. Letterboxd fanatic turned CinéArchive loyalist." },
    { id: "u2", username: "GhibliFanatic", email: "ghibli@cinearchive.org", role: "User", joined_date: "2026-03-15", bio: "Spirited Away changed my life. Hand-drawn animation purist." },
    { id: "u3", username: "JazzDrummer99", email: "drummer99@cinearchive.org", role: "User", joined_date: "2026-05-20", bio: "Not quite my tempo. Whiplash is the greatest movie ever made." },
    { id: "u4", username: "InterstellarNerd", email: "nolanfan@cinearchive.org", role: "User", joined_date: "2026-06-01", bio: "Cooper, this is no time for caution. Gravity and black holes are my jam." },
    { id: "u5", username: "AdminCuration", email: "curator@cinearchive.org", role: "Admin", joined_date: "2025-12-01", bio: "Official Editor & DB Admin of CinéArchive. Preserving high-quality cinema discussions." }
];

const SEED_DIRECTORS = [
    { id: "d1", name: "Denis Villeneuve", birth_year: 1967, bio: "Canadian filmmaker known for his visually stunning and complex sci-fi epics." },
    { id: "d2", name: "Christopher Nolan", birth_year: 1970, bio: "British-American director famed for mind-bending plots and practical visual effects." },
    { id: "d3", name: "Bong Joon Ho", birth_year: 1969, bio: "South Korean director master of genre-blending black comedies and social thrillers." },
    { id: "d4", name: "Hayao Miyazaki", birth_year: 1941, bio: "Japanese animator, director and co-founder of Studio Ghibli, legendary teller of dreams." },
    { id: "d5", name: "Quentin Tarantino", birth_year: 1963, bio: "American director celebrated for stylized violence, witty dialogue, and retro aesthetics." },
    { id: "d6", name: "Damien Chazelle", birth_year: 1985, bio: "Youngest Best Director Oscar winner, famous for music-centric high-tempo dramas." },
    { id: "d7", name: "Kemp Powers", birth_year: 1973, bio: "Acclaimed American director and playwright, writer of Soul and Spider-Verse." }
];

const SEED_ACTORS = [
    { id: "a1", name: "Timothée Chalamet", birth_year: 1995, bio: "Academy Award-nominated American actor, lead of Dune and Call Me By Your Name." },
    { id: "a2", name: "Zendaya", birth_year: 1996, bio: "American actress and singer, Emmy-winner starring in Dune and Euphoria." },
    { id: "a3", name: "Matthew McConaughey", birth_year: 1969, bio: "Oscar-winning American actor, space traveler Cooper in Interstellar." },
    { id: "a4", name: "Anne Hathaway", birth_year: 1982, bio: "Versatile American actress, Oscar-winner, starred in Interstellar and Les Misérables." },
    { id: "a5", name: "Song Kang-ho", birth_year: 1967, bio: "Legendary South Korean actor, frequent Bong Joon Ho collaborator, star of Parasite." },
    { id: "a6", name: "Michelle Yeoh", birth_year: 1962, bio: "Oscar-winning Malaysian actress, martial artist, lead of Everything Everywhere All at Once." },
    { id: "a7", name: "Rumi Hiiragi", birth_year: 1987, bio: "Japanese voice actress, voice of Chihiro in Spirited Away." },
    { id: "a8", name: "Christian Bale", birth_year: 1974, bio: "Oscar-winning method actor, the Dark Knight himself." },
    { id: "a9", name: "Heath Ledger", birth_year: 1979, bio: "Late Australian actor, legendary Oscar-winning portrayal of the Joker." },
    { id: "a10", name: "John Travolta", birth_year: 1954, bio: "American actor and dancer, Vincent Vega in Pulp Fiction." },
    { id: "a11", name: "Samuel L. Jackson", birth_year: 1948, bio: "One of the most prolific and highest-grossing actors of all time." },
    { id: "a12", name: "Miles Teller", birth_year: 1987, bio: "Intense American actor, starred in Whiplash and Top Gun: Maverick." },
    { id: "a13", name: "Emma Stone", birth_year: 1988, bio: "Double Oscar-winning American actress, lead of La La Land and Poor Things." },
    { id: "a14", name: "J.K. Simmons", birth_year: 1955, bio: "Oscar-winning character actor, unforgettable performance as Fletcher in Whiplash." },
    { id: "a15", name: "Ryan Gosling", birth_year: 1980, bio: "Charismatic Oscar-nominated Canadian actor, lead of La La Land and Drive." }
];

const SEED_GENRES = [
    { id: "g1", name: "Sci-Fi" },
    { id: "g2", name: "Adventure" },
    { id: "g3", name: "Drama" },
    { id: "g4", name: "Animation" },
    { id: "g5", name: "Action" },
    { id: "g6", name: "Thriller" },
    { id: "g7", name: "Comedy" },
    { id: "g8", name: "Fantasy" },
    { id: "g9", name: "Family" },
    { id: "g10", name: "Crime" },
    { id: "g11", name: "Music" },
    { id: "g12", name: "Romance" }
];

const SEED_MOVIES = [
    { id: "m1", title: "Dune: Part Two", year: 2024, director_id: "d1", runtime: 166, language: "English", country: "USA", avg_rating: 4.7, likes_count: 15402, poster: "movies/dune-2-poster.jpg", backdrop: "movies/dune-2-backdrop.jpg", synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family." },
    { id: "m2", title: "Spider-Man: Across the Spider-Verse", year: 2023, director_id: "d7", runtime: 140, language: "English", country: "USA", avg_rating: 4.6, likes_count: 22841, poster: "movies/spider-verse-poster.jpg", backdrop: "movies/spider-verse-backdrop.jpg", synopsis: "Miles Morales is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence." },
    { id: "m3", title: "Interstellar", year: 2014, director_id: "d2", runtime: 169, language: "English", country: "USA", avg_rating: 4.8, likes_count: 38402, poster: "movies/interstellar-poster.jpg", backdrop: "movies/interstellar-backdrop.jpg", synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
    { id: "m4", title: "Parasite", year: 2019, director_id: "d3", runtime: 132, language: "Korean", country: "South Korea", avg_rating: 4.7, likes_count: 29402, poster: "movies/parasite-poster.jpg", backdrop: "movies/parasite-backdrop.jpg", synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
    { id: "m5", title: "Everything Everywhere All at Once", year: 2022, director_id: "d6", runtime: 139, language: "English", country: "USA", avg_rating: 4.5, likes_count: 25103, poster: "movies/everything-everywhere-poster.jpg", backdrop: "movies/everything-everywhere-backdrop.jpg", synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes." },
    { id: "m6", title: "Spirited Away", year: 2001, director_id: "d4", runtime: 125, language: "Japanese", country: "Japan", avg_rating: 4.7, likes_count: 19803, poster: "movies/spirited-away-poster.jpg", backdrop: "movies/spirited-away-backdrop.jpg", synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches." },
    { id: "m7", title: "The Dark Knight", year: 2008, director_id: "d2", runtime: 152, language: "English", country: "USA", avg_rating: 4.8, likes_count: 35123, poster: "movies/dark-knight-poster.jpg", backdrop: "movies/dark-knight-backdrop.jpg", synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his greatest tests." },
    { id: "m8", title: "Pulp Fiction", year: 1994, director_id: "d5", runtime: 154, language: "English", country: "USA", avg_rating: 4.6, likes_count: 32091, poster: "movies/pulp-fiction-poster.jpg", backdrop: "movies/pulp-fiction-backdrop.jpg", synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
    { id: "m9", title: "Whiplash", year: 2014, director_id: "d6", runtime: 106, language: "English", country: "USA", avg_rating: 4.6, likes_count: 24109, poster: "movies/whiplash-poster.jpg", backdrop: "movies/whiplash-backdrop.jpg", synopsis: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost." },
    { id: "m10", title: "La La Land", year: 2016, director_id: "d6", runtime: 128, language: "English", country: "USA", avg_rating: 4.4, likes_count: 26802, poster: "movies/la-la-land-poster.jpg", backdrop: "movies/la-la-land-backdrop.jpg", synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations." }
];

// Junction Table: Movie Genres
const SEED_MOVIE_GENRES = [
    { id: "mg1", movie_id: "m1", genre_id: "g1" }, { id: "mg2", movie_id: "m1", genre_id: "g2" }, { id: "mg3", movie_id: "m1", genre_id: "g3" },
    { id: "mg4", movie_id: "m2", genre_id: "g4" }, { id: "mg5", movie_id: "m2", genre_id: "g5" }, { id: "mg6", movie_id: "m2", genre_id: "g1" },
    { id: "mg7", movie_id: "m3", genre_id: "g1" }, { id: "mg8", movie_id: "m3", genre_id: "g3" }, { id: "mg9", movie_id: "m3", genre_id: "g2" },
    { id: "mg10", movie_id: "m4", genre_id: "g6" }, { id: "mg11", movie_id: "m4", genre_id: "g3" }, { id: "mg12", movie_id: "m4", genre_id: "g7" },
    { id: "mg13", movie_id: "m5", genre_id: "g1" }, { id: "mg14", movie_id: "m5", genre_id: "g5" }, { id: "mg15", movie_id: "m5", genre_id: "g7" },
    { id: "mg16", movie_id: "m6", genre_id: "g4" }, { id: "mg17", movie_id: "m6", genre_id: "g8" }, { id: "mg18", movie_id: "m6", genre_id: "g9" },
    { id: "mg19", movie_id: "m7", genre_id: "g5" }, { id: "mg20", movie_id: "m7", genre_id: "g10" }, { id: "mg21", movie_id: "m7", genre_id: "g3" },
    { id: "mg22", movie_id: "m8", genre_id: "g10" }, { id: "mg23", movie_id: "m8", genre_id: "g6" },
    { id: "mg24", movie_id: "m9", genre_id: "g3" }, { id: "mg25", movie_id: "m9", genre_id: "g11" },
    { id: "mg26", movie_id: "m10", genre_id: "g12" }, { id: "mg27", movie_id: "m10", genre_id: "g3" }, { id: "mg28", movie_id: "m10", genre_id: "g11" }
];

// Junction Table: Movie Actors
const SEED_MOVIE_ACTORS = [
    { id: "ma1", movie_id: "m1", actor_id: "a1" }, { id: "ma2", movie_id: "m1", actor_id: "a2" },
    { id: "ma3", movie_id: "m3", actor_id: "a3" }, { id: "ma4", movie_id: "m3", actor_id: "a4" },
    { id: "ma5", movie_id: "m4", actor_id: "a5" },
    { id: "ma6", movie_id: "m5", actor_id: "a6" },
    { id: "ma7", movie_id: "m6", actor_id: "a7" },
    { id: "ma8", movie_id: "m7", actor_id: "a8" }, { id: "ma9", movie_id: "m7", actor_id: "a9" },
    { id: "ma10", movie_id: "m8", actor_id: "a10" }, { id: "ma11", movie_id: "m8", actor_id: "a11" },
    { id: "ma12", movie_id: "m9", actor_id: "a12" }, { id: "ma13", movie_id: "m9", actor_id: "a14" },
    { id: "ma14", movie_id: "m10", actor_id: "a13" }, { id: "ma15", movie_id: "m10", actor_id: "a15" }
];

const SEED_REVIEWS = [
    { id: "r1", movie_id: "m3", user_id: "u4", review_text: "An absolute masterclass in sci-fi filmmaking. Hans Zimmer's pipe organ score is transcendent, and the emotional core between Cooper and Murph hits like a freight train. Every single frame is cinematic poetry.", created_at: "2026-07-15", likes_count: 120 },
    { id: "r2", movie_id: "m6", user_id: "u2", review_text: "Miyazaki creates a dreamscape that is so immersive you can practically smell the sulfur in the bathhouse. Beautiful, terrifying, and deeply moving. Truly the peak of animated storytelling.", created_at: "2026-07-20", likes_count: 85 },
    { id: "r3", movie_id: "m9", user_id: "u3", review_text: "J.K. Simmons is terrifyingly brilliant. The tension in the practice room is thicker than in most thriller films. An exhausting but thoroughly satisfying watch.", created_at: "2026-07-22", likes_count: 42 }
];

const SEED_RATINGS = [
    { id: "rt1", movie_id: "m3", user_id: "u4", rating_value: 5, created_at: "2026-07-15" },
    { id: "rt2", movie_id: "m6", user_id: "u2", rating_value: 5, created_at: "2026-07-20" },
    { id: "rt3", movie_id: "m9", user_id: "u3", rating_value: 4, created_at: "2026-07-22" },
    { id: "rt4", movie_id: "m3", user_id: "u1", rating_value: 5, created_at: "2026-07-23" },
    { id: "rt5", movie_id: "m6", user_id: "u1", rating_value: 4, created_at: "2026-07-24" },
    { id: "rt6", movie_id: "m9", user_id: "u1", rating_value: 5, created_at: "2026-07-25" }
];

const SEED_WATCHLISTS = [
    { id: "w1", user_id: "u1", movie_id: "m1", added_at: "2026-07-25" },
    { id: "w2", user_id: "u1", movie_id: "m4", added_at: "2026-07-25" },
    { id: "w3", user_id: "u1", movie_id: "m5", added_at: "2026-07-25" }
];

const SEED_LISTS = [
    { id: "l1", user_id: "u1", name: "Mind-Bending Science Fiction", description: "A handpicked selection of movies that challenge your perception of reality and take you beyond.", created_at: "2026-07-23" },
    { id: "l2", user_id: "u5", name: "Modern Cinema Masterpieces", description: "Films from the last two decades that redefine cinematic visual storytelling.", created_at: "2026-07-24" }
];

const SEED_COLLECTIONS = [
    { id: "c1", list_id: "l1", movie_id: "m3" }, { id: "c2", list_id: "l1", movie_id: "m1" }, { id: "c3", list_id: "l1", movie_id: "m5" },
    { id: "c4", list_id: "l2", movie_id: "m4" }, { id: "c5", list_id: "l2", movie_id: "m2" }, { id: "c6", list_id: "l2", movie_id: "m9" }, { id: "c7", list_id: "l2", movie_id: "m10" }
];

const SEED_COMMENTS = [
    { id: "cm1", review_id: "r1", user_id: "u2", comment_text: "Totally agree on Hans Zimmer! The No Time For Caution track is sensational.", created_at: "2026-07-16" },
    { id: "cm2", review_id: "r1", user_id: "u3", comment_text: "Amazing review. But Whiplash still has better musical integration! ;)", created_at: "2026-07-17" }
];

const SEED_FOLLOWERS = [
    { id: "f1", follower_user_id: "u1", followed_user_id: "u2", followed_at: "2026-07-20" },
    { id: "f2", follower_user_id: "u1", followed_user_id: "u3", followed_at: "2026-07-21" },
    { id: "f3", follower_user_id: "u2", followed_user_id: "u1", followed_at: "2026-07-22" }
];

const SEED_NOTIFICATIONS = [
    { id: "n1", user_id: "u1", message: "@GhibliFanatic commented on your logged film: 'Awesome watch!'", is_read: false, created_at: "2026-07-25" },
    { id: "n2", user_id: "u1", message: "@JazzDrummer99 liked your review of Whiplash.", is_read: true, created_at: "2026-07-24" }
];

const SEED_AWARDS = [
    { id: "aw1", movie_id: "m3", name: "Academy Awards", category: "Best Visual Effects", year_won: 2015 },
    { id: "aw2", movie_id: "m4", name: "Academy Awards", category: "Best Picture", year_won: 2020 },
    { id: "aw3", movie_id: "m4", name: "Academy Awards", category: "Best Director (Bong Joon Ho)", year_won: 2020 },
    { id: "aw4", movie_id: "m4", name: "Academy Awards", category: "Best Original Screenplay", year_won: 2020 },
    { id: "aw5", movie_id: "m4", name: "Cannes Film Festival", category: "Palme d'Or", year_won: 2019 },
    { id: "aw6", movie_id: "m6", name: "Academy Awards", category: "Best Animated Feature", year_won: 2003 },
    { id: "aw7", movie_id: "m6", name: "Berlin International Film Festival", category: "Golden Bear", year_won: 2002 },
    { id: "aw8", movie_id: "m7", name: "Academy Awards", category: "Best Supporting Actor (Heath Ledger)", year_won: 2009 },
    { id: "aw9", movie_id: "m7", name: "Academy Awards", category: "Best Sound Editing", year_won: 2009 },
    { id: "aw10", movie_id: "m9", name: "Academy Awards", category: "Best Supporting Actor (J.K. Simmons)", year_won: 2015 },
    { id: "aw11", movie_id: "m10", name: "Academy Awards", category: "Best Director (Damien Chazelle)", year_won: 2017 },
    { id: "aw12", movie_id: "m10", name: "Academy Awards", category: "Best Actress (Emma Stone)", year_won: 2017 }
];

// 2. DATABASE SYSTEM MODULE (CineArchiveDB Engine)
class CineArchiveDB {
    constructor() {
        this.tables = {
            users: [],
            directors: [],
            actors: [],
            genres: [],
            movies: [],
            movie_genres: [],
            movie_actors: [],
            reviews: [],
            ratings: [],
            watchlists: [],
            lists: [],
            collections: [],
            comments: [],
            followers: [],
            notifications: [],
            awards: []
        };
        this.logs = [];
        this.activeRole = "admin"; // Default view role
        this.activeUserId = "u1"; // CinephileExplorer session user
        this.init();
    }

    init() {
        const savedDB = localStorage.getItem("cinearchive_relational_db");
        if (savedDB) {
            try {
                this.tables = JSON.parse(savedDB);
                this.log("info", "Relational database loaded successfully from browser local storage.");
            } catch (e) {
                console.error("Failed to parse stored DB, seeding defaults.", e);
                this.seedDefaults();
            }
        } else {
            this.seedDefaults();
        }
    }

    seedDefaults() {
        this.tables.users = [...SEED_USERS];
        this.tables.directors = [...SEED_DIRECTORS];
        this.tables.actors = [...SEED_ACTORS];
        this.tables.genres = [...SEED_GENRES];
        this.tables.movies = [...SEED_MOVIES];
        this.tables.movie_genres = [...SEED_MOVIE_GENRES];
        this.tables.movie_actors = [...SEED_MOVIE_ACTORS];
        this.tables.reviews = [...SEED_REVIEWS];
        this.tables.ratings = [...SEED_RATINGS];
        this.tables.watchlists = [...SEED_WATCHLISTS];
        this.tables.lists = [...SEED_LISTS];
        this.tables.collections = [...SEED_COLLECTIONS];
        this.tables.comments = [...SEED_COMMENTS];
        this.tables.followers = [...SEED_FOLLOWERS];
        this.tables.notifications = [...SEED_NOTIFICATIONS];
        this.tables.awards = [...SEED_AWARDS];
        this.save();
        this.log("info", "Relational database initialized & seeded with 14 normalized tables in 3NF.");
    }

    save() {
        localStorage.setItem("cinearchive_relational_db", JSON.stringify(this.tables));
    }

    log(type, msg) {
        const timestamp = new Date().toLocaleTimeString();
        this.logs.push({ type, timestamp, message: msg });
        if (this.logs.length > 200) this.logs.shift(); // Cap console history
        
        // Dispatch event for UI logs update
        document.dispatchEvent(new CustomEvent("db-log-updated"));
    }

    // Dynamic relational schema descriptors
    getSchemas() {
        return {
            users: { pk: "id", cols: ["id", "username", "email", "role", "joined_date", "bio"] },
            directors: { pk: "id", cols: ["id", "name", "birth_year", "bio"] },
            actors: { pk: "id", cols: ["id", "name", "birth_year", "bio"] },
            genres: { pk: "id", cols: ["id", "name"] },
            movies: { pk: "id", cols: ["id", "title", "year", "director_id", "runtime", "language", "country", "avg_rating", "likes_count", "poster", "backdrop", "synopsis"], fks: { director_id: "directors" } },
            movie_genres: { pk: "id", cols: ["id", "movie_id", "genre_id"], fks: { movie_id: "movies", genre_id: "genres" } },
            movie_actors: { pk: "id", cols: ["id", "movie_id", "actor_id"], fks: { movie_id: "movies", actor_id: "actors" } },
            reviews: { pk: "id", cols: ["id", "movie_id", "user_id", "review_text", "created_at", "likes_count"], fks: { movie_id: "movies", user_id: "users" } },
            ratings: { pk: "id", cols: ["id", "movie_id", "user_id", "rating_value", "created_at"], fks: { movie_id: "movies", user_id: "users" } },
            watchlists: { pk: "id", cols: ["id", "user_id", "movie_id", "added_at"], fks: { user_id: "users", movie_id: "movies" } },
            lists: { pk: "id", cols: ["id", "user_id", "name", "description", "created_at"], fks: { user_id: "users" } },
            collections: { pk: "id", cols: ["id", "list_id", "movie_id"], fks: { list_id: "lists", movie_id: "movies" } },
            comments: { pk: "id", cols: ["id", "review_id", "user_id", "comment_text", "created_at"], fks: { review_id: "reviews", user_id: "users" } },
            followers: { pk: "id", cols: ["id", "follower_user_id", "followed_user_id", "followed_at"], fks: { follower_user_id: "users", followed_user_id: "users" } },
            notifications: { pk: "id", cols: ["id", "user_id", "message", "is_read", "created_at"], fks: { user_id: "users" } },
            awards: { pk: "id", cols: ["id", "movie_id", "name", "category", "year_won"], fks: { movie_id: "movies" } }
        };
    }

    // --- DATABASE CONSTRAINTS & TRIGGERS (Automations) ---

    // Validate foreign keys on insertion/updates
    validateFKConstraints(tableName, rowData) {
        const schemas = this.getSchemas();
        const fks = schemas[tableName].fks;
        if (!fks) return;

        for (let fkCol in fks) {
            let refTable = fks[fkCol];
            let refVal = rowData[fkCol];

            if (refVal) {
                let refSchema = schemas[refTable];
                let refPk = refSchema.pk;
                let exists = this.tables[refTable].some(row => row[refPk] === refVal);
                
                if (!exists) {
                    throw new Error(`Foreign Key Constraint Violated: Table '${tableName}' references non-existent key '${refVal}' in table '${refTable}(${refPk})'.`);
                }
            }
        }
    }

    // AFTER RATINGS CHANGE: Update Movie Average Rating
    trg_update_movie_rating(movieId) {
        this.log("trigger", `TRIGGER FIRED: trg_update_movie_rating on movie_id '${movieId}'`);
        
        const movie = this.tables.movies.find(m => m.id === movieId);
        if (!movie) return;

        const ratings = this.tables.ratings.filter(r => r.movie_id === movieId);
        if (ratings.length === 0) {
            movie.avg_rating = 0.0;
        } else {
            const sum = ratings.reduce((acc, curr) => acc + Number(curr.rating_value), 0);
            movie.avg_rating = parseFloat((sum / ratings.length).toFixed(1));
        }
        
        this.save();
        this.log("info", `Movie rating updated: '${movie.title}' avg_rating set to ${movie.avg_rating}★`);
    }

    // AFTER COMMENT INSERTED: Notify review author
    trg_create_comment_notification(comment) {
        this.log("trigger", "TRIGGER FIRED: trg_create_comment_notification");
        
        const review = this.tables.reviews.find(r => r.id === comment.review_id);
        if (!review) return;

        // Don't notify if commenting on own review
        if (review.user_id === comment.user_id) return;

        const commenter = this.tables.users.find(u => u.id === comment.user_id);
        const commenterName = commenter ? commenter.username : "Someone";

        const newNotification = {
            id: "n-" + Date.now(),
            user_id: review.user_id,
            message: `@${commenterName} commented on your review: "${comment.comment_text.slice(0, 30)}..."`,
            is_read: false,
            created_at: new Date().toISOString().split("T")[0]
        };

        this.tables.notifications.unshift(newNotification);
        this.save();
        this.log("info", `Activity notification inserted for user ID '${review.user_id}'`);
    }

    // AFTER FOLLOWER INSERTED: Notify followed user
    trg_create_follow_notification(followerRow) {
        this.log("trigger", "TRIGGER FIRED: trg_create_follow_notification");
        
        const follower = this.tables.users.find(u => u.id === followerRow.follower_user_id);
        const followerName = follower ? follower.username : "Someone";

        const newNotification = {
            id: "n-" + Date.now(),
            user_id: followerRow.followed_user_id,
            message: `@${followerName} started following you.`,
            is_read: false,
            created_at: new Date().toISOString().split("T")[0]
        };

        this.tables.notifications.unshift(newNotification);
        this.save();
        this.log("info", `Follower notification inserted for user ID '${followerRow.followed_user_id}'`);
    }

    // --- TRANSACTION EXECUTION METHODS ---

    // Insert Row into a table
    insertRow(tableName, rowData, checkConstraints = true) {
        if (this.activeRole === "user") {
            throw new Error(`Permission Denied: User role does not have WRITE privileges.`);
        }

        const schemas = this.getSchemas();
        const schema = schemas[tableName];
        if (!schema) throw new Error(`Table Error: Table '${tableName}' does not exist.`);

        this.log("transaction", `[TRANSACTION START] INSERT INTO ${tableName.toUpperCase()}`);

        // Create new ID if not provided
        let row = { ...rowData };
        if (!row[schema.pk]) {
            row[schema.pk] = tableName.slice(0, 2) + "-" + Date.now();
        }

        // Validate types & columns
        schema.cols.forEach(col => {
            if (row[col] === undefined) {
                row[col] = (col === "avg_rating" || col === "likes_count" || col === "likes" || col === "rating_value") ? 0 : "";
            }
        });

        // Check FK constraints
        if (checkConstraints) {
            try {
                this.validateFKConstraints(tableName, row);
            } catch (err) {
                this.log("error", `[TRANSACTION ABORTED] ${err.message}`);
                throw err;
            }
        }

        this.tables[tableName].unshift(row);
        this.save();

        this.log("info", `Row successfully inserted into '${tableName}' with ID ${row[schema.pk]}`);

        // Fire triggers if applicable
        if (tableName === "ratings") {
            this.trg_update_movie_rating(row.movie_id);
        } else if (tableName === "comments") {
            this.trg_create_comment_notification(row);
        } else if (tableName === "followers") {
            this.trg_create_follow_notification(row);
        }

        this.log("transaction", `[TRANSACTION COMMIT] Insert complete in ${tableName.toUpperCase()}`);
        return row;
    }

    // Update Row
    updateRow(tableName, id, updatedData) {
        if (this.activeRole === "user") {
            throw new Error(`Permission Denied: User role does not have WRITE privileges.`);
        }

        const schemas = this.getSchemas();
        const schema = schemas[tableName];
        const rows = this.tables[tableName];
        const index = rows.findIndex(r => r[schema.pk] === id);

        if (index === -1) throw new Error(`Record Error: Record with ID '${id}' not found in '${tableName}'.`);

        this.log("transaction", `[TRANSACTION START] UPDATE ${tableName.toUpperCase()} SET ID=${id}`);

        let row = { ...rows[index], ...updatedData };

        try {
            this.validateFKConstraints(tableName, row);
        } catch (err) {
            this.log("error", `[TRANSACTION ABORTED] ${err.message}`);
            throw err;
        }

        const oldMovieId = rows[index].movie_id || null;
        rows[index] = row;
        this.save();

        this.log("info", `Row with ID ${id} in '${tableName}' updated successfully.`);

        // Fire triggers
        if (tableName === "ratings") {
            this.trg_update_movie_rating(row.movie_id);
            if (oldMovieId && oldMovieId !== row.movie_id) {
                this.trg_update_movie_rating(oldMovieId);
            }
        }

        this.log("transaction", `[TRANSACTION COMMIT] Update complete in ${tableName.toUpperCase()}`);
        return row;
    }

    // Delete Row with cascade check
    deleteRow(tableName, id) {
        if (this.activeRole === "user") {
            throw new Error(`Permission Denied: User role does not have WRITE privileges.`);
        }

        const schemas = this.getSchemas();
        const schema = schemas[tableName];
        const rows = this.tables[tableName];
        const index = rows.findIndex(r => r[schema.pk] === id);

        if (index === -1) throw new Error(`Record Error: Record with ID '${id}' not found in '${tableName}'.`);

        this.log("transaction", `[TRANSACTION START] DELETE FROM ${tableName.toUpperCase()} WHERE ID=${id}`);

        // Reference Check (Foreign key integrity)
        // Check if any other table points to this row
        let relationsFound = [];
        for (let tbl in schemas) {
            let s = schemas[tbl];
            if (s.fks) {
                for (let fkCol in s.fks) {
                    if (s.fks[fkCol] === tableName) {
                        let matches = this.tables[tbl].filter(r => r[fkCol] === id);
                        if (matches.length > 0) {
                            relationsFound.push({ tbl, fkCol, count: matches.length });
                        }
                    }
                }
            }
        }

        if (relationsFound.length > 0) {
            // Force CASCADE delete for dependent items to preserve referential integrity
            this.log("info", `Cascading deletes in dependent tables: ${relationsFound.map(rf => `${rf.tbl}(${rf.count} rows)`).join(", ")}`);
            relationsFound.forEach(rf => {
                this.tables[rf.tbl] = this.tables[rf.tbl].filter(r => r[rf.fkCol] !== id);
                this.log("info", `Cascaded deletion of all records in '${rf.tbl}' referencing '${tableName}(${id})'`);
            });
        }

        const deletedRow = rows[index];
        this.tables[tableName].splice(index, 1);
        this.save();

        this.log("info", `Deleted record ID '${id}' from table '${tableName}'`);

        // Trigger updates
        if (tableName === "ratings") {
            this.trg_update_movie_rating(deletedRow.movie_id);
        }

        this.log("transaction", `[TRANSACTION COMMIT] Delete complete in ${tableName.toUpperCase()}`);
        return deletedRow;
    }

    // --- CUSTOM SQL QUERY sandbox ENGINE (Relational Parser) ---
    executeSQL(sql) {
        const startTime = performance.now();
        let query = sql.trim().replace(/\s+/g, ' ');
        if (query.endsWith(';')) query = query.slice(0, -1);
        
        this.log("query", `Executing SQL: ${query}`);
        
        let steps = [];
        
        // Match SELECT query structure
        const selectMatch = query.match(/^SELECT\s+(.+?)\s+FROM\s+(\w+)(.*)/i);
        if (!selectMatch) {
            throw new Error("Syntax Error: Only SELECT queries are supported in the sandbox.");
        }
        
        let selectFieldsRaw = selectMatch[1];
        let baseTableName = selectMatch[2].toLowerCase();
        let restOfQuery = selectMatch[3].trim();
        
        if (!this.tables[baseTableName]) {
            throw new Error(`Table Error: Table '${baseTableName}' does not exist.`);
        }
        
        steps.push(`Table Scan: '${baseTableName}' (${this.tables[baseTableName].length} rows)`);
        
        // Clone base table rows with prefixes to handle joins
        let dataset = this.tables[baseTableName].map(row => {
            let prefixRow = {};
            for (let col in row) {
                prefixRow[`${baseTableName}.${col}`] = row[col];
            }
            return prefixRow;
        });
        
        // 1. Process Joins
        // Matches e.g. JOIN directors ON movies.director_id = directors.id
        const joinRegex = /JOIN\s+(\w+)\s+ON\s+([\w\.]+)\s*=\s*([\w\.]+)/gi;
        let joinMatch;
        let joinedTables = [baseTableName];
        
        while ((joinMatch = joinRegex.exec(restOfQuery)) !== null) {
            let joinTable = joinMatch[1].toLowerCase();
            let colA = joinMatch[2];
            let colB = joinMatch[3];
            
            if (!this.tables[joinTable]) {
                throw new Error(`Table Error: Joined table '${joinTable}' does not exist.`);
            }
            
            steps.push(`Join: Merge '${joinTable}' ON ${colA} = ${colB}`);
            
            let getVal = (row, colRef) => {
                if (colRef.includes('.')) return row[colRef.toLowerCase()];
                for (let k in row) {
                    if (k.endsWith('.' + colRef.toLowerCase())) return row[k];
                }
                return undefined;
            };
            
            let mergedDataset = [];
            for (let bRow of dataset) {
                for (let jRow of this.tables[joinTable]) {
                    // Create joined object
                    let tempRow = { ...bRow };
                    for (let col in jRow) {
                        tempRow[`${joinTable}.${col}`] = jRow[col];
                    }
                    
                    let valA = getVal(tempRow, colA);
                    let valB = getVal(tempRow, colB);
                    
                    if (valA !== undefined && valB !== undefined && String(valA) === String(valB)) {
                        mergedDataset.push(tempRow);
                    }
                }
            }
            dataset = mergedDataset;
            joinedTables.push(joinTable);
        }
        
        // Helper to resolve fields
        let getFieldVal = (row, ref) => {
            let key = ref.toLowerCase().trim();
            if (key.includes('.')) return row[key];
            
            // Search inside keys
            for (let k in row) {
                if (k.endsWith('.' + key)) return row[k];
            }
            return undefined;
        };

        // 2. Process WHERE
        let whereMatch = restOfQuery.match(/WHERE\s+(.+?)(?=\s+GROUP\s+BY|\s+ORDER\s+BY|\s+LIMIT|$)/i);
        if (whereMatch) {
            let whereClause = whereMatch[1].trim();
            steps.push(`Filter: Evaluate WHERE (${whereClause})`);
            
            // Split simple filters by AND (or match simple single expression)
            dataset = dataset.filter(row => {
                let parts = whereClause.split(/\s+AND\s+/i);
                return parts.every(part => {
                    let opMatch = part.match(/(.+?)\s*(=|>|<|LIKE)\s*(.+)/i);
                    if (!opMatch) return true;
                    
                    let left = opMatch[1].trim();
                    let op = opMatch[2].toUpperCase();
                    let right = opMatch[3].trim();
                    
                    let getValConstant = (valStr) => {
                        if (valStr.startsWith("'") && valStr.endsWith("'")) return valStr.slice(1, -1);
                        if (valStr.startsWith('"') && valStr.endsWith('"')) return valStr.slice(1, -1);
                        if (!isNaN(valStr)) return Number(valStr);
                        return getFieldVal(row, valStr);
                    };
                    
                    let leftVal = getFieldVal(row, left);
                    let rightVal = getValConstant(right);
                    
                    if (leftVal === undefined) return false;
                    
                    if (op === '=') return String(leftVal) === String(rightVal);
                    if (op === '>') return Number(leftVal) > Number(rightVal);
                    if (op === '<') return Number(leftVal) < Number(rightVal);
                    if (op === 'LIKE') {
                        let regexStr = "^" + String(rightVal).replace(/%/g, ".*") + "$";
                        return new RegExp(regexStr, "i").test(String(leftVal));
                    }
                    return true;
                });
            });
        }
        
        // 3. Process GROUP BY & Aggregation
        let groupByCol = "";
        let isAggregated = false;
        const groupByMatch = restOfQuery.match(/GROUP\s+BY\s+([\w\.]+)/i);
        if (groupByMatch) {
            groupByCol = groupByMatch[1];
            steps.push(`Group By: Aggregate groups on '${groupByCol}'`);
            isAggregated = true;
            
            let groups = {};
            for (let row of dataset) {
                let grpVal = getFieldVal(row, groupByCol);
                if (!groups[grpVal]) groups[grpVal] = [];
                groups[grpVal].push(row);
            }
            
            let aggregatedList = [];
            for (let val in groups) {
                let grp = groups[val];
                let rep = { ...grp[0] };
                rep["_group_rows"] = grp;
                aggregatedList.push(rep);
            }
            dataset = aggregatedList;
        }
        
        // 4. Process ORDER BY
        const orderByMatch = restOfQuery.match(/ORDER\s+BY\s+([\w\(\)\*]+)(?:\s+(ASC|DESC))?/i);
        if (orderByMatch) {
            let orderByCol = orderByMatch[1];
            let dir = (orderByMatch[2] || "ASC").toUpperCase();
            steps.push(`Sort: Sort records by '${orderByCol}' ${dir}`);
            
            dataset.sort((a, b) => {
                let valA, valB;
                if (orderByCol.toLowerCase().startsWith("count")) {
                    valA = a["_group_rows"] ? a["_group_rows"].length : 0;
                    valB = b["_group_rows"] ? b["_group_rows"].length : 0;
                } else {
                    valA = getFieldVal(a, orderByCol);
                    valB = getFieldVal(b, orderByCol);
                }
                
                if (!isNaN(valA) && !isNaN(valB) && valA !== "" && valB !== "") {
                    return dir === "ASC" ? Number(valA) - Number(valB) : Number(valB) - Number(valA);
                }
                valA = String(valA || "");
                valB = String(valB || "");
                return dir === "ASC" ? valA.localeCompare(valB) : valB.localeCompare(valA);
            });
        }
        
        // 5. Process LIMIT
        const limitMatch = restOfQuery.match(/LIMIT\s+(\d+)/i);
        if (limitMatch) {
            let limit = parseInt(limitMatch[1]);
            steps.push(`Limit: Filter top ${limit} rows`);
            dataset = dataset.slice(0, limit);
        }
        
        // 6. Project fields
        let columns = [];
        let selectFields = selectFieldsRaw.split(",").map(s => s.trim());
        
        if (selectFields.length === 1 && selectFields[0] === "*") {
            for (let t of joinedTables) {
                for (let col in this.tables[t][0] || {}) {
                    columns.push(`${t}.${col}`);
                }
            }
        } else {
            columns = selectFields.map(f => {
                let aliasMatch = f.match(/(.+?)\s+AS\s+(\w+)/i);
                if (aliasMatch) return aliasMatch[2];
                return f;
            });
        }
        
        let projectedRows = dataset.map(row => {
            let projRow = {};
            selectFields.forEach((field, index) => {
                let colHeader = columns[index];
                let actualField = field;
                let aliasMatch = field.match(/(.+?)\s+AS\s+(\w+)/i);
                if (aliasMatch) actualField = aliasMatch[1].trim();
                
                if (actualField.toLowerCase() === "count(*)") {
                    projRow[colHeader] = row["_group_rows"] ? row["_group_rows"].length : 1;
                } else if (actualField.toLowerCase().startsWith("avg(")) {
                    let colName = actualField.match(/avg\((.+?)\)/i)[1];
                    let group = row["_group_rows"] || [row];
                    let total = group.reduce((sum, r) => sum + Number(getFieldVal(r, colName) || 0), 0);
                    projRow[colHeader] = group.length ? parseFloat((total / group.length).toFixed(2)) : 0;
                } else {
                    projRow[colHeader] = getFieldVal(row, actualField);
                }
            });
            return projRow;
        });
        
        const executionTime = (performance.now() - startTime).toFixed(2);
        
        return {
            columns: columns,
            rows: projectedRows,
            executionTime: executionTime,
            queryPlan: steps.join(" ➔ ")
        };
    }

    // --- STORED PROCEDURES & RELATIONAL VIEWS ---
    
    // Procedure 1: Generate recommendations for a user based on their highly rated genres
    sp_generate_recommendations(userId) {
        this.log("info", `Stored Procedure: sp_generate_recommendations called for user ID: ${userId}`);
        
        // Find user ratings >= 4
        const userRatings = this.tables.ratings.filter(r => r.user_id === userId && r.rating_value >= 4);
        if (userRatings.length === 0) {
            return {
                status: "Success",
                userId: userId,
                msg: "No high-rated films logged yet to base recommendations on. Returning top average rated films instead.",
                results: [...this.tables.movies].sort((a,b) => b.avg_rating - a.avg_rating).slice(0, 3)
            };
        }

        // Get genres from these high rated movies
        const highRatedMovieIds = userRatings.map(r => r.movie_id);
        const favoriteGenres = new Set();
        this.tables.movie_genres.forEach(mg => {
            if (highRatedMovieIds.includes(mg.movie_id)) {
                favoriteGenres.add(mg.genre_id);
            }
        });

        // Find movies with these genres that the user hasn't rated yet
        const ratedMovieIds = this.tables.ratings.filter(r => r.user_id === userId).map(r => r.movie_id);
        const recommendedMovieIds = new Set();
        this.tables.movie_genres.forEach(mg => {
            if (favoriteGenres.has(mg.genre_id) && !ratedMovieIds.includes(mg.movie_id)) {
                recommendedMovieIds.add(mg.movie_id);
            }
        });

        const recMovies = this.tables.movies.filter(m => recommendedMovieIds.has(m.id))
            .sort((a, b) => b.avg_rating - a.avg_rating)
            .slice(0, 4);

        return {
            status: "Success",
            userId: userId,
            favGenresCount: favoriteGenres.size,
            recommendedCount: recMovies.length,
            results: recMovies
        };
    }

    // Procedure 2: User engagement stats
    sp_user_analytics(userId) {
        this.log("info", `Stored Procedure: sp_user_analytics called for user ID: ${userId}`);
        
        const ratings = this.tables.ratings.filter(r => r.user_id === userId);
        const reviews = this.tables.reviews.filter(r => r.user_id === userId);
        const watchlist = this.tables.watchlists.filter(w => w.user_id === userId);
        const lists = this.tables.lists.filter(l => l.user_id === userId);
        const followers = this.tables.followers.filter(f => f.followed_user_id === userId);
        const following = this.tables.followers.filter(f => f.follower_user_id === userId);

        const avgRating = ratings.length > 0 ? (ratings.reduce((sum, r) => sum + r.rating_value, 0) / ratings.length).toFixed(2) : "0.00";

        // Find favorite genre
        const movieIds = ratings.map(r => r.movie_id);
        const genreCounts = {};
        this.tables.movie_genres.forEach(mg => {
            if (movieIds.includes(mg.movie_id)) {
                genreCounts[mg.genre_id] = (genreCounts[mg.genre_id] || 0) + 1;
            }
        });
        let favGenreId = "";
        let maxGenreCount = 0;
        for (let gId in genreCounts) {
            if (genreCounts[gId] > maxGenreCount) {
                maxGenreCount = genreCounts[gId];
                favGenreId = gId;
            }
        }
        const genreObj = this.tables.genres.find(g => g.id === favGenreId);
        const favGenre = genreObj ? genreObj.name : "None";

        // Find favorite director (most movies watched)
        const directorCounts = {};
        ratings.forEach(r => {
            let m = this.tables.movies.find(mv => mv.id === r.movie_id);
            if (m) {
                directorCounts[m.director_id] = (directorCounts[m.director_id] || 0) + 1;
            }
        });
        let favDirectorId = "";
        let maxDirCount = 0;
        for (let dId in directorCounts) {
            if (directorCounts[dId] > maxDirCount) {
                maxDirCount = directorCounts[dId];
                favDirectorId = dId;
            }
        }
        const dirObj = this.tables.directors.find(d => d.id === favDirectorId);
        const favDirector = dirObj ? dirObj.name : "None";

        return {
            status: "Success",
            userId: userId,
            metrics: {
                totalWatched: ratings.length,
                totalReviews: reviews.length,
                watchlistCount: watchlist.length,
                customListsCount: lists.length,
                averageRatingGiven: avgRating,
                followersCount: followers.length,
                followingCount: following.length,
                favoriteGenre: favGenre,
                favoriteDirector: favDirector
            }
        };
    }

    // View 1: Movie Awards Overview
    vw_movie_awards() {
        this.log("info", "Querying View: vw_movie_awards");
        
        // Merges movies, directors, and lists their award counts
        return this.tables.movies.map(movie => {
            const dir = this.tables.directors.find(d => d.id === movie.director_id);
            const awardCount = this.tables.awards.filter(a => a.movie_id === movie.id).length;
            
            return {
                movie_title: movie.title,
                release_year: movie.year,
                director: dir ? dir.name : "Unknown",
                awards_won: awardCount,
                avg_rating: movie.avg_rating
            };
        }).sort((a,b) => b.awards_won - a.awards_won);
    }
}

// Instantiate database system globally
const db = new CineArchiveDB();

// 3. SPA STATE WRAPPER (Binds relational queries to UI)
const state = {
    // Current active user object resolved from DB
    getActiveUser: () => db.tables.users.find(u => u.id === db.activeUserId),
    
    // Getter list wrappers mapping joints
    getMovies: () => db.tables.movies,
    getReviews: () => db.tables.reviews,
    getLists: () => db.tables.lists,
    getWatchlists: () => db.tables.watchlists,
    getComments: () => db.tables.comments,
    getFollowers: () => db.tables.followers,
    getNotifications: () => db.tables.notifications
};

// 4. CORE CONTROLLER & TAB ROUTER
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll(".tab-content");
    const logoBtn = document.getElementById("nav-logo");

    // SPA View Router
    function switchTab(tabId) {
        navItems.forEach(item => {
            if (item.getAttribute("data-tab") === tabId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        tabContents.forEach(tab => {
            if (tab.id === `${tabId}-tab`) {
                tab.classList.remove("hidden");
                tab.classList.add("active");
            } else {
                tab.classList.add("hidden");
                tab.classList.remove("active");
            }
        });

        renderTab(tabId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switchTab(item.getAttribute("data-tab"));
        });
    });

    document.body.addEventListener("click", (e) => {
        const redirectBtn = e.target.closest(".nav-redirect-btn");
        if (redirectBtn) {
            e.preventDefault();
            switchTab(redirectBtn.getAttribute("data-target"));
        }
    });

    logoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("home");
    });

    // Subagent components initializer
    initLogModal();
    initDetailModal();
    initListModal();
    initSearch();
    initAdminConsole();
    updateUnreadNotifyCount();

    // Default trigger
    switchTab("home");
}

// Refresh notification indicator
function updateUnreadNotifyCount() {
    const user = state.getActiveUser();
    const unreads = db.tables.notifications.filter(n => n.user_id === user.id && !n.is_read).length;
    const badge = document.getElementById("profile-notify-badge");
    if (badge) {
        badge.textContent = unreads;
        if (unreads === 0) badge.classList.add("hidden");
        else badge.classList.remove("hidden");
    }
}

// TAB SELECTIVE RENDERING
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
        case "admin":
            renderAdminDashboard();
            break;
    }
}

function updateGlobalStats() {
    const totalFilms = db.tables.movies.length;
    const user = state.getActiveUser();
    
    const watchedCount = db.tables.ratings.filter(r => r.user_id === user.id).length;
    const reviewCount = db.tables.reviews.filter(r => r.user_id === user.id && r.review_text.trim() !== "").length;
    const awardsCount = db.tables.awards.length;

    const totalFilmsEl = document.getElementById("stat-total-films");
    const totalLogsEl = document.getElementById("stat-total-logs");
    const totalReviewsEl = document.getElementById("stat-total-reviews");
    const totalAwardsEl = document.getElementById("stat-total-awards");

    if (totalFilmsEl) totalFilmsEl.textContent = totalFilms;
    if (totalLogsEl) totalLogsEl.textContent = watchedCount;
    if (totalReviewsEl) totalReviewsEl.textContent = reviewCount;
    if (totalAwardsEl) totalAwardsEl.textContent = awardsCount;
}

// 5. HOME PAGE DISPLAY RENDERER
function renderHomeGrid() {
    const filmsGrid = document.getElementById("popular-films-grid");
    const listsGrid = document.getElementById("popular-lists-grid");
    const reviewsList = document.getElementById("home-reviews-list");

    if (!filmsGrid || !listsGrid || !reviewsList) return;

    // Relational sorting on Movies
    const popularFilms = [...db.tables.movies].sort((a, b) => b.likes_count - a.likes_count).slice(0, 6);
    filmsGrid.innerHTML = popularFilms.map(film => createFilmCardHtml(film)).join("");

    // Lists limit 2
    listsGrid.innerHTML = db.tables.lists.slice(0, 2).map(list => createListCardHtml(list)).join("");

    // Recent Reviews with JOIN simulation (Reviews + Users + Movies)
    const recentReviews = [...db.tables.reviews].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 3);
    reviewsList.innerHTML = recentReviews.map(rev => {
        const film = db.tables.movies.find(f => f.id === rev.movie_id);
        const userObj = db.tables.users.find(u => u.id === rev.user_id);
        if (!film) return "";
        return `
            <div class="compact-review-item">
                <div class="compact-review-header">
                    <span class="compact-review-title film-detail-trigger" data-id="${film.id}">${film.title}</span>
                    <span class="compact-review-stars">${getStarsHtml(getRatingForUser(rev.user_id, film.id))}</span>
                </div>
                <p class="compact-review-text">${rev.review_text}</p>
                <div class="compact-review-user">by @${userObj ? userObj.username : "anonymous"}</div>
            </div>
        `;
    }).join("");
}

// Helper: Get user's rating value for a movie
function getRatingForUser(userId, movieId) {
    const rt = db.tables.ratings.find(r => r.user_id === userId && r.movie_id === movieId);
    return rt ? rt.rating_value : 0;
}

// 6. FILMS CATALOG & ADVANCED FILTERS
function renderFilmsCatalog() {
    const catalogGrid = document.getElementById("films-catalog-grid");
    const genreSelect = document.getElementById("filter-genre");
    const directorSelect = document.getElementById("filter-director");
    const languageSelect = document.getElementById("filter-language");
    const countrySelect = document.getElementById("filter-country");
    const yearSelect = document.getElementById("filter-year");
    const awardsSelect = document.getElementById("filter-awards");
    const ratingSelect = document.getElementById("filter-rating");
    const sortSelect = document.getElementById("sort-films");

    if (!catalogGrid) return;

    // Gather unique elements for dropdowns
    const allGenres = [...db.tables.genres];
    const allDirectors = [...db.tables.directors];
    
    const uniqueLanguages = new Set();
    const uniqueCountries = new Set();
    db.tables.movies.forEach(m => {
        uniqueLanguages.add(m.language);
        uniqueCountries.add(m.country);
    });

    // Populate advanced filter options while preserving selections
    const curGenre = genreSelect.value || "all";
    genreSelect.innerHTML = `<option value="all">All Genres</option>` + 
        allGenres.map(g => `<option value="${g.id}" ${g.id === curGenre ? "selected" : ""}>${g.name}</option>`).join("");

    const curDir = directorSelect.value || "all";
    directorSelect.innerHTML = `<option value="all">All Directors</option>` +
        allDirectors.map(d => `<option value="${d.id}" ${d.id === curDir ? "selected" : ""}>${d.name}</option>`).join("");

    const curLang = languageSelect.value || "all";
    languageSelect.innerHTML = `<option value="all">All Languages</option>` +
        Array.from(uniqueLanguages).sort().map(l => `<option value="${l}" ${l === curLang ? "selected" : ""}>${l}</option>`).join("");

    const curCountry = countrySelect.value || "all";
    countrySelect.innerHTML = `<option value="all">All Countries</option>` +
        Array.from(uniqueCountries).sort().map(c => `<option value="${c}" ${c === curCountry ? "selected" : ""}>${c}</option>`).join("");

    function applyFilters() {
        let filtered = [...db.tables.movies];

        // 1. Genre filter (junction join)
        const selectedGenre = genreSelect.value;
        if (selectedGenre !== "all") {
            const movieIdsInGenre = db.tables.movie_genres.filter(mg => mg.genre_id === selectedGenre).map(mg => mg.movie_id);
            filtered = filtered.filter(m => movieIdsInGenre.includes(m.id));
        }

        // 2. Director filter
        const selectedDir = directorSelect.value;
        if (selectedDir !== "all") {
            filtered = filtered.filter(m => m.director_id === selectedDir);
        }

        // 3. Language filter
        const selectedLang = languageSelect.value;
        if (selectedLang !== "all") {
            filtered = filtered.filter(m => m.language === selectedLang);
        }

        // 4. Country filter
        const selectedCountry = countrySelect.value;
        if (selectedCountry !== "all") {
            filtered = filtered.filter(m => m.country === selectedCountry);
        }

        // 5. Year Range filter
        const selectedYearRange = yearSelect.value;
        if (selectedYearRange !== "all") {
            filtered = filtered.filter(m => {
                if (selectedYearRange === "2020s") return m.year >= 2020;
                if (selectedYearRange === "2010s") return m.year >= 2010 && m.year <= 2019;
                if (selectedYearRange === "2000s") return m.year >= 2000 && m.year <= 2009;
                if (selectedYearRange === "1990s") return m.year >= 1990 && m.year <= 1999;
                return true;
            });
        }

        // 6. Awards filter (has won any award)
        const selectedAwards = awardsSelect.value;
        if (selectedAwards === "won") {
            const awardWinningMovieIds = db.tables.awards.map(a => a.movie_id);
            filtered = filtered.filter(m => awardWinningMovieIds.includes(m.id));
        }

        // 7. Min Rating filter
        const selectedRating = parseFloat(ratingSelect.value || "0");
        if (selectedRating > 0) {
            filtered = filtered.filter(m => m.avg_rating >= selectedRating);
        }

        // 8. Sorting
        const sortVal = sortSelect.value;
        if (sortVal === "popularity") {
            filtered.sort((a,b) => b.likes_count - a.likes_count);
        } else if (sortVal === "rating") {
            filtered.sort((a,b) => b.avg_rating - a.avg_rating);
        } else if (sortVal === "year-desc") {
            filtered.sort((a,b) => b.year - a.year);
        } else if (sortVal === "year-asc") {
            filtered.sort((a,b) => a.year - b.year);
        }

        if (filtered.length === 0) {
            catalogGrid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-color);">No films match your criteria. Expand filters to explore!</div>`;
        } else {
            catalogGrid.innerHTML = filtered.map(m => createFilmCardHtml(m)).join("");
        }
    }

    // Attach callbacks
    [genreSelect, directorSelect, languageSelect, countrySelect, yearSelect, awardsSelect, ratingSelect, sortSelect].forEach(select => {
        select.onchange = applyFilters;
    });

    applyFilters();
}

// 7. COMMUNITY REVIEWS TIMELINE FEED
function renderReviewsFeed() {
    const feedContainer = document.getElementById("full-reviews-feed");
    const sidebarReviewed = document.getElementById("sidebar-reviewed-count");
    const sidebarAvg = document.getElementById("sidebar-avg-rating");
    const sidebarLikes = document.getElementById("sidebar-likes-count");

    if (!feedContainer) return;

    // Filter reviews (only text reviews)
    const textReviews = db.tables.reviews.filter(r => r.review_text.trim() !== "");
    const currentUser = state.getActiveUser();

    if (textReviews.length === 0) {
        feedContainer.innerHTML = `<div class="no-results">No reviews have been written yet. Be the first to review!</div>`;
    } else {
        const sortedReviews = [...textReviews].sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
        feedContainer.innerHTML = sortedReviews.map(rev => {
            const film = db.tables.movies.find(m => m.id === rev.movie_id);
            const author = db.tables.users.find(u => u.id === rev.user_id);
            if (!film || !author) return "";

            const isUserReview = rev.user_id === currentUser.id;
            
            // Check follow relation
            const isFollowingAuthor = db.tables.followers.some(f => f.follower_user_id === currentUser.id && f.followed_user_id === author.id);
            const followBtnHtml = isUserReview ? "" : `
                <button class="connection-action-btn follow-feed-btn ${isFollowingAuthor ? "unfollow" : ""}" data-author-id="${author.id}">
                    ${isFollowingAuthor ? "Unfollow" : "Follow"}
                </button>
            `;

            // Pull comment count for this review
            const comms = db.tables.comments.filter(c => c.review_id === rev.id);

            return `
                <div class="review-card" data-rev-id="${rev.id}">
                    <img class="review-card-poster film-detail-trigger" src="${film.poster}" alt="${film.title}" data-id="${film.id}">
                    <div class="review-card-body">
                        <div class="review-card-header">
                            <div class="review-film-info">
                                <h3><a href="#" class="film-detail-trigger" data-id="${film.id}">${film.title}</a> <span>(${film.year})</span></h3>
                                <div class="review-user-info" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                    <span class="review-user-avatar"><i class="fa-solid fa-user-astronaut"></i></span>
                                    <span class="review-username" style="color: var(--color-blue); font-weight: 600;">@${author.username}</span>
                                    ${followBtnHtml}
                                    <span class="review-date">on ${formatDate(rev.created_at)}</span>
                                </div>
                            </div>
                            <div class="review-stars">
                                ${getStarsHtml(getRatingForUser(author.id, film.id))}
                            </div>
                        </div>
                        <p class="review-card-text">${rev.review_text}</p>
                        
                        <div class="review-card-footer" style="display: flex; gap: 12px; align-items: center; margin-top: 10px;">
                            <button class="like-button-action" style="background: transparent; color: var(--text-color); cursor: default;">
                                <i class="fa-solid fa-heart text-danger"></i> <span>${rev.likes_count} Likes</span>
                            </button>
                            <button class="comments-toggle-btn" data-rev-id="${rev.id}">
                                <i class="fa-regular fa-comment"></i> Comments (${comms.length})
                            </button>
                            ${isUserReview ? `<button class="review-delete-btn" data-rev-id="${rev.id}"><i class="fa-solid fa-trash-can"></i> Delete</button>` : ""}
                        </div>

                        <!-- Nested Comment Section (Hidden by default) -->
                        <div class="comments-section-container hidden" id="comments-box-${rev.id}">
                            <div class="comments-list-box" id="comments-list-${rev.id}">
                                <!-- Loaded dynamically -->
                            </div>
                            <form class="comment-form" data-rev-id="${rev.id}">
                                <input type="text" placeholder="Write a comment..." class="comment-input" required>
                                <button type="submit" class="comment-submit-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        // Attach event listeners
        attachFeedActionListeners(feedContainer);
    }

    // Sidebar aggregate values (User profile metrics)
    const statsResult = db.sp_user_analytics(currentUser.id);
    if (statsResult.status === "Success") {
        const m = statsResult.metrics;
        if (sidebarReviewed) sidebarReviewed.textContent = m.totalWatched;
        if (sidebarAvg) sidebarAvg.textContent = `${m.averageRatingGiven} ★`;
        if (sidebarLikes) {
            const likedCount = db.tables.ratings.filter(r => r.user_id === currentUser.id && r.rating_value === 5).length;
            sidebarLikes.innerHTML = `${likedCount} <i class="fa-solid fa-heart text-danger"></i>`;
        }
    }
}

function attachFeedActionListeners(container) {
    const currentUser = state.getActiveUser();

    // Comment panel toggles
    container.querySelectorAll(".comments-toggle-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const revId = btn.getAttribute("data-rev-id");
            const box = document.getElementById(`comments-box-${revId}`);
            if (box) {
                box.classList.toggle("hidden");
                if (!box.classList.contains("hidden")) {
                    renderReviewComments(revId);
                }
            }
        };
    });

    // Comment form submissions
    container.querySelectorAll(".comment-form").forEach(form => {
        form.onsubmit = (e) => {
            e.preventDefault();
            const revId = form.getAttribute("data-rev-id");
            const input = form.querySelector(".comment-input");
            const commentText = input.value.trim();
            if (!commentText) return;

            try {
                db.insertRow("comments", {
                    review_id: revId,
                    user_id: currentUser.id,
                    comment_text: commentText,
                    created_at: new Date().toISOString().split("T")[0]
                });
                input.value = "";
                renderReviewComments(revId);
                
                // Rerender feed review comment counts
                const comms = db.tables.comments.filter(c => c.review_id === revId);
                const countBtn = form.closest(".review-card").querySelector(".comments-toggle-btn");
                if (countBtn) countBtn.innerHTML = `<i class="fa-regular fa-comment"></i> Comments (${comms.length})`;
            } catch (err) {
                alert(err.message);
            }
        };
    });

    // Follow / Unfollow feed button
    container.querySelectorAll(".follow-feed-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const authorId = btn.getAttribute("data-author-id");
            const followerId = currentUser.id;

            const existingIndex = db.tables.followers.findIndex(f => f.follower_user_id === followerId && f.followed_user_id === authorId);
            if (existingIndex !== -1) {
                // Unfollow
                const row = db.tables.followers[existingIndex];
                db.deleteRow("followers", row.id);
            } else {
                // Follow
                db.insertRow("followers", {
                    follower_user_id: followerId,
                    followed_user_id: authorId,
                    followed_at: new Date().toISOString().split("T")[0]
                });
            }
            renderReviewsFeed();
        };
    });

    // Delete review
    container.querySelectorAll(".review-delete-btn").forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            const revId = btn.getAttribute("data-rev-id");
            const confirmed = confirm("Are you sure you want to delete this log entry and review?");
            if (confirmed) {
                try {
                    db.deleteRow("reviews", revId);
                    renderReviewsFeed();
                } catch (err) {
                    alert(err.message);
                }
            }
        };
    });
}

function renderReviewComments(reviewId) {
    const listContainer = document.getElementById(`comments-list-${reviewId}`);
    if (!listContainer) return;

    const comms = db.tables.comments.filter(c => c.review_id === reviewId);
    if (comms.length === 0) {
        listContainer.innerHTML = `<div style="font-size:12px; color:var(--text-color); font-style:italic;">No comments yet.</div>`;
    } else {
        listContainer.innerHTML = comms.map(c => {
            const userObj = db.tables.users.find(u => u.id === c.user_id);
            return `
                <div class="comment-item">
                    <div class="comment-item-header">
                        <span class="comment-item-user">@${userObj ? userObj.username : "anonymous"}</span>
                        <span>${formatDate(c.created_at)}</span>
                    </div>
                    <p class="comment-item-text">${c.comment_text}</p>
                </div>
            `;
        }).join("");
    }
}

// 8. LISTS RENDERER
function renderListsCatalog() {
    const catalog = document.getElementById("lists-catalog-grid");
    if (!catalog) return;

    catalog.innerHTML = db.tables.lists.map(list => createListCardHtml(list)).join("");
}

// 9. PROFILE VIEW
function renderProfileView() {
    const user = state.getActiveUser();
    document.getElementById("profile-username").textContent = user.username;
    
    // Set bio
    const bioText = document.querySelector(".profile-bio");
    if (bioText) bioText.textContent = user.bio;

    // Load metrics
    const statsResult = db.sp_user_analytics(user.id);
    if (statsResult.status === "Success") {
        const m = statsResult.metrics;
        document.getElementById("profile-watched-count").textContent = m.totalWatched;
        document.getElementById("profile-watchlist-count").textContent = m.watchlistCount;
        document.getElementById("profile-likes-count").textContent = db.tables.ratings.filter(r => r.user_id === user.id && r.rating_value === 5).length;
        document.getElementById("profile-lists-count").textContent = m.customListsCount;
    }

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
    const user = state.getActiveUser();
    const diarySec = document.getElementById("profile-diary-section");
    const watchlistSec = document.getElementById("profile-watchlist-section");
    const likesSec = document.getElementById("profile-likes-section");
    const mylistsSec = document.getElementById("profile-mylists-section");
    const connectionsSec = document.getElementById("profile-connections-section");
    const notificationsSec = document.getElementById("profile-notifications-section");

    // Hide all
    [diarySec, watchlistSec, likesSec, mylistsSec, connectionsSec, notificationsSec].forEach(el => el.classList.add("hidden"));

    if (section === "diary") {
        diarySec.classList.remove("hidden");
        const tbody = document.getElementById("profile-diary-table-body");
        
        // Relational JOIN of ratings + reviews + movies
        const userRatings = db.tables.ratings.filter(r => r.user_id === user.id);
        const sortedLogs = [...userRatings].sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

        if (sortedLogs.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No logs in your diary yet. Start logging movies!</td></tr>`;
        } else {
            tbody.innerHTML = sortedLogs.map(log => {
                const film = db.tables.movies.find(f => f.id === log.movie_id);
                if (!film) return "";
                
                // Check if text review exists
                const rev = db.tables.reviews.find(r => r.user_id === user.id && r.movie_id === log.movie_id);
                const reviewText = rev ? rev.review_text : "";
                const isLiked = log.rating_value === 5; // 5 stars represents liked

                return `
                    <tr>
                        <td class="diary-date">${log.created_at}</td>
                        <td class="diary-film-title film-detail-trigger" data-id="${film.id}">${film.title}</td>
                        <td class="diary-year">${film.year}</td>
                        <td class="diary-stars">${getStarsHtml(log.rating_value)}</td>
                        <td>${isLiked ? '<i class="fa-solid fa-heart diary-heart"></i>' : '—'}</td>
                        <td class="diary-review-snippet">${reviewText || '—'}</td>
                        <td>
                            <button class="diary-action-delete" data-rating-id="${log.id}"><i class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                `;
            }).join("");

            tbody.querySelectorAll(".diary-action-delete").forEach(btn => {
                btn.onclick = () => {
                    const ratingId = btn.getAttribute("data-rating-id");
                    const rating = db.tables.ratings.find(r => r.id === ratingId);
                    if (rating && confirm("Remove this entry from your diary?")) {
                        try {
                            // Find corresponding review if exists
                            const rev = db.tables.reviews.find(r => r.user_id === user.id && r.movie_id === rating.movie_id);
                            if (rev) db.deleteRow("reviews", rev.id);
                            
                            db.deleteRow("ratings", ratingId);
                            renderProfileView();
                        } catch (err) {
                            alert(err.message);
                        }
                    }
                };
            });
        }
    } 
    else if (section === "watchlist") {
        watchlistSec.classList.remove("hidden");
        const grid = document.getElementById("profile-watchlist-grid");
        const listItems = db.tables.watchlists.filter(w => w.user_id === user.id);
        const watchlistFilms = db.tables.movies.filter(m => listItems.some(w => w.movie_id === m.id));

        if (watchlistFilms.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color); padding: 20px;">Your watchlist is empty.</div>`;
        } else {
            grid.innerHTML = watchlistFilms.map(f => createFilmCardHtml(f)).join("");
        }
    } 
    else if (section === "likes") {
        likesSec.classList.remove("hidden");
        const grid = document.getElementById("profile-likes-grid");
        // Liked films are films rated 5 stars
        const likedIds = db.tables.ratings.filter(r => r.user_id === user.id && r.rating_value === 5).map(r => r.movie_id);
        const likedFilms = db.tables.movies.filter(m => likedIds.includes(m.id));

        if (likedFilms.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color); padding: 20px;">You haven't liked any films yet (films rated 5★).</div>`;
        } else {
            grid.innerHTML = likedFilms.map(f => createFilmCardHtml(f)).join("");
        }
    } 
    else if (section === "mylists") {
        mylistsSec.classList.remove("hidden");
        const grid = document.getElementById("profile-mylists-grid");
        const myLists = db.tables.lists.filter(l => l.user_id === user.id);

        if (myLists.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-color); padding: 20px;">You haven't created any movie lists yet.</div>`;
        } else {
            grid.innerHTML = myLists.map(list => createListCardHtml(list)).join("");
        }
    }
    else if (section === "connections") {
        connectionsSec.classList.remove("hidden");
        const followingList = document.getElementById("profile-following-list");
        const followersList = document.getElementById("profile-followers-list");

        // Relational joints for following / followers
        const following = db.tables.followers.filter(f => f.follower_user_id === user.id);
        const followers = db.tables.followers.filter(f => f.followed_user_id === user.id);

        if (following.length === 0) {
            followingList.innerHTML = `<div style="font-size:13px; color:var(--text-color); font-style:italic;">You aren't following anyone yet.</div>`;
        } else {
            followingList.innerHTML = following.map(row => {
                const targetUser = db.tables.users.find(u => u.id === row.followed_user_id);
                const uName = targetUser ? targetUser.username : "anonymous";
                return `
                    <div class="connection-user-item">
                        <div class="connection-user-info">
                            <span class="connection-user-avatar"><i class="fa-solid fa-user"></i></span>
                            <span class="connection-username">@${uName}</span>
                        </div>
                        <button class="connection-action-btn unfollow" data-follow-id="${row.id}">Unfollow</button>
                    </div>
                `;
            }).join("");

            followingList.querySelectorAll(".unfollow").forEach(btn => {
                btn.onclick = () => {
                    const fId = btn.getAttribute("data-follow-id");
                    db.deleteRow("followers", fId);
                    renderProfileSection("connections");
                };
            });
        }

        if (followers.length === 0) {
            followersList.innerHTML = `<div style="font-size:13px; color:var(--text-color); font-style:italic;">No followers yet.</div>`;
        } else {
            followersList.innerHTML = followers.map(row => {
                const targetUser = db.tables.users.find(u => u.id === row.follower_user_id);
                const uName = targetUser ? targetUser.username : "anonymous";
                return `
                    <div class="connection-user-item">
                        <div class="connection-user-info">
                            <span class="connection-user-avatar"><i class="fa-solid fa-user"></i></span>
                            <span class="connection-username">@${uName}</span>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }
    else if (section === "notifications") {
        notificationsSec.classList.remove("hidden");
        const list = document.getElementById("profile-notifications-list");
        const userNotifies = db.tables.notifications.filter(n => n.user_id === user.id);

        if (userNotifies.length === 0) {
            list.innerHTML = `<div style="text-align: center; color: var(--text-color); padding: 40px;">No notifications yet.</div>`;
        } else {
            list.innerHTML = userNotifies.map(n => {
                const unreadClass = n.is_read ? "" : "unread";
                const checkIcon = n.is_read ? "fa-solid fa-envelope-open" : "fa-solid fa-envelope";
                
                return `
                    <div class="notification-item ${unreadClass}">
                        <div class="notification-content">
                            <i class="${checkIcon} notification-icon"></i>
                            <div>
                                <span>${n.message}</span>
                                <span class="notification-time">${formatDate(n.created_at)}</span>
                            </div>
                        </div>
                        <div class="notification-actions">
                            ${!n.is_read ? `<button class="notification-btn mark-read" data-notify-id="${n.id}" title="Mark as Read"><i class="fa-solid fa-check"></i></button>` : ""}
                            <button class="notification-btn dismiss" data-notify-id="${n.id}" title="Delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                `;
            }).join("");

            list.querySelectorAll(".mark-read").forEach(btn => {
                btn.onclick = () => {
                    const nId = btn.getAttribute("data-notify-id");
                    db.updateRow("notifications", nId, { is_read: true });
                    renderProfileSection("notifications");
                    updateUnreadNotifyCount();
                };
            });

            list.querySelectorAll(".dismiss").forEach(btn => {
                btn.onclick = () => {
                    const nId = btn.getAttribute("data-notify-id");
                    db.deleteRow("notifications", nId);
                    renderProfileSection("notifications");
                    updateUnreadNotifyCount();
                };
            });
        }
    }
}

// 10. DIALOG LOG FILM MODAL
function initLogModal() {
    const modal = document.getElementById("log-modal");
    const triggers = document.querySelectorAll(".log-btn-trigger");
    const closeBtn = document.getElementById("log-modal-close");
    const cancelBtn = document.getElementById("log-modal-cancel");
    const form = document.getElementById("log-film-form");
    const filmSelect = document.getElementById("log-film-select");
    const dateInput = document.getElementById("log-date");
    
    const starContainer = document.getElementById("modal-star-rating");
    const stars = starContainer.querySelectorAll(".rating-star");
    const ratingInput = document.getElementById("log-rating-value");

    function populateDropdownOptions() {
        const sortedOpts = [...db.tables.movies].sort((a,b) => a.title.localeCompare(b.title));
        filmSelect.innerHTML = `<option value="" disabled selected>Choose a film to log...</option>` +
            sortedOpts.map(m => `<option value="${m.id}">${m.title} (${m.year})</option>`).join("");
    }

    function openModal() {
        populateDropdownOptions();
        form.reset();
        ratingInput.value = "0";
        resetStarsVisual();
        dateInput.value = new Date().toISOString().split("T")[0];
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
    }

    triggers.forEach(t => t.onclick = (e) => { e.preventDefault(); openModal(); });
    closeBtn.onclick = closeModal;
    cancelBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    stars.forEach(star => {
        star.onmouseenter = () => {
            const val = parseInt(star.getAttribute("data-rating"));
            highlightStarsVisual(val);
        };
        starContainer.onmouseleave = () => {
            const val = parseInt(ratingInput.value);
            highlightStarsVisual(val);
        };
        star.onclick = () => {
            const val = parseInt(star.getAttribute("data-rating"));
            ratingInput.value = val;
            highlightStarsVisual(val);
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

    form.onsubmit = (e) => {
        e.preventDefault();
        const movieId = filmSelect.value;
        const rating = parseInt(ratingInput.value);
        const reviewText = document.getElementById("log-review-text").value.trim();
        const liked = document.getElementById("log-like-checkbox").checked;
        const watchlist = document.getElementById("log-watchlist-checkbox").checked;
        const date = dateInput.value;

        if (!movieId) {
            alert("Please select a film to log.");
            return;
        }

        const user = state.getActiveUser();

        // RUN TRANSACTION: LOG MOVIE
        try {
            // 1. Insert or update Rating
            const existingRating = db.tables.ratings.find(r => r.user_id === user.id && r.movie_id === movieId);
            const finalRating = liked ? 5 : (rating > 0 ? rating : 3); // Liked implies 5 stars
            
            if (existingRating) {
                db.updateRow("ratings", existingRating.id, { rating_value: finalRating, created_at: date });
            } else {
                db.insertRow("ratings", {
                    movie_id: movieId,
                    user_id: user.id,
                    rating_value: finalRating,
                    created_at: date
                });
            }

            // 2. Insert Review (if text provided)
            if (reviewText) {
                db.insertRow("reviews", {
                    movie_id: movieId,
                    user_id: user.id,
                    review_text: reviewText,
                    created_at: date,
                    likes_count: 0
                });
            }

            // 3. Manage Watchlist
            const wItem = db.tables.watchlists.find(w => w.user_id === user.id && w.movie_id === movieId);
            if (watchlist) {
                if (!wItem) {
                    db.insertRow("watchlists", {
                        user_id: user.id,
                        movie_id: movieId,
                        added_at: date
                    });
                }
            } else {
                if (wItem) {
                    db.deleteRow("watchlists", wItem.id);
                }
            }

            // 4. Update movie likes_count if liked
            if (liked) {
                const movie = db.tables.movies.find(m => m.id === movieId);
                if (movie) {
                    db.updateRow("movies", movie.id, { likes_count: movie.likes_count + 1 });
                }
            }

            closeModal();
            const activeTab = document.querySelector(".nav-item.active").getAttribute("data-tab");
            renderTab(activeTab);
        } catch (err) {
            alert(err.message);
        }
    };
}

// 11. FILM DETAIL DIALOG VIEW
let activeDetailFilmId = null;

function initDetailModal() {
    const modal = document.getElementById("detail-modal");
    const closeBtn = document.getElementById("detail-modal-close");
    const watchBtn = document.getElementById("action-watch-btn");
    const likeBtn = document.getElementById("action-like-btn");
    const watchlistBtn = document.getElementById("action-watchlist-btn");

    function closeModal() {
        modal.classList.add("hidden");
        activeDetailFilmId = null;
    }

    closeBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    document.body.addEventListener("click", (e) => {
        const trig = e.target.closest(".film-detail-trigger");
        if (trig) {
            e.preventDefault();
            const id = trig.getAttribute("data-id");
            if (id) openDetailModal(id);
        }
    });

    const user = state.getActiveUser();

    watchBtn.onclick = () => {
        if (!activeDetailFilmId) return;
        
        try {
            const existingRating = db.tables.ratings.find(r => r.user_id === user.id && r.movie_id === activeDetailFilmId);
            if (existingRating) {
                db.deleteRow("ratings", existingRating.id);
            } else {
                db.insertRow("ratings", {
                    movie_id: activeDetailFilmId,
                    user_id: user.id,
                    rating_value: 4, // Default watched rating
                    created_at: new Date().toISOString().split("T")[0]
                });
                
                // Clear from watchlist
                const w = db.tables.watchlists.find(wi => wi.user_id === user.id && wi.movie_id === activeDetailFilmId);
                if (w) db.deleteRow("watchlists", w.id);
            }
            openDetailModal(activeDetailFilmId);
            refreshActiveTab();
        } catch (err) {
            alert(err.message);
        }
    };

    likeBtn.onclick = () => {
        if (!activeDetailFilmId) return;
        const movie = db.tables.movies.find(m => m.id === activeDetailFilmId);

        try {
            const existingRating = db.tables.ratings.find(r => r.user_id === user.id && r.movie_id === activeDetailFilmId);
            if (existingRating && existingRating.rating_value === 5) {
                db.updateRow("ratings", existingRating.id, { rating_value: 4 });
                if (movie) db.updateRow("movies", movie.id, { likes_count: Math.max(0, movie.likes_count - 1) });
            } else {
                if (existingRating) {
                    db.updateRow("ratings", existingRating.id, { rating_value: 5 });
                } else {
                    db.insertRow("ratings", {
                        movie_id: activeDetailFilmId,
                        user_id: user.id,
                        rating_value: 5,
                        created_at: new Date().toISOString().split("T")[0]
                    });
                }
                if (movie) db.updateRow("movies", movie.id, { likes_count: movie.likes_count + 1 });
            }
            openDetailModal(activeDetailFilmId);
            refreshActiveTab();
        } catch (err) {
            alert(err.message);
        }
    };

    watchlistBtn.onclick = () => {
        if (!activeDetailFilmId) return;

        try {
            const w = db.tables.watchlists.find(wi => wi.user_id === user.id && wi.movie_id === activeDetailFilmId);
            if (w) {
                db.deleteRow("watchlists", w.id);
            } else {
                db.insertRow("watchlists", {
                    user_id: user.id,
                    movie_id: activeDetailFilmId,
                    added_at: new Date().toISOString().split("T")[0]
                });
                
                // Clear rating (unwatch) since putting on watchlist
                const r = db.tables.ratings.find(ri => ri.user_id === user.id && ri.movie_id === activeDetailFilmId);
                if (r) db.deleteRow("ratings", r.id);
            }
            openDetailModal(activeDetailFilmId);
            refreshActiveTab();
        } catch (err) {
            alert(err.message);
        }
    };
}

function openDetailModal(filmId) {
    const film = db.tables.movies.find(m => m.id === filmId);
    if (!film) return;

    activeDetailFilmId = filmId;
    const user = state.getActiveUser();

    // 1. Populate backdrop & basic info
    const backdropEl = document.getElementById("detail-backdrop-img");
    backdropEl.style.backgroundImage = `url('${film.backdrop}')`;

    document.getElementById("detail-poster").src = film.poster;
    document.getElementById("detail-title").textContent = film.title;
    document.getElementById("detail-year").textContent = film.year;
    
    // Resolve director name
    const directorObj = db.tables.directors.find(d => d.id === film.director_id);
    document.getElementById("detail-director").textContent = directorObj ? directorObj.name : "Unknown";
    
    document.getElementById("detail-runtime").textContent = `${film.runtime} mins`;
    
    // Resolve genres via junction table movie_genres
    const genreIds = db.tables.movie_genres.filter(mg => mg.movie_id === filmId).map(mg => mg.genre_id);
    const genreNames = db.tables.genres.filter(g => genreIds.includes(g.id)).map(g => g.name);
    document.getElementById("detail-genres").textContent = genreNames.join(", ") || "None";
    
    document.getElementById("detail-synopsis").textContent = film.synopsis;

    // Resolve actor names via junction table movie_actors
    const actorIds = db.tables.movie_actors.filter(ma => ma.movie_id === filmId).map(ma => ma.actor_id);
    const actorNames = db.tables.actors.filter(a => actorIds.includes(a.id)).map(a => a.name);
    document.getElementById("detail-cast").textContent = actorNames.join(", ") || "None";

    // 2. Populate stats & active class panels
    document.getElementById("detail-avg-rating-val").textContent = `${film.avg_rating.toFixed(1)} ★`;
    document.getElementById("detail-likes-count-val").textContent = film.likes_count.toLocaleString();

    const isWatched = db.tables.ratings.some(r => r.user_id === user.id && r.movie_id === filmId);
    const isLiked = db.tables.ratings.some(r => r.user_id === user.id && r.movie_id === filmId && r.rating_value === 5);
    const isWatchlisted = db.tables.watchlists.some(w => w.user_id === user.id && w.movie_id === filmId);

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

    // 3. Query awards won via SQL query engine simulation!
    const awardsContainer = document.getElementById("detail-awards-container");
    const awardsList = document.getElementById("detail-awards-list");
    
    const awRes = db.executeSQL(`SELECT awards.name, awards.category, awards.year_won FROM awards WHERE awards.movie_id = '${filmId}'`);
    if (awRes.rows.length === 0) {
        awardsContainer.classList.add("hidden");
    } else {
        awardsContainer.classList.remove("hidden");
        awardsList.innerHTML = awRes.rows.map(aw => `
            <span class="award-badge"><i class="fa-solid fa-trophy"></i> ${aw["awards.name"]} - ${aw["awards.category"]} (${aw["awards.year_won"]})</span>
        `).join("");
    }

    // 4. Query reviews on this movie via SQL query engine!
    const reviewsList = document.getElementById("detail-reviews-list");
    const revRes = db.executeSQL(`SELECT reviews.id, users.username, reviews.review_text, reviews.created_at FROM reviews JOIN users ON reviews.user_id = users.id WHERE reviews.movie_id = '${filmId}'`);
    
    if (revRes.rows.length === 0) {
        reviewsList.innerHTML = `<p style="font-size: 13px; color: var(--text-color); font-style: italic; margin-top: 8px;">No reviews logged for this film yet. Tap the "+ Log" button in the navigation to share your thoughts!</p>`;
    } else {
        reviewsList.innerHTML = revRes.rows.map(row => {
            const authorRating = getRatingForUser(db.tables.users.find(u => u.username === row["users.username"]).id, filmId);
            return `
                <div class="detail-review-item">
                    <div class="detail-review-meta">
                        <span class="detail-review-user" style="color: var(--color-blue); font-weight:600;">@${row["users.username"]}</span>
                        <span class="detail-review-rating">${authorRating > 0 ? getStarsHtml(authorRating) : ""}</span>
                    </div>
                    <p class="detail-review-text">${row["reviews.review_text"]}</p>
                </div>
            `;
        }).join("");
    }

    document.getElementById("detail-modal").classList.remove("hidden");
}

function refreshActiveTab() {
    const activeTab = document.querySelector(".nav-item.active").getAttribute("data-tab");
    renderTab(activeTab);
}

// 12. CREATE CUSTOM THEMED LIST MODAL
function initListModal() {
    const modal = document.getElementById("create-list-modal");
    const trigger = document.getElementById("create-list-trigger-btn");
    const closeBtn = document.getElementById("create-list-modal-close");
    const cancelBtn = document.getElementById("create-list-modal-cancel");
    const form = document.getElementById("create-list-form");
    const checkboxList = document.getElementById("list-films-checkboxes");

    function openModal() {
        const sortedFilms = [...db.tables.movies].sort((a,b) => a.title.localeCompare(b.title));
        checkboxList.innerHTML = sortedFilms.map(film => `
            <label style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <input type="checkbox" name="list-film-choice" value="${film.id}">
                <span>${film.title} (${film.year})</span>
            </label>
        `).join("");

        form.reset();
        modal.classList.remove("hidden");
    }

    function closeModal() { modal.classList.add("hidden"); }

    if (trigger) trigger.onclick = openModal;
    closeBtn.onclick = closeModal;
    cancelBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    form.onsubmit = (e) => {
        e.preventDefault();
        const listName = document.getElementById("list-name").value;
        const listDesc = document.getElementById("list-desc").value;
        const checkedBoxes = checkboxList.querySelectorAll("input[name='list-film-choice']:checked");
        const filmIds = Array.from(checkedBoxes).map(cb => cb.value);

        if (filmIds.length < 2) {
            alert("Please select at least 2 films to create a themed list!");
            return;
        }

        const user = state.getActiveUser();

        // TRANSACTION: CREATE LIST AND MAP JUNCTION TABLE
        try {
            const listRow = db.insertRow("lists", {
                user_id: user.id,
                name: listName,
                description: listDesc,
                created_at: new Date().toISOString().split("T")[0]
            });

            filmIds.forEach(mId => {
                db.insertRow("collections", {
                    list_id: listRow.id,
                    movie_id: mId
                }, false);
            });

            closeModal();
            renderTab("lists");
        } catch (err) {
            alert(err.message);
        }
    };
}

// 13. REAL-TIME AUTOCOMPLETE SEARCH
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

        // Relational filter search (Movies + Director Name)
        const matches = db.tables.movies.filter(movie => {
            const dir = db.tables.directors.find(d => d.id === movie.director_id);
            const dirName = dir ? dir.name.toLowerCase() : "";
            return movie.title.toLowerCase().includes(query) || dirName.includes(query);
        });

        if (matches.length === 0) {
            searchDropdown.innerHTML = `<div class="search-result-item" style="color: var(--text-color); cursor: default;">No matching films found</div>`;
        } else {
            searchDropdown.innerHTML = matches.map(movie => {
                const dir = db.tables.directors.find(d => d.id === movie.director_id);
                return `
                    <div class="search-result-item" data-id="${movie.id}">
                        <img class="search-result-poster" src="${movie.poster}" alt="${movie.title}">
                        <div class="search-result-info">
                            <span class="search-result-title">${movie.title}</span>
                            <span class="search-result-year">${movie.year} &middot; Directed by ${dir ? dir.name : "Unknown"}</span>
                        </div>
                    </div>
                `;
            }).join("");
        }

        searchDropdown.classList.remove("hidden");
    });

    searchDropdown.addEventListener("click", (e) => {
        const item = e.target.closest(".search-result-item");
        if (item) {
            const filmId = item.getAttribute("data-id");
            if (filmId) {
                searchInput.value = "";
                searchDropdown.classList.add("hidden");
                openDetailModal(filmId);
            }
        }
    });

    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.add("hidden");
        }
    });
}

// 14. ADMIN CONSOLE & DIRECT SQL CONSOLE
function initAdminConsole() {
    const roleSelector = document.getElementById("db-role-selector");
    const tableSelect = document.getElementById("db-table-select");
    const sidebarBtns = document.querySelectorAll(".admin-menu-btn");
    const panels = document.querySelectorAll(".admin-panel-section");
    
    // SQL sandbox elements
    const sqlTextarea = document.getElementById("sql-query-input");
    const sqlTemplates = document.getElementById("sql-templates");
    const runSqlBtn = document.getElementById("sql-run-btn");
    const sqlResultsTable = document.getElementById("sql-results-table");
    const sqlStatus = document.getElementById("sql-execution-status");
    const queryPlanBox = document.getElementById("query-plan-box");
    const queryPlanText = document.getElementById("query-plan-text");

    // Stored procedures elements
    const procBtns = document.querySelectorAll(".run-proc-btn");
    const procOutputBox = document.getElementById("proc-output-box");
    const procOutputPre = document.getElementById("proc-output-pre");
    const procOutputClose = document.getElementById("proc-output-close");
    const recUserSelect = document.getElementById("proc-rec-user-id");
    const analyticsUserSelect = document.getElementById("proc-analytics-user-id");

    // Log terminal elements
    const terminal = document.getElementById("db-engine-logs-console");
    const clearLogsBtn = document.getElementById("clear-db-logs-btn");

    // Dynamic role updates
    roleSelector.onchange = () => {
        db.activeRole = roleSelector.value;
        db.log("info", `Security Privileges Updated: Active role changed to '${db.activeRole.toUpperCase()}'.`);
        renderAdminDashboard();
    };

    // Panel tab toggles
    sidebarBtns.forEach(btn => {
        btn.onclick = () => {
            sidebarBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const targetPanel = btn.getAttribute("data-admin-panel");
            panels.forEach(p => {
                if (p.id === `admin-panel-${targetPanel}`) p.classList.remove("hidden");
                else p.classList.add("hidden");
            });
        };
    });

    // Load tables list into explorer selector
    const tables = Object.keys(db.tables);
    tableSelect.innerHTML = tables.map(t => `<option value="${t}">${t.toUpperCase()}</option>`).join("");
    tableSelect.onchange = () => {
        renderAdminTableBrowser(tableSelect.value);
    };

    // Load users in Stored Procedures selectors
    function populateProcUsers() {
        const opts = db.tables.users.map(u => `<option value="${u.id}">@${u.username} (${u.id})</option>`).join("");
        if (recUserSelect) recUserSelect.innerHTML = opts;
        if (analyticsUserSelect) analyticsUserSelect.innerHTML = opts;
    }
    populateProcUsers();

    // SQL Template selection
    sqlTemplates.onchange = () => {
        if (sqlTemplates.value) {
            sqlTextarea.value = sqlTemplates.value;
        }
    };

    // Execute Sandbox SQL
    runSqlBtn.onclick = () => {
        const sqlQuery = sqlTextarea.value.trim();
        if (!sqlQuery) return;

        try {
            sqlStatus.className = "sql-status";
            sqlStatus.textContent = "Running query plan...";
            
            const res = db.executeSQL(sqlQuery);
            
            sqlStatus.textContent = `Query OK: Returned ${res.rows.length} rows (${res.executionTime}ms)`;
            
            // Explain query plan
            queryPlanBox.classList.remove("hidden");
            queryPlanText.textContent = res.queryPlan;

            // Render output headers
            const thead = document.getElementById("sql-results-thead");
            const tbody = document.getElementById("sql-results-tbody");
            
            thead.innerHTML = `<tr>${res.columns.map(col => `<th>${col}</th>`).join("")}</tr>`;
            
            if (res.rows.length === 0) {
                tbody.innerHTML = `<tr><td colspan="${res.columns.length}" style="text-align: center; font-style: italic;">No rows returned matching criteria.</td></tr>`;
            } else {
                tbody.innerHTML = res.rows.map(row => `
                    <tr>
                        ${res.columns.map(col => `<td>${row[col] === null || row[col] === undefined ? "NULL" : row[col]}</td>`).join("")}
                    </tr>
                `).join("");
            }
        } catch (err) {
            sqlStatus.className = "sql-status error";
            sqlStatus.textContent = err.message;
            queryPlanBox.classList.add("hidden");
            
            const tbody = document.getElementById("sql-results-tbody");
            tbody.innerHTML = `<tr><td style="text-align: center; color: var(--danger-color); font-family: monospace;">SQL ERROR: ${err.message}</td></tr>`;
        }
    };

    // Procedures executer trigger
    procBtns.forEach(btn => {
        btn.onclick = () => {
            const procType = btn.getAttribute("data-proc");
            procOutputBox.classList.remove("hidden");
            
            if (procType === "recommendations") {
                const uId = recUserSelect.value;
                const res = db.sp_generate_recommendations(uId);
                procOutputPre.textContent = JSON.stringify(res, null, 2);
            } 
            else if (procType === "analytics") {
                const uId = analyticsUserSelect.value;
                const res = db.sp_user_analytics(uId);
                procOutputPre.textContent = JSON.stringify(res, null, 2);
            }
            else if (procType === "vw_awards") {
                const res = db.vw_movie_awards();
                procOutputPre.textContent = "Querying compiled VIEW: vw_movie_awards\n\n" + JSON.stringify(res, null, 2);
            }
        };
    });

    procOutputClose.onclick = () => procOutputBox.classList.add("hidden");

    // DB logs listeners
    document.addEventListener("db-log-updated", () => {
        renderTerminalLogs();
    });

    clearLogsBtn.onclick = () => {
        db.logs = [];
        renderTerminalLogs();
    };

    function renderTerminalLogs() {
        if (!terminal) return;
        terminal.innerHTML = db.logs.map(log => {
            let colorClass = "info";
            if (log.type === "trigger") colorClass = "trigger";
            else if (log.type === "transaction") colorClass = "transaction";
            else if (log.type === "query") colorClass = "query";
            else if (log.type === "error") colorClass = "error";
            
            return `<div class="terminal-line ${colorClass}">[${log.timestamp}] [${log.type.toUpperCase()}] ${log.message}</div>`;
        }).join("");
        terminal.scrollTop = terminal.scrollHeight;

        // Badge update
        const badge = document.getElementById("log-count-badge");
        if (badge) badge.textContent = db.logs.length;
    }

    // Modal Table Inserts bindings
    const insertRowModal = document.getElementById("insert-row-modal");
    const insertRowClose = document.getElementById("insert-row-modal-close");
    const insertRowCancel = document.getElementById("insert-row-cancel");
    const insertRowForm = document.getElementById("insert-row-form");
    const addRowBtn = document.getElementById("db-add-row-btn");
    
    addRowBtn.onclick = () => {
        const table = tableSelect.value;
        const schema = db.getSchemas()[table];
        
        document.getElementById("insert-row-modal-title").textContent = `Insert into ${table.toUpperCase()}`;
        const fieldsBox = document.getElementById("insert-row-fields-container");
        
        // Auto-generate fields based on columns
        fieldsBox.innerHTML = schema.cols.map(col => {
            // Auto PKs shouldn't require typing
            if (col === schema.pk) {
                return `
                    <div class="form-group">
                        <label>${col.toUpperCase()} (Primary Key)</label>
                        <input type="text" name="${col}" placeholder="Auto-generated if left blank" style="opacity: 0.7;">
                    </div>
                `;
            }
            // Foreign Keys mapping dropdown selectors for easy UX
            if (schema.fks && schema.fks[col]) {
                const refTable = schema.fks[col];
                const refPk = db.getSchemas()[refTable].pk;
                const options = db.tables[refTable].map(r => `<option value="${r[refPk]}">${r.name || r.title || r.username || r[refPk]}</option>`).join("");
                
                return `
                    <div class="form-group">
                        <label>${col.toUpperCase()} <span class="required">*</span></label>
                        <select name="${col}" required>
                            ${options}
                        </select>
                    </div>
                `;
            }

            // Normal text fields
            return `
                <div class="form-group">
                    <label>${col.toUpperCase()}</label>
                    <input type="${col.includes('year') || col.includes('value') || col.includes('count') || col.includes('runtime') ? 'number' : 'text'}" name="${col}">
                </div>
            `;
        }).join("");

        insertRowModal.classList.remove("hidden");
    };

    insertRowClose.onclick = () => insertRowModal.classList.add("hidden");
    insertRowCancel.onclick = () => insertRowModal.classList.add("hidden");
    insertRowModal.onclick = (e) => { if (e.target === insertRowModal) insertRowModal.classList.add("hidden"); };

    insertRowForm.onsubmit = (e) => {
        e.preventDefault();
        const activeTable = tableSelect.value;
        const schema = db.getSchemas()[activeTable];
        
        // Collect inputs
        const formData = new FormData(insertRowForm);
        const rowObject = {};
        
        schema.cols.forEach(col => {
            const inputVal = formData.get(col);
            if (inputVal !== "" && inputVal !== null) {
                rowObject[col] = (!isNaN(inputVal) && inputVal.trim() !== "") ? Number(inputVal) : inputVal;
            }
        });

        try {
            db.insertRow(activeTable, rowObject);
            insertRowModal.classList.add("hidden");
            renderAdminDashboard();
            populateProcUsers();
        } catch (err) {
            alert(err.message);
        }
    };

    renderTerminalLogs();
}

function renderAdminDashboard() {
    // Total records counts
    let totalCount = 0;
    for (let table in db.tables) {
        totalCount += db.tables[table].length;
    }
    const totalRecsEl = document.getElementById("db-total-records");
    if (totalRecsEl) totalRecsEl.textContent = totalCount.toLocaleString();

    // Default load table explorer on current table selection
    const tbl = document.getElementById("db-table-select").value || "movies";
    renderAdminTableBrowser(tbl);
}

function renderAdminTableBrowser(table) {
    const schema = db.getSchemas()[table];
    const rows = db.tables[table];
    const thead = document.getElementById("db-table-thead");
    const tbody = document.getElementById("db-table-tbody");
    const metaText = document.getElementById("table-info-meta-text");

    // Table Meta details
    metaText.textContent = `Table Schema: PK = ${schema.pk} | Contains ${rows.length} records. Primary key column is highlighted in orange.`;

    // Map headers (including action column if admin)
    const isAdmin = db.activeRole === "admin";
    const headerHtml = `<tr>
        ${schema.cols.map(c => `<th>${c}</th>`).join("")}
        ${isAdmin ? `<th>Actions</th>` : ""}
    </tr>`;
    thead.innerHTML = headerHtml;

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${schema.cols.length + (isAdmin ? 1 : 0)}" style="text-align: center; font-style: italic; color: var(--text-color);">This relational table contains no records.</td></tr>`;
    } else {
        tbody.innerHTML = rows.map(row => {
            const cells = schema.cols.map(col => {
                let cellVal = row[col];
                if (cellVal === null || cellVal === undefined) cellVal = "NULL";
                
                // Highlight PK
                if (col === schema.pk) {
                    return `<td class="db-pk-val">${cellVal}</td>`;
                }
                
                // Highlight FK references
                if (schema.fks && schema.fks[col]) {
                    return `<td class="db-fk-val" onclick="document.getElementById('db-table-select').value='${schema.fks[col]}'; renderAdminTableBrowser('${schema.fks[col]}');">${cellVal}</td>`;
                }

                return `<td>${cellVal}</td>`;
            }).join("");

            const actions = isAdmin ? `
                <td class="db-action-cell">
                    <button class="db-row-delete-btn" data-id="${row[schema.pk]}" title="Delete record"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            ` : "";

            return `<tr class="record-row">${cells}${actions}</tr>`;
        }).join("");

        // Attach action handlers
        tbody.querySelectorAll(".db-row-delete-btn").forEach(btn => {
            btn.onclick = () => {
                const id = btn.getAttribute("data-id");
                if (confirm(`Are you sure you want to delete this row (${id})? Dependent FK references will be cascaded.`)) {
                    try {
                        db.deleteRow(table, id);
                        renderAdminDashboard();
                    } catch (err) {
                        alert(err.message);
                    }
                }
            };
        });
    }
}

// 15. CARD HTML CONSTRUCTORS & FORMATTING
function createFilmCardHtml(film) {
    const user = state.getActiveUser();
    const isLiked = db.tables.ratings.some(r => r.user_id === user.id && r.movie_id === film.id && r.rating_value === 5);
    const isWatched = db.tables.ratings.some(r => r.user_id === user.id && r.movie_id === film.id);
    
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
                    <span class="film-overlay-rating"><i class="fa-solid fa-star"></i> ${film.avg_rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    `;
}

function createListCardHtml(list) {
    // Resolve movie records mapping
    const colList = db.tables.collections.filter(c => c.list_id === list.id);
    const films = db.tables.movies.filter(m => colList.some(cl => cl.movie_id === m.id));
    const authorUser = db.tables.users.find(u => u.id === list.user_id);
    const authorName = authorUser ? authorUser.username : "anonymous";

    const coversHtml = films.slice(0, 4).map(film => {
        return `<img class="list-stack-poster" src="${film.poster}" alt="${film.title}">`;
    }).join("");

    return `
        <div class="list-card nav-redirect-btn" data-target="profile" onclick="sessionStorage.setItem('activeProfileSec','mylists')">
            <div class="list-card-details">
                <h3>${list.name}</h3>
                <p class="list-card-desc">${list.description}</p>
                <div class="list-covers-stack">
                    ${coversHtml}
                </div>
            </div>
            <div class="list-card-footer">
                <span>Created by <strong class="list-author">@${authorName}</strong></span>
                <span>${films.length} films</span>
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
