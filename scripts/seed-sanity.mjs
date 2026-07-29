import { createClient } from "@sanity/client";
import { existsSync, readFileSync } from "node:fs";

function loadEnvFile(path) {
  if (!existsSync(path)) {
    return;
  }

  const lines = readFileSync(path, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").replace(/^['"]|['"]$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID: projectId,
  NEXT_PUBLIC_SANITY_DATASET: dataset = "production",
  NEXT_PUBLIC_SANITY_API_VERSION: apiVersion = "2026-07-28",
  SANITY_API_WRITE_TOKEN: token,
} = process.env;

const missing = [
  ["NEXT_PUBLIC_SANITY_PROJECT_ID", projectId],
  ["SANITY_API_WRITE_TOKEN", token],
].filter(([, value]) => !value);

if (missing.length) {
  console.error(
    `Missing required environment variable(s): ${missing
      .map(([key]) => key)
      .join(", ")}`,
  );
  console.error("Create .env.local from .env.example, then run npm run seed:sanity.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const textBlocks = (paragraphs = []) =>
  paragraphs.map((paragraph, index) => ({
    _type: "block",
    _key: `paragraph-${index + 1}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `span-${index + 1}`,
        text: paragraph,
        marks: [],
      },
    ],
  }));

const card = (item) => ({
  _type: "card",
  _key: slugify(item.title || item.label || item.value),
  title: item.title || item.label || item.value,
  description: item.description,
  label: item.label,
  value: item.value,
  href: item.href,
});

const section = ({ eyebrow, title, description, cards = [] }) => ({
  _type: "sectionBlock",
  _key: slugify(title || eyebrow),
  eyebrow,
  title,
  description,
  cards: cards.map(card),
});

const link = ({ label, href, children }) => ({
  _type: "linkItem",
  _key: slugify(`${label}-${href}`),
  label,
  href,
  children: children?.map(link),
});

const seo = (title, description, path) => ({
  _type: "seo",
  title,
  description,
  path,
});

const siteConfig = {
  name: "SNL Technology",
  description:
    "SNL Technology delivers fluid system products, monitoring systems, and enterprise software services for upstream, industrial, and critical operations across Nigeria.",
  phone: "+234 (0) 803 759 5235",
  email: "info@snltechnology.ng",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Projects" },
  {
    href: "/media",
    label: "Media",
    children: [
      { href: "/media/news", label: "News" },
      { href: "/media/events", label: "Events" },
      { href: "/media/articles", label: "Articles" },
    ],
  },
  { href: "/community-impact", label: "Community Impact" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/media/news", label: "News" },
  { href: "/media/events", label: "Events" },
  { href: "/media/articles", label: "Articles" },
  { href: "/community-impact", label: "Community Impact" },
  { href: "/contact", label: "Contact" },
];

const serviceCards = [
  {
    title: "Swagelok Fluid Systems",
    description:
      "Authorized supply and technical support for Swagelok tube fittings, valves, regulators, tubing, manifolds, and custom assemblies.",
  },
  {
    title: "IFS Enterprise Software",
    description:
      "Enterprise asset management, production data, hydrocarbon accounting, operational intelligence, and ERP services for energy operations.",
  },
  {
    title: "Monitoring Systems",
    description:
      "Field-ready monitoring and instrumentation solutions that improve visibility across upstream, midstream, and industrial sites.",
  },
  {
    title: "Field Engineering",
    description:
      "On-site engineering support for product selection, installation, commissioning, diagnostics, and system integrity.",
  },
  {
    title: "Training",
    description:
      "Hands-on technical training for operations and maintenance teams working with fluid systems and digital operations tools.",
  },
];

const solutionCards = [
  {
    title: "Upstream Exploration & Production",
    description:
      "Instrumentation, monitoring, and fluid systems and software services for upstream sites.",
  },
  {
    title: "Midstream Infrastructure",
    description:
      "Pipeline instrumentation, fluid transfer systems, and software services.",
  },
  {
    title: "EPC & Industrial Projects",
    description:
      "Engineering support, monitoring systems, and fluid systems for oil, gas and industrial projects.",
  },
];

const trustStats = [
  { label: "Established", value: "2005" },
  { label: "Years in upstream & industrial sectors", value: "20+" },
  { label: "Products & Services", value: "Fluid Systems & Software" },
];

const differentiators = [
  {
    label: "20+ years",
    description:
      "Providing engineering services across Nigeria's upstream sector since 2005.",
  },
  {
    label: "Authorized partner",
    description:
      "Authorized reseller of Swagelok products for Swagelok Sub-Saharan Africa and local partner of IFS in Nigeria.",
  },
  {
    label: "Integrated delivery",
    description:
      "Fluid system products, monitoring systems, and enterprise software services managed by one accountable team.",
  },
];

const fluidSystemProducts = [
  {
    title: "Tube Fittings",
    description:
      "Leak-tight tube fittings engineered for reliability in high-pressure upstream operations.",
  },
  {
    title: "Valves",
    description:
      "Precision valves for safe isolation, regulation, and flow control in demanding environments.",
  },
  {
    title: "Regulators",
    description:
      "Pressure regulation solutions built for stability, safety, and operational efficiency.",
  },
  {
    title: "Tubing",
    description:
      "High-quality tubing designed to withstand harsh operating conditions and vibration.",
  },
  {
    title: "Manifolds",
    description:
      "Compact manifold systems that simplify installation while improving system integrity.",
  },
  {
    title: "Custom Fluid System Assemblies",
    description:
      "Application-focused assemblies engineered to optimize performance, safety, and maintenance efficiency.",
  },
];

const softwareServices = [
  {
    title: "Enterprise Asset Management",
    description:
      "Helping operators improve asset reliability, maintenance planning, and operational uptime.",
  },
  {
    title: "Hydrocarbon Accounting",
    description:
      "Accurate production allocation and hydrocarbon measurement for informed decision-making.",
  },
  {
    title: "Production Data Management",
    description:
      "Centralized production data solutions that improve visibility across operations.",
  },
  {
    title: "Operational Intelligence",
    description:
      "Real-time operational insights that support faster and smarter business decisions.",
  },
  {
    title: "Maintenance & Reliability Solutions",
    description:
      "Digital tools that enhance maintenance efficiency and asset performance.",
  },
  {
    title: "ERP & Business Applications",
    description:
      "Integrated enterprise solutions that streamline workflows across energy operations.",
  },
];

const leaders = [
  {
    name: "Ladi Soyombo",
    role: "Chairman / CEO",
    summary:
      "A petroleum engineer with nearly two decades of industry experience, driving innovation, operational excellence, and strategic growth across energy technology, fluid systems, and software services.",
    bio: [
      "Ladi Soyombo is the Chairman and Chief Executive Officer of SNL Technology, a leading provider of technology and fluid system engineering solutions to Nigeria's energy and industrial sectors. A petroleum engineer with nearly two decades of industry experience, he has built a reputation for driving innovation, operational excellence, and strategic growth in the energy sector.",
      "He holds an MSc in Petroleum Engineering from Heriot-Watt University and has completed executive education in Management at London Business School. His expertise spans petroleum economics, production optimization, reservoir management, and technology-driven business transformation.",
      "Under his leadership, SNL Technology has established strategic relationships with global industry leaders including Swagelok and IFS, enabling the company to deliver advanced fluid system solutions and enterprise software services to upstream and industrial businesses across Nigeria. He is a strong advocate for leveraging emerging technologies such as real-time data systems, artificial intelligence, and automation to improve operational performance, efficiency, and sustainability within the energy industry.",
      "Beyond his corporate responsibilities, Ladi is a passionate social entrepreneur and the founder of Innovate, a non-profit initiative focused on career development and business empowerment for young Nigerians.",
    ],
    imageClassName: "object-[50%_26%]",
    imagePath: "/images/team/ladi-soyombo.jpg",
    linkedin: "https://www.linkedin.com/in/ladi-soyombo-baa83720",
  },
  {
    name: "Shuaibu Ismaila",
    role: "Managing Director",
    summary:
      "A mechanical engineer and Certified Supply Chain Professional with over two decades of leadership experience within SNL Technology and Nigeria's oil and gas industry.",
    bio: [
      "Shuaibu Ismaila is the Managing Director of SNL Technology, bringing over two decades of leadership experience within the company and Nigeria's oil and gas industry. A Mechanical Engineer by training, he has played a pivotal role in driving the company's operational growth, strategic direction, and long-term business sustainability.",
      "He is a Certified Supply Chain Professional (CSCP) accredited by the Association for Supply Chain Management and a member of the Institute of Supply Chain Management. His expertise spans supply chain management, procurement, project execution, operational leadership, and business transformation within the energy sector.",
      "During his tenure at SNL Technology, Shuaibu has led several key milestones, including delivering a 42% year-on-year revenue growth, managing procurement for multi-million Naira EPC projects, securing strategic partnerships with major international oil companies, and overseeing the company's ISO 9001:2015 certification process. Known for his collaborative leadership style, he is focused on building high-performing teams and fostering a culture of accountability, innovation, and continuous improvement.",
    ],
    imagePath: "/images/team/shuaibu-ismaila.jpg",
    linkedin: "https://www.linkedin.com/in/shuaibu-ismaila-a76b66258",
  },
  {
    name: "Ebere Gloria Nwigwe",
    role: "Sales and Customer Service Manager",
    summary:
      "A customer engagement and procurement coordination leader with over 20 years of experience supporting major upstream oil and gas projects.",
    bio: [
      "Ebere Gloria Nwigwe is the Sales and Customer Service Manager at SNL Technology, with over 20 years of experience supporting client engagement, procurement coordination, and project delivery within Nigeria's oil and gas industry. She has played a key role in strengthening customer relationships and ensuring seamless operational support across major upstream projects.",
      "She holds a BA (Hons) in International Relations, a Postgraduate Diploma and MSc in Project Management, and is currently pursuing a PhD in Project Management. Her professional certifications span Corporate Governance, Employment and Human Resources Management, Health, Safety and Environment (HSE Level 3 Supervisor), and Management Proficiency from the Nigerian Institute of Management. She also received specialized tube fitting installation training from Swagelok in London.",
      "Ebere is a Fellow of the Institute of Corporate Governance, Employment and Human Resources Management and a Graduate Member of the Nigerian Institute of Management. Throughout her career at SNL Technology, she has successfully coordinated procurement and documentation support for major projects including the Ofon Phase II Project for TotalEnergies and the Assa North-Ohaji South Project for Shell Petroleum Development Company and Oilserv Limited. She has also contributed to the successful execution of procurement support across more than 20 projects within the energy sector.",
      "Known for her strong interpersonal and organizational skills, Ebere is passionate about delivering excellent customer service while supporting efficient procurement operations through effective communication and coordination.",
    ],
    imagePath: "/images/team/ebere-nwigwe.jpg",
    linkedin: "https://www.linkedin.com/in/ebereglorianwigwe",
  },
  {
    name: "Dave Okpe",
    role: "Logistics Manager",
    summary:
      "A logistics and supply chain operations specialist with over 18 years of experience in warehousing, cargo handling, and delivery coordination.",
    bio: [
      "Dave Okpe is the Logistics Manager at SNL Technology, with over 18 years of experience overseeing logistics operations, warehousing, cargo handling, and supply chain coordination within Nigeria's oil and gas industry. He plays a critical role in ensuring the seamless movement and timely delivery of technical products and materials that support upstream operations.",
      "He holds a BSc degree and has completed professional training in Human Management in the United States, Warehousing and Logistics in the United Kingdom, Cybersecurity in the United States, as well as leadership development programs in Nigeria. He is also affiliated with industry bodies including International Certified Management Consultants and PETRAC.",
      "At SNL Technology, Dave has been instrumental in transforming the logistics function into an efficient plug-and-play operational hub, enhancing cargo clearing processes and enabling faster local deliveries to clients across the energy sector. Known for his proactive approach and operational discipline, he is committed to improving logistics efficiency, responsiveness, and service reliability.",
    ],
    imagePath: "/images/team/dave-okpe.jpg",
  },
  {
    name: "Akingbemi Akiode",
    role: "Business Development Manager",
    summary:
      "A business development leader focused on strategic growth, client engagement, account reactivation, and market expansion in Nigeria's energy sector.",
    bio: [
      "Akingbemi Akiode is the Business Development Manager at SNL Technology, where he drives strategic business growth, client engagement, and market expansion initiatives within Nigeria's energy sector. Since joining the company, he has contributed significantly to strengthening client relationships, expanding business opportunities, and enhancing the company's industry visibility.",
      "He holds a BSc degree and has completed professional certifications in Sales and Business Development from the Institute of Leadership and Management, Sales Excellence Professional training in Egypt, and Business Skills Competence certification from the London School of Business and Finance.",
      "At SNL Technology, Akingbemi has successfully onboarded new clients, reactivated inactive accounts, and contributed to expanding the company's market presence through strategic engagement and professional platforms. He is passionate about building sustainable business relationships and positioning the company for long-term growth and industry relevance.",
    ],
    imageClassName: "object-[50%_18%]",
    imagePath: "/images/team/akingbemi-akiode.jpg",
    linkedin: "https://www.linkedin.com/in/akingbemi-akiode-sep-sbdp-286ba712",
  },
  {
    name: "Remilekun Akintunde",
    role: "Head, Finance & Administration",
    summary:
      "A finance and administration leader with over 18 years of experience in financial management, governance, compliance, and operational support.",
    bio: [
      "Remilekun Akintunde is the Head of Finance & Administration at SNL Technology, with over 18 years of experience in financial management, corporate administration, and operational support within Nigeria's oil and gas industry. She plays a key role in driving the company's financial stability, governance, and administrative efficiency.",
      "She holds an MBA in Finance and a BSc in Accounting, and is a Fellow Chartered Accountant (FCA) of the Institute of Chartered Accountants of Nigeria. Her expertise spans financial reporting, budgeting, internal controls, compliance, and strategic financial planning.",
      "Throughout her career at SNL Technology, Remilekun has contributed significantly to strengthening the company's financial management systems and administrative processes. Her achievements include improving financial reporting and budgeting frameworks, implementing cost-control initiatives, enhancing compliance and internal control procedures, and providing effective financial oversight for major projects. Through her strategic leadership, she continues to support the company's operational efficiency, growth, and long-term sustainability.",
    ],
    imagePath: "/images/team/remilekun-akintunde.jpg",
    linkedin: "https://www.linkedin.com/in/akintunde-remilekun",
  },
  {
    name: "Olujimi Somolu",
    role: "Brand Communications & Marketing Manager",
    summary:
      "A brand communications and marketing professional leading corporate positioning, digital presence, content strategy, and external visibility initiatives.",
    bio: [
      "Olujimi Somolu is the Brand Communications & Marketing Manager at SNL Technology, where he leads the company's brand positioning, corporate communications, and marketing initiatives across digital and industry-facing platforms. With professional experience spanning agency and client-side communications since 2017, he has worked across diverse sectors including lifestyle, banking, finance, government, telecommunications, pharmaceuticals, NGOs, fintech, and energy.",
      "He holds a BSc in International Law and Diplomacy and an MSc in Corporate Communications & Reputation Management. He is also an Associate of the Nigerian Institute of Public Relations.",
      "At SNL Technology, Olujimi has played a key role in strengthening the company's brand visibility and corporate profile through strategic communications and marketing execution. He led the revamp of the company's website, reactivated and currently manages the company's and executive leadership's digital presence, and develops research-driven content calendars and brand communication strategies aligned with business objectives. His work spans corporate content development, executive profiling, thought leadership writing, video scripting and production direction, stakeholder communications, and external media publications.",
      "He also leverages AI-driven tools, social media analytics, and performance insights to optimize marketing effectiveness and audience engagement. In addition, he collaborates with cross-functional teams, third-party agencies, and vendors to execute integrated communications campaigns, while identifying and securing strategic visibility opportunities for SNL Technology across industry events, webinars, and conferences.",
    ],
    imagePath: "/images/team/olujimi-somolu.jpg",
    linkedin: "https://www.linkedin.com/in/olujimi-somolu",
  },
];

const newsPosts = [
  {
    id: "news-thisday-ifs-partnership",
    title:
      "SNL Technology Services CEO, Ladi Soyombo, Shares Insights on SNL and IFS Partnership",
    source: "THISDAYLIVE",
    externalUrl:
      "https://www.thisdaylive.com/2023/05/27/snl-technology-services-ceo-ladi-soyombo-shares-insights-on-snl-and-ifs-partnership/",
  },
  {
    id: "news-nairametrics-digital-oil-gas",
    title:
      "Digitizing Nigeria's Oil and Gas Sector: SNL Technology Services and IFS Partner to Transform Upstream Operations Through Digital Technology",
    source: "Nairametrics",
    externalUrl:
      "https://nairametrics.com/2023/05/27/digitizing-nigerias-oil-and-gas-sector-snl-technology-services-and-ifs-partner-to-transform-upstream-operations-through-digital-technology/",
  },
  {
    id: "news-apie-energy-landscape",
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape",
    source: "APIE News",
    externalUrl:
      "https://appsaf.apieproject.com/news/2023/05/29/snl-technology-partners-with-ifs-to-revolutionise-nigerias-energy-landscape-an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/",
  },
  {
    id: "news-business-insider-ifs-interview",
    title:
      "SNL Technology partners with IFS to revolutionise Nigeria's energy landscape - An exclusive interview with SNL Tech's CEO, Ladi Soyombo",
    source: "Business Insider Africa",
    externalUrl:
      "https://africa.businessinsider.com/local/markets/an-exclusive-interview-with-snl-techs-ceo-ladi-soyombo/7cgxxp3",
  },
];

const eventPosts = [
  {
    id: "event-ladi-energy-operations",
    title: "Leadership perspective on energy, oil and gas operations",
    source: "Ladi Soyombo on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/ladi-soyombo-baa83720_energy-oilandgas-ceo-ugcPost-7306268053770506241-THZL/",
  },
  {
    id: "event-people-life-at-snl",
    title: "People of SNL Technology and life at SNL Technology update",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7348014416560279552-dmwZ",
  },
  {
    id: "event-people-team-feature",
    title: "People of SNL Technology team feature",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-peopleofsnltechnology-lifeatsnltechnology-activity-7358912054780452864-8RDM",
  },
  {
    id: "event-lagos-energy-week-2026",
    title:
      "Ladi Soyombo at Lagos Energy Week 2026: The modern energy professional",
    source: "SNL Technology on LinkedIn",
    externalUrl:
      "https://www.linkedin.com/posts/snl-technology_snltechnology-lagosenergyweek2026-lew2026-activity-7431631863326167041-Xwuj",
  },
];

const projectPosts = [
  {
    id: "project-kaduna-refinery-rehabilitation",
    title: "Kaduna Refinery Rehabilitation Project",
    source: "2024",
    excerpt:
      "Delivered high-performance fluid system components for the rehabilitation of the Kaduna Refining and Petrochemical Company, supporting the integrity and reliability of critical process systems.",
  },
  {
    id: "project-anoh-spdc",
    title: "Assa North-Ohaji South (ANOH) SPDC Project",
    source: "2024",
    excerpt:
      "Supported the ANOH development project by supplying high-quality tubing and fittings that contributed to the integrity, reliability, and performance of critical fluid control systems for the Shell Petroleum Development Company.",
  },
  {
    id: "project-anoh-gas-pipeline",
    title: "ANOH Gas Transportation Pipeline Project",
    source: "2023",
    excerpt:
      "Supplied precision-engineered ball valves for the ANOH Gas Transportation Pipeline project executed by Oilserv Limited, supporting safe and reliable flow control across critical gas infrastructure.",
  },
  {
    id: "project-chevron-egtl",
    title: "Chevron Escravos Gas-to-Liquids (EGTL) Project",
    source: "2022",
    excerpt:
      "Delivered tubing, fittings, and valves for Chevron Corporation's EGTL project, supporting efficient and dependable fluid system performance.",
  },
  {
    id: "project-wrpc-upgrade",
    title: "WRPC Facility Upgrade Project",
    source: "2020",
    excerpt:
      "Supplied ball valves for the facility upgrade project executed by Reliant Overseas Limited at the Warri Refining and Petrochemical Company, contributing to improved operational efficiency and reliability.",
  },
  {
    id: "project-nigerdock-ofon-phase-2",
    title: "Nigerdock OFON Phase 2 Project",
    source: "2014",
    excerpt:
      "Provided manifolds, tubing, fittings, valves, and gauges for instrumentation and fluid control applications on the OFON Phase 2 project, supporting safe, reliable, and efficient operations.",
  },
];

const communityImpactPosts = [
  {
    id: "impact-innovate-2026-punch",
    title: "Navidyn, Tuntunre win $5,000 at Innovate 2026",
    source: "Featured coverage",
    excerpt:
      "Read the Punch coverage of Innovate 2026 and its support for entrepreneurs and emerging business builders.",
    externalUrl: "https://punchng.com/navidyn-tuntunre-win-5000-at-innovate-2026/",
  },
];

const documents = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    ...siteConfig,
    offices: [
      {
        _key: "lagos-office",
        name: "Lagos office",
        address: "15a Ladipo Omotesho Cole Avenue, Lekki 1\nLagos, Nigeria",
        email: siteConfig.email,
      },
      {
        _key: "port-harcourt-office",
        name: "Port Harcourt office",
        address: "Plot 174 Circular Road, Rumuogba Estate\nRiver State, Nigeria",
        phone: siteConfig.phone,
      },
    ],
    socialLinks: [
      link({
        label: "LinkedIn",
        href: "https://ng.linkedin.com/company/snl-technology",
      }),
    ],
  },
  {
    _id: "navigation",
    _type: "navigation",
    headerLinks: navLinks.map(link),
    footerLinks: footerLinks.map(link),
  },
  {
    _id: "homePage",
    _type: "homePage",
    seo: seo(
      "Fluid Systems & Enterprise Software Services in Nigeria",
      "SNL Technology is an authorised Swagelok reseller and IFS partner delivering fluid system solutions, monitoring systems, and enterprise software services for Nigeria's upstream and industrial sectors.",
      "/",
    ),
    hero: {
      slides: [
        {
          _key: "we-are-snl",
          titleLines: ["We are", "SNL Technology"],
          description:
            "A technical and operational performance partner helping upstream, industrial, and critical teams improve reliability, visibility, and execution.",
        },
        {
          _key: "swagelok-reseller",
          titleLines: ["Authorised", "Swagelok Reseller"],
          description:
            "Serving Swagelok Sub-Saharan Africa with trusted fluid system products and support.",
        },
        {
          _key: "ifs-partner",
          titleLines: ["IFS Solutions", "Partner in Nigeria"],
          description:
            "Delivering software services and operational solutions for upstream, industrial, and critical operations.",
        },
      ],
      profileStats: trustStats.map(card),
      partnerNote:
        "Authorised reseller of Swagelok products for Swagelok Sub-Saharan Africa and partner of IFS in Nigeria.",
      statStrip: [
        { label: "Established", value: "2005" },
        { label: "Years in upstream and industrial sectors", value: "20+" },
        { label: "Primary industry focus", value: "Oil & Gas" },
        { label: "Products and services", value: "Fluid Systems + Software" },
      ].map(card),
    },
    sections: [
      section({
        eyebrow: "Our story",
        title: "Two decades of upstream and industrial experience",
        description:
          "SNL Technology was founded in 2005, in response to the drive for local content in Nigeria's upstream oil and gas sector.",
      }),
      section({
        eyebrow: "Products & Services",
        title: "Fluid systems and enterprise software services",
        description:
          "SNL Technology provides fluid systems from Swagelok Sub-Saharan Africa and enterprise software services from IFS.",
        cards: serviceCards,
      }),
      section({
        eyebrow: "Trust",
        title: "Built on technical depth and delivery experience",
        cards: differentiators,
      }),
    ],
    cta: {
      _type: "cta",
      title: "Ready to improve reliability, visibility, or performance?",
      description:
        "Talk to our team about your fluid system requirements, software priorities, or operational constraints. We'll help define a practical delivery path.",
      primaryLabel: "Contact Us",
      primaryHref: "/contact",
    },
  },
  {
    _id: "aboutPage",
    _type: "aboutPage",
    seo: seo(
      "About SNL Technology | Swagelok Reseller & IFS Partner in Nigeria",
      "Learn about SNL Technology, a Lagos-based technical and operational performance partner delivering Swagelok fluid systems, monitoring systems, and IFS software services since 2005.",
      "/about",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "The Company",
      title: "Technology and fluid system products and software services.",
      description:
        "SNL Technology supports Nigeria's upstream and industrial sectors with monitoring systems, Swagelok fluid system products and IFS software services.",
      primaryLabel: "Speak with our team",
      primaryHref: "/contact",
    },
    sections: [
      section({
        eyebrow: "Who we are",
        title: "Ensuring reliability in demanding operations",
        description:
          "SNL Technology is a leading provider of monitoring systems, fluid system products, and software services to Nigeria's upstream and industrial sectors.",
        cards: [
          {
            title: "Vision",
            description:
              "To be the preferred partner in empowering upstream and industrial companies with reliable fluid system products and software services.",
          },
          {
            title: "Mission",
            description:
              "To be an industry leader in providing cutting-edge fluid system products and software services to upstream and industrial companies in Nigeria.",
          },
          {
            title: "Core values",
            description: "Excellence, Quality, Integrity, Customer-focus.",
          },
        ],
      }),
      section({
        eyebrow: "Credentials",
        title: "Experience and Affiliations",
        description: "The depth and trust that underpin every engagement.",
        cards: differentiators,
      }),
    ],
    cta: {
      _type: "cta",
      title: "Want to understand the scope of our work?",
      description:
        "Speak with our engineering team about your specific operational context.",
      primaryLabel: "Get in touch",
      primaryHref: "/contact",
      secondaryLabel: "View project capability",
      secondaryHref: "/project",
    },
  },
  {
    _id: "servicesPage",
    _type: "servicesPage",
    seo: seo(
      "Services | Swagelok Fluid Systems, Monitoring & IFS Software",
      "SNL Technology provides Swagelok tube fittings, valves, regulators, tubing, manifolds, custom assemblies, monitoring systems, field engineering, training, and IFS software services.",
      "/services",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Services",
      title: "Fluid systems, software services, and value-added support",
      description:
        "From Swagelok components and assemblies to IFS implementation and operational intelligence, SNL Technology supports reliability and performance across upstream, industrial, and critical operations.",
      primaryLabel: "Request service consultation",
      primaryHref: "/contact",
    },
    sections: [
      section({
        title: "Core service portfolio",
        description:
          "Structured offerings built for field realities, production-critical timelines, and long-term asset performance.",
        cards: serviceCards,
      }),
      section({
        eyebrow: "Swagelok",
        title: "Fluid system solutions",
        description:
          "Authorized Swagelok product resale and technical support for high-pressure, high-reliability operating environments.",
        cards: fluidSystemProducts,
      }),
      section({
        eyebrow: "IFS",
        title: "Enterprise software services",
        description:
          "Implementation and advisory services that help operations teams improve asset reliability, production visibility, and business workflows.",
        cards: softwareServices,
      }),
    ],
  },
  {
    _id: "solutionsPage",
    _type: "solutionsPage",
    seo: seo(
      "Solutions | Upstream, Midstream, EPC & Industrial Operations",
      "SNL Technology supports upstream exploration and production, midstream infrastructure, EPC, and industrial projects with fluid systems, monitoring, and software services.",
      "/solutions",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Solutions",
      title: "Built around operational realities",
      description:
        "Our solution architecture is aligned to fluid system integrity, asset reliability, production visibility, and data-driven decision support.",
      primaryLabel: "Discuss your challenges",
      primaryHref: "/contact",
    },
    sections: [
      section({
        title: "Application tracks",
        description:
          "Each track combines field engineering, fluid systems, monitoring, and software enablement to support measurable improvement.",
        cards: solutionCards,
      }),
      section({
        eyebrow: "Product systems",
        title: "Swagelok-enabled fluid system reliability",
        cards: fluidSystemProducts,
      }),
      section({
        eyebrow: "Digital operations",
        title: "IFS-enabled enterprise performance",
        cards: softwareServices,
      }),
    ],
  },
  {
    _id: "partnersPage",
    _type: "partnersPage",
    seo: seo(
      "Partners | Swagelok Sub-Saharan Africa & IFS Nigeria",
      "SNL Technology is the authorised reseller of Swagelok products for Swagelok Sub-Saharan Africa and partner of IFS in Nigeria, supporting fluid systems and enterprise software services.",
      "/partners",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Partners",
      title: "Global technology, local execution",
      description:
        "SNL Technology brings together Swagelok fluid system products and IFS enterprise software services with the local engineering and delivery support required for Nigerian operations.",
      primaryLabel: "Speak with our team",
      primaryHref: "/contact",
    },
    sections: [
      section({
        eyebrow: "Swagelok",
        title: "Authorized product reseller",
        description:
          "SNL Technology supplies Swagelok products for Swagelok Sub-Saharan Africa, delivering global-standard fluid system components with local technical support.",
        cards: fluidSystemProducts,
      }),
      section({
        eyebrow: "IFS",
        title: "Enterprise software partner in Nigeria",
        description:
          "SNL Technology supports IFS enterprise software services for asset-intensive businesses that need better reliability, production data, operational intelligence, and business process control.",
        cards: softwareServices,
      }),
    ],
  },
  {
    _id: "projectPage",
    _type: "projectPage",
    seo: seo(
      "Projects | Energy Sector Fluid System Delivery in Nigeria",
      "Explore SNL Technology project experience across Kaduna Refinery, ANOH, Chevron EGTL, WRPC, OFON Phase 2, fluid systems, monitoring systems, and IFS software delivery.",
      "/project",
    ),
    intro: {
      _type: "pageIntro",
      title: "Delivering support for critical operating environments",
      description:
        "SNL Technology supports project teams with reliable products and services across fluid systems and enterprise software.",
      primaryLabel: "Discuss a project",
      primaryHref: "/contact",
    },
  },
  {
    _id: "mediaPage",
    _type: "mediaPage",
    seo: seo(
      "Media | SNL Technology News, Events & Articles",
      "Explore SNL Technology media updates, news coverage, events, LinkedIn updates, and technical articles on fluid systems, monitoring, enterprise software, and community impact.",
      "/media",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Media",
      title: "Stories, updates, and technical perspective",
      description:
        "A focused publishing hub for SNL Technology news, events, and articles.",
    },
  },
  {
    _id: "contactPage",
    _type: "contactPage",
    seo: seo(
      "Contact SNL Technology | Fluid Systems & Software Services",
      "Contact SNL Technology to discuss Swagelok fluid system requirements, monitoring systems, IFS software services, training, field engineering, and project support in Nigeria.",
      "/contact",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Contact",
      title: "Start the conversation",
      description:
        "Tell us your operational goals and constraints. Our team will respond with a practical path to execution.",
    },
  },
  {
    _id: "communityImpactPage",
    _type: "communityImpactPage",
    seo: seo(
      "Community Impact | Innovate Sponsorship & Local Capability",
      "SNL Technology supports Innovate, a non-profit initiative empowering entrepreneurs and career professionals with skills, networks, and business development opportunities.",
      "/community-impact",
    ),
    intro: {
      _type: "pageIntro",
      eyebrow: "Community Impact",
      title: "Investing in people, capability, and local opportunity",
      description:
        "SNL Technology's community impact work shows how the business contributes beyond operations through career development, business empowerment, and technical exposure.",
    },
  },
  ...leaders.map((leaderItem, index) => ({
    _id: `leader-${slugify(leaderItem.name)}`,
    _type: "leader",
    ...leaderItem,
    order: index + 1,
  })),
  ...newsPosts.map((post) => ({
    _id: post.id,
    _type: "newsPost",
    title: post.title,
    slug: { _type: "slug", current: slugify(post.title) },
    source: post.source,
    externalUrl: post.externalUrl,
    featured: false,
    seo: seo(post.title, post.title, `/media/news/${slugify(post.title)}`),
  })),
  ...eventPosts.map((post) => ({
    _id: post.id,
    _type: "eventPost",
    title: post.title,
    slug: { _type: "slug", current: slugify(post.title) },
    source: post.source,
    externalUrl: post.externalUrl,
    featured: false,
    seo: seo(post.title, post.title, `/media/events/${slugify(post.title)}`),
  })),
  ...projectPosts.map((post) => ({
    _id: post.id,
    _type: "project",
    title: post.title,
    slug: { _type: "slug", current: slugify(post.title) },
    source: post.source,
    excerpt: post.excerpt,
    body: textBlocks([post.excerpt]),
    featured: false,
    seo: seo(post.title, post.excerpt, `/project/${slugify(post.title)}`),
  })),
  ...communityImpactPosts.map((post) => ({
    _id: post.id,
    _type: "communityImpactPost",
    title: post.title,
    slug: { _type: "slug", current: slugify(post.title) },
    source: post.source,
    excerpt: post.excerpt,
    externalUrl: post.externalUrl,
    body: textBlocks([post.excerpt]),
    featured: true,
    seo: seo(post.title, post.excerpt, `/community-impact/${slugify(post.title)}`),
  })),
];

console.log(`Seeding ${documents.length} documents into ${projectId}/${dataset}...`);

const transaction = client.transaction();

for (const document of documents) {
  transaction.createOrReplace(document);
}

await transaction.commit();

console.log("Sanity seed complete.");
