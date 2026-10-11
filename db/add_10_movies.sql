-- 1. Directors
INSERT INTO directors (id, name, birth_year, bio) VALUES
('d8', 'Francis Ford Coppola', 1939, 'Legendary American filmmaker, director of The Godfather trilogy and Apocalypse Now.'),
('d9', 'David Fincher', 1962, 'American director renowned for psychological thrillers including Fight Club and Se7en.'),
('d10', 'The Wachowskis', 1965, 'Visionary sibling filmmakers, creators of The Matrix franchise.'),
('d11', 'Frank Darabont', 1959, 'Three-time Oscar-nominated American filmmaker, director of The Shawshank Redemption.')
ON CONFLICT (id) DO NOTHING;

-- 2. Actors
INSERT INTO actors (id, name, birth_year, bio) VALUES
('a16', 'Cillian Murphy', 1976, 'Academy Award-winning Irish actor, star of Oppenheimer.'),
('a17', 'Robert Downey Jr.', 1965, 'Academy Award-winning American actor, Lewis Strauss in Oppenheimer.'),
('a18', 'Leonardo DiCaprio', 1974, 'Academy Award-winning American actor, lead of Inception.'),
('a19', 'Al Pacino', 1940, 'Legendary actor, Michael Corleone in The Godfather.'),
('a20', 'Marlon Brando', 1924, 'Cultural icon, Don Vito Corleone in The Godfather.'),
('a21', 'Brad Pitt', 1963, 'Tyler Durden in Fight Club and Aldo Raine in Inglourious Basterds.'),
('a22', 'Edward Norton', 1969, 'Three-time Oscar nominee, the Narrator in Fight Club.'),
('a23', 'Keanu Reeves', 1964, 'Neo in The Matrix and star of John Wick.'),
('a24', 'Laurence Fishburne', 1961, 'Morpheus in The Matrix.'),
('a25', 'Morgan Freeman', 1937, 'Ellis Boyd Redding in The Shawshank Redemption.'),
('a26', 'Tim Robbins', 1958, 'Andy Dufresne in The Shawshank Redemption.'),
('a27', 'Harrison Ford', 1942, 'Rick Deckard in Blade Runner 2049, Han Solo, Indiana Jones.'),
('a28', 'Ana de Armas', 1988, 'Joi in Blade Runner 2049 and Knives Out.'),
('a29', 'Christoph Waltz', 1956, 'Colonel Hans Landa in Inglourious Basterds.'),
('a30', 'Amy Adams', 1974, 'Linguist Dr. Louise Banks in Arrival.')
ON CONFLICT (id) DO NOTHING;

-- 3. Movies
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES
('m11', 'Oppenheimer', 2023, 'd2', 180, 'English', 'USA', 4.8, 36290, 'movies/oppenheimer-poster.jpg', 'movies/oppenheimer-backdrop.jpg', 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.'),
('m12', 'Inception', 2010, 'd2', 148, 'English', 'USA', 4.8, 42150, 'movies/inception-poster.jpg', 'movies/inception-backdrop.jpg', 'A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.'),
('m13', 'The Godfather', 1972, 'd8', 175, 'English', 'USA', 4.9, 48900, 'movies/godfather-poster.jpg', 'movies/godfather-backdrop.jpg', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
('m14', 'Fight Club', 1999, 'd9', 139, 'English', 'USA', 4.7, 39800, 'movies/fight-club-poster.jpg', 'movies/fight-club-backdrop.jpg', 'An insomniac office worker looking for a way to change his life crosses paths with a soap maker and forms an underground fight club.'),
('m15', 'The Matrix', 1999, 'd10', 136, 'English', 'USA', 4.7, 37500, 'movies/matrix-poster.jpg', 'movies/matrix-backdrop.jpg', 'When a beautiful stranger leads hacker Neo to an underworld, he discovers the shocking truth about the simulated reality.'),
('m16', 'The Shawshank Redemption', 1994, 'd11', 142, 'English', 'USA', 4.9, 51200, 'movies/shawshank-poster.jpg', 'movies/shawshank-backdrop.jpg', 'Over several years, two convicts form a friendship, seeking consolation and redemption through compassion.'),
('m17', 'Blade Runner 2049', 2017, 'd1', 164, 'English', 'USA', 4.6, 28400, 'movies/blade-runner-2049-poster.jpg', 'movies/blade-runner-2049-backdrop.jpg', 'Young Blade Runner K uncovers a long-buried secret that leads him to track down former Blade Runner Rick Deckard.'),
('m18', 'Princess Mononoke', 1997, 'd4', 134, 'Japanese', 'Japan', 4.8, 27900, 'movies/princess-mononoke-poster.jpg', 'movies/princess-mononoke-backdrop.jpg', 'On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between forest gods and Tatara.'),
('m19', 'Inglourious Basterds', 2009, 'd5', 153, 'English', 'USA', 4.6, 31200, 'movies/inglourious-basterds-poster.jpg', 'movies/inglourious-basterds-backdrop.jpg', 'In Nazi-occupied France, a group of Jewish U.S. soldiers plans to assassinate Nazi leaders alongside a theatre owner.'),
('m20', 'Arrival', 2016, 'd1', 116, 'English', 'USA', 4.7, 26500, 'movies/arrival-poster.jpg', 'movies/arrival-backdrop.jpg', 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.')
ON CONFLICT (id) DO NOTHING;

-- 4. Movie Genres
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES
('mg29', 'm11', 'g3'), ('mg30', 'm11', 'g6'),
('mg31', 'm12', 'g1'), ('mg32', 'm12', 'g5'), ('mg33', 'm12', 'g2'),
('mg34', 'm13', 'g10'), ('mg35', 'm13', 'g3'),
('mg36', 'm14', 'g3'), ('mg37', 'm14', 'g6'),
('mg38', 'm15', 'g1'), ('mg39', 'm15', 'g5'),
('mg40', 'm16', 'g3'), ('mg41', 'm16', 'g10'),
('mg42', 'm17', 'g1'), ('mg43', 'm17', 'g3'), ('mg44', 'm17', 'g6'),
('mg45', 'm18', 'g4'), ('mg46', 'm18', 'g8'), ('mg47', 'm18', 'g2'),
('mg48', 'm19', 'g3'), ('mg49', 'm19', 'g5'), ('mg50', 'm19', 'g6'),
('mg51', 'm20', 'g1'), ('mg52', 'm20', 'g3'), ('mg53', 'm20', 'g6')
ON CONFLICT (id) DO NOTHING;

-- 5. Movie Actors
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES
('ma16', 'm11', 'a16'), ('ma17', 'm11', 'a17'),
('ma18', 'm12', 'a18'),
('ma19', 'm13', 'a19'), ('ma20', 'm13', 'a20'),
('ma21', 'm14', 'a21'), ('ma22', 'm14', 'a22'),
('ma23', 'm15', 'a23'), ('ma24', 'm15', 'a24'),
('ma25', 'm16', 'a25'), ('ma26', 'm16', 'a26'),
('ma27', 'm17', 'a15'), ('ma28', 'm17', 'a27'), ('ma29', 'm17', 'a28'),
('ma30', 'm18', 'a7'),
('ma31', 'm19', 'a21'), ('ma32', 'm19', 'a29'),
('ma33', 'm20', 'a30')
ON CONFLICT (id) DO NOTHING;

-- 6. Ensure default passwords exist for seed users in cloud DB
UPDATE users SET password_hash = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8' WHERE password_hash IS NULL;
