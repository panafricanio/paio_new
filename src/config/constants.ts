// Configuration constants for PAIO Main System
export const CONFIG = {
  // External URLs
  RESULTS_SERVICE_URL: 'https://results.pafricanoi.com/',
  REGISTRATION_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform',
  
  // Competition information
  COMPETITION: {
    YEAR: '2025',
    NAME: 'Pan African Informatics Olympiad',
    SHORT_NAME: 'PAIO',
    DATES: 'September 12-14, 2025',
    FORMAT: 'Online competition',
    DURATION: 'Three-day event with two rounds of five hours each'
  },
  
  // Contact information
  CONTACT: {
    EMAIL: 'joel@pafricanoi.com',
    LOCATION: 'Kigali, Rwanda'
  },
  
  // Navigation items
  NAVIGATION: {
    REGULATIONS: '/regulations',
    RULES: '/competition-rules',
    REGISTER: 'https://docs.google.com/forms/d/e/1FAIpQLSe6S7qJlBiPr_HlunCuNPiXoGJsYfaV8oOkEhoFouxFTJ_arg/viewform',
    IMPORTANT_DATES: '/important-dates',
    COMMITTEE: '/committee',
    SPONSORS: '/sponsors',
    FAQS: '/faqs',
    RESULTS: 'https://results.pafricanoi.com/',
    RESOURCES: '/resources'
  }
} as const;
