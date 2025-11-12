# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages at: https://michaelmarshal.github.io/captiva/

## Automatic Deployment

The project includes GitHub Actions workflow that automatically:
1. Builds the project when code is pushed to main branch
2. Deploys to GitHub Pages
3. Handles routing for Single Page Application

## Manual Deployment

To deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Configuration

- **Base URL**: `/captiva/` (configured in vite.config.ts)
- **Build Output**: `dist/` directory
- **GitHub Actions**: `.github/workflows/deploy.yml`
- **SPA Routing**: Handled by 404.html and index.html scripts

## Requirements

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Ensure main branch protection if needed
4. Verify repository has Pages write permissions

## URL Structure

- **Homepage**: https://michaelmarshal.github.io/captiva/
- **About**: https://michaelmarshal.github.io/captiva/about
- **Services**: https://michaelmarshal.github.io/captiva/services/assess
- **Contact**: https://michaelmarshal.github.io/captiva/contact

## Troubleshooting

- Verify base URL in vite.config.ts matches repository name
- Check GitHub Actions logs for build errors
- Ensure all assets use relative paths
- Clear browser cache if changes don't appear