INSERT INTO users (id, username, email, role, joined_date, bio) VALUES 
('u1', 'CinephileExplorer', 'dhananjayansreeraj41@gmail.com', 'User', '2026-01-10', 'Watching films, writing reviews, and curating collections.'),
('u2', 'GhibliFanatic', 'ghibli@cinearchive.org', 'User', '2026-03-15', 'Spirited Away changed my life.'),
('u3', 'JazzDrummer99', 'drummer99@cinearchive.org', 'User', '2026-05-20', 'Not quite my tempo.'),
('u4', 'InterstellarNerd', 'nolanfan@cinearchive.org', 'User', '2026-06-01', 'Cooper, this is no time for caution.'),
('u5', 'AdminCuration', 'curator@cinearchive.org', 'Admin', '2025-12-01', 'Official Editor & DB Admin.');

INSERT INTO movies (id, title, director_id, year, runtime, language, country, synopsis, poster_url, likes_count, average_rating) VALUES
('m1', 'Dune: Part Two', 'd1', 2024, 166, 'English', 'USA', 'Paul Atreides unites with Chani and the Fremen while seeking revenge.', 'movies/dune-2-poster.jpg', 15402, 4.7),
('m2', 'Spider-Man: Across the Spider-Verse', 'd7', 2023, 140, 'English', 'USA', 'Miles Morales catapults across the Multiverse.', 'movies/spider-verse-poster.jpg', 22841, 4.6),
('m3', 'Interstellar', 'd2', 2014, 169, 'English', 'USA', 'A team of explorers travel through a wormhole in space.', 'movies/interstellar-poster.jpg', 38402, 4.8),
('m4', 'Parasite', 'd3', 2019, 132, 'Korean', 'South Korea', 'Greed and class discrimination threaten the relationship between two families.', 'movies/parasite-poster.jpg', 29402, 4.7),
('m5', 'Everything Everywhere All at Once', 'd6', 2022, 139, 'English', 'USA', 'A middle-aged Chinese immigrant is swept up into an insane adventure across universes.', 'movies/everything-everywhere-poster.jpg', 25103, 4.5),
('m6', 'Spirited Away', 'd4', 2001, 125, 'Japanese', 'Japan', 'A sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches.', 'movies/spirited-away-poster.jpg', 19803, 4.7),
('m7', 'The Dark Knight', 'd2', 2008, 152, 'English', 'USA', 'Batman faces the criminal mastermind known as the Joker.', 'movies/dark-knight-poster.jpg', 35123, 4.8),
('m8', 'Pulp Fiction', 'd5', 1994, 154, 'English', 'USA', 'The lives of mob hitmen, a boxer, and bandits intertwine in four tales.', 'movies/pulp-fiction-poster.jpg', 32091, 4.6),
('m9', 'Whiplash', 'd6', 2014, 106, 'English', 'USA', 'A talented young drummer begins to pursue perfection under a ruthless instructor.', 'movies/whiplash-poster.jpg', 24109, 4.6),
('m10', 'La La Land', 'd6', 2016, 128, 'English', 'USA', 'A pianist and an actress fall in love while attempting to reconcile their aspirations.', 'movies/la-la-land-poster.jpg', 26802, 4.4),
('m11', 'Oppenheimer', 'd2', 2023, 180, 'English', 'USA', 'The story of American scientist J. Robert Oppenheimer and the Manhattan Project.', 'movies/oppenheimer-poster.jpg', 36290, 4.8),
('m12', 'Inception', 'd2', 2010, 148, 'English', 'USA', 'A thief who steals corporate secrets through dream-sharing technology.', 'movies/inception-poster.jpg', 42150, 4.8),
('m13', 'The Godfather', 'd8', 1972, 175, 'English', 'USA', 'The aging patriarch of an organized crime dynasty transfers control to his son.', 'movies/godfather-poster.jpg', 48900, 4.9),
('m14', 'Fight Club', 'd9', 1999, 139, 'English', 'USA', 'An insomniac office worker forms an underground fight club.', 'movies/fight-club-poster.jpg', 39800, 4.7),
('m15', 'The Matrix', 'd10', 1999, 136, 'English', 'USA', 'A computer hacker discovers the shocking truth about simulated reality.', 'movies/matrix-poster.jpg', 37500, 4.7),
('m16', 'The Shawshank Redemption', 'd11', 1994, 142, 'English', 'USA', 'Two convicts form a lifelong friendship seeking redemption.', 'movies/shawshank-poster.jpg', 51200, 4.9),
('m17', 'Blade Runner 2049', 'd1', 2017, 164, 'English', 'USA', 'A blade runner uncovers a secret that could plunge society into chaos.', 'movies/blade-runner-2049-poster.jpg', 28400, 4.6),
('m18', 'Princess Mononoke', 'd4', 1997, 134, 'Japanese', 'Japan', 'Ashitaka finds himself in a war between forest gods and a mining colony.', 'movies/princess-mononoke-poster.jpg', 27900, 4.8),
('m19', 'Inglourious Basterds', 'd5', 2009, 153, 'English', 'USA', 'A group of Jewish U.S. soldiers plans to assassinate Nazi leaders.', 'movies/inglourious-basterds-poster.jpg', 31200, 4.6),
('m20', 'Arrival', 'd1', 2016, 116, 'English', 'USA', 'A linguist works to communicate with mysterious alien visitors.', 'movies/arrival-poster.jpg', 26500, 4.7);
