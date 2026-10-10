#!/bin/bash
echo "Setting up PostgreSQL Database..."
sudo -u postgres psql -c "CREATE USER cine_user WITH PASSWORD 'cine_pass';"
sudo -u postgres psql -c "CREATE DATABASE cinearchive;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE cinearchive TO cine_user;"
sudo -u postgres psql -d cinearchive -c "GRANT ALL ON SCHEMA public TO cine_user;"

echo "Running Schema and Seed files..."
# Use input redirection so the 'postgres' user doesn't need read permissions to /home/tharak/
sudo -u postgres psql -d cinearchive < /home/tharak/anti-grav/CineArchive/db/schema.sql
sudo -u postgres psql -d cinearchive < /home/tharak/anti-grav/CineArchive/db/seed.sql

echo "Database Setup Complete!"
