// Theme utility classes for consistent styling across the application
export const themeClasses = {
  // Background colors
  bg: {
    primary: 'bg-theme',
    secondary: 'bg-theme-secondary',
    accent: 'bg-theme-accent',
    muted: 'bg-theme-muted',
  },
  
  // Text colors
  text: {
    primary: 'text-theme',
    secondary: 'text-theme-secondary',
    muted: 'text-theme-muted',
    light: 'text-theme-light',
  },
  
  // Border colors
  border: {
    primary: 'border-theme',
    light: 'border-theme-light',
  },
  
  // Button styles
  buttons: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline',
  },
  
  // Navigation styles
  nav: {
    link: 'nav-link',
  },
  
  // Card styles
  card: 'card',
  
  // Gradient styles
  gradients: {
    brand: 'gradient-brand',
    brandText: 'gradient-brand-text',
    primary: 'bg-gradient-primary',
    secondary: 'bg-gradient-secondary',
    accent: 'bg-gradient-accent',
  },
  
  // Common component combinations
  components: {
    navbar: 'sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-theme/80 bg-theme/80',
    heroTitle: 'text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide text-theme',
    sectionTitle: 'text-2xl sm:text-3xl lg:text-4xl tracking-wide text-theme',
    description: 'text-lg text-theme-muted',
    container: 'max-w-7xl mx-auto px-6',
  }
};

// Color palette for reference
export const colors = {
  primary: {
    main: '#22c55e',
    light: '#4ade80',
    dark: '#16a34a',
  },
  secondary: {
    main: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
  },
  accent: {
    main: '#ef4444',
    light: '#f87171',
    dark: '#dc2626',
  },
  theme: {
    bg: '#ffffff',
    text: '#111827',
    muted: '#6b7280',
  }
};