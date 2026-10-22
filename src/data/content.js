export const services = [
  { id: 'development', title: 'Website Development', icon: '</>', short: 'Fast, custom-coded websites built to turn visitors into clients.', points: ['Custom design and development', 'Mobile-first and SEO-ready', 'CMS so you can edit content yourself', 'Speed and security built in'] },
  { id: 'audits', title: 'Website Audits', icon: '✓', short: 'A clear report on what is costing you leads, and how to fix it.', points: ['Speed, SEO and UX review', 'Conversion and mobile checks', 'Prioritised fix list', 'Plain-language walkthrough'] },
  { id: 'redesign', title: 'Website Redesign', icon: '◇', short: 'Turn an outdated site into a modern, trustworthy brand presence.', points: ['Fresh visual identity', 'Improved structure and navigation', 'Content and SEO migration', 'Zero-downtime launch'] },
  { id: 'ecommerce', title: 'E-commerce Solutions', icon: '◈', short: 'Online stores that make buying simple and selling scalable.', points: ['Product and inventory setup', 'Secure payment gateways', 'Checkout optimisation', 'Marketplace-ready architecture'] },
  { id: 'growth', title: 'Digital Growth Solutions', icon: '↗', short: 'Ongoing optimisation that brings in more traffic, leads and sales.', points: ['Technical and on-page SEO', 'Analytics and conversion tracking', 'Landing pages for campaigns', 'Monthly performance reporting'] },
]

export const whyUs = [
  { title: 'Premium design', text: 'Every site is designed from scratch, never a recycled template.' },
  { title: 'Built for results', text: 'Each page has one job: turn visitors into enquiries and sales.' },
  { title: 'Fast delivery', text: 'Most business websites launch within 2 to 4 weeks.' },
  { title: 'Clear communication', text: 'Fixed pricing, weekly updates and one point of contact.' },
  { title: 'Ongoing support', text: 'We stay on after launch to maintain, fix and improve.' },
  { title: 'Made for South Africa', text: 'Local payments, local hosting advice and local market insight.' },
]

export const industries = ['Fashion and Retail', 'Beauty and Wellness', 'Education', 'Professional Services', 'Marketplaces', 'Startups']

export const projects = [
  { name: 'SaintAvenue', type: 'Marketplace platform', text: 'A multi-vendor marketplace where independent sellers list products, manage orders and get paid in one place.', tags: ['Multi-vendor', 'Payments', 'Dashboards'], from: '#D4AF37', to: '#3a2d08' },
  { name: 'Aura Avenue', type: 'Fashion e-commerce', text: 'A sleek fashion store with editorial product pages and a fast, low-friction checkout.', tags: ['E-commerce', 'Branding', 'Mobile-first'], from: '#F1D87A', to: '#1A1A1A' },
  { name: 'Velvet Crown', type: 'Luxury beauty and hair', text: 'A luxury beauty and hair brand site built around rich imagery, bookings and product sales.', tags: ['Luxury', 'Booking', 'E-commerce'], from: '#9C7A1B', to: '#1f1a0a' },
  { name: 'StudyFlow', type: 'Student productivity platform', text: 'A productivity platform that helps students plan, track and stay on top of their studies.', tags: ['Web app', 'UX design', 'Dashboard'], from: '#b8962e', to: '#101010' },
]

export const process = [
  { title: 'Discover', text: 'We learn your business, customers and goals.' },
  { title: 'Design', text: 'You approve a clear visual direction before we build.' },
  { title: 'Develop', text: 'We code a fast, secure, responsive website.' },
  { title: 'Launch', text: 'We test everything, go live and train you.' },
  { title: 'Grow', text: 'We measure results and keep improving.' },
]

export const pricing = [
  { name: 'Starter', price: 'R5,000', note: 'For new and small businesses', features: ['Up to 5 pages', 'Mobile-responsive design', 'Contact form and WhatsApp link', 'Basic SEO setup', '14 days of support'] },
  { name: 'Business', price: 'R9,500', note: 'Most popular for growing brands', features: ['Up to 10 pages', 'Custom premium design', 'Blog or CMS', 'Analytics and advanced SEO', '30 days of support'], featured: true },
  { name: 'Premium', price: 'R15,000', note: 'For stores and larger platforms', features: ['E-commerce or custom features', 'Payment gateway integration', 'Performance optimisation', 'Training session', '60 days of support'] },
]

export const serviceOptions = services.map((s) => s.title)
export const industryOptions = ['Fashion and Retail', 'Beauty and Wellness', 'Education', 'Professional Services', 'Marketplace', 'Other']
