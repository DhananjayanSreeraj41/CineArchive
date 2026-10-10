#!/bin/bash
cd "$(dirname "$0")"
echo "Starting Java Backend Server..."
java -cp "lib/*:." Server
