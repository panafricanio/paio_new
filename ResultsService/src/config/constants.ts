// Configuration constants for PAIO Results Service
export const CONFIG = {
  // Main system URLs
  MAIN_SYSTEM_URL: 'https://www.panafricanio.com/',
  RESULTS_SERVICE_URL: 'https://results.pafricanoi.com/',
  
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
  }
} as const;
