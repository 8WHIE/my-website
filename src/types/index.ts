export type ServiceId = 
  | 'website-dev'
  | 'web-app-dev'
  | 'video-editing'
  | 'ui-ux-design'
  | 'graphic-design'
  | 'coding-dev'
  | 'website-redesign'
  | 'digital-solutions';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: string;
  priceRaw: number | null;
  features: string[];
  deliverables: string[];
  estimatedDelivery: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  serviceId: ServiceId;
  startingPrice: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  bestFor: string;
  highlight?: boolean;
}

export type PortfolioCategory = 'all' | 'websites' | 'web-apps' | 'video-editing' | 'graphics' | 'ui-ux' | 'coding';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  badge: 'Demo / Sample';
  summary: string;
  fullDescription: string;
  techStack: string[];
  metricsOrOutcome: string;
  image?: string;
  interactiveType?: 'preview' | 'video' | 'code' | 'design';
  keyHighlights: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  handle: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProjectEnquiry {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
  deadline: string;
}
