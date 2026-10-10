CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role VARCHAR(20) DEFAULT 'User',
    joined_date DATE,
    bio TEXT
);

CREATE TABLE movies (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    director_id VARCHAR(50),
    year INT,
    runtime INT,
    language VARCHAR(50),
    country VARCHAR(50),
    synopsis TEXT,
    poster_url VARCHAR(255),
    likes_count INT DEFAULT 0,
    average_rating DECIMAL(3,2) DEFAULT 0.00
);

CREATE TABLE reviews (
    id VARCHAR(50) PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id),
    movie_id VARCHAR(50) REFERENCES movies(id),
    review_text TEXT NOT NULL,
    likes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
