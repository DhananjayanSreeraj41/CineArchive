-- Add password_hash to users table
ALTER TABLE users ADD COLUMN password_hash VARCHAR(255);

-- (Optional) Default hash for existing users if you want them to be able to login, 
-- but since this is just a dummy app, we can leave them NULL or set a default.
-- Let's set a default hash for 'password' (SHA-256 of 'password'):
-- 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
UPDATE users SET password_hash = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8';
