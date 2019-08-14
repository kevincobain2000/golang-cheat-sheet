#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd dist/
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git push -f git@github.com:kevincobain2000/golang-cheat-sheet.git master:gh-pages

cd -
