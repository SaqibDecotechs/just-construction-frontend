// Localization utility for handling different spellings and texts

export const localizationMap = {
  'en-US': {
    // US spellings
    color: 'color',
    colors: 'colors',
    favorite: 'favorite',
    favorites: 'favorites',
    organize: 'organize',
    organized: 'organized',
    organizing: 'organizing',
    realize: 'realize',
    realized: 'realized',
    realizing: 'realizing',
    center: 'center',
    centers: 'centers',
    theater: 'theater',
    theaters: 'theaters',
    honor: 'honor',
    honors: 'honors',
    labor: 'labor',
    labors: 'labors',
    neighbor: 'neighbor',
    neighbors: 'neighbors',
    defense: 'defense',
    license: 'license',
    practice: 'practice', // both noun and verb
    traveled: 'traveled',
    traveling: 'traveling',
    canceled: 'canceled',
    canceling: 'canceling',
    modeling: 'modeling',
    modeled: 'modeled',
    // Navigation and common terms
    aboutUs: 'About Us',
    jobSeekers: 'Job Seekers',
    employers: 'Employers',
    contact: 'Contact',
    // Common construction terms
    specialization: 'specialization',
    specializations: 'specializations',
  },
  'en-GB': {
    // UK spellings
    color: 'colour',
    colors: 'colours',
    favorite: 'favourite',
    favorites: 'favourites',
    organize: 'organise',
    organized: 'organised',
    organizing: 'organising',
    realize: 'realise',
    realized: 'realised',
    realizing: 'realising',
    center: 'centre',
    centers: 'centres',
    theater: 'theatre',
    theaters: 'theatres',
    honor: 'honour',
    honors: 'honours',
    labor: 'labour',
    labors: 'labours',
    neighbor: 'neighbour',
    neighbors: 'neighbours',
    defense: 'defence',
    license: 'licence',
    practice: 'practise', // verb form, 'practice' remains for noun
    traveled: 'travelled',
    traveling: 'travelling',
    canceled: 'cancelled',
    canceling: 'cancelling',
    modeling: 'modelling',
    modeled: 'modelled',
    // Navigation and common terms
    aboutUs: 'About Us',
    jobSeekers: 'Job Seekers',
    employers: 'Employers',
    contact: 'Contact',
    // Common construction terms
    specialization: 'specialisation',
    specializations: 'specialisations',
  }
};

// Function to get localized text
export const getLocalizedText = (key, locale = 'en-US') => {
  return localizationMap[locale]?.[key] || localizationMap['en-US'][key] || key;
};

// Function to get country flag URL
export const getCountryFlagUrl = (country, size = 20) => {
  const flagMap = {
    'UK': 'gb',
    'US': 'us'
  };
  const flagCode = flagMap[country] || 'us';
  return `https://flagcdn.com/w${size}/${flagCode}.png`;
};

// Function to get country display name
export const getCountryDisplayName = (country, locale = 'en-US') => {
  const countryNames = {
    'en-US': {
      'UK': 'United Kingdom',
      'US': 'United States'
    },
    'en-GB': {
      'UK': 'United Kingdom',
      'US': 'United States'
    }
  };
  
  return countryNames[locale]?.[country] || country;
};