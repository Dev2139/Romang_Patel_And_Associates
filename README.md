# Romang Patel And Associates - Official Website

A professional business website built for Romang Patel And Associates, a consulting/professional services firm. The website features a modern, responsive design with comprehensive sections covering services, projects, about the company, and contact information.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Responsive design optimized for all devices
- Multi-page navigation with React Router
- Professional landing page with multiple sections
- About Us section highlighting company values
- Comprehensive Services overview
- Project gallery showcasing completed work
- Contact form with email integration
- Career opportunities section
- Quote request functionality
- Smooth scrolling and navigation
- Modern UI with Tailwind CSS styling

## Technologies Used
- React 19.1.0
- React Router DOM for navigation
- Vite as the build tool
- Tailwind CSS for styling
- Material UI (MUI) components and icons
- EmailJS for contact form functionality
- Formspree for form handling
- React Slick for carousels/sliders
- Emotion for styling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/username/Romang-Patel-And-Associates.git
```

2. Navigate to the project directory:
```bash
cd Romang-Patel-And-Associates
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Usage

The website has the following main routes:
- `/` - Landing Page
- `/about` - About Us section
- `/services` - Services offered
- `/projects` - Project showcase
- `/projects/:projectId` - Individual project details
- `/contact` - Contact form
- `/quote` - Quote request form
- `/careers` - Career opportunities

## Project Structure
```
├── public/
│   ├── _redirects          # Netlify redirects configuration
│   ├── projects.json       # Project data
│   ├── robots.txt          # SEO configuration
│   └── sitemap.xml         # Site map
├── src/
│   ├── components/         # React components organized by page
│   │   ├── AboutUs/        # About Us page components
│   │   ├── Careers/        # Career page components
│   │   ├── Contacts/       # Contact page components
│   │   ├── LandingPage/    # Landing page components
│   │   ├── Projects/       # Projects page components
│   │   ├── Quote/          # Quote page components
│   │   ├── Services/       # Services page components
│   │   └── ScrollToTop.jsx # Scroll to top utility component
│   ├── App.jsx             # Main application router
│   ├── App.css             # Global styles
│   ├── index.css           # Base styles
│   ├── main.jsx            # Application entry point
│   └── LoaderContext.jsx   # Loading context provider
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Components

### Landing Page Components
- **Navbar**: Navigation bar with responsive menu
- **Section1-9**: Various sections of the landing page (hero, services, testimonials, etc.)
- **Footer**: Site footer with contact information

### Other Page Components
Each major section (About, Services, Projects, etc.) has its own folder with:
- Page wrapper component
- Individual sections (Section1, Section2, etc.)
- Shared Navbar and Footer components

## Deployment

### Development
```bash
npm run dev
```
This runs the app in development mode at http://localhost:5173

### Production Build
```bash
npm run build
```
This creates a production-ready build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

## Environment Variables
The project uses EmailJS for contact forms. You may need to configure the following:
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Support

If you encounter any issues or have questions about the website:
1. Check the existing issues in the repository
2. Create a new issue with a detailed description of the problem
3. Include steps to reproduce if applicable

## License

This project is proprietary to Romang Patel And Associates. Unauthorized copying or distribution is prohibited.

---

**Developed with ❤️ by the development team for Romang Patel And Associates**

For business inquiries, please visit our website or contact us through the provided channels.