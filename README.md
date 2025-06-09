# Bandoo Studio Website

A modern, professional website for Bandoo Music Studio built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all screen sizes and devices
- **Dark/Light Mode Toggle**: User preference-based theme switching with local storage persistence
- **Stunning Animations**: Powered by Framer Motion for smooth page transitions and scroll animations
- **Video Background Hero**: Dynamic video background with parallax floating elements
- **Interactive Gallery**: Image gallery with lightbox functionality for studio showcasing
- **Asymmetrical Layouts**: Modern design with clip-path and creative section layouts
- **Custom Cursor**: Enhanced user experience with a custom animated cursor
- **Scroll Progress Indicator**: Visual feedback showing scroll position on the page
- **Section Dividers**: SVG-based animated section dividers with multiple styles
- **Reusable Motion Components**: Custom button components with consistent animation patterns
- **Accessibility Features**:
  - ARIA attributes for screen readers
  - Keyboard navigation support
  - Skip-to-content functionality
  - Reduced motion preferences support
  - Proper focus management
- **Performance Optimized**: 
  - Conditional rendering for mobile devices
  - Image optimization with Next.js Image component
  - Code splitting and lazy loading
  - Optimized animation performance
- **SEO Ready**: 
  - Comprehensive metadata implementation
  - OpenGraph and Twitter card support
  - JSON-LD structured data (Schema.org)
  - Sitemap and robots.txt
- **Enhanced UX**: Motion buttons, parallax effects, and smooth transitions between sections

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

- `app/`: Contains the main Next.js app router components
  - `page.tsx`: Main homepage with all sections
  - `layout.tsx`: Root layout with providers and global components
  - `api/`: API routes for form handling
- `components/`: Reusable UI components
  - `AboutUsSection.tsx`: Asymmetrical about section with clip-path styling
  - `AnimatedBackground.tsx`: Ambient background animation for sections
  - `AnimateOnScroll.tsx`: Utility component for scroll-triggered animations
  - `CustomCursor.tsx`: Enhanced cursor experience
  - `GallerySection.tsx`: Interactive gallery with lightbox functionality
  - `MotionButton.tsx`: Reusable animated button component
  - `ScrollProgressBar.tsx`: Visual progress indicator 
  - `SectionDivider.tsx`: SVG dividers between sections
  - `VideoBackground.tsx`: Video hero background component
  - `SkipToContent.tsx`: Accessibility jump link
  - `ThemeToggle.tsx`: Dark/light mode switcher
- `context/`: React context providers
  - `ThemeContext.tsx`: Theme state management
  - `ReducedMotionContext.tsx`: Accessibility preference management
- `hooks/`: Custom React hooks
  - `useScroll.ts`: Scroll-based animation utilities
- `lib/`: Utility functions and configurations
  - `metadata.ts`: SEO metadata configuration
  - `structuredData.ts`: JSON-LD schema generators
- `public/`: Static assets
  - `videos/`: Background videos for hero section
  - `gallery/`: Studio gallery images
  - `avatars/`: Testimonial user images

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bandoo-studio-site.git
cd bandoo-studio-site

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The site will be available at http://localhost:3000

### Building for Production

```bash
# Create production build
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

### Deployment

This project is configured for easy deployment on Vercel:

1. Push your repository to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy with the optimal settings

## Customization

### Adding New Images

1. Place new gallery images in `public/gallery/` folder
2. Update the gallery items in `GallerySection.tsx`

### Changing Video Background

1. Replace the video files in `public/videos/`
2. Make sure to provide both MP4 and WebM formats for better browser compatibility

### Updating Content

Most content is stored directly in the component files and can be updated there.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
