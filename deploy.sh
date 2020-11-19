#! /bin/bash

npm run build-client

echo -n "Add commit message: " 

read commitmessage

git add .
git commit -m "$commitmessage"
git push -u github master


