export const siteConfig = {
  name: "RangoliHomes",
  tagline: "Designing Spaces You Love",
  description: "Premium Home Interiors, Office Interiors & Paint Solutions.",
  phone: "+91 98765 43210",
  rawPhone: "+919876543210",
  email: "contact@rangolihomes.com",
  address: {
    street: "123 Design Avenue, Suite 400",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    country: "India",
  },
  businessHours: "Mon – Sat: 10:00 AM – 6:00 PM (IST)",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210",
  whatsappMessage: "Hello RangoliHomes, I am interested in your interior and paint services.",
  googleMapsEmbedUrl:
    import.meta.env.VITE_GOOGLE_MAPS_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9855589139265!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
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