git commit -m "Update commit"
git branch -M main
git fetch origin
git log origin/main
git pull --rebase origin main
git push -u origin main
git fetch origin
pause