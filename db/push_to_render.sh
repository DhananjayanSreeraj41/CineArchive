#!/bin/bash
cd "$(dirname "$0")"
echo "Pushing Schema to Render..."
psql "postgresql://cine_man:U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc@dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com/cine_archive?sslmode=require" -f full_schema.sql

echo "Pushing Seed Data to Render..."
psql "postgresql://cine_man:U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc@dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com/cine_archive?sslmode=require" -f full_seed.sql

echo "Adding Authentication changes..."
psql "postgresql://cine_man:U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc@dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com/cine_archive?sslmode=require" -f 02_add_auth.sql

echo "Done! The Render database is now populated."
