// Configuration constants for PAIO Main System
export const CONFIG = {
  // External URLs
  RESULTS_SERVICE_URL: 'https://results.panafricanio.com/',
  /** Registration is closed for PAIO 2025. */
  REGISTRATION_CLOSED: true,
  
  // Competition information
  COMPETITION: {
    YEAR: '2025',
    NAME: 'Pan African Informatics Olympiad',
    SHORT_NAME: 'PAIO',
    DATES: 'September 12-14, 2025',
    FORMAT: 'Online competition',
    DURATION: 'Three-day event with two rounds of five hours each',
    STATUS: 'concluded' as const,
  },
  
  // Contact information
  CONTACT: {
    EMAIL: 'joel@pafricanoi.com',
    LOCATION: 'Kigali, Rwanda'
  },
  
  // Navigation items
  NAVIGATION: {
    TASKS: '/tasks',
    RESULTS: '/results',
    REGULATIONS: '/regulations',
    RULES: '/competition-rules',
    IMPORTANT_DATES: '/important-dates',
    COMMITTEE: '/committee',
    SPONSORS: '/sponsors',
    FAQS: '/faqs',
    RESOURCES: '/resources'
  }
} as const;
