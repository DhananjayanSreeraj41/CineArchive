#!/bin/bash
cd "$(dirname "$0")"
echo "Compiling Java Backend Server..."
javac -cp "lib/*:." Server.java
if [ $? -ne 0 ]; then
    echo "Compilation failed!"
    exit 1
fi
echo "Starting Java Backend Server..."
java -cp "lib/*:." Server
