#!/bin/bash
cd "$(dirname "$0")"

# Free port 8080 if an old instance is already running
if command -v fuser >/dev/null 2>&1; then
    fuser -k 8080/tcp >/dev/null 2>&1 || true
elif command -v lsof >/dev/null 2>&1; then
    lsof -ti:8080 | xargs kill -9 >/dev/null 2>&1 || true
fi
sleep 0.5

echo "Compiling Java Backend Server..."
javac -cp "lib/*:." Server.java
if [ $? -ne 0 ]; then
    echo "Compilation failed!"
    exit 1
fi
echo "Starting Java Backend Server..."
java -cp "lib/*:." Server
