/**
 * All editable site content lives here. Update this file to change copy,
 * add verified testimonials, fill in employment history, or set social links.
 * Nothing in this file should claim results, clients, or credentials that
 * have not been verified.
 */

export const SITE_URL = 'https://personal-portfolio-website-361e50.netlify.app'

export const profile = {
  name: 'Muhammad Ahsan Gulzar',
  firstName: 'Muhammad',
  title: 'Digital Marketing Strategist & Medical Billing Specialist',
  yearsExperience: 15,
  email: 'info@sprintdigitals.com',
  phoneDisplay: '+1 (732) 314-3417',
  phoneHref: 'tel:+17323143417',
  whatsappNumber: '17323143417',
  whatsappMessage:
    'Hello Muhammad, I visited your portfolio and would like to discuss your services.',
}

export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(profile.whatsappMessage)}`

export type SocialNetwork = 'linkedin' | 'facebook' | 'instagram' | 'x' | 'youtube'

/** Add a profile URL to show its icon in the contact section and footer. */
export const socialLinks: Record<SocialNetwork, string> = {
  linkedin: '',
  facebook: '',
  instagram: '',
  x: '',
  youtube: '',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
] as const

/** Only verified figures belong here; they animate in the hero and About. */
export const stats = [
  { value: 15, suffix: '+', label: 'Years of professional experience' },
  { value: 2, suffix: '', label: 'Specialized fields of expertise' },
  { value: 16, suffix: '', label: 'Core services offered' },
]

export const aboutHighlights = [
  'Digital marketing strategy & business growth',
  'SEO & organic search visibility',
  'Paid advertising & lead generation',
  'Social media marketing & brand development',
  'Medical billing workflows & revenue cycle management',
  'Revenue optimization, reporting & operational efficiency',
  'Data-driven decisions & continuous improvement',
]

export type ServiceIcon =
  | 'search'
  | 'sparkles'
  | 'target'
  | 'share'
  | 'pen'
  | 'funnel'
  | 'chart'
  | 'gauge'
  | 'file'
  | 'clipboard'
  | 'wallet'
  | 'scale'
  | 'shield'
  | 'cycle'
  | 'badge'
  | 'report'

export type Service = { title: string; description: string; icon: ServiceIcon; tags: string[] }

export const marketingServices: Service[] = [
  {
    title: 'Search Engine Optimization (SEO)',
    icon: 'search',
    description:
      'Build durable organic visibility with a search strategy grounded in how your customers actually look for you.',
    tags: ['Technical SEO', 'On-page', 'Keyword research', 'Content strategy', 'Local SEO'],
  },
  {
    title: 'AI Search Optimization',
    icon: 'sparkles',
    description:
      'Prepare your brand to be found, cited, and recommended across AI-powered search and answer experiences.',
    tags: ['AEO', 'GEO', 'AI visibility'],
  },
  {
    title: 'Google Ads & PPC',
    icon: 'target',
    description:
      'Paid search campaigns structured around intent, with careful targeting and conversion tracking from day one.',
    tags: ['Paid search', 'Audience targeting', 'Conversion tracking', 'Optimization'],
  },
  {
    title: 'Social Media Marketing',
    icon: 'share',
    description:
      'Strategy, content planning, and campaign management that keep your brand consistent and your audience engaged.',
    tags: ['Strategy', 'Content planning', 'Campaigns', 'Engagement'],
  },
  {
    title: 'Content Marketing',
    icon: 'pen',
    description:
      'Search-friendly content and conversion-focused copy that explains your value clearly and earns trust.',
    tags: ['SEO content', 'Landing pages', 'Blogs', 'Copywriting'],
  },
  {
    title: 'Lead Generation',
    icon: 'funnel',
    description:
      'Funnels and landing pages designed to turn interested visitors into qualified, contactable leads.',
    tags: ['Funnels', 'Landing pages', 'Lead capture', 'CRO'],
  },
  {
    title: 'Analytics & Reporting',
    icon: 'chart',
    description:
      'Clean measurement setups and clear reports, so every marketing decision is backed by reliable data.',
    tags: ['GA4', 'Search Console', 'Tag Manager', 'Reporting'],
  },
  {
    title: 'Website Optimization',
    icon: 'gauge',
    description:
      'Faster, clearer, mobile-friendly websites that remove friction and make it easier for visitors to act.',
    tags: ['Performance', 'UX', 'Mobile', 'Conversions'],
  },
]

export const billingServices: Service[] = [
  {
    title: 'Medical Billing',
    icon: 'file',
    description: 'Support for accurate billing workflows and dependable claim processing.',
    tags: [],
  },
  {
    title: 'Claims Management',
    icon: 'clipboard',
    description: 'Assistance with claim preparation, submission, tracking, and follow-up.',
    tags: [],
  },
  {
    title: 'Payment Posting',
    icon: 'wallet',
    description: 'Payment reconciliation and posting workflow support for cleaner records.',
    tags: [],
  },
  {
    title: 'Accounts Receivable Management',
    icon: 'scale',
    description: 'Monitoring outstanding balances and supporting timely collections.',
    tags: [],
  },
  {
    title: 'Denial Management',
    icon: 'shield',
    description: 'Identifying denial trends and supporting appropriate follow-up and appeals.',
    tags: [],
  },
  {
    title: 'Revenue Cycle Management (RCM)',
    icon: 'cycle',
    description: 'Workflow improvement across billing, collections, and revenue cycle operations.',
    tags: [],
  },
  {
    title: 'Insurance Verification',
    icon: 'badge',
    description: 'Eligibility and benefits verification workflow support before services are billed.',
    tags: [],
  },
  {
    title: 'Reporting & Analytics',
    icon: 'report',
    description: 'Billing performance reports, operational insights, and revenue cycle metrics.',
    tags: [],
  },
]

export const billingPillars = [
  {
    title: 'Efficient workflows',
    body: 'Clear, repeatable steps from eligibility checks to payment posting reduce rework and keep claims moving.',
  },
  {
    title: 'Accurate documentation',
    body: 'Complete, consistent information at every stage helps claims go out right the first time and supports clean audits.',
  },
  {
    title: 'Consistent follow-up',
    body: 'Regular attention to open claims, denials, and aging balances keeps nothing from slipping through the cracks.',
  },
]

export const rcmSteps = [
  'Insurance verification',
  'Claim preparation',
  'Submission & tracking',
  'Payment posting',
  'Denial follow-up',
  'Reporting & insights',
]

export const portfolioCategories = [
  'SEO & Organic Growth',
  'Social Media Campaigns',
  'Paid Advertising',
  'Website Optimization',
  'Medical Billing & RCM',
  'Reporting & Analytics',
] as const

export type PortfolioCategory = (typeof portfolioCategories)[number]

export type Project = {
  title: string
  category: PortfolioCategory
  image: string
  imageAlt: string
  description: string
  focus: string[]
  /** Set to false once a project is a real, verified client engagement. */
  demo: boolean
}

export const projects: Project[] = [
  {
    title: 'Organic Visibility Roadmap',
    category: 'SEO & Organic Growth',
    image: '/img/pf-seo.jpg',
    imageAlt: 'Glowing magnifying glass above rising bar chart representing search visibility growth',
    description:
      'A sample end-to-end SEO engagement: technical audit, keyword mapping, and a content plan prioritized by search intent.',
    focus: ['Technical audit', 'Keyword mapping', 'Content plan'],
    demo: true,
  },
  {
    title: 'Brand Content Calendar',
    category: 'Social Media Campaigns',
    image: '/img/pf-social.jpg',
    imageAlt: 'Content creator desk with ring light, smartphone on tripod, camera and tablet',
    description:
      'An illustrative social strategy: audience personas, platform mix, and a monthly content calendar with campaign themes.',
    focus: ['Audience personas', 'Content pillars', 'Calendar'],
    demo: true,
  },
  {
    title: 'High-Intent Search Campaign',
    category: 'Paid Advertising',
    image: '/img/pf-ads.jpg',
    imageAlt: 'Abstract target rings with a glowing arrow at the center on a navy background',
    description:
      'A demonstration Google Ads structure: tightly themed ad groups, negative keyword strategy, and conversion tracking setup.',
    focus: ['Campaign structure', 'Targeting', 'Tracking'],
    demo: true,
  },
  {
    title: 'Conversion-Focused Site Refresh',
    category: 'Website Optimization',
    image: '/img/pf-web.jpg',
    imageAlt: 'Laptop and smartphone showing a clean website layout with blue speed lines',
    description:
      'A sample optimization plan covering page speed, mobile usability, clearer calls to action, and form friction.',
    focus: ['Core Web Vitals', 'Mobile UX', 'CTA clarity'],
    demo: true,
  },
  {
    title: 'Claims Workflow Blueprint',
    category: 'Medical Billing & RCM',
    image: '/img/pf-rcm.jpg',
    imageAlt: 'Organized clipboards, folders, calculator and tablet on a clean healthcare office desk',
    description:
      'An illustrative revenue cycle workflow map: verification, submission, posting, and denial follow-up with clear ownership.',
    focus: ['Workflow mapping', 'Follow-up cadence', 'Checklists'],
    demo: true,
  },
  {
    title: 'Unified Performance Dashboard',
    category: 'Reporting & Analytics',
    image: '/img/pf-analytics.jpg',
    imageAlt: 'Curved monitor displaying abstract analytics charts in a dark room with blue glow',
    description:
      'A demonstration reporting setup connecting GA4, Search Console, and campaign data into one decision-ready view.',
    focus: ['GA4', 'Search Console', 'KPI design'],
    demo: true,
  },
]

/**
 * Skills are shown as categories. To display a proficiency meter, set a
 * verified `level` from 1 to 5 on any skill.
 */
export type Skill = { name: string; level?: 1 | 2 | 3 | 4 | 5 }

export const skillGroups: { title: string; tone: 'electric' | 'teal'; skills: Skill[] }[] = [
  {
    title: 'Digital Marketing',
    tone: 'electric',
    skills: [
      { name: 'SEO Strategy' },
      { name: 'Keyword Research' },
      { name: 'Technical SEO' },
      { name: 'Local SEO' },
      { name: 'Google Ads' },
      { name: 'Social Media Marketing' },
      { name: 'Content Strategy' },
      { name: 'GA4 & Google Search Console' },
      { name: 'Google Tag Manager' },
      { name: 'Conversion Rate Optimization' },
      { name: 'AI Search Optimization' },
    ],
  },
  {
    title: 'Medical Billing',
    tone: 'teal',
    skills: [
      { name: 'Medical Billing Workflows' },
      { name: 'Claims Management' },
      { name: 'Payment Posting' },
      { name: 'Accounts Receivable' },
      { name: 'Denial Follow-up' },
      { name: 'Revenue Cycle Management' },
      { name: 'Billing Reports & Analytics' },
    ],
  },
]

export type ExperienceEntry = {
  role: string
  employer: string
  period: string
  field: 'Digital Marketing' | 'Medical Billing' | 'Digital Marketing & Medical Billing'
  responsibilities: string[]
  /** Remove once the entry holds real role, employer, and dates. */
  placeholder: boolean
}

export const experience: ExperienceEntry[] = [
  {
    role: '[Position Title]',
    employer: '[Company Name]',
    period: '[Start Year] – Present',
    field: 'Digital Marketing & Medical Billing',
    responsibilities: [
      '[Describe your current responsibilities and focus areas]',
      '[Add a key initiative or area of ownership]',
    ],
    placeholder: true,
  },
  {
    role: '[Position Title]',
    employer: '[Company Name]',
    period: '[Start Year] – [End Year]',
    field: 'Digital Marketing',
    responsibilities: [
      '[Describe SEO, advertising, or social media responsibilities]',
      '[Add tools, channels, or teams you worked with]',
    ],
    placeholder: true,
  },
  {
    role: '[Position Title]',
    employer: '[Company Name]',
    period: '[Start Year] – [End Year]',
    field: 'Medical Billing',
    responsibilities: [
      '[Describe billing, claims, or AR responsibilities]',
      '[Add workflows or processes you supported]',
    ],
    placeholder: true,
  },
  {
    role: '[Position Title]',
    employer: '[Company Name]',
    period: '[Start Year] – [End Year]',
    field: 'Digital Marketing',
    responsibilities: [
      '[Describe where your professional journey began]',
      '[Add early skills or responsibilities]',
    ],
    placeholder: true,
  },
]

export type Testimonial = { quote: string; name: string; role: string }

/**
 * Add verified testimonials here (with the person's permission). While this
 * list is empty, the live site shows an invitation instead of quotes, and the
 * local development server shows clearly labelled placeholder cards.
 */
export const testimonials: Testimonial[] = []

export const placeholderTestimonials: Testimonial[] = [
  {
    quote: 'Placeholder quote — replace with verified feedback about a digital marketing engagement.',
    name: 'Client Name',
    role: 'Role, Company',
  },
  {
    quote: 'Placeholder quote — replace with verified feedback about medical billing or RCM support.',
    name: 'Client Name',
    role: 'Role, Organization',
  },
  {
    quote: 'Placeholder quote — replace with verified feedback about reporting or website work.',
    name: 'Client Name',
    role: 'Role, Company',
  },
]

export const contactServiceOptions = [
  'SEO & AI Search Optimization',
  'Google Ads & PPC',
  'Social Media Marketing',
  'Content Marketing',
  'Lead Generation',
  'Analytics & Reporting',
  'Website Optimization',
  'Medical Billing & Claims',
  'Revenue Cycle Management',
  'Something else',
]
