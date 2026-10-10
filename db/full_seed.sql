INSERT INTO users (id, username, email, role, joined_date, bio) VALUES ('u1', 'CinephileExplorer', 'dhananjayansreeraj41@gmail.com', 'User', '2026-01-10', 'Watching films, writing reviews, and curating collections. Letterboxd fanatic turned CinéArchive loyalist.');
INSERT INTO users (id, username, email, role, joined_date, bio) VALUES ('u2', 'GhibliFanatic', 'ghibli@cinearchive.org', 'User', '2026-03-15', 'Spirited Away changed my life. Hand-drawn animation purist.');
INSERT INTO users (id, username, email, role, joined_date, bio) VALUES ('u3', 'JazzDrummer99', 'drummer99@cinearchive.org', 'User', '2026-05-20', 'Not quite my tempo. Whiplash is the greatest movie ever made.');
INSERT INTO users (id, username, email, role, joined_date, bio) VALUES ('u4', 'InterstellarNerd', 'nolanfan@cinearchive.org', 'User', '2026-06-01', 'Cooper, this is no time for caution. Gravity and black holes are my jam.');
INSERT INTO users (id, username, email, role, joined_date, bio) VALUES ('u5', 'AdminCuration', 'curator@cinearchive.org', 'Admin', '2025-12-01', 'Official Editor & DB Admin of CinéArchive. Preserving high-quality cinema discussions.');

INSERT INTO directors (id, name, birth_year, bio) VALUES ('d1', 'Denis Villeneuve', 1967, 'Canadian filmmaker known for his visually stunning and complex sci-fi epics.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d2', 'Christopher Nolan', 1970, 'British-American director famed for mind-bending plots and practical visual effects.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d3', 'Bong Joon Ho', 1969, 'South Korean director master of genre-blending black comedies and social thrillers.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d4', 'Hayao Miyazaki', 1941, 'Japanese animator, director and co-founder of Studio Ghibli, legendary teller of dreams.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d5', 'Quentin Tarantino', 1963, 'American director celebrated for stylized violence, witty dialogue, and retro aesthetics.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d6', 'Damien Chazelle', 1985, 'Youngest Best Director Oscar winner, famous for music-centric high-tempo dramas.');
INSERT INTO directors (id, name, birth_year, bio) VALUES ('d7', 'Kemp Powers', 1973, 'Acclaimed American director and playwright, writer of Soul and Spider-Verse.');

INSERT INTO actors (id, name, birth_year, bio) VALUES ('a1', 'Timothée Chalamet', 1995, 'Academy Award-nominated American actor, lead of Dune and Call Me By Your Name.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a2', 'Zendaya', 1996, 'American actress and singer, Emmy-winner starring in Dune and Euphoria.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a3', 'Matthew McConaughey', 1969, 'Oscar-winning American actor, space traveler Cooper in Interstellar.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a4', 'Anne Hathaway', 1982, 'Versatile American actress, Oscar-winner, starred in Interstellar and Les Misérables.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a5', 'Song Kang-ho', 1967, 'Legendary South Korean actor, frequent Bong Joon Ho collaborator, star of Parasite.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a6', 'Michelle Yeoh', 1962, 'Oscar-winning Malaysian actress, martial artist, lead of Everything Everywhere All at Once.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a7', 'Rumi Hiiragi', 1987, 'Japanese voice actress, voice of Chihiro in Spirited Away.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a8', 'Christian Bale', 1974, 'Oscar-winning method actor, the Dark Knight himself.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a9', 'Heath Ledger', 1979, 'Late Australian actor, legendary Oscar-winning portrayal of the Joker.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a10', 'John Travolta', 1954, 'American actor and dancer, Vincent Vega in Pulp Fiction.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a11', 'Samuel L. Jackson', 1948, 'One of the most prolific and highest-grossing actors of all time.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a12', 'Miles Teller', 1987, 'Intense American actor, starred in Whiplash and Top Gun: Maverick.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a13', 'Emma Stone', 1988, 'Double Oscar-winning American actress, lead of La La Land and Poor Things.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a14', 'J.K. Simmons', 1955, 'Oscar-winning character actor, unforgettable performance as Fletcher in Whiplash.');
INSERT INTO actors (id, name, birth_year, bio) VALUES ('a15', 'Ryan Gosling', 1980, 'Charismatic Oscar-nominated Canadian actor, lead of La La Land and Drive.');

INSERT INTO genres (id, name) VALUES ('g1', 'Sci-Fi');
INSERT INTO genres (id, name) VALUES ('g2', 'Adventure');
INSERT INTO genres (id, name) VALUES ('g3', 'Drama');
INSERT INTO genres (id, name) VALUES ('g4', 'Animation');
INSERT INTO genres (id, name) VALUES ('g5', 'Action');
INSERT INTO genres (id, name) VALUES ('g6', 'Thriller');
INSERT INTO genres (id, name) VALUES ('g7', 'Comedy');
INSERT INTO genres (id, name) VALUES ('g8', 'Fantasy');
INSERT INTO genres (id, name) VALUES ('g9', 'Family');
INSERT INTO genres (id, name) VALUES ('g10', 'Crime');
INSERT INTO genres (id, name) VALUES ('g11', 'Music');
INSERT INTO genres (id, name) VALUES ('g12', 'Romance');

INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m1', 'Dune: Part Two', 2024, 'd1', 166, 'English', 'USA', 4.7, 15402, 'movies/dune-2-poster.jpg', 'movies/dune-2-backdrop.jpg', 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m2', 'Spider-Man: Across the Spider-Verse', 2023, 'd7', 140, 'English', 'USA', 4.6, 22841, 'movies/spider-verse-poster.jpg', 'movies/spider-verse-backdrop.jpg', 'Miles Morales is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m3', 'Interstellar', 2014, 'd2', 169, 'English', 'USA', 4.8, 38402, 'movies/interstellar-poster.jpg', 'movies/interstellar-backdrop.jpg', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity''s survival.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m4', 'Parasite', 2019, 'd3', 132, 'Korean', 'South Korea', 4.7, 29402, 'movies/parasite-poster.jpg', 'movies/parasite-backdrop.jpg', 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m5', 'Everything Everywhere All at Once', 2022, 'd6', 139, 'English', 'USA', 4.5, 25103, 'movies/everything-everywhere-poster.jpg', 'movies/everything-everywhere-backdrop.jpg', 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m6', 'Spirited Away', 2001, 'd4', 125, 'Japanese', 'Japan', 4.7, 19803, 'movies/spirited-away-poster.jpg', 'movies/spirited-away-backdrop.jpg', 'During her family''s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, spirits, and witches.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m7', 'The Dark Knight', 2008, 'd2', 152, 'English', 'USA', 4.8, 35123, 'movies/dark-knight-poster.jpg', 'movies/dark-knight-backdrop.jpg', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his greatest tests.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m8', 'Pulp Fiction', 1994, 'd5', 154, 'English', 'USA', 4.6, 32091, 'movies/pulp-fiction-poster.jpg', 'movies/pulp-fiction-backdrop.jpg', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m9', 'Whiplash', 2014, 'd6', 106, 'English', 'USA', 4.6, 24109, 'movies/whiplash-poster.jpg', 'movies/whiplash-backdrop.jpg', 'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost.');
INSERT INTO movies (id, title, year, director_id, runtime, language, country, avg_rating, likes_count, poster, backdrop, synopsis) VALUES ('m10', 'La La Land', 2016, 'd6', 128, 'English', 'USA', 4.4, 26802, 'movies/la-la-land-poster.jpg', 'movies/la-la-land-backdrop.jpg', 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.');

INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg1', 'm1', 'g1');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg2', 'm1', 'g2');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg3', 'm1', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg4', 'm2', 'g4');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg5', 'm2', 'g5');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg6', 'm2', 'g1');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg7', 'm3', 'g1');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg8', 'm3', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg9', 'm3', 'g2');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg10', 'm4', 'g6');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg11', 'm4', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg12', 'm4', 'g7');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg13', 'm5', 'g1');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg14', 'm5', 'g5');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg15', 'm5', 'g7');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg16', 'm6', 'g4');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg17', 'm6', 'g8');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg18', 'm6', 'g9');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg19', 'm7', 'g5');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg20', 'm7', 'g10');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg21', 'm7', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg22', 'm8', 'g10');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg23', 'm8', 'g6');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg24', 'm9', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg25', 'm9', 'g11');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg26', 'm10', 'g12');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg27', 'm10', 'g3');
INSERT INTO movie_genres (id, movie_id, genre_id) VALUES ('mg28', 'm10', 'g11');

INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma1', 'm1', 'a1');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma2', 'm1', 'a2');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma3', 'm3', 'a3');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma4', 'm3', 'a4');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma5', 'm4', 'a5');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma6', 'm5', 'a6');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma7', 'm6', 'a7');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma8', 'm7', 'a8');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma9', 'm7', 'a9');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma10', 'm8', 'a10');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma11', 'm8', 'a11');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma12', 'm9', 'a12');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma13', 'm9', 'a14');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma14', 'm10', 'a13');
INSERT INTO movie_actors (id, movie_id, actor_id) VALUES ('ma15', 'm10', 'a15');

INSERT INTO reviews (id, movie_id, user_id, review_text, created_at, likes_count) VALUES ('r1', 'm3', 'u4', 'An absolute masterclass in sci-fi filmmaking. Hans Zimmer''s pipe organ score is transcendent, and the emotional core between Cooper and Murph hits like a freight train. Every single frame is cinematic poetry.', '2026-07-15', 120);
INSERT INTO reviews (id, movie_id, user_id, review_text, created_at, likes_count) VALUES ('r2', 'm6', 'u2', 'Miyazaki creates a dreamscape that is so immersive you can practically smell the sulfur in the bathhouse. Beautiful, terrifying, and deeply moving. Truly the peak of animated storytelling.', '2026-07-20', 85);
INSERT INTO reviews (id, movie_id, user_id, review_text, created_at, likes_count) VALUES ('r3', 'm9', 'u3', 'J.K. Simmons is terrifyingly brilliant. The tension in the practice room is thicker than in most thriller films. An exhausting but thoroughly satisfying watch.', '2026-07-22', 42);

INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt1', 'm3', 'u4', 5, '2026-07-15');
INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt2', 'm6', 'u2', 5, '2026-07-20');
INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt3', 'm9', 'u3', 4, '2026-07-22');
INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt4', 'm3', 'u1', 5, '2026-07-23');
INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt5', 'm6', 'u1', 4, '2026-07-24');
INSERT INTO ratings (id, movie_id, user_id, rating_value, created_at) VALUES ('rt6', 'm9', 'u1', 5, '2026-07-25');

INSERT INTO watchlists (id, user_id, movie_id, added_at) VALUES ('w1', 'u1', 'm1', '2026-07-25');
INSERT INTO watchlists (id, user_id, movie_id, added_at) VALUES ('w2', 'u1', 'm4', '2026-07-25');
INSERT INTO watchlists (id, user_id, movie_id, added_at) VALUES ('w3', 'u1', 'm5', '2026-07-25');

INSERT INTO lists (id, user_id, name, description, created_at) VALUES ('l1', 'u1', 'Mind-Bending Science Fiction', 'A handpicked selection of movies that challenge your perception of reality and take you beyond.', '2026-07-23');
INSERT INTO lists (id, user_id, name, description, created_at) VALUES ('l2', 'u5', 'Modern Cinema Masterpieces', 'Films from the last two decades that redefine cinematic visual storytelling.', '2026-07-24');

INSERT INTO collections (id, list_id, movie_id) VALUES ('c1', 'l1', 'm3');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c2', 'l1', 'm1');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c3', 'l1', 'm5');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c4', 'l2', 'm4');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c5', 'l2', 'm2');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c6', 'l2', 'm9');
INSERT INTO collections (id, list_id, movie_id) VALUES ('c7', 'l2', 'm10');

INSERT INTO comments (id, review_id, user_id, comment_text, created_at) VALUES ('cm1', 'r1', 'u2', 'Totally agree on Hans Zimmer! The No Time For Caution track is sensational.', '2026-07-16');
INSERT INTO comments (id, review_id, user_id, comment_text, created_at) VALUES ('cm2', 'r1', 'u3', 'Amazing review. But Whiplash still has better musical integration! ;)', '2026-07-17');

INSERT INTO followers (id, follower_user_id, followed_user_id, followed_at) VALUES ('f1', 'u1', 'u2', '2026-07-20');
INSERT INTO followers (id, follower_user_id, followed_user_id, followed_at) VALUES ('f2', 'u1', 'u3', '2026-07-21');
INSERT INTO followers (id, follower_user_id, followed_user_id, followed_at) VALUES ('f3', 'u2', 'u1', '2026-07-22');

INSERT INTO notifications (id, user_id, message, is_read, created_at) VALUES ('n1', 'u1', '@GhibliFanatic commented on your logged film: ''Awesome watch!''', FALSE, '2026-07-25');
INSERT INTO notifications (id, user_id, message, is_read, created_at) VALUES ('n2', 'u1', '@JazzDrummer99 liked your review of Whiplash.', TRUE, '2026-07-24');

INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw1', 'm3', 'Academy Awards', 'Best Visual Effects', 2015);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw2', 'm4', 'Academy Awards', 'Best Picture', 2020);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw3', 'm4', 'Academy Awards', 'Best Director (Bong Joon Ho)', 2020);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw4', 'm4', 'Academy Awards', 'Best Original Screenplay', 2020);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw5', 'm4', 'Cannes Film Festival', 'Palme d''Or', 2019);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw6', 'm6', 'Academy Awards', 'Best Animated Feature', 2003);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw7', 'm6', 'Berlin International Film Festival', 'Golden Bear', 2002);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw8', 'm7', 'Academy Awards', 'Best Supporting Actor (Heath Ledger)', 2009);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw9', 'm7', 'Academy Awards', 'Best Sound Editing', 2009);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw10', 'm9', 'Academy Awards', 'Best Supporting Actor (J.K. Simmons)', 2015);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw11', 'm10', 'Academy Awards', 'Best Director (Damien Chazelle)', 2017);
INSERT INTO awards (id, movie_id, name, category, year_won) VALUES ('aw12', 'm10', 'Academy Awards', 'Best Actress (Emma Stone)', 2017);

