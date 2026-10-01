export interface Game {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  genre: string;
  shortDescription: string;
  fullDescription: string;
  platform: 'Android' | 'Multiplataforma' | string;
  status: 'Disponível' | 'Em Breve' | 'Em Desenvolvimento';
  rating?: string;
  iconUrl: string;
  keyArtUrl: string;
  screenshots: string[];
  features: string[];
  googlePlayUrl?: string; // Editable placeholder when real url is provided
  trailerUrl?: string;
  ageRating?: string;
  privacyPolicyUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Lançamento' | 'Atualização' | 'Estúdio' | 'Recurso';
  date: string;
  summary: string;
  content?: string;
  isUpcoming?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  subheadline: string;
  mission: string;
  vision: string;
  officialEmail: string;
  privacyEmail: string;
  supportEmail: string;
  googlePlayDeveloperUrl: string;
  socials: {
    instagram: string;
    youtube: string;
    tiktok: string;
    twitter: string;
    discord: string;
  };
  lastUpdateDate: string;
  copyrightYear: string;
}
