export interface SearchItem {
  id: string;
  title: string;
  path: string;
  category: 'Services' | 'Sectors' | 'Locations' | 'Resources' | 'Tools' | 'Legal' | 'Company' | 'Case Studies' | 'Blog';
  description: string;
  keywords: string[];
  content?: string;
}

export const searchIndex: SearchItem[] = [
  // Home & Company Pages
  {
    id: 'home',
    title: 'Home',
    path: '/',
    category: 'Company',
    description: 'AI automation consultancy for East Midlands businesses. Transform your operations with practical AI solutions.',
    keywords: ['home', 'ai automation', 'consultancy', 'east midlands', 'digital transformation', 'midlands digital']
  },
  {
    id: 'about',
    title: 'About Us',
    path: '/about',
    category: 'Company',
    description: 'Learn about Midlands Digital - Your trusted AI automation partner in the East Midlands.',
    keywords: ['about', 'team', 'company', 'mission', 'vision', 'values', 'east midlands']
  },
  {
    id: 'manifesto',
    title: 'Our Manifesto',
    path: '/manifesto',
    category: 'Company',
    description: 'Our vision for AI automation in the East Midlands. Practical, ethical, and results-driven.',
    keywords: ['manifesto', 'vision', 'mission', 'beliefs', 'principles', 'ethics', 'ai philosophy']
  },
  {
    id: 'work',
    title: 'Our Work',
    path: '/work',
    category: 'Company',
    description: 'Portfolio of successful AI automation projects and client transformations.',
    keywords: ['portfolio', 'work', 'projects', 'case studies', 'success stories', 'clients']
  },
  {
    id: 'partners',
    title: 'Partners',
    path: '/partners',
    category: 'Company',
    description: 'Our technology partners and integration ecosystem.',
    keywords: ['partners', 'integrations', 'technology', 'ecosystem', 'partnerships']
  },
  
  // Services
  {
    id: 'services',
    title: 'Services Overview',
    path: '/services',
    category: 'Services',
    description: 'Complete range of AI automation services for business transformation.',
    keywords: ['services', 'ai automation', 'solutions', 'offerings', 'consulting']
  },
  {
    id: 'service-invoice',
    title: 'Invoice Automation',
    path: '/services/invoice-automation',
    category: 'Services',
    description: 'Automate invoice processing, reduce errors, and speed up payments.',
    keywords: ['invoice', 'automation', 'accounts payable', 'billing', 'finance', 'ocr', 'document processing']
  },
  {
    id: 'service-email',
    title: 'Email Copilot',
    path: '/services/email-copilot',
    category: 'Services',
    description: 'AI-powered email management and intelligent response system.',
    keywords: ['email', 'copilot', 'ai assistant', 'communication', 'automation', 'inbox', 'productivity']
  },
  {
    id: 'service-lead',
    title: 'Lead Enrichment',
    path: '/services/lead-enrichment',
    category: 'Services',
    description: 'Automatically enrich and qualify leads with AI-powered data insights.',
    keywords: ['lead', 'enrichment', 'sales', 'crm', 'data', 'qualification', 'prospecting']
  },
  {
    id: 'service-operations',
    title: 'Operations Automation',
    path: '/services/operations',
    category: 'Services',
    description: 'Streamline operations with intelligent workflow automation.',
    keywords: ['operations', 'workflow', 'process', 'automation', 'efficiency', 'optimization']
  },
  {
    id: 'service-content',
    title: 'Content Generation',
    path: '/services/content-generation',
    category: 'Services',
    description: 'AI-powered content creation for marketing and communications.',
    keywords: ['content', 'generation', 'ai writing', 'marketing', 'copywriting', 'blog', 'social media']
  },
  {
    id: 'service-bi',
    title: 'BI Dashboards',
    path: '/services/bi-dashboards',
    category: 'Services',
    description: 'Custom business intelligence dashboards with AI-powered insights.',
    keywords: ['bi', 'business intelligence', 'dashboards', 'analytics', 'reporting', 'data visualization']
  },
  
  // Sectors
  {
    id: 'sectors',
    title: 'Industry Sectors',
    path: '/sectors',
    category: 'Sectors',
    description: 'AI automation solutions tailored for specific industries.',
    keywords: ['sectors', 'industries', 'verticals', 'specialization']
  },
  {
    id: 'sector-retail',
    title: 'Retail & E-commerce',
    path: '/sectors/retail',
    category: 'Sectors',
    description: 'AI solutions for retail businesses - inventory, customer service, and sales automation.',
    keywords: ['retail', 'ecommerce', 'shopping', 'inventory', 'pos', 'customer service', 'sales']
  },
  {
    id: 'sector-manufacturing',
    title: 'Manufacturing',
    path: '/sectors/manufacturing',
    category: 'Sectors',
    description: 'Smart manufacturing with AI - predictive maintenance, quality control, and supply chain.',
    keywords: ['manufacturing', 'production', 'factory', 'supply chain', 'quality control', 'predictive maintenance']
  },
  {
    id: 'sector-healthcare',
    title: 'Healthcare',
    path: '/sectors/healthcare',
    category: 'Sectors',
    description: 'Healthcare AI automation - patient management, scheduling, and administrative tasks.',
    keywords: ['healthcare', 'medical', 'patient', 'scheduling', 'administration', 'nhs', 'clinic']
  },
  {
    id: 'sector-professional',
    title: 'Professional Services',
    path: '/sectors/professional-services',
    category: 'Sectors',
    description: 'AI for professional services - legal, accounting, and consulting automation.',
    keywords: ['professional services', 'legal', 'accounting', 'consulting', 'law firm', 'accountancy']
  },
  
  // Locations
  {
    id: 'location-nottingham',
    title: 'AI Automation Nottingham',
    path: '/locations/nottingham',
    category: 'Locations',
    description: 'AI automation consultancy services in Nottingham and surrounding areas.',
    keywords: ['nottingham', 'nottinghamshire', 'east midlands', 'local', 'ng postcodes']
  },
  {
    id: 'location-derby',
    title: 'AI Automation Derby',
    path: '/locations/derby',
    category: 'Locations',
    description: 'AI automation consultancy services in Derby and Derbyshire.',
    keywords: ['derby', 'derbyshire', 'east midlands', 'local', 'de postcodes']
  },
  {
    id: 'location-leicester',
    title: 'AI Automation Leicester',
    path: '/locations/leicester',
    category: 'Locations',
    description: 'AI automation consultancy services in Leicester and Leicestershire.',
    keywords: ['leicester', 'leicestershire', 'east midlands', 'local', 'le postcodes']
  },
  {
    id: 'location-lincoln',
    title: 'AI Automation Lincoln',
    path: '/locations/lincoln',
    category: 'Locations',
    description: 'AI automation consultancy services in Lincoln and Lincolnshire.',
    keywords: ['lincoln', 'lincolnshire', 'east midlands', 'local', 'ln postcodes']
  },
  {
    id: 'location-northampton',
    title: 'AI Automation Northampton',
    path: '/locations/northampton',
    category: 'Locations',
    description: 'AI automation consultancy services in Northampton and Northamptonshire.',
    keywords: ['northampton', 'northamptonshire', 'east midlands', 'local', 'nn postcodes']
  },
  {
    id: 'location-rutland',
    title: 'AI Automation Rutland',
    path: '/locations/rutland',
    category: 'Locations',
    description: 'AI automation consultancy services in Rutland and Oakham.',
    keywords: ['rutland', 'oakham', 'east midlands', 'local', 'le15 postcodes']
  },
  
  // Resources & Tools
  {
    id: 'resources',
    title: 'Resources',
    path: '/resources',
    category: 'Resources',
    description: 'AI automation resources, guides, and educational content.',
    keywords: ['resources', 'guides', 'education', 'learning', 'downloads', 'whitepapers']
  },
  {
    id: 'blog',
    title: 'Blog',
    path: '/blog',
    category: 'Blog',
    description: 'Latest insights on AI automation, industry trends, and best practices.',
    keywords: ['blog', 'articles', 'news', 'insights', 'trends', 'updates']
  },
  {
    id: 'playbooks',
    title: 'AI Playbooks',
    path: '/playbooks',
    category: 'Resources',
    description: 'Step-by-step AI implementation playbooks for different business scenarios.',
    keywords: ['playbooks', 'guides', 'templates', 'implementation', 'strategy', 'best practices']
  },
  {
    id: 'use-cases',
    title: 'Use Cases',
    path: '/use-cases',
    category: 'Resources',
    description: 'Real-world AI automation use cases and success stories.',
    keywords: ['use cases', 'examples', 'scenarios', 'applications', 'success stories']
  },
  {
    id: 'common-workflows',
    title: 'Common Workflows',
    path: '/common-workflows',
    category: 'Resources',
    description: 'Templates for common business workflow automations.',
    keywords: ['workflows', 'templates', 'automation', 'processes', 'blueprints']
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    path: '/faq',
    category: 'Resources',
    description: 'Common questions about AI automation and our services.',
    keywords: ['faq', 'questions', 'answers', 'help', 'support', 'information']
  },
  
  // Tools
  {
    id: 'ai-audit',
    title: 'Free AI Audit',
    path: '/free-ai-audit',
    category: 'Tools',
    description: 'Get a free AI readiness audit for your business.',
    keywords: ['audit', 'assessment', 'free', 'analysis', 'consultation', 'readiness']
  },
  {
    id: 'ai-quiz',
    title: 'AI Readiness Quiz',
    path: '/ai-readiness-quiz',
    category: 'Tools',
    description: 'Test your business AI readiness with our interactive quiz.',
    keywords: ['quiz', 'test', 'assessment', 'readiness', 'evaluation', 'score']
  },
  {
    id: 'time-calculator',
    title: 'Time Savings Calculator',
    path: '/time-calculator',
    category: 'Tools',
    description: 'Calculate how much time AI automation could save your business.',
    keywords: ['calculator', 'time', 'savings', 'roi', 'efficiency', 'productivity']
  },
  {
    id: 'demo',
    title: 'Book a Demo',
    path: '/demo',
    category: 'Tools',
    description: 'Schedule a personalized demo of our AI automation solutions.',
    keywords: ['demo', 'demonstration', 'presentation', 'booking', 'schedule', 'consultation']
  },
  {
    id: 'contact',
    title: 'Contact Us',
    path: '/contact',
    category: 'Company',
    description: 'Get in touch for a free strategy consultation.',
    keywords: ['contact', 'consultation', 'strategy', 'call', 'meeting', 'enquiry']
  },
  {
    id: 'start-here',
    title: 'Start Here',
    path: '/start-here',
    category: 'Resources',
    description: 'New to AI automation? Start your journey here.',
    keywords: ['start', 'begin', 'introduction', 'getting started', 'onboarding', 'first steps']
  },
  
  // Pricing
  {
    id: 'pricing',
    title: 'Pricing',
    path: '/pricing',
    category: 'Company',
    description: 'Transparent pricing for AI automation services.',
    keywords: ['pricing', 'cost', 'fees', 'packages', 'plans', 'investment']
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    path: '/transparent-pricing',
    category: 'Company',
    description: 'Our commitment to clear, upfront pricing with no hidden costs.',
    keywords: ['transparent', 'pricing', 'cost', 'honesty', 'clarity', 'no hidden fees']
  },
  {
    id: 'compare',
    title: 'Compare Solutions',
    path: '/compare',
    category: 'Resources',
    description: 'Compare different AI automation solutions and approaches.',
    keywords: ['compare', 'comparison', 'versus', 'alternatives', 'options', 'choices']
  },
  
  // Case Studies
  {
    id: 'case-voice-agent',
    title: 'AI Voice Agent Case Study',
    path: '/work',
    category: 'Case Studies',
    description: 'Real results: 240+ calls handled, 61.5% auto-resolved, $59/month running cost.',
    keywords: ['case study', 'voice agent', 'property management', 'results', 'ai phone']
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    path: '/case-studies',
    category: 'Case Studies',
    description: 'Real AI automation results from live deployments.',
    keywords: ['case studies', 'results', 'proof', 'voice agent', 'automation']
  },
  
  // Legal
  {
    id: 'privacy',
    title: 'Privacy Policy',
    path: '/privacy',
    category: 'Legal',
    description: 'Our privacy policy and data protection practices.',
    keywords: ['privacy', 'policy', 'data protection', 'gdpr', 'legal', 'information']
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    path: '/terms',
    category: 'Legal',
    description: 'Terms and conditions for using our services.',
    keywords: ['terms', 'conditions', 'service', 'legal', 'agreement', 'contract']
  },
  {
    id: 'cookies',
    title: 'Cookie Policy',
    path: '/cookies',
    category: 'Legal',
    description: 'How we use cookies on our website.',
    keywords: ['cookies', 'policy', 'tracking', 'privacy', 'consent', 'gdpr']
  },
  {
    id: 'security',
    title: 'Security',
    path: '/security',
    category: 'Legal',
    description: 'Our security practices and data protection measures.',
    keywords: ['security', 'protection', 'data', 'safety', 'compliance', 'encryption']
  },
  
  // Other
  {
    id: 'thank-you',
    title: 'Thank You',
    path: '/thank-you',
    category: 'Company',
    description: 'Thank you for contacting Midlands Digital.',
    keywords: ['thank you', 'confirmation', 'success', 'submitted']
  }
];

// Function to perform search
export function searchContent(query: string): SearchItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) {
    return [];
  }
  
  const results = searchIndex.filter(item => {
    const searchableText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
  
  // Sort by relevance (title matches first, then description, then keywords)
  results.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const aDesc = a.description.toLowerCase();
    const bDesc = b.description.toLowerCase();
    
    // Exact title match
    if (aTitle === normalizedQuery && bTitle !== normalizedQuery) return -1;
    if (bTitle === normalizedQuery && aTitle !== normalizedQuery) return 1;
    
    // Title contains query
    if (aTitle.includes(normalizedQuery) && !bTitle.includes(normalizedQuery)) return -1;
    if (bTitle.includes(normalizedQuery) && !aTitle.includes(normalizedQuery)) return 1;
    
    // Description contains query
    if (aDesc.includes(normalizedQuery) && !bDesc.includes(normalizedQuery)) return -1;
    if (bDesc.includes(normalizedQuery) && !aDesc.includes(normalizedQuery)) return 1;
    
    return 0;
  });
  
  return results;
}