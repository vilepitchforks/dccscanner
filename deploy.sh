#! /bin/bash

npm run build

echo -n "Add commit message: " 

read commitmessage

git add .
git commit -m "$commitmessage"
git push -u github-test master
git push -u github-dccscanner master
# git push -u azure-devops master