// =====================================================================
//  CAPSURE — WEBSITE CONTENT
//  -------------------------------------------------------------------
//  This is the ONLY file you need to edit to change words, prices,
//  stats, case studies, FAQs or contact details on the site.
//
//  Rules of thumb:
//   • Change the text between the quote marks, leave the rest alone.
//   • Anything in [SQUARE BRACKETS] is a placeholder. On the live page
//     it shows with a yellow highlight so you can't miss it. Replace
//     the whole thing, brackets included, with the real value.
//   • To use an apostrophe inside 'single quotes', write it as \'
//     (or just use the curly ’ character instead).
// =====================================================================

export const site = {
  name: 'Capsure',
  tagline: 'Every lead captured. Every job made sure.',

  // Your web address. Leave empty and the host fills it in automatically
  // (it uses your custom domain once you've connected one).
  url: '',

  // Search engine title (keep under ~60 characters) and description (~155).
  seoTitle: 'Missed Enquiries Costing You Jobs? | Capsure, Surrey & Sussex',
  seoDescription:
    'Capsure answers, chases and books the enquiries home-improvement firms already pay for. Kitchens, windows, roofing, solar: Surrey, Sussex & the South East.',

  // The image shown when the site is shared on WhatsApp, LinkedIn etc.
  ogImage: '/og-image.png',
};

export const contact = {
  email: '[EMAIL]',
  phone: '[PHONE]', // write it how you want it shown, e.g. 01293 123456
  town: 'Crawley',
  county: 'West Sussex',
  country: 'GB',

  // Your Cal.com booking link for the 15-minute call,
  // e.g. 'https://cal.com/capsure/15min'. Until you add it, a placeholder
  // box shows where the calendar will appear.
  calLink: '[CAL.COM LINK]',

  // The enquiry form emails each enquiry to you via Web3Forms (free).
  // This key comes from web3forms.com. The form won't send without it.
  enquiryEmailKey: 'd23fbf1b-857f-403a-a6d7-172efbf6b2f0',

  // Shown in the footer and on the Privacy/Terms pages.
  // Towns named in the footer (helps local search)
  areas: ['Crawley', 'Horsham', 'East Grinstead', 'Haywards Heath', 'Brighton', 'Worthing', 'Guildford', 'Woking', 'Reigate', 'Redhill', 'Dorking', 'Epsom'],

  legalLine:
    'Capsure is a trading name of [LEGAL ENTITY], company no. [X], registered office [X].',
};

// Analytics (optional). Plausible is privacy-friendly analytics.
// To switch on: paste your domain exactly as set up in Plausible,
// e.g. 'capsure.co.uk'. Leave empty to keep analytics OFF.
// When analytics is on, a small cookie/consent banner appears and
// analytics only loads once the visitor clicks "Accept".
export const analytics = {
  plausibleDomain: '',
};

// ---------------------------------------------------------------------
// 1. HERO
// ---------------------------------------------------------------------
export const hero = {
  eyebrow: 'For home-improvement firms in Surrey, Sussex & the South East',
  headline: 'You paid for that lead. Nobody called them back.',
  subhead:
    'For owners of kitchen, window, roofing, solar, driveway and bathroom companies in Surrey, Sussex and the South East. Not more leads: more booked jobs from the leads you already pay for.',
  cta: 'Get your Leak Audit — £750',
  secondaryCta: 'Work out what you’re losing',
  // Three short reassurance points under the buttons
  trust: ['Fixed prices, all on this page', '£750 audit credited against month one', 'Monthly report in booked jobs and £'],
  // The illustration beside the headline (an example, not a real client)
  visual: {
    caption: 'An evening enquiry, handled',
    items: [
      { time: '7:42pm', title: 'Missed call', text: 'New kitchen enquiry. Your team has gone home.', state: 'missed' },
      { time: '7:43pm', title: 'Text sent in your name', text: '“Sorry we missed you. Pick a time for your design visit here.”', state: 'sent' },
      { time: '7:51pm', title: 'Design visit booked', text: 'Thursday 10:00. Confirmation and reminder sent.', state: 'booked' },
    ],
  },
};

// ---------------------------------------------------------------------
// 2. EVIDENCE STRIP — from YOUR mystery-shopping. Never invent figures.
// ---------------------------------------------------------------------
export const evidence = {
  intro:
    'What happened when we mystery-shopped [X] home-improvement firms in Surrey and Sussex, [MONTH YEAR]:',
  stats: [
    { figure: '[X] of 50', label: 'kitchen companies didn’t answer the phone after 6pm' },
    { figure: '[X] hrs', label: 'average wait for a reply to a website enquiry' },
    { figure: '[X]%', label: 'of quotes got no follow-up at all after 7 days' },
  ],
};

// ---------------------------------------------------------------------
// 3. LEAK CALCULATOR — starting values and slider limits
// ---------------------------------------------------------------------
export const calculator = {
  title: 'What are missed enquiries costing you?',
  intro:
    'Move the sliders to match your business. The maths is simple and shown underneath, no email needed.',
  defaults: { enquiries: 60, jobValue: 8000, closeRate: 20, missedRate: 20 },
  limits: {
    enquiries: { min: 5, max: 400, step: 5 },
    jobValue: { min: 1000, max: 50000, step: 500 },
    closeRate: { min: 5, max: 60, step: 1 },
    missedRate: { min: 5, max: 70, step: 1 },
  },
  // Used for the "covers its cost" line under the result.
  monthlyFeeForComparison: 1500,
  cta: 'Find your exact figure — book the £750 Leak Audit',
};

// ---------------------------------------------------------------------
// 4b. IS THIS FOR YOU? — being clear who it's NOT for builds trust
// ---------------------------------------------------------------------
export const fit = {
  title: 'Is this for you?',
  intro: 'We work with a small number of firms at a time, so we’re upfront about who we can help.',
  forTitle: 'A good fit if',
  for: [
    'You sell kitchens, windows, roofing, solar, driveways or bathrooms',
    'Your average job is £5,000 or more',
    'You spend £3,000+ a month on leads from Google, Meta, Checkatrade, Bark or similar',
    'You have 5–40 staff and nobody really owns follow-up',
  ],
  notTitle: 'Not a fit if',
  not: [
    'You want more leads. We make more of the ones you already get',
    'You spend less than £3,000 a month on leads',
    'Your average job is under £5,000',
    'You’d rather buy software and run it yourself',
  ],
};

// ---------------------------------------------------------------------
// 4. HOW IT WORKS (keep it under 60 words in total)
// ---------------------------------------------------------------------
export const howItWorks = {
  title: 'How it works',
  steps: [
    { name: 'Audit', text: 'We mystery-shop your business and put a £ figure on what’s leaking.' },
    { name: 'Install in 10 days', text: 'Answering, text-back, follow-up and booking set up in your name.' },
    { name: 'Recover', text: 'We chase every enquiry and quote, then report booked jobs and £ recovered.' },
  ],
  // The labels on the flow diagram
  flow: [
    { name: 'Enquiry', detail: 'Phone, web form, WhatsApp, Facebook, Instagram' },
    { name: 'Response', detail: 'Answered or texted back within 60 seconds' },
    { name: 'Follow-up', detail: '90 days of structured quote chasing' },
    { name: 'Booked', detail: 'In your calendar, with reminders' },
  ],
};

// ---------------------------------------------------------------------
// 5. PACKAGES
// ---------------------------------------------------------------------
export const packages = {
  title: 'What you get',
  intro: 'Three ways to work with us. Every price is on the page.',
  items: [
    {
      name: 'The Leak Audit',
      price: '£750',
      period: 'one-off',
      setup: 'Credited in full against your first retainer month if you start within 14 days.',
      note: 'Effectively £0 if you go ahead within 14 days.',
      bestFor: 'Best for: seeing exactly what’s leaking before you spend another penny.',
      highlight: false,
      cta: 'Book the audit',
      features: [
        '12 recorded mystery-shop calls: working hours, evenings and weekend',
        '5 web and social enquiries, timed to the minute',
        'Review of how your quotes are followed up',
        'Leakage Report with a £-per-year figure',
        '45-minute findings call',
      ],
    },
    {
      name: 'Response Engine',
      price: '£1,500',
      period: 'per month',
      setup: '+ £500 setup, waived on a 6-month term',
      bestFor: 'Best for: firms losing enquiries out of hours and quotes that go quiet.',
      highlight: true,
      badge: 'Recommended',
      cta: 'Start with the audit',
      features: [
        'Call routing and tracked numbers',
        'AI answering in your company’s name for overflow, evenings and weekends',
        'Missed-call text-back within 60 seconds',
        'Replies to web, WhatsApp, Facebook and Instagram enquiries in under 5 minutes',
        'Calendar booking with reminders',
        '90-day quote follow-up',
        'Pipeline dashboard',
        'Monthly booked-jobs report and review call',
      ],
    },
    {
      name: 'Revenue Operations Partner',
      price: '£2,950',
      period: 'per month',
      setup: '+ £1,000 setup',
      bestFor: 'Best for: high-value quotes that need a human chasing them.',
      highlight: false,
      cta: 'Start with the audit',
      features: [
        'Everything in Response Engine, plus:',
        'Human follow-up calls on quiet high-value quotes',
        'No-show recovery',
        'Monthly sales-call scoring and coaching',
        'Review generation',
        'Referral and repeat-customer sequences',
        'Weekly reporting',
        'Quarterly strategy session',
      ],
    },
  ],
  ownership:
    'Software is licensed in your name, on your card (about £40–£80/month). You own it and your data. You pay us to make it work and chase the jobs.',
  terms: '3-month initial term, then rolling 30 days.',
};

// ---------------------------------------------------------------------
// 6. PROOF / OUR WORK — swap these for real (anonymised) results.
//    No made-up names, testimonials or logos.
// ---------------------------------------------------------------------
export const proof = {
  title: 'Our work',
  intro:
    'Anonymised findings from Leak Audits. We publish client names only with written permission.',
  placeholderNotice: 'Placeholder cards. Real audit findings will replace these.',
  cases: [
    {
      client: 'Client A',
      business: 'Kitchen showroom, [TOWN], West Sussex',
      problem: '[X] missed calls in 30 days, most after 5pm.',
      did: 'Leak Audit: [X] mystery-shop calls and [X] web enquiries.',
      result: '£[X] of pipeline unaddressed',
    },
    {
      client: 'Client B',
      business: 'Windows & doors installer, [TOWN], Surrey',
      problem: 'Web enquiries waited [X] hours for a first reply.',
      did: 'Leak Audit plus quote follow-up review.',
      result: '[X] quotes worth £[X] never chased',
    },
    {
      client: 'Client C',
      business: 'Roofing contractor, [TOWN], South East',
      problem: '[X]% of Facebook enquiries never got a reply.',
      did: 'Leak Audit across phone, web and social.',
      result: '£[X]/year estimated leakage',
    },
  ],
};

// ---------------------------------------------------------------------
// 7. LISTEN TO IT — audio files live in /public/audio/
//    To swap: replace the file in public/audio with the same name,
//    or change the file name here.
// ---------------------------------------------------------------------
export const audio = {
  title: 'Listen to it',
  intro: 'Hear the difference between a call that books and a call that rings out.',
  clips: [
    {
      title: 'Our answering, on a demo call',
      description:
        'A homeowner rings a fictional kitchen company at 7:40pm. The call is answered, the assistant says it’s automated, and a design visit gets booked.',
      file: '/audio/demo-answering-call.mp3',
      transcript: '[TRANSCRIPT OF THE DEMO CALL — paste it here once recorded]',
    },
    {
      title: 'A real firm’s phone, ringing out',
      description:
        'Recorded during our mystery-shopping. Company details removed. Nobody answered, and there was no voicemail.',
      file: '/audio/real-firm-ringing-out.mp3',
      transcript: 'The phone rings [X] times. Nobody answers. The call ends.',
    },
  ],
};

// ---------------------------------------------------------------------
// 8. FAQ
// ---------------------------------------------------------------------
export const faq = {
  title: 'Straight answers',
  items: [
    {
      q: 'Will it sound like a robot?',
      a: 'It sounds natural, but it never pretends to be a person. It tells the caller it’s an automated assistant for your company, takes their details, books the visit where it can, and passes anything complicated to a human, you or your team, straight away. It only picks up when your team can’t: overflow, evenings and weekends. You can hear it above.',
    },
    {
      q: 'What happens to my receptionist?',
      a: 'They keep their job. Capsure covers the hours they can’t: lunch, busy spells, after 6pm and weekends. It also does the 90-day quote chasing nobody has time for. Your receptionist starts the day with booked appointments instead of a voicemail backlog.',
    },
    {
      q: 'Is this GDPR-compliant?',
      a: 'It’s designed around UK GDPR. We only handle inbound enquiries (people who contacted you) and follow-up on quotes you’ve sent. No cold lists, no bought data. The software is licensed in your name, so the data stays in your accounts, and we work as your data processor under a written agreement. Anyone can opt out of follow-up at any time.',
    },
    {
      q: 'What if it doesn’t work?',
      a: 'You’re on a 3-month initial term, then rolling 30 days. Every month the report shows booked jobs and £ recovered against what you pay us. If we don’t recover more than we cost, you shouldn’t stay, and you can leave with 30 days’ notice, keeping the software and your data because they’re already in your name.',
    },
    {
      q: 'Am I committed to anything after the audit?',
      a: 'No. The audit is a one-off £750 and the Leakage Report is yours to keep, whether or not you work with us. If you start a retainer within 14 days, the full £750 comes off your first month.',
    },
    {
      q: 'Do I have to change my phone number?',
      a: 'No. Your number stays on your vans, website and adverts. Calls are routed behind it, and tracked numbers are only added where you want to see which adverts bring in enquiries.',
    },
    {
      q: 'How quickly is it working?',
      a: 'Once you’ve seen your audit and decided to go ahead, we install everything in 10 days. You don’t need to learn new software. We run it, and you get booked appointments in your calendar.',
    },
  ],
};

// ---------------------------------------------------------------------
// 9. FINAL CTA + ENQUIRY FORM
// ---------------------------------------------------------------------
export const finalCta = {
  title: 'Find out exactly what’s leaking.',
  text: 'The Leak Audit is £750, credited in full against your first month if you start within 14 days. Send the form or book a 15-minute call. You’ll talk to a person, not a sales script.',
  formTitle: 'Request your Leak Audit',
  formTime: 'Takes about 30 seconds',
  nextStepsTitle: 'What happens next',
  nextSteps: [
    'We reply within one working day',
    'A 15-minute call to check it’s a fit',
    'We run your Leak Audit and walk you through the £ figure',
  ],
  reassurance: 'No obligation. Your details are never shared or sold.',
  bookingTitle: 'Or book a 15-minute call',
  trades: [
    'Kitchens',
    'Windows & doors',
    'Roofing',
    'Solar & batteries',
    'Driveways & landscaping',
    'Bathrooms',
    'Other home improvement',
  ],
  leadSpend: [
    'Under £3,000 a month',
    '£3,000–£5,000 a month',
    '£5,000–£10,000 a month',
    '£10,000–£20,000 a month',
    'Over £20,000 a month',
    'Not sure',
  ],
  afterHoursQuestion: 'What happens to enquiries after 6pm?',
  submitLabel: 'Send my request',
  thankYouTitle: 'Thanks, that’s with us.',
  thankYouText:
    'We’ll reply within one working day to arrange your Leak Audit. If it’s urgent, call or email us using the details below.',
};

export const stickyCta = 'Get your Leak Audit';
