#!/bin/bash

# Make the script executable
chmod +x check-gh-pages.sh

# Check if the repository exists
echo "Checking if the repository exists..."
git ls-remote https://github.com/Divi-1910/Divi.git &> /dev/null
if [ $? -ne 0 ]; then
  echo "Repository does not exist or is not accessible."
  exit 1
fi

# Check if the gh-pages branch exists
echo "Checking if the gh-pages branch exists..."
git ls-remote --heads https://github.com/Divi-1910/Divi.git gh-pages &> /dev/null
if [ $? -ne 0 ]; then
  echo "The gh-pages branch does not exist."
  echo "Creating gh-pages branch..."
  
  # Create and push an empty gh-pages branch
  git checkout --orphan gh-pages
  git rm -rf .
  echo "# GitHub Pages" > README.md
  git add README.md
  git commit -m "Initial gh-pages commit"
  git push origin gh-pages
  git checkout main
else
  echo "The gh-pages branch exists."
fi

echo "Done! Please check the GitHub repository settings to ensure GitHub Pages is enabled."
echo "Go to: https://github.com/Divi-1910/Divi/settings/pages"
echo "Make sure it's set to deploy from the gh-pages branch."