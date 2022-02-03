@echo off
title FVNi-Website
git init
git add ./.gitignore
git add ./*
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/EDGEDevInteractive/FVNi-Website.git
git fetch origin
git log origin/main
git pull --rebase origin main
git push -u origin main
git fetch origin
pause