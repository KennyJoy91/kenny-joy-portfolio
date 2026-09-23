"use client";

import { motion } from "framer-motion";

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "linhtp.uni@gmail.com";
const PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+44 7856 407077";
const LOCATION = process.env.NEXT_PUBLIC_CONTACT_LOCATION ?? "Exeter, United Kingdom";
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/phuong-linh-truong-kenny-joy";
const CV_URL = process.env.NEXT_PUBLIC_CV_URL ?? "https://example.com/kenny-joy-cv.pdf";

const navigation = [
  "About",
  "Selected Work",
  "Experience",
  "Education",
  "Research & Awards",
  "Skills",
  "Contact",
];

const stats = [
  "300-600 reactions per campaign post",
  "700 attendees at U.S. Education Fair",
  "1,000 followers gained in 3 weeks",
  "500+ guests supported at Capstone Fair",
];

const caseStudies = [
  {
    title: "U.S. Embassy in Vietnam",
    focus: "Public Diplomacy, Digital Content and Event Delivery",
    context:
      "Supported public diplomacy campaigns and major public-facing programmes, including the U.S. Education Fair and bilateral cultural activities.",
    contribution:
      "Developed social and video content, coordinated with internal and external stakeholders, and supported end-to-end event logistics and media reporting.",
    outcomes:
      "Delivered posts with 300-600 reactions and contributed to events that welcomed up to 700 attendees.",
    skills: ["Public diplomacy", "Stakeholder coordination", "Content creation", "Event operations"],
  },
  {
    title: "Mattana Fashion Brand",
    focus: "Connecting Content, E-commerce and Customer Insight",
    context:
      "Worked across digital channels to support campaign consistency and improve the customer journey from social touchpoint to purchase.",
    contribution:
      "Created SEO-informed content, monitored e-commerce performance, and captured customer feedback to support practical optimisation.",
    outcomes:
      "Improved content relevance, channel consistency and insight quality for campaign planning and product communications.",
    skills: ["SEO", "E-commerce monitoring", "Customer insight", "Digital communications"],
  },
  {
    title: "Thuongmai University Exchange Programme",
    focus: "Making International Opportunities More Accessible",
    context:
      "Supported exchange-programme promotion and advising to help students understand and access international study opportunities.",
    contribution:
      "Produced social media assets, co-organised outreach activities, and guided students through applications and preparation.",
    outcomes:
      "A 'Life in the USA' vlog reached around 3,000 views, with a companion reel reaching 1,300 views.",
    skills: ["Education communications", "Student advising", "Video production", "Programme outreach"],
  },
  {
    title: "TMUers Go Global Field Trip",
    focus: "Building an Audience and Delivering a Cross-cultural Programme",
    context:
      "Launched and promoted a new initiative to support a two-week programme for Japanese faculty and students.",
    contribution:
      "Built page identity, content planning, and on-the-ground logistics, including welcome and farewell events.",
    outcomes:
      "Grew the programme page to 1,000 followers in three weeks and engaged around 300 students through on-campus activation.",
    skills: ["Audience growth", "Cross-cultural programme delivery", "Brand identity", "Event coordination"],
  },
  {
    title: "Capstone Fall Education Fair",
    focus: "Supporting an International Education Event",
    context:
      "Contributed to a major education fair involving 30 U.S. universities, representatives, and prospective students.",
    contribution:
      "Supported pre-event setup, visitor guidance, representative support, and interpretation during peak attendee periods.",
    outcomes:
      "Helped deliver a smooth experience for approximately 500 attendees in a high-volume international setting.",
    skills: ["Guest operations", "Interpretation", "Customer service", "Live event support"],
  },
];

const experience = [
  {
    role: "Public Diplomacy Section Intern",
    organisation: "U.S. Embassy in Vietnam",
    period: "Mar 2025 - Jan 2026",
    points: [
      "Produced campaign content and media reports for scholarship and public diplomacy programmes.",
      "Collaborated on high-profile events, including the U.S. Education Fair, Friendship Festival and alumni activities.",
      "Managed stakeholder communications, visitor operations, translation support and logistics coordination.",
    ],
  },
  {
    role: "Digital Marketing Intern",
    organisation: "Mattana Fashion Brand",
    period: "Aug 2025 - Dec 2025",
    points: [
      "Created SEO-aligned content across website and social channels with consistent brand messaging.",
      "Monitored Shopee, WordPress and social performance data to identify optimisation opportunities.",
      "Supported customer communications and feedback reporting to inform campaign and merchandising decisions.",
    ],
  },
  {
    role: "Public Affairs Department Partnership",
    organisation: "Thuongmai University",
    period: "Jan 2024 - Nov 2024",
    points: [
      "Promoted exchange opportunities through multimedia content and workshop support.",
      "Delivered talks and guidance for prospective exchange students and answered application queries.",
      "Supported in-person outreach, interviews and collaborative programme communication with staff and partners.",
    ],
  },
];

const education = [
  {
    institution: "University of Exeter",
    programme: "MSc Marketing Management",
    period: "Jan 2026 - Jan 2027",
    details: "Marketing Analytics, Marketing in Practice, New Product Innovation",
  },
  {
    institution: "Thuongmai University",
    programme: "Bachelor's Degree in Digital Marketing (Valedictorian)",
    period: "Sep 2022 - Dec 2025",
    details: "GPA 3.99/4.0",
  },
  {
    institution: "Niagara University",
    programme: "Exchange Semester in Business",
    period: "Jan 2024 - May 2024",
    details: "GPA 3.87/4.0, International Marketing (Grade A)",
  },
];

const researchAndAwards = [
  "Valedictorian, Digital Marketing Major, Thuongmai University (Cohort 58).",
  "Full scholarships awarded across every semester from 2022 to 2025.",
  "First Prize (Faculty) and Third Prize (University) for student scientific research on online learning quality.",
  "Published article: 'The impact of learners’ personal factors on the quality of online learning' (Economy and Forecast, 2024).",
  "SR-ICYREB 2024 proceedings publication on factors affecting online learning effectiveness in Hanoi.",
  "'Student With Five Good Criteria' award, university level (2022-2023).",
];

const skillGroups = [
  {
    label: "Marketing",
    items: [
      "Digital marketing",
      "Communications",
      "Event management",
      "Content creation",
      "Stakeholder coordination",
      "SEO",
    ],
  },
  {
    label: "Analytics Tools",
    items: ["Google Analytics", "SEMrush", "Ahrefs", "Power BI", "SPSS", "Excel"],
  },
  {
    label: "Creative Tools",
    items: ["Canva", "CapCut", "WordPress", "Meta Business Suite", "Illustrator", "Photoshop"],
  },
  {
    label: "Soft Skills",
    items: ["Planning", "Problem-solving", "Adaptability", "Time management", "Teamwork", "Attention to detail"],
  },
  {
    label: "Languages",
    items: ["English (professional)", "Vietnamese (native)"],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const toId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Home() {
  return (
    <div className="bg-[var(--ivory)] text-[var(--charcoal)]">
      <header className="sticky top-0 z-40 border-b border-[var(--warm-taupe)]/40 bg-[var(--ivory)]/95 backdrop-blur">
        <nav className="section-shell flex items-center justify-between py-4">
          <p className="font-heading text-xl text-[var(--deep-navy)]">Kenny Joy</p>
          <ul className="hidden flex-wrap items-center justify-end gap-4 text-sm md:flex">
            {navigation.map((item) => (
              <li key={item}>
                <a className="transition hover:text-[var(--deep-navy)]" href={`#${toId(item)}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="section-shell grid gap-8 py-20 lg:grid-cols-[2fr_1fr]" id="home">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--warm-taupe)]">Master Portfolio</p>
            <h1 className="font-heading text-5xl leading-tight text-[var(--deep-navy)] sm:text-6xl">
              Phuong Linh Truong
              <span className="block text-3xl sm:text-4xl">(Kenny Joy)</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[var(--charcoal)]/85">
              Digital Marketing &amp; Communications Professional
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--charcoal)]/80">
              Marketing Management MSc candidate at the University of Exeter and Digital Marketing Valedictorian from
              Thuongmai University, combining analytical rigour with creative campaign delivery across education,
              diplomacy and brand communication.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#selected-work"
                className="rounded-full bg-[var(--deep-navy)] px-5 py-3 text-sm font-semibold text-[var(--ivory)] transition hover:translate-y-[-1px]"
              >
                View Work
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--deep-navy)] px-5 py-3 text-sm font-semibold text-[var(--deep-navy)] transition hover:bg-[var(--deep-navy)] hover:text-[var(--ivory)]"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[var(--warm-taupe)] px-5 py-3 text-sm font-semibold transition hover:border-[var(--deep-navy)]"
              >
                Contact
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-br from-[var(--soft-sage)] via-[var(--warm-taupe)] to-[var(--deep-navy)] p-8 text-[var(--ivory)] shadow-xl"
          >
            <h2 className="font-heading text-2xl">Performance Highlights</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7">
              {stats.map((stat) => (
                <li key={stat} className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  {stat}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <Section id="about" title="About">
          <p className="max-w-4xl leading-8 text-[var(--charcoal)]/85">
            I am a communications and digital marketing professional with practical experience in campaign planning,
            public engagement, programme promotion, and reporting. I enjoy translating complex ideas into clear,
            audience-centred communications and supporting events that create positive educational and community impact.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Analytical and solution-oriented planning",
              "Cross-cultural stakeholder communication",
              "Audience-focused content strategy",
              "Confident event and operations support",
              "Consistent attention to detail",
              "Calm delivery under tight deadlines",
            ].map((strength) => (
              <div key={strength} className="rounded-2xl border border-[var(--warm-taupe)]/50 bg-white/60 p-4">
                {strength}
              </div>
            ))}
          </div>
        </Section>

        <Section id="selected-work" title="Selected Work">
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-[var(--warm-taupe)]/40 bg-white/80 p-6 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--warm-taupe)]">Case Study</p>
                <h3 className="mt-2 font-heading text-2xl text-[var(--deep-navy)]">{study.title}</h3>
                <p className="mt-2 text-sm font-semibold">{study.focus}</p>
                <p className="mt-4 text-sm leading-7"><strong>Context:</strong> {study.context}</p>
                <p className="mt-2 text-sm leading-7"><strong>Contribution:</strong> {study.contribution}</p>
                <p className="mt-2 text-sm leading-7"><strong>Outcomes:</strong> {study.outcomes}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                  {study.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-[var(--deep-navy)]/10 px-3 py-1 text-[var(--deep-navy)]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            {experience.map((item) => (
              <article key={item.role} className="rounded-3xl border border-[var(--warm-taupe)]/50 bg-white/70 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-2xl text-[var(--deep-navy)]">{item.role}</h3>
                  <p className="text-sm font-semibold text-[var(--charcoal)]/70">{item.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--warm-taupe)]">{item.organisation}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-5 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.institution} className="rounded-3xl border border-[var(--soft-sage)]/60 bg-white/70 p-6">
                <h3 className="font-heading text-2xl text-[var(--deep-navy)]">{item.institution}</h3>
                <p className="mt-2 font-semibold">{item.programme}</p>
                <p className="mt-1 text-sm text-[var(--charcoal)]/75">{item.period}</p>
                <p className="mt-3 text-sm leading-7">{item.details}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research-awards" title="Research & Awards">
          <ul className="space-y-3 rounded-3xl border border-[var(--warm-taupe)]/40 bg-white/70 p-6 leading-8">
            {researchAndAwards.map((item) => (
              <li key={item} className="list-disc pl-2 marker:text-[var(--warm-taupe)]">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.label} className="rounded-3xl border border-[var(--deep-navy)]/10 bg-white p-6">
                <h3 className="font-heading text-2xl text-[var(--deep-navy)]">{group.label}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="rounded-3xl border border-[var(--deep-navy)]/15 bg-[var(--deep-navy)] p-8 text-[var(--ivory)]">
            <p className="max-w-2xl leading-8 text-[var(--ivory)]/90">
              I am open to graduate and early-career opportunities in digital marketing, communications and programme
              delivery across the UK.
            </p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <a href={`mailto:${EMAIL}`} className="underline underline-offset-4">
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="underline underline-offset-4">
                {PHONE}
              </a>
              <p>{LOCATION}</p>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                LinkedIn
              </a>
            </div>
            <div className="mt-6">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[var(--ivory)] px-5 py-3 text-sm font-semibold text-[var(--deep-navy)]"
              >
                Download CV
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section-shell scroll-mt-20"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="mt-6">{children}</div>
    </motion.section>
  );
}
