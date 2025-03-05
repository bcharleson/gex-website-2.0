# TOFU Landing Page Project Overview

## Tech Stack Summary
- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js
- **Animation**: Framer Motion
- **UI Components**: Radix UI (for accessible components)
- **Icons**: Heroicons, Lucide React, React Icons
- **Analytics**: Vercel Analytics
- **Deployment**: Netlify/Vercel compatible

## Project Structure

### Core Framework
- **Next.js App Router**: Modern Next.js App Router structure with app/ directory layout
- **TypeScript**: Full TypeScript support with proper type definitions

### Main Components
- **Landing Page**: Modern landing page with advanced 3D effects using Three.js
- **WebGL Optimization**: Intelligent WebGL detection with fallbacks for different devices/browsers
- **Responsive Design**: Mobile-first approach with responsive components
- **Calendly Integration**: Appointment booking via Calendly
- **3D Background**: Particle effects and interactive 3D elements
- **HDR Buttons**: Custom interactive button components
- **Logo Marquee**: Animated partner logo display

### Key Features
- **3D Graphics with Fallbacks**: The site uses Three.js for 3D effects but has intelligent fallbacks for devices without WebGL support
- **Performance Optimization**: Code for monitoring and optimizing WebGL performance
- **Cross-browser Compatibility**: Special handling for Safari and iOS devices
- **Motion Effects**: Framer Motion for smooth animations
- **Service Showcase**: Interactive carousel for services display
- **Dynamic Components**: Lazy-loaded components for better performance

## Project Setup Instructions

### Clone the Repository
```
>
```

### Environment Setup
- Node.js 18.x required (as specified in package.json)
- install

### Development Environment
- 3001

### Build for Production
- start

### Netlify Deployment
- Netlify configuration is included in netlify.toml
- Use the provided netlify-build script:
- build

## Key Dependencies

### Core Dependencies
- next: ^14.0.4
- react: ^18.2.0
- react-dom: ^18.2.0
- typescript: ^5

### UI and Animation
- framer-motion: ^10.18.0
- tailwindcss: ^3
- class-variance-authority: ^0.7.0
- clsx: ^2.1.0
- tailwind-merge: ^2.2.1

### 3D and Graphics
- three: ^0.161.0
- Custom WebGL detection and fallback utilities

### UI Components
- @radix-ui/react-checkbox: ^1.1.4
- @radix-ui/react-scroll-area: ^1.2.3
- @radix-ui/react-separator: ^1.1.2
- @radix-ui/react-icons: ^1.3.2

### Icons
- @heroicons/react: ^2.2.0
- lucide-react: ^0.475.0
- react-icons: ^5.5.0

### Integration
- react-calendly: ^4.3.1
- @vercel/analytics: ^1.5.0

## Key Files Overview

### Configuration Files
- package.json: Project dependencies and scripts
- next.config.js: Next.js configuration with image optimization settings
- tailwind.config.js: Tailwind CSS theme customization
- tsconfig.json: TypeScript configuration
- netlify.toml: Netlify deployment configuration

### Core Application Files
- app/layout.tsx: Root layout with font loading, analytics, and provider setup
- app/page.tsx: Main landing page component
- app/globals.css: Global CSS styles with Tailwind directives

### 3D and Visual Components
- src/components/3d/ThreeBase.tsx: Base component for Three.js scenes
- src/components/3DBackground.tsx: Background 3D effect
- src/components/ParticleEffect.tsx: Particle animation effect
- components/HdrBackground.tsx: HDR background effect

### UI Components
- app/components/Logo.tsx: Brand logo component
- app/components/LogoMarquee.tsx: Scrolling logo display
- app/components/ServicesCarousel.tsx: Services showcase carousel
- app/components/RaycastButton.tsx: Custom interactive button
- components/HDRButton.tsx: High-dynamic-range button component

### Utilities
- src/utils/webGL.ts: WebGL detection and optimization
- src/utils/advancedWebGLCheck.ts: Advanced WebGL capability checking
- src/utils/webglDetection.ts: WebGL detection utilities

### Specialized Components
- app/components/SafariIOSFallback.tsx: Fallback for Safari/iOS devices
- app/components/ErrorBoundary.tsx: Error boundary for React components
- app/components/CalendlyWidget.tsx: Calendly integration

## Structure for Replication

To replicate this project for another company:

1. **Fork/Clone the Repository**

2. **Update Content and Branding**:
   - Replace logos and brand colors in the UI components
   - Update content in app/page.tsx
   - Modify the tailwind.config.js for your brand colors

3. **Configure Dependencies**:
   - Run npm install to install all dependencies

4. **Customize 3D Effects**:
   - Modify src/components/3DBackground.tsx for custom 3D effects
   - Adjust particle effects in src/components/ParticleEffect.tsx

5. **Update Integration Points**:
   - Replace Calendly links in app/components/CalendlyWidget.tsx
   - Update analytics in app/layout.tsx

6. **Test Performance**:
   - Test WebGL performance on various devices
   - Ensure fallbacks work correctly

7. **Deploy**:
   - Use Netlify or Vercel for deployment
   - Follow the configuration in netlify.toml for Netlify

This comprehensive implementation provides a modern, interactive landing page with 3D effects, responsive design, and integration points for marketing tools, making it suitable for enterprise-grade marketing websites.
