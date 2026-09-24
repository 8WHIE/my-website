import { ServiceItem, PricingPlan, PortfolioItem, FAQItem, SocialLink } from '../types';

export const BRAND = {
  name: '8WHIE',
  tagline: 'Build. Design. Create.',
  heroSubtitle: 'Professional digital solutions for creators, businesses and modern brands.',
  aboutSummary: '8WHIE is a technology and digital creation brand focused on building useful digital experiences, creative content and modern technology solutions.',
  copyright: '© 2026 By 8WHIE. All rights reserved.',
  telegramDirect: 'https://t.me/Arnxkt',
  telegramUsername: '@Arnxkt',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'YouTube',
    label: 'YouTube Channel',
    url: 'https://youtube.com/@8whie?si=dW7R_kxKPEtsx8gi',
    handle: '@8whie',
    description: 'Tech tutorials, project builds, behind the scenes & digital workflows',
    icon: 'Youtube',
    color: '#FF0000',
  },
  {
    name: 'Instagram',
    label: 'Instagram Profile',
    url: 'https://www.instagram.com/aaynkt?stkn=MWdldHM5c3Njc2U5MQ==',
    handle: '@aaynkt',
    description: 'Design snippets, creative reel edits, technology insights & daily updates',
    icon: 'Instagram',
    color: '#E4405F',
  },
  {
    name: 'Telegram Channel',
    label: 'Telegram Updates',
    url: 'https://t.me/whiee',
    handle: '@whiee',
    description: 'Official announcements, digital resource drops, code snippets & releases',
    icon: 'Send',
    color: '#229ED9',
  },
  {
    name: 'Contact on Telegram',
    label: 'Direct Telegram Chat',
    url: 'https://t.me/Arnxkt',
    handle: '@Arnxkt',
    description: 'Direct 1-on-1 project discussion, queries, consultations & instant quotes',
    icon: 'MessageSquare',
    color: '#38BDF8',
  },
  {
    name: 'GitHub',
    label: 'GitHub Organization',
    url: 'https://github.com/8WHIE',
    handle: '8WHIE',
    description: 'Open source tools, starter boilerplates, public repositories & experiments',
    icon: 'Github',
    color: '#F0F6FC',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-dev',
    title: 'Website Development',
    category: 'Web Engineering',
    iconName: 'Globe',
    shortDescription: 'Modern, blazing-fast landing pages, business websites, and portfolio sites with responsive code.',
    fullDescription: 'From high-converting landing pages to full-scale corporate web platforms. Every site is built with clean semantic code, optimal mobile responsiveness, SEO optimization, and lightning-fast load times.',
    startingPrice: '₹999',
    priceRaw: 999,
    features: [
      'Landing pages & lead capture',
      'Business & corporate websites',
      'Creator & agency portfolio websites',
      '100% mobile & tablet responsive layout',
      'Clean modern dark/light UI design',
      'SEO meta tags & social share optimization'
    ],
    deliverables: [
      'Production-ready deployable code / repository',
      'Free hosting deployment assistance (Vercel/Netlify/Cloudflare)',
      'Custom domain connection support',
      'Contact form integration setup',
      'Basic revisions until client satisfaction'
    ],
    estimatedDelivery: '2–4 business days',
    popular: true,
  },
  {
    id: 'web-app-dev',
    title: 'Web Application Development',
    category: 'Software Engineering',
    iconName: 'LayoutGrid',
    shortDescription: 'Interactive web applications, analytics dashboards, complex user interfaces, and custom functionality.',
    fullDescription: 'Custom dynamic web applications tailored for specific workflows. Includes state management, real-time client interactions, database or API connections, custom dashboards, and intuitive UX logic.',
    startingPrice: '₹2,999',
    priceRaw: 2999,
    features: [
      'Interactive web applications & portals',
      'Admin & analytics dashboards',
      'Custom workflows & calculation tools',
      'Authentication & state handling ready',
      'Tailored data tables & filtering',
      'REST / API endpoint connectivity'
    ],
    deliverables: [
      'Full modern SPA / fullstack application codebase',
      'Component modular architecture',
      'Interactive preview deployment link',
      'Integration testing & responsive check',
      'Walkthrough documentation on maintenance'
    ],
    estimatedDelivery: '5–10 business days',
    popular: true,
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Creative Production',
    iconName: 'Film',
    shortDescription: 'High-retention YouTube long-form videos, Shorts, Reels, promotional teasers, and creator content.',
    fullDescription: 'Professional post-production that maximizes viewer retention. Dynamic pacing, sound design, motion graphics, clean subtitles, color correction, and storytelling suited for modern social platforms.',
    startingPrice: '₹499',
    priceRaw: 499,
    features: [
      'YouTube long-form video editing',
      'High-energy Instagram Reels & Shorts (9:16)',
      'Brand & product promotional videos',
      'Sound design, SFX & copyright-safe music selection',
      'Animated subtitles & kinetic typography',
      'Color grading & visual pacing enhancements'
    ],
    deliverables: [
      'Full HD or 4K rendered video in MP4 format',
      'Optimized bitrate for YouTube / Instagram platforms',
      'Revision cycle for pacing and text adjustments',
      'Thumbnail or teaser cut available on request'
    ],
    estimatedDelivery: '1–3 business days',
    popular: true,
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design Systems',
    iconName: 'Layers',
    shortDescription: 'Polished website UI, mobile app interfaces, landing page layouts, and coherent design systems.',
    fullDescription: 'User-centered interfaces crafted with pixel precision. Clean visual hierarchy, modern dark aesthetics, typography discipline, intuitive navigation, and developer-ready Figma handoffs.',
    startingPrice: '₹499',
    priceRaw: 499,
    features: [
      'Modern website UI design',
      'Mobile app interface screens (iOS & Android)',
      'High-converting landing page layouts',
      'Component design systems & token styling',
      'Interactive wireframes and user flow mapping',
      'Developer handoff specs with assets'
    ],
    deliverables: [
      'Organized Figma source file with components',
      'Clickable interactive prototype link',
      'Exported high-res SVG / PNG asset pack',
      'Design style guide (colors, typography, spacing)'
    ],
    estimatedDelivery: '2–5 business days',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Visual Identity',
    iconName: 'Palette',
    shortDescription: 'Impactful brand logos, high-CTR YouTube thumbnails, social graphics, and promotional marketing creatives.',
    fullDescription: 'Visual communication designed to grab attention in crowded feeds. Whether you need a minimal tech logo, a viral YouTube thumbnail that drives clicks, or branded social media assets.',
    startingPrice: '₹299',
    priceRaw: 299,
    features: [
      'Vector logo design & brand marks',
      'High-CTR YouTube thumbnails (from ₹99)',
      'Social media banners & post creatives',
      'Promotional launch flyers & posters',
      'Custom vector icons & typography styling',
      'Print-ready & web-ready export formats'
    ],
    deliverables: [
      'Vector source files (AI/SVG/EPS/PDF)',
      'High-resolution PNGs with transparent backgrounds',
      'Thumbnail PSD / layered formats when requested',
      'Multiple concept iterations'
    ],
    estimatedDelivery: '1–2 business days',
  },
  {
    id: 'coding-dev',
    title: 'Coding & Development',
    category: 'Engineering & Scripting',
    iconName: 'Code2',
    shortDescription: 'Custom software scripting, frontend architecture, backend services, web scraping, and automation.',
    fullDescription: 'Solving real operational and technical problems through code. We build custom Node.js/Python scripts, automated bot tasks, API connectors, scraping tools, and specialized developer utilities.',
    startingPrice: '₹999',
    priceRaw: 999,
    features: [
      'Modern TypeScript & JavaScript frontend development',
      'Backend APIs & microservices',
      'Python workflow automation & custom bots',
      'Third-party API integration & webhooks',
      'Bug fixes & technical code refactoring',
      'Database scripting & data transformation'
    ],
    deliverables: [
      'Documented, clean codebase with installation guide',
      'Environment configuration template (.env.example)',
      'Testing verification report',
      'Code handover and support deployment'
    ],
    estimatedDelivery: '2–6 business days',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    category: 'Optimization & Revamp',
    iconName: 'Sparkles',
    shortDescription: 'Transform outdated sites with modern dark aesthetic, mobile optimization, and high performance.',
    fullDescription: 'Revitalize your existing web presence. We audit your current website, upgrade the visual language, eliminate slow clunky scripts, improve conversion rates, and make it mobile-first.',
    startingPrice: '₹999',
    priceRaw: 999,
    features: [
      'Modern visual revamp with premium tech aesthetic',
      'Rigorous mobile & tablet responsiveness audit',
      'Core Web Vitals & page speed performance boost',
      'Improved UX hierarchy and clear CTA placements',
      'Accessibility & browser cross-compatibility checks',
      'Code refactoring from old templates to modern stack'
    ],
    deliverables: [
      'Before & after performance benchmark comparison',
      'Completely refreshed responsive codebase',
      'Preservation of existing SEO URLs and keywords',
      'Smooth migration without downtime'
    ],
    estimatedDelivery: '3–5 business days',
  },
  {
    id: 'digital-solutions',
    title: 'Digital / Tech Solutions',
    category: 'Consulting & Custom',
    iconName: 'Cpu',
    shortDescription: 'Tailored digital solutions, architecture consulting, tech stack advisory, and project development.',
    fullDescription: 'Comprehensive technology consulting for startups, founders, and creators. We evaluate your product requirements, select the right tech stack, and deliver end-to-end digital solutions.',
    startingPrice: "Let's Discuss",
    priceRaw: null,
    features: [
      'Custom bespoke tech implementations',
      'Tech stack selection & architectural review',
      'Creator monetization & digital asset systems',
      'Custom automation pipelines & integrations',
      'End-to-end project-based management',
      'Ongoing advisory & technical consultation'
    ],
    deliverables: [
      'Tailored project proposal & milestone roadmap',
      'Custom scope of work with transparent milestones',
      'Dedicated direct communication channel (Telegram/Email)',
      'Full deliverables matching agreed specification'
    ],
    estimatedDelivery: 'Custom schedule based on scope',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'price-thumbnail',
    title: 'Thumbnail Design',
    serviceId: 'graphic-design',
    startingPrice: '₹99',
    subtitle: 'For YouTube & Creators',
    description: 'High-CTR, attention-grabbing custom thumbnails engineered for high click-through rates and clear storytelling.',
    keyFeatures: [
      '1 Custom High-CTR Concept',
      'Eye-catching typography & effects',
      'HD 1080p Web-ready Export',
      'Subject cutout & color boost',
      '24–48h Quick Delivery'
    ],
    bestFor: 'Content creators & YouTubers wanting rapid clicks',
  },
  {
    id: 'price-logo',
    title: 'Logo Design',
    serviceId: 'graphic-design',
    startingPrice: '₹299',
    subtitle: 'Brand Identity',
    description: 'Clean, modern, and memorable brand marks tailored for tech startups, gaming creators, and modern brands.',
    keyFeatures: [
      '2 Initial Logo Concepts',
      'Vector Source Files (AI/SVG/PNG)',
      'Transparent background files',
      'Social media display profile sizes',
      'Unlimited minor color tweaks'
    ],
    bestFor: 'New projects, startups & creators needing an icon',
  },
  {
    id: 'price-video',
    title: 'Video Editing',
    serviceId: 'video-editing',
    startingPrice: '₹499',
    subtitle: 'Shorts, Reels & YouTube',
    description: 'Professional cutting, dynamic sound effects, pacing, and kinetic subtitles that retain viewer attention.',
    keyFeatures: [
      'Reels / Shorts / YouTube cuts',
      'Dynamic pacing & retention cuts',
      'Custom subtitles & text animations',
      'Sound FX & background music mix',
      'Full HD 60fps export'
    ],
    bestFor: 'Reels creators, YouTubers & social brands',
    highlight: true,
  },
  {
    id: 'price-ui-ux',
    title: 'UI/UX Design',
    serviceId: 'ui-ux-design',
    startingPrice: '₹499',
    subtitle: 'Modern Interface Wireframes',
    description: 'Clean, intuitive web and mobile layouts designed with strict typography and developer-ready systems.',
    keyFeatures: [
      'Modern dark/light interface screens',
      'Figma source file with components',
      'Mobile-first responsive mockups',
      'Interactive clickable prototype',
      'Asset export pack'
    ],
    bestFor: 'Founders & developers with an un-styled app idea',
  },
  {
    id: 'price-website',
    title: 'Website Development',
    serviceId: 'website-dev',
    startingPrice: '₹999',
    subtitle: 'Landing Pages & Business Sites',
    description: 'Blazing fast, responsive websites built with modern frameworks. Ready to convert visitors into clients.',
    keyFeatures: [
      'Responsive multi-device layout',
      'Clean modern tech aesthetic',
      'Contact form & social links wired up',
      'Fast loading & SEO meta configured',
      'Free hosting setup assistance'
    ],
    bestFor: 'Businesses, portfolios & product landing pages',
    highlight: true,
  },
  {
    id: 'price-coding',
    title: 'Coding / Development',
    serviceId: 'coding-dev',
    startingPrice: '₹999',
    subtitle: 'Custom Scripts & Frontend',
    description: 'High-quality TypeScript/JavaScript code, automation scripts, API integrations, and refactoring.',
    keyFeatures: [
      'Clean, modular code architecture',
      'API integrations & webhook handling',
      'Automated script or bot logic',
      'Bug fixes & performance optimization',
      'Well-commented readable codebase'
    ],
    bestFor: 'Custom technical tasks, scripts & integrations',
  },
  {
    id: 'price-web-app',
    title: 'Web Application',
    serviceId: 'web-app-dev',
    startingPrice: '₹2,999',
    subtitle: 'Interactive Software & Dashboards',
    description: 'Full interactive single-page applications, SaaS dashboards, complex business logic, and UI state flows.',
    keyFeatures: [
      'Interactive dashboard UI & data tables',
      'Client-side state architecture',
      'Custom workflow automation tools',
      'Responsive tablet & desktop views',
      'Source code ownership & deployment'
    ],
    bestFor: 'Startups, SaaS prototypes & internal tools',
  },
  {
    id: 'price-custom',
    title: 'Custom Project',
    serviceId: 'digital-solutions',
    startingPrice: "Let's Discuss",
    subtitle: 'Bespoke Tech Solutions',
    description: 'Have a unique concept, multi-phase platform, or complex creator ecosystem? We will build a customized scope.',
    keyFeatures: [
      'Comprehensive scoping session',
      'Custom milestone roadmap',
      'Direct Telegram & email communication',
      'Priority delivery timeline',
      'End-to-end technical execution'
    ],
    bestFor: 'Enterprises, unique products & comprehensive projects',
  },
];

export const PORTFOLIO_SAMPLES: PortfolioItem[] = [
  {
    id: 'sample-saas-dashboard',
    title: 'PulseForge Analytics Platform',
    category: 'web-apps',
    categoryLabel: 'Web Apps',
    badge: 'Demo / Sample',
    summary: 'Dark-mode real-time analytics dashboard with interactive charts, filterable telemetry tables, and responsive viewport metrics.',
    fullDescription: 'An interactive single-page application demo demonstrating high-performance UI engineering, dark mode contrast math, and modular component architecture.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Tabular-nums', 'Lucide'],
    metricsOrOutcome: 'Simulated sub-100ms client state transitions & full WCAG AA contrast compliance',
    image: '/src/assets/images/portfolio_web_dashboard_1790219236675.jpg',
    interactiveType: 'preview',
    keyHighlights: [
      'Real-time filterable metrics dashboard',
      'Zero unnecessary layout shifts',
      'Strict dark mode typography scale',
      'Modular state handlers'
    ]
  },
  {
    id: 'sample-studio-reels',
    title: 'HyperCut Creator Retention Edit',
    category: 'video-editing',
    categoryLabel: 'Video Editing',
    badge: 'Demo / Sample',
    summary: 'High-pacing 9:16 vertical video edit showcasing kinetic captions, subtle sound effects, and color grading.',
    fullDescription: 'A sample creator reel format structured to maintain a 75%+ retention rate on short-form platforms using micro-zooms, dynamic subtitles, and matched sound design.',
    techStack: ['Premiere Pro', 'After Effects', 'Sound FX Design', 'Color Scrims'],
    metricsOrOutcome: 'Optimized for 9:16 mobile viewports with crisp subtitle readability',
    image: '/src/assets/images/portfolio_creative_studio_1790219249464.jpg',
    interactiveType: 'video',
    keyHighlights: [
      'Word-by-word highlighted captions',
      'Curated copyright-safe audio mix',
      'Rapid narrative pacing without visual clutter',
      'Color graded for mobile OLED displays'
    ]
  },
  {
    id: 'sample-agency-website',
    title: 'Vanguard Digital Agency Portal',
    category: 'websites',
    categoryLabel: 'Websites',
    badge: 'Demo / Sample',
    summary: 'High-converting agency landing page with smooth scroll anchors, service cards, and validated enquiry system.',
    fullDescription: 'A responsive corporate technology agency website demonstrating modern glassmorphism, responsive navigation drawer, and seamless contact flow.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    metricsOrOutcome: '100% responsive across mobile, tablet, and 1440px desktop screens',
    image: '/src/assets/images/hero_workspace_tech_1790219217296.jpg',
    interactiveType: 'preview',
    keyHighlights: [
      '3-zone navigation bar with mobile sheet',
      'Fast responsive page loading',
      'Clean unboxed metadata styling',
      'Integrated contact enquiry fallback'
    ]
  },
  {
    id: 'sample-brand-ui-kit',
    title: 'AeroUI Design System & Tokens',
    category: 'ui-ux',
    categoryLabel: 'UI/UX',
    badge: 'Demo / Sample',
    summary: 'Minimalist dark design system with component tokens, typography rules, button states, and form inputs.',
    fullDescription: 'Complete UI/UX kit sample demonstrating nested radius math, high-contrast dark theme surfaces, and interactive form affordances.',
    techStack: ['Figma', 'Design Tokens', 'Tailwind Guidelines', 'SVG Icons'],
    metricsOrOutcome: 'Unified design tokens for rapid multi-screen development',
    interactiveType: 'design',
    keyHighlights: [
      'Accessible WCAG AA color palettes',
      'Mathematical nested corner radii',
      'Zero-pill metadata typography discipline',
      'Single-elevation subtle border hierarchy'
    ]
  },
  {
    id: 'sample-automation-script',
    title: 'TeleBot Workflow Dispatcher',
    category: 'coding',
    categoryLabel: 'Coding',
    badge: 'Demo / Sample',
    summary: 'Asynchronous event automation script handling webhook signals, payload parsing, and Telegram notifications.',
    fullDescription: 'A clean Node.js script demonstrating modular code architecture, environment secret handling, and structured Telegram Bot API integration.',
    techStack: ['Node.js', 'TypeScript', 'REST APIs', 'Telegram Bot API'],
    metricsOrOutcome: 'Instant dispatch handling with comprehensive error catchers',
    interactiveType: 'code',
    keyHighlights: [
      'Structured payload schema validation',
      'Safe fallback error logging',
      'Zero heavy external dependencies',
      'Ready-to-deploy docker/server script'
    ]
  },
  {
    id: 'sample-thumbnails-graphics',
    title: 'Apex Tech YouTube Thumbnail Pack',
    category: 'graphics',
    categoryLabel: 'Graphics',
    badge: 'Demo / Sample',
    summary: 'High-contrast graphic compositions designed for small mobile thumbnails with readable focal subjects.',
    fullDescription: 'A sample thumbnail design suite engineered for 12%+ CTR with complementary contrast, facial expression emphasis, and legible bold display type.',
    techStack: ['Photoshop', 'Graphic Composition', 'Vector Typography', 'Color Grading'],
    metricsOrOutcome: 'Tested for readability at 150px mobile preview sizes',
    interactiveType: 'design',
    keyHighlights: [
      'High contrast against YouTube dark theme',
      'Focal subject separation with rim lighting',
      'Max 3-word bold typographic hook',
      'Optimized 16:9 1280x720 canvas'
    ]
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What services does 8WHIE provide?',
    answer: '8WHIE provides professional digital and technology services across six primary domains: Website Development (landing pages, business sites, portfolios), Web Application Development (dashboards, interactive tools), Video Editing (YouTube videos, Shorts, Reels, promotional content), UI/UX Design (websites, mobile apps, design systems), Graphic Design (logos, high-CTR thumbnails, social banners), Coding & Automation (custom software, APIs, scripts), and Website Redesign.',
  },
  {
    question: 'How much does a project cost?',
    answer: 'Our services feature transparent, realistic starting prices: Thumbnail Design starts at ₹99, Logo Design starts at ₹299, Video Editing & UI/UX Design start at ₹499, Website Development & Coding start at ₹999, and Web Applications start at ₹2,999. Final pricing depends on your specific project requirements, custom complexity, feature scope, and required delivery timeline. We provide a clear, upfront quote before starting any work.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Turnaround depends on the scope: thumbnails and basic graphics are usually completed within 24 to 48 hours; video edits take 1 to 3 business days; landing pages and website builds typically take 2 to 4 business days; and complex web applications require 5 to 10 business days. We will provide an exact timeline estimate before kicking off.',
  },
  {
    question: 'Can I request a custom project?',
    answer: "Yes, absolutely! If your requirement doesn't fit standard packages—such as a custom automation script, multi-page platform, creator channel overhaul, or hybrid design and coding project—select 'Custom Project' or message us directly on Telegram (@Arnxkt). We are happy to evaluate your requirements and structure a tailored milestone-based plan.",
  },
  {
    question: 'How do I contact 8WHIE?',
    answer: 'You can reach out immediately via Telegram direct message at https://t.me/Arnxkt (@Arnxkt) or fill out the Project Enquiry form below on this website. You can also join our official Telegram channel at https://t.me/whiee, check our code on GitHub (https://github.com/8WHIE), or connect through Instagram (@aaynkt) and YouTube (@8whie).',
  },
  {
    question: 'Can I request website redesign?',
    answer: 'Yes! We specialize in modernizing existing websites that feel outdated, slow, or lack proper mobile responsiveness. We revamp your UI with a clean, high-performance dark aesthetic, improve mobile usability, boost loading speeds, and preserve your existing content and SEO structure without causing downtime.',
  },
];
