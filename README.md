# Sterling Financial Advisors Website

Professional financial planning website built with Vite, featuring image optimization and WebP conversion for optimal performance.

## Features

- ✅ **Vite Build System** - Lightning-fast development and optimized production builds
- ✅ **Automatic Image Optimization** - Images are automatically optimized during build
- ✅ **WebP Support** - Modern image format for better performance
- ✅ **Multi-page Application** - 11 HTML pages with clean navigation
- ✅ **Responsive Design** - Mobile-first Bootstrap 5 implementation
- ✅ **Vercel Ready** - Pre-configured for instant deployment

## Tech Stack

- **Build Tool**: Vite 7
- **CSS Framework**: Bootstrap 5.3.3
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)
- **Image Optimization**: Sharp + Vite Image Optimizer

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start development server at http://localhost:3000
npm run dev
```

The development server includes:
- Hot Module Replacement (HMR)
- Instant server start
- Automatic browser opening

### Building for Production

```bash
# Build optimized production files
npm run build
```

Build output will be in the `dist/` directory with:
- Minified HTML, CSS, and JavaScript
- Optimized and compressed images
- Asset fingerprinting for cache busting

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Vercel will auto-detect the Vite configuration
4. Deploy with one click

### Option 3: Manual Deploy

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Vercel

## Project Structure

```
finance-template/
├── assets/              # Images, fonts, and static assets
│   ├── images/         # Image files (auto-optimized on build)
│   └── optima-webfont/ # Custom Optima font files
├── css/                # Stylesheets
│   └── style.css      # Main stylesheet
├── dist/               # Production build output (generated)
├── *.html             # HTML pages (11 pages total)
├── vite.config.js     # Vite configuration
├── vercel.json        # Vercel deployment config
└── package.json       # Dependencies and scripts
```

## Pages

1. **index.html** - Homepage
2. **about.html** - About Us
3. **services.html** - Services Overview
4. **protection.html** - Protection & Life Insurance
5. **estate-planning.html** - Estate Planning
6. **mortgage-planning.html** - Mortgage Planning
7. **business-planning.html** - Business Planning
8. **team.html** - Our Team
9. **resources.html** - Resources
10. **faq.html** - Frequently Asked Questions
11. **contact.html** - Contact Form

## Image Optimization

All images in `assets/images/` are automatically:
- Compressed with Sharp
- Optimized for web delivery
- Reduced in file size by ~23% on average

Supported formats: JPG, JPEG, PNG, WebP

## Configuration

### Vite Config (`vite.config.js`)

- Multi-page setup with all 11 HTML files
- Image optimization with quality 85
- Development server on port 3000

### Vercel Config (`vercel.json`)

- Framework detection: Vite
- Output directory: `dist`
- Caching headers for static assets
- SPA fallback routing

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <2.5s
- Total Bundle Size: ~800KB (optimized)

## License

ISC

## Support

For issues or questions, please open an issue in the repository.
