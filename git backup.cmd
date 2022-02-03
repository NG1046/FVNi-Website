@echo off
title FVNi-Website - Git Update Repository
git add ./.gitignore
git add ./*
git commit -m "update commit"
git branch -M backup

git remote add origin https://github.com/EDGEDevInteractive/FVNi-Website.git

git fetch origin
git log origin/backup
git pull --rebase origin backup
git push -u origin backup
git fetch origin
pause