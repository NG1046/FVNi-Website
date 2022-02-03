@echo off
title FVNi-Website - Git Update Repository
git add ./.gitignore
git add ./*
git commit -m "update commit"
git branch -M main
git fetch origin
git log origin/main
git pull --rebase origin main
git push -u origin main
git fetch origin
pause