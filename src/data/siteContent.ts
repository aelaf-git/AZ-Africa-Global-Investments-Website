import {
  Briefcase,
  Globe2,
  Landmark,
  Megaphone,
  Wallet,
  Shield,
  Handshake,
  FolderKanban,
  Scale,
  TrendingUp,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  image: string;
  icon: LucideIcon;
  items: string[];
};

const serviceImage = (id: string) => `/services/${id}.jpg`;

export const aboutContent = {
  title: 'About AZ Africa Global Investments',
  paragraphs: [
    'AZ Africa Global Investments is an award-winning Pan-African advisory, consulting, and investment facilitation firm founded in 2017 and restructured in 2021 into its current dynamic framework. With a growing presence across Africa, the Middle East, and the Far East, it delivers high-level strategic solutions to governments, financial institutions, private sector actors, and international organizations.',
    'Its expertise includes investment promotion, partnerships, diplomacy, resource mobilization, project management, policy advisory, asset management, financing, and media communications.',
    'AZ is committed to connecting opportunities, building sustainable partnerships, and delivering transformative solutions that drive sustainable growth, development, and prosperity across global markets.',
  ],
  expertiseAreas: [
    'Investment promotion',
    'Partnerships & diplomacy',
    'Resource mobilization',
    'Project management',
    'Policy advisory',
    'Asset management',
    'Financing',
    'Media communications',
  ],
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'investment',
    title: 'Investment & Business Partnership Services',
    summary: 'Financing, regulatory support, joint ventures, and market access for investors and businesses.',
    image: serviceImage('investment'),
    icon: Briefcase,
    items: [
      'Investment Financing & Mega Project Support',
      'Investment Setup & Regulatory Support',
      'Investment Promotion & Advisory Services',
      'Joint Ventures & Strategic Partnerships',
      'Market Access & Trade Linkage',
      'Business Expansion & Aftercare Services',
    ],
  },
  {
    id: 'diplomatic',
    title: 'Strategic Partnership & Diplomatic Relations',
    summary: 'G2G engagement, embassy coordination, and international cooperation frameworks.',
    image: serviceImage('diplomatic'),
    icon: Handshake,
    items: [
      'Identifying and building strategic local and international partnerships',
      'Facilitating bilateral and multilateral cooperation opportunities',
      'Government-to-government (G2G) and diplomatic engagement support',
      'Embassy, international agency, and stakeholder coordination',
      'Strengthening institutional and diplomatic collaborations',
      'Supporting international cooperation frameworks and policy dialogue',
    ],
  },
  {
    id: 'resource',
    title: 'Resource Mobilization & Project Management',
    summary: 'Grants, fundraising, and end-to-end development project coordination.',
    image: serviceImage('resource'),
    icon: FolderKanban,
    items: [
      'Identifying donor, grant, and funding opportunities',
      'Proposal writing and grant development support',
      'Partnership-based fundraising strategies',
      'Development project coordination and implementation support',
      'Infrastructure, education, investment, and social project management',
      'Monitoring project outcomes and partnership performance',
    ],
  },
  {
    id: 'policy',
    title: 'Policy Advisory, Research & Institutional Capacity Building',
    summary: 'PPP advisory, research, capacity building, and institutional collaboration.',
    image: serviceImage('policy'),
    icon: Scale,
    items: [
      'Policy advisory and international relations support',
      'Research, analysis, and strategic guidance',
      'Public-Private Partnership (PPP) advisory',
      'Capacity building, leadership, and negotiation training',
      'Peace building and sustainable development cooperation',
      'Innovation, knowledge-sharing, and regional partnership development',
      'Collaboration with universities, research centers, and development institutions',
    ],
  },
  {
    id: 'business-dev',
    title: 'Business Development Services',
    summary: 'Startup support, market research, and expansion into local and global markets.',
    image: serviceImage('business-dev'),
    icon: TrendingUp,
    items: [
      'Supporting startups, entrepreneurs, and business growth',
      'Connecting businesses with investors, partners, and funding opportunities',
      'Conducting market research and feasibility studies',
      'Providing business expansion support in local and global markets',
      'Offering strategic advisory for growth and partnerships',
    ],
  },
  {
    id: 'asset',
    title: 'Asset Management Services',
    summary: 'Asset growth, risk monitoring, and long-term value optimization.',
    image: serviceImage('asset'),
    icon: Building2,
    items: [
      'Managing assets for efficiency and long-term value',
      'Strategic planning for asset growth and protection',
      'Investment and resource optimization support',
      'Risk assessment and performance monitoring',
      'Maximizing returns and operational effectiveness',
    ],
  },
  {
    id: 'media',
    title: 'Media & Communication Services',
    summary: 'Branding, PR, digital marketing, and strategic stakeholder communication.',
    image: serviceImage('media'),
    icon: Megaphone,
    items: [
      'Corporate communication and public relations',
      'Branding, media strategy, and content creation',
      'Digital marketing and social media management',
      'Event communication and stakeholder engagement',
      'Visibility and strategic communication solutions',
    ],
  },
  {
    id: 'financing',
    title: 'Financing Services',
    summary: 'Access to finance, investor connections, and structured funding solutions.',
    image: serviceImage('financing'),
    icon: Wallet,
    items: [
      'Supporting access to finance and investment opportunities',
      'Connecting projects with investors and financial partners',
      'Financial advisory for startups, SMEs, and large investments',
      'Fundraising and resource mobilization support',
      'Structuring financial solutions for sustainable growth',
    ],
  },
  {
    id: 'security',
    title: 'Security Advisory',
    summary: 'Risk advisory, cybersecurity, executive protection, and crisis management.',
    image: serviceImage('security'),
    icon: Shield,
    items: [
      'Strategic Security & Risk Advisory',
      'Corporate & Infrastructure Security Consulting',
      'Intelligence & Threat Analysis',
      'Executive Protection & Secure Operations Advisory',
      'Cybersecurity & Digital Risk Advisory',
      'Crisis Management & Due Diligence',
    ],
  },
];

export const visionMission = {
  vision:
    'To be a leading African advisory firm driving global partnerships, empowerment, and transformative investments for a sustainable future.',
  mission:
    "To deliver innovative advisory services that promote sustainable growth and advance Ethiopia's and Africa's development",
};

export const whyChooseUs = [
  {
    title: 'Pan-African expertise with global reach',
    description: 'Operating across Africa, the Middle East, and the Far East with strategic market insight.',
    icon: Globe2,
  },
  {
    title: 'Strong government & institutional networks',
    description: 'Trusted relationships with governments, institutions, and multilateral stakeholders.',
    icon: Landmark,
  },
  {
    title: 'Experience in high-level diplomatic engagement',
    description: 'Bilateral, multilateral, and G2G cooperation backed by proven advisory delivery.',
    icon: Handshake,
  },
  {
    title: 'Proven track record in resource mobilization',
    description: 'Grants, donor funding, and partnership-based fundraising for development impact.',
    icon: Wallet,
  },
  {
    title: 'Focus on sustainable, impact-driven investments',
    description: 'Transformative solutions that advance long-term growth and prosperity.',
    icon: Briefcase,
  },
];

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

/** Replace with real articles when available */
export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'AZ Africa strengthens Pan-African investment facilitation',
    excerpt:
      'Expanding advisory support for governments, financial institutions, and international organizations across Africa and global markets.',
    date: 'Coming soon',
    category: 'Company News',
  },
  {
    id: '2',
    title: 'Strategic partnerships and diplomatic engagement',
    excerpt:
      'Updates on bilateral cooperation, institutional collaborations, and high-level stakeholder coordination.',
    date: 'Coming soon',
    category: 'Partnerships',
  },
  {
    id: '3',
    title: 'Resource mobilization and project milestones',
    excerpt:
      'Highlights from grant development, donor engagement, and development project implementation support.',
    date: 'Coming soon',
    category: 'Projects',
  },
];
