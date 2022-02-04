@echo off
title FVNi-Website Git Initialize Repository
git init
git add ./.gitignore
git add ./*
git commit -m "first commit"
git branch -M pre
git remote add origin https://github.com/EDGEDevInteractive/FVNi-Website.git
git fetch origin
git log origin/pre
git pull --rebase origin pre
git push -u origin pre
git fetch origin
pause
