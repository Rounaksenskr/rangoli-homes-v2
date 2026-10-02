export const features = {
  doorIntro: import.meta.env.VITE_ENABLE_DOOR_INTRO !== "false",
  enquiryDelayMs: Number(import.meta.env.VITE_ENQUIRY_DELAY_MS) || 2500,
};