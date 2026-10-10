INSERT INTO users (id, username, email, role, joined_date, bio) VALUES 
('u1', 'CinephileExplorer', 'dhananjayansreeraj41@gmail.com', 'User', '2026-01-10', 'Watching films, writing reviews, and curating collections.'),
('u2', 'GhibliFanatic', 'ghibli@cinearchive.org', 'User', '2026-03-15', 'Spirited Away changed my life.'),
('u3', 'JazzDrummer99', 'drummer99@cinearchive.org', 'User', '2026-05-20', 'Not quite my tempo.'),
('u4', 'InterstellarNerd', 'nolanfan@cinearchive.org', 'User', '2026-06-01', 'Cooper, this is no time for caution.'),
('u5', 'AdminCuration', 'curator@cinearchive.org', 'Admin', '2025-12-01', 'Official Editor & DB Admin.');

INSERT INTO movies (id, title, director_id, year, runtime, language, country, synopsis, poster_url, likes_count, average_rating) VALUES
('m1', 'Dune: Part Two', 'd1', 2024, 166, 'English', 'USA', 'Paul Atreides unites with Chani and the Fremen.', 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2TGpiu0t.jpg', 15420, 4.8),
('m2', 'Spider-Man: Across the Spider-Verse', 'd7', 2023, 140, 'English', 'USA', 'Miles Morales catapults across the Multiverse.', 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg', 18230, 4.7),
('m3', 'Interstellar', 'd2', 2014, 169, 'English', 'USA', 'A team of explorers travel through a wormhole in space.', 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MvlId7St.jpg', 25600, 4.9),
('m4', 'Parasite', 'd3', 2019, 132, 'Korean', 'South Korea', 'All unemployed, Ki-taek family takes peculiar interest in the wealthy Parks.', 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', 22100, 4.8);
