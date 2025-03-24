# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and a functional contact form powered by EmailJS.

## 🚀 Live Demo

Visit the live site: [https://kilvish25.github.io](https://kilvish25.github.io)

## ✨ Features

- Responsive design that works on all devices
- Dark/Light mode support
- Smooth scroll animations
- Interactive project showcase
- Contact form with EmailJS integration
- SEO optimized
- TypeScript for type safety
- Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email Service:** EmailJS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages
- **Version Control:** Git
- **Package Manager:** npm

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kilvish25/kilvish25.github.io.git
   cd kilvish25.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)
The site automatically deploys to GitHub Pages when changes are pushed to the master branch. Just push your changes:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

### Manual Deployment

You can deploy manually using either the provided script or step-by-step commands.

#### Using Deployment Script

1. **Make your changes and test locally**
   ```bash
   # Test in development
   npm run dev

   # Build and test production version
   npm run build
   npx serve out
   ```

2. **Run the deployment script**
   ```bash
   ./deploy.sh
   ```

#### Manual Step-by-Step Deployment

1. **Clean and build the project**
   ```bash
   # Clean previous build
   rm -rf out
   
   # Build project
   npm run build
   ```

2. **Prepare for deployment**
   ```bash
   # Navigate to build output
   cd out
   
   # Create .nojekyll file
   touch .nojekyll
   
   # Initialize git
   git init
   
   # Stage all files
   git add .
   
   # Commit changes
   git commit -m "Manual deployment"
   ```

3. **Deploy to GitHub Pages**
   ```bash
   # Force push to gh-pages branch
   git push -f git@github.com:Kilvish25/kilvish25.github.io.git master:gh-pages
   ```

4. **Verify Deployment**
   - Wait a few minutes for GitHub Pages to update
   - Visit https://kilvish25.github.io in an incognito window
   - Check browser console for any errors

## 📝 Environment Variables

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key

## 🧰 Development

### Directory Structure

```
├── public/          # Static files
├── src/
│   ├── app/        # Next.js app directory
│   ├── components/ # React components
│   ├── lib/        # Utility functions
│   └── styles/     # Global styles
├── .github/        # GitHub Actions workflows
└── ...config files
```

### Key Files

- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `tsconfig.json`: TypeScript configuration
- `deploy.sh`: Manual deployment script

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier
- `./deploy.sh`: Manual deployment to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/Kilvish25/kilvish25.github.io/issues).

## 📧 Contact

For any questions or concerns, please reach out through the contact form on the website.
