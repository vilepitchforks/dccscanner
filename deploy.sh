#! /bin/bash

# npm run build-client

echo "Add commit message in format \"Commit message\": " 

read commitmessage
echo $commitmessage
git add .
git commit -m "$commitmessage"
# git push -u github master


