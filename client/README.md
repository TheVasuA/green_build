# Green Build - Electrical Solutions Website

A modern, responsive website for Green Build's electrical solutions business built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design**: Professional UI inspired by industry leaders like Rexel and Delta Electronics
- 📱 **Responsive**: Mobile-first design with optimized layouts for all devices
- ⚡ **Performance Optimized**: 
  - React Suspense for lazy loading
  - Video and image optimization
  - Fast loading times
- 🔧 **Product Catalog**: Delta Electronics-inspired product structure with categories
- 📧 **Contact Form**: Comprehensive enquiry form with serverless email functionality
- 🚀 **SEO Ready**: Complete meta tags and structured data

## 🏗 Business Features

### Product Categories
- **Power Electronics**: UPS, Power Supplies, Inverters
- **Mobility Solutions**: EV Charging, Battery Management
- **Industrial Automation**: PLCs, HMIs, Motor Drives  
- **Infrastructure**: Lighting, HVAC, Building Automation

### Enquiry System
- Professional B2B enquiry form
- Automatic email notifications to info@greenbuild.co
- Lead tracking and source attribution
- Mobile-optimized form experience

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📧 Email Setup

For enquiry form functionality, see [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.

## 🛠 Tech Stack

- **Frontend**: React 18, Vite 5.1.4
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router 7.9.4
- **Icons**: Lucide React
- **Email**: Nodemailer with Vercel serverless functions
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx       # Video hero with Suspense
│   ├── FeatureSection.jsx    # Service highlights
│   ├── Workflow.jsx          # Process steps
│   ├── Testimonials.jsx      # Client reviews
│   ├── Pricing.jsx           # Service packages
│   ├── Footer.jsx            # Professional footer
│   └── Navbar.jsx            # Responsive navigation
├── pages/
│   ├── HomePage.jsx          # Landing page
│   ├── AboutPage.jsx         # Company information
│   ├── products.jsx          # Product catalog
│   └── Enquiry.jsx           # Contact form
├── constants/
│   └── index.jsx             # Site constants
└── assets/                   # Images and videos
```

## 🎯 Business Integration

This website is designed for B2B electrical solutions with:
- Professional lead capture
- Industry-specific product categories  
- Technical specification handling
- Bulk order processing
- Multi-location project support

## 📱 Responsive Design

- **Mobile**: Optimized touch interfaces and forms
- **Tablet**: Enhanced layouts for better readability
- **Desktop**: Full-featured experience with hover effects

## 🔧 Development

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

For deployment instructions and email configuration, see [DEPLOYMENT.md](./DEPLOYMENT.md).
