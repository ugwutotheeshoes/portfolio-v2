/* ==========================================================================
   Site content. Add a project, job, tool or article here — the homepage and
   the work page pick it up automatically. Case study pages live in /work.
   ========================================================================== */

window.SITE = {
  name: 'Emmanuel Ugwu',
  email: 'ugwuec14@gmail.com',
  github: 'https://github.com/ugwutotheeshoes',
  linkedin: 'https://www.linkedin.com/in/emmanuel-chiemezie-ugwu/',
  // TODO: drop your résumé PDF at assets/resume.pdf (or change this path).
  resume: 'assets/resume.pdf'
};

/* Projects, strongest first. `featured: true` shows it on the homepage;
   `hidden: true` keeps it off the site entirely.
   `cover` picks one of the hand-built covers in main.js. */
window.PROJECTS = [
  {
    slug: 'kwuo', name: 'Kwuo', year: '2025', kind: 'edtech', featured: true, cover: 'kwuo',
    img: 'assets/img/kwuo.jpg', live: 'https://kwuo.xyz',
    desc: 'Interactive games for learning Igbo, with tutors listed in-app and text and voice chat on the way.',
    stack: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Tailwind', 'Zod', 'TanStack']
  },
  {
    slug: 'oddman', name: 'Oddman', year: '2026', kind: 'e-commerce', featured: true, cover: 'oddman',
    img: 'assets/img/oddman.jpg', live: 'https://aga1nstallodds.netlify.app/shop',
    desc: 'Storefront, admin dashboard and API for an independent streetwear label that sells in small drops on pre-order and ships worldwide.',
    stack: ['React 19', 'TypeScript', 'Tailwind 4', 'Express', 'MongoDB', 'Paystack', 'Cloudinary']
  },
  {
    slug: '180-autos', name: '180 Autos', year: '2025', kind: 'dealership', featured: true, cover: '180',
    img: 'assets/img/180-autos.jpg', live: 'https://180autos.netlify.app/',
    desc: 'Website and inventory admin for a premium car dealership — a pixel-art car on canvas that drives off as you scroll, live inventory, test-drive and trade-in bookings.',
    stack: ['React 19', 'TypeScript', 'Tailwind 4', 'MongoDB', 'Cloudinary']
  },
  {
    slug: 'izu-igbo-calendar', name: 'Izu Igbo Calendar', year: '2026', kind: 'web + android', featured: true, cover: 'izu',
    img: 'assets/img/izu-web.jpg', live: 'https://izuigbocalendar.com',
    desc: 'Browse and convert Gregorian dates across a 120-year span of Igbo market days — on the web, and as an Android app live on Google Play.',
    stack: ['TypeScript', 'React', 'React Native', 'Expo', 'Node.js', 'MongoDB']
  },
  {
    slug: 'oms-tracker', name: 'OMS Tracker Tool', year: '2025', kind: 'edtech', featured: true, cover: 'oms',
    img: 'assets/img/oms-tracker.jpg', live: 'https://omslabsprojects.com/tracker-tool',
    desc: 'A tracker that helps members follow their learning journey through a large library of teachings.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'EmailJS']
  },
  {
    slug: 'faber-reach', name: 'Faber Reach', year: '2026', kind: 'in progress', featured: false, hidden: true, // hidden until it's ready
    img: '', live: '',
    desc: 'Give it a website: it works out who buys from that business, finds companies that need it, looks up the decision-maker and drafts an email for you to approve.',
    stack: ['Next.js', 'Supabase', 'Claude API']
  },
  {
    slug: 'sevanis', name: 'Sevanis', year: '', kind: 'e-commerce', featured: false,
    img: 'assets/img/sevanis.jpg', live: 'https://sevanis.netlify.app/',
    desc: 'A furniture store with sign-in and checkout.',
    stack: ['React', 'Auth0', 'Stripe']
  },
  {
    slug: 'worldwise', name: 'Worldwise', year: '', kind: 'maps', featured: false,
    img: 'assets/img/worldwise.jpg', live: 'https://wurldwise.netlify.app/',
    desc: 'A world map that tracks your footsteps into every city you can think of.',
    stack: ['React', 'Vite', 'React Leaflet', 'OpenWeather API']
  }
];

window.JOBS = [
  { role: 'Full-Stack Developer', org: 'OMS Labs', loc: 'Virginia, US', when: '2025 — now',
    note: 'Sole frontend engineer. Replaced a single-login workflow with a multi-admin dashboard for 50+ staff, and built the tracker tool 100+ members use.' },
  { role: 'Mobile Development Engineer Intern', org: 'Spacemates', loc: 'Oslo, NO', when: '2024',
    note: '7+ core screens — search, listings, booking, profiles — and geolocation-based discovery with nearby listings on a map, in a 3-person team.' },
  { role: 'Frontend Engineer & Technical Writer', org: 'Hackmamba', loc: 'Delaware, US', when: '2021 — 2025',
    note: '50+ product demo apps in React, Next.js and Nuxt, and articles read by 10,000+ developers on dev.to alone.' },
  { role: 'Documentation Contributor (open source)', org: 'Ansible by Red Hat', loc: 'North Carolina, US', when: '2022 — now',
    note: 'Volunteer on the official Ansible docs: clearer, more accurate pages, plus reviewing pull requests and fixing issues.' }
];

window.STACK = [
  ['languages', 'TypeScript · JavaScript · Go'],
  ['frontend', 'React · Next.js · Nuxt · Tailwind CSS · Styled Components'],
  ['state', 'TanStack Query · Zustand · Zod'],
  ['animation', 'GSAP · Motion'],
  ['mobile', 'React Native · Expo'],
  ['backend', 'Node.js · Express · Netlify Functions · JWT'],
  ['data', 'MongoDB · SQL · Supabase · Prisma'],
  ['services', 'Cloudflare · Paystack · Stripe · Cloudinary · Auth0'],
  ['tooling', 'Git · Docker']
];

/* TODO: replace each `url: '#'` with the article's real link. */
window.ARTICLES = [
  { title: 'Exploring the Best UI Component Libraries for React Native Apps', url: '#' },
  { title: 'A/B Test Visual Assets With DAM for Data-Driven Campaigns', url: '#' },
  { title: 'How to Test Product Image Variations for Higher Conversions', url: '#' },
  { title: 'Customize Midjourney Images for Your E-commerce Website', url: '#' }
];
window.ALL_ARTICLES_URL = '#'; // TODO: your Hackmamba / dev.to author page
