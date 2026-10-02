/**
 * Centralized site configuration for RangoliHomes.
 * NOTE: The business contact details, address, and social links below are demo placeholders.
 * Replace with verified business credentials before production deployment.
 */

export const siteConfig = {
  name: "RangoliHomes",
  tagline: "Designing Spaces You Love",
  description: "Premium Home Interiors, Office Interiors & Paint Solutions.",
  // PLACEHOLDER: Replace with actual business phone numbers
  phone: "+91 98765 43210",
  rawPhone: "+919876543210",
  // PLACEHOLDER: Replace with official domain email
  email: "contact@rangolihomes.com",
  // PLACEHOLDER: Replace with verified registered business studio address
  address: {
    street: "123 Design Avenue, Suite 400",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },
  businessHours: "Mon – Sat: 10:00 AM – 6:00 PM (IST)",
  // PLACEHOLDER: Replace with official WhatsApp business number
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210",
  whatsappMessage: "Hello RangoliHomes, I am interested in your interior and paint services.",
  // Embed map for Central Bengaluru (matching placeholder address city)
  googleMapsEmbedUrl:
    import.meta.env.VITE_GOOGLE_MAPS_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.82736465495!2d77.51352606558235!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  // PLACEHOLDER: Replace with official social media page handles
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  stats: [
    { label: "Design Experience", value: "Pillared Execution" },
    { label: "Transparent Costing", value: "No Hidden Fees" },
    { label: "Dedicated Support", value: "End-to-End" },
  ],
};