CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(20) DEFAULT 'User',
    joined_date DATE,
    bio TEXT,
    password_hash VARCHAR(255)
);

CREATE TABLE directors (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_year INT,
    bio TEXT
);

CREATE TABLE actors (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birth_year INT,
    bio TEXT
);

CREATE TABLE genres (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE movies (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    year INT,
    director_id VARCHAR(50) REFERENCES directors(id),
    runtime INT,
    language VARCHAR(50),
    country VARCHAR(50),
    avg_rating DECIMAL(3,2) DEFAULT 0.00,
    likes_count INT DEFAULT 0,
    poster VARCHAR(255),
    backdrop VARCHAR(255),
    synopsis TEXT
);

CREATE TABLE movie_genres (
    id VARCHAR(50) PRIMARY KEY,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    genre_id VARCHAR(50) REFERENCES genres(id) ON DELETE CASCADE
);

CREATE TABLE movie_actors (
    id VARCHAR(50) PRIMARY KEY,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    actor_id VARCHAR(50) REFERENCES actors(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id VARCHAR(50) PRIMARY KEY,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    review_text TEXT NOT NULL,
    created_at DATE,
    likes_count INT DEFAULT 0
);

CREATE TABLE ratings (
    id VARCHAR(50) PRIMARY KEY,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    rating_value INT CHECK (rating_value >= 1 AND rating_value <= 5),
    created_at DATE
);

CREATE TRIGGER trg_update_movie_rating_insert
AFTER INSERT ON ratings
BEGIN
    UPDATE movies
    SET avg_rating = (
        SELECT COALESCE(AVG(rating_value), 0.00)
        FROM ratings
        WHERE movie_id = NEW.movie_id
    )
    WHERE id = NEW.movie_id;
END;

CREATE TRIGGER trg_update_movie_rating_update
AFTER UPDATE ON ratings
BEGIN
    UPDATE movies
    SET avg_rating = (
        SELECT COALESCE(AVG(rating_value), 0.00)
        FROM ratings
        WHERE movie_id = NEW.movie_id
    )
    WHERE id = NEW.movie_id;
END;

CREATE TRIGGER trg_update_movie_rating_delete
AFTER DELETE ON ratings
BEGIN
    UPDATE movies
    SET avg_rating = (
        SELECT COALESCE(AVG(rating_value), 0.00)
        FROM ratings
        WHERE movie_id = OLD.movie_id
    )
    WHERE id = OLD.movie_id;
END;

CREATE TABLE watchlists (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    added_at DATE
);

CREATE TABLE lists (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(200),
    description TEXT,
    created_at DATE
);

CREATE TABLE collections (
    id VARCHAR(50) PRIMARY KEY,
    list_id VARCHAR(50) REFERENCES lists(id) ON DELETE CASCADE,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE
);

CREATE TABLE comments (
    id VARCHAR(50) PRIMARY KEY,
    review_id VARCHAR(50) REFERENCES reviews(id) ON DELETE CASCADE,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    comment_text TEXT,
    created_at DATE
);

CREATE TABLE followers (
    id VARCHAR(50) PRIMARY KEY,
    follower_user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    followed_user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    followed_at DATE
);

CREATE TABLE notifications (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at DATE
);

CREATE TABLE awards (
    id VARCHAR(50) PRIMARY KEY,
    movie_id VARCHAR(50) REFERENCES movies(id) ON DELETE CASCADE,
    name VARCHAR(200),
    category VARCHAR(200),
    year_won INT
);
