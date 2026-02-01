/**
 * Application Configuration
 * Centralized configuration file for all app settings
 */

// Company Information
export const COMPANY_NAME = 'Madhava Organics';
export const COMPANY_PHONE = '+919999999999';
export const COMPANY_EMAIL = 'srimadhavaorganics@gmail.com';
export const COMPANY_LOCATION = 'Karnataka';
export const COMPANY_ADDRESS = `${COMPANY_NAME}, ${COMPANY_LOCATION}`;
export const COMPANY_HOURS = '9:00 AM - 7:00 PM (Daily)';
export const COMPANY_GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/';

// Supabase Configuration
export const SUPABASE_CONFIG = {
  url: 'https://tlyvietozabrwuvidkdw.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRseXZpZXRvemFicnd1dmlka2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4MjMxMDQsImV4cCI6MjA4MjM5OTEwNH0.4YmVG5y5d0wXe3agTTaxwNu1EWq0n1jF794GDWcI3Tc',
};

// Authentication Configuration
export const AUTH_CONFIG = {
  // Default credentials
  defaultUser: 'admin',
  defaultPassword: 'admin@123',
  
  // Session settings
  sessionDuration: 30 * 60 * 1000, // 30 minutes in milliseconds
  warningThreshold: 2 * 60 * 1000, // 2 minutes warning before session expires
  
  // LocalStorage keys
  sessionKey: 'admin_session_v6',
  credsKey: 'admin_creds_v6',
  authenticatedKey: 'admin_authenticated',
};

// Storage Configuration
export const STORAGE_CONFIG = {
  defaultBucket: 'product-images',
  cacheControl: '3600',
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  siteContent: 'site_content',
  products: 'products',
  pageImages: 'site_images',
  cart: 'madhava_cart',
  productsBackup: 'madhava_products',
  contentBackup: 'madhava_content',
  imagesBackup: 'madhava_images',
  blogsBackup: 'madhava_blogs',
};

// Storage Events
export const STORAGE_EVENTS = {
  content: 'storage-content',
  products: 'storage',
  images: 'storage-images',
};

// Default Site Content
export const DEFAULT_SITE_CONTENT = {
  global: {
    siteName: COMPANY_NAME,
    contactPhone: COMPANY_PHONE,
    contactEmail: COMPANY_EMAIL,
    address: COMPANY_ADDRESS,
    googleMapsUrl: COMPANY_GOOGLE_MAPS_URL,
    footerAbout: "Your trusted source for pure, certified organic products. From A2 Desi Cow Ghee to cold-pressed oils, we bring nature's best to your home."
  },
  home: {
    heroTitle: COMPANY_NAME,
    heroSubtitle: "Wholesome Organic Goodness, Straight From Nature.",
    whyChooseTitle: `Why Choose ${COMPANY_NAME}?`,
    whyChooseSubtitle: "We don't just sell our products; we provide wholesome organic goodness and ensure that you get the best quality products at the best price."
  },
  about: {
    title: `About ${COMPANY_NAME}`,
    subtitle: "Bringing you the purest organic essentials, directly from nature to your table.",
    features: [
      "100% Organic Certified",
      "Sustainable Farming",
      "No Preservatives",
      "Premium Quality"
    ],
    welcomeParagraph1: `Welcome to ${COMPANY_NAME}, your destination for authentic organic products. We believe that good health begins with good food. That's why we work directly with trusted farmers to bring you products that are free from synthetic chemicals, pesticides, and artificial additives.`,
    welcomeParagraph2: "Our journey started with a simple mission: to make pure, traditional, and healthy food accessible to everyone. From our signature A2 Desi Cow Ghee made from traditional bilona method to our cold-pressed oils and raw honey, every product tells a story of tradition, purity, and care. We verify every batch to ensure it meets our high standards of quality and taste.",
    valuesTitle: "Our Values",
    values: [
      { name: "Purity", description: "Absolutely no compromise on quality or ingredients." },
      { name: "Sustainability", description: "Eco-friendly practices that accept and honor nature." },
      { name: "Health", description: "Products that nourish your body and soul." },
      { name: "Integrity", description: "Honest pricing and transparent sourcing." }
    ],
    closingParagraph: "We are committed to fostering a healthier community through the power of real food.",
    finalLine: `Experience the true taste of nature with ${COMPANY_NAME}.`
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Have questions about our products? We'd love to hear from you.",
    hours: COMPANY_HOURS,
    emailTo: COMPANY_EMAIL
  },
  pages: {
    home: [
      { id: 'hero', component: 'HeroSection' },
      { id: 'products', component: 'ProductGridSection' },
      { id: 'features', component: 'WhyChooseUs' },
      { id: 'map', component: 'MapSection' }
    ],
    about: [],
    location: [],
    contact: [],
    blog: []
  }
};

// Export all config as default for convenience
export default {
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_ADDRESS,
  COMPANY_HOURS,
  COMPANY_GOOGLE_MAPS_URL,
  SUPABASE_CONFIG,
  AUTH_CONFIG,
  STORAGE_CONFIG,
  STORAGE_KEYS,
  STORAGE_EVENTS,
  DEFAULT_SITE_CONTENT,
};
