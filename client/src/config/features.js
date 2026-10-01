export const features = {
  doorIntro: import.meta.env.VITE_ENABLE_DOOR_INTRO !== "false",
  enquiryDelayMs: Number(import.meta.env.VITE_ENQUIRY_DELAY_MS) || 2500,
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
};