#!/bin/bash

# Ensure we're starting from a clean state
echo "Cleaning up previous build..."
rm -rf out

# Build the project
echo "Building the project..."
npm run build

# Navigate to the out directory
echo "Preparing for deployment..."
cd out

# Create .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Initialize git in the out directory
git init
git add .
git commit -m "Manual deployment"

# Force push to the gh-pages branch
echo "Deploying to GitHub Pages..."
git push -f git@github.com:Kilvish25/kilvish25.github.io.git master:gh-pages

echo "Deployment complete! Your site should be live in a few minutes." 