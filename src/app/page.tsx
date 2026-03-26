"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import {
  IconCode,
  IconDatabase,
  IconBrain,
  IconServer,
  IconPalette,
  IconTerminal,
  IconDeviceMobile,
  IconCloud,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGit,
  IconBrandTypescript,
  IconSql,
  IconBrandPython,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandFlutter,
  IconBrandJavascript,
  IconAward,
  IconSchool,
  IconArticle,
} from "@tabler/icons-react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  ExternalLink,
  BookOpen,
} from "lucide-react";

/* ─── SCROLL ANIMATION WRAPPER ─── */
function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── SVG BRAND ICONS ─── */
const GithubSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
const LinkedInSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ─── DATA ─── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const skillsWithProficiency = [
  { label: "C / C++",        icon: <IconTerminal className="h-4 w-4 text-indigo-400" />,         level: 90 },
  { label: "JavaScript",     icon: <IconBrandJavascript className="h-4 w-4 text-amber-400" />,   level: 85 },
  { label: "Python",         icon: <IconBrandPython className="h-4 w-4 text-indigo-400" />,      level: 85 },
  { label: "Go",             icon: <IconCode className="h-4 w-4 text-sky-400" />,                level: 70 },
  { label: "HTML & CSS",     icon: <IconBrandHtml5 className="h-4 w-4 text-orange-400" />,       level: 90 },
  { label: "Bootstrap",      icon: <IconPalette className="h-4 w-4 text-purple-400" />,          level: 80 },
  { label: "Node.js",        icon: <IconBrandNodejs className="h-4 w-4 text-green-400" />,       level: 75 },
  { label: "MySQL",          icon: <IconDatabase className="h-4 w-4 text-blue-400" />,           level: 75 },
  { label: "Docker",         icon: <IconCloud className="h-4 w-4 text-sky-400" />,             level: 65 },
];

const bentoItems = [
  {
    title: "Full-Stack Developer",
    description: "Building end-to-end web applications using React, Next.js, and Node.js with clean, maintainable code and RESTful APIs.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-900/50 to-slate-900 items-center justify-center"><IconCode className="w-12 h-12 text-indigo-400 opacity-60" /></div>,
    icon: <IconCode className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "AI / ML Enthusiast",
    description: "Passionate about machine learning, NLP, data analysis, and designing intelligent systems that solve real problems.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-900/50 to-slate-900 items-center justify-center"><IconBrain className="w-12 h-12 text-purple-400 opacity-60" /></div>,
    icon: <IconBrain className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Database Design",
    description: "Experienced with relational (MySQL) and NoSQL (MongoDB) databases, ER diagrams, normalization, and query optimization.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-900/50 to-slate-900 items-center justify-center"><IconDatabase className="w-12 h-12 text-cyan-400 opacity-60" /></div>,
    icon: <IconDatabase className="h-4 w-4 text-cyan-500" />,
  },
  {
    title: "Problem Solver & DSA",
    description: "Strong fundamentals in Data Structures & Algorithms with 200+ problems solved on LeetCode and HackerRank. Comfortable with dynamic programming, graphs, and trees.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-900/50 to-slate-900 items-center justify-center"><IconTerminal className="w-12 h-12 text-pink-400 opacity-60" /></div>,
    icon: <IconTerminal className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Mobile Development",
    description: "Cross-platform app development with Flutter and Dart, building responsive and performant mobile interfaces for Android and iOS.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-900/50 to-slate-900 items-center justify-center"><IconDeviceMobile className="w-12 h-12 text-green-400 opacity-60" /></div>,
    icon: <IconDeviceMobile className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Backend & APIs",
    description: "Building RESTful and GraphQL APIs, server-side logic with Express/Node.js, authentication flows, and integrating third-party services.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-900/50 to-slate-900 items-center justify-center"><IconServer className="w-12 h-12 text-amber-400 opacity-60" /></div>,
    icon: <IconServer className="h-4 w-4 text-amber-500" />,
  },
  {
    title: "Cloud, DevOps & Version Control",
    description: "Hands-on with AWS fundamentals (EC2, S3), Git/GitHub workflows, CI/CD pipelines, Linux environments, and containerization basics.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-sky-900/50 to-slate-900 items-center justify-center"><IconCloud className="w-12 h-12 text-sky-400 opacity-60" /></div>,
    icon: <IconCloud className="h-4 w-4 text-sky-500" />,
  },
];

const educationData = [
  {
    title: "Aug 2023 – Present",
    content: (
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20"><IconSchool className="w-5 h-5 text-indigo-400" /></div>
          <div>
            <h4 className="text-lg font-bold text-white">B.Tech — Computer Science & Engineering</h4>
            <p className="text-indigo-400 font-semibold text-sm">Lovely Professional University (LPU), Punjab, India</p>
          </div>
        </div>
        <p className="text-slate-300 text-sm mb-3">CGPA: 7.5+ / 10.0 &nbsp;|&nbsp; Expected Graduation: 2026</p>
        <p className="text-slate-400 text-sm">
          Pursuing a rigorous curriculum covering Operating Systems, Data Structures & Algorithms, DBMS, Computer Networks, Machine Learning, and Software Engineering.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {["DSA", "OS", "DBMS", "Computer Networks", "ML", "SE", "OOP", "Web Dev"].map((c) => (
            <span key={c} className="skill-badge">{c}</span>
          ))}
        </div>
      </div>
    ),
  },

  {
    title: "Apr 2021 – Mar 2023",
    content: (
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20"><IconSchool className="w-5 h-5 text-indigo-400" /></div>
          <div>
            <h4 className="text-lg font-bold text-white">Intermediate (XII)</h4>
            <p className="text-indigo-400 font-semibold text-sm">Singhania Educational Institute, Sitapur, UP</p>
          </div>
        </div>
        <p className="text-slate-300 text-sm mb-3">Percentage: 71%</p>
        <p className="text-slate-400 text-sm">
          Completed focused studies in science and mathematics, laying the groundwork for engineering.
        </p>
      </div>
    ),
  },
  {
    title: "Apr 2020 – Mar 2021",
    content: (
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20"><IconSchool className="w-5 h-5 text-indigo-400" /></div>
          <div>
            <h4 className="text-lg font-bold text-white">Matriculation (X)</h4>
            <p className="text-indigo-400 font-semibold text-sm">Singhania Educational Institute, Sitapur, UP</p>
          </div>
        </div>
        <p className="text-slate-300 text-sm mb-3">Percentage: 88%</p>
        <p className="text-slate-400 text-sm">Strong academic foundation with excellent performance.</p>
      </div>
    ),
  },
];

const projects = [
  {
    title: "Bentex — Algorithmic Trading Platform",
    description: "Developing an end-to-end algorithmic trading platform for real-time market analysis, predictive decision-making, and automated trade execution. Achieved sub-50 ms data latency and 99.2% execution reliability.",
    tech: ["Python", "Node.js", "WebSockets", "Socket.IO", "Redis"],
    href: "https://github.com/kritagyapandey21",
    image: null,
  },
  {
    title: "Emotion Recognition",
    description: "An ML-powered NLP project that analyzes input text and classifies emotions such as joy, sadness, anger, and fear in real time.",
    tech: ["Python", "Machine Learning", "NLP", "Text Classification"],
    href: "https://github.com/kritagyapandey21/Emotion-Recognition",
    image: null,
  },
  {
    title: "Weather Alert Scheduler",
    description: "A scheduled weather monitoring system that uses weather APIs to fetch live forecasts and sends timely alerts to users for important conditions.",
    tech: ["Python", "API Integration", "Automation", "Scheduling", "Alerts"],
    href: "https://github.com/kritagyapandey21/Weather-Alert-Scheduler-",
    image: null,
  },
];

const achievements = [
  {
    year: "2025",
    title: "2nd Prize — Literary & Leadership",
    event: "One India One World 2025",
    detail:
      "Recognized for excellence in literary contribution and leadership demonstration at a university-level competition.",
  },
  {
    year: "2024",
    title: "3rd Prize — Department-Level Technical Debate",
    event: "Department-Level Technical Debate Competition",
    detail:
      "Awarded 3rd Prize in the Department-Level Technical Debate Competition for delivering a rigorous, evidence-based technical argument with clarity and precision.",
  },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "glass-card border-b border-white/5 shadow-lg shadow-black/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-base text-white tracking-tight hover:text-indigo-400 transition-colors">Kritagya Pandey</a>
        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/pandey-cv.pdf"
          download
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-indigo-400 border border-indigo-500/40 px-4 py-2 rounded-lg hover:bg-indigo-500/10 transition-all"
        >
          <Download className="w-4 h-4" suppressHydrationWarning /> Resume
        </a>
        {/* Mobile */}
        <button className="md:hidden text-slate-300" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4 glass-card"
        >
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white text-sm py-1">{l.label}</a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-white">Kritagya</span>
            <br />
            <span className="text-white">Pandey</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            A passionate Computer Science student building full-stack web applications, exploring Artificial Intelligence, and solving real-world problems through elegant code.
          </p>



        </div>

        {/* Right: Portrait Photo */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 m-auto h-56 w-56 md:h-80 md:w-80 rounded-full bg-cyan-400/20 blur-[70px]" />
          <img
            src="/kritagya-portrait.png"
            alt="Kritagya Pandey"
            className="relative z-10 w-72 h-72 md:w-[28rem] md:h-[28rem] object-cover"
            style={{
              maskImage: "radial-gradient(circle at 50% 45%, black 38%, transparent 63%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 45%, black 38%, transparent 63%)",
              filter: "drop-shadow(0 0 26px rgba(56, 189, 248, 0.45)) drop-shadow(0 0 64px rgba(37, 99, 235, 0.42))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT + SKILLS ─── */
function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Who Am I</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A driven 3rd-year CS student at LPU with a deep interest in web development, machine learning, and designing scalable systems.
          </p>
        </div>
      </FadeInSection>

      {/* Bio + Quick Stats */}
      <FadeInSection>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card rounded-2xl p-8">
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/kritagya-portrait.png"
                alt="Kritagya Pandey"
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40 shadow-lg shadow-indigo-500/20"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Kritagya Pandey</h3>
                <p className="text-indigo-400 text-sm font-medium">B.Tech CSE &apos;26 — LPU, India</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a Computer Science & Engineering student at Lovely Professional University, Punjab. I have a genuine passion for crafting web experiences that are both functional and beautiful.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              From building my first web page to deploying full-stack applications, I continuously push myself to learn new technologies and best practices. I believe in writing clean, readable code and delivering solutions that make a real impact.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Outside academics, I love solving competitive programming problems, contributing to open-source projects, and staying up-to-date with the latest trends in AI/ML.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "7.53", label: "CGPA", sub: "out of 10" },
              { value: "3+", label: "Projects", sub: "full-stack apps" },
              { value: "2+", label: "Roles", sub: "professional experience" },
              { value: "9+", label: "Technologies", sub: "frameworks & tools" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-all group"
              >
                <span className="text-3xl font-extrabold gradient-text group-hover:scale-110 transition-transform">{value}</span>
                <span className="text-white font-semibold mt-1">{label}</span>
                <span className="text-slate-500 text-xs mt-1">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Bento Grid */}
      <FadeInSection>
        <div id="skills">
          <div className="text-center mb-10">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">What I Do</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Core Capabilities</h3>
          </div>
          <BentoGrid className="max-w-7xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>

          {/* Skills with proficiency bars */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-slate-400 text-sm mb-1">Technologies & Proficiency</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {skillsWithProficiency.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 hover:border-indigo-500/30 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    {s.icon}
                    <span className="text-white text-sm font-medium">{s.label}</span>
                    <span className="ml-auto text-indigo-400 text-xs font-mono">{s.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

/* ─── EDUCATION & EXPERIENCE ─── */
function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">My Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A timeline of my academic journey from school to university.
            </p>
          </div>
        </FadeInSection>
        <Timeline data={educationData} />
      </div>
    </section>
  );
}

/* ─── CERTIFICATIONS ─── */
function CertificationsSection() {
  const certs = [
    {
      name: "Build Generative AI Apps and Solutions with No-Code Tools",
      org: "Infosys Springboard",
      year: "Aug '25",
      link: "https://drive.google.com/file/d/1W3OqnSVnyCkDsP-d8BgJn3EaF8ouk0Ly/view?usp=drive_link",
      color: "from-indigo-500/20 to-indigo-900/10",
      border: "border-indigo-500/30",
      badge: "bg-indigo-500/10 text-indigo-400",
    },
    {
      name: "Computational Theory: Language Principle & Finite Automata Theory",
      org: "Infosys Springboard",
      year: "Aug '25",
      link: "https://drive.google.com/file/d/1PK70tE7monJ6dRLD_mOeEMVpWer3Jrlp/view?usp=drive_link",
      color: "from-purple-500/20 to-purple-900/10",
      border: "border-purple-500/30",
      badge: "bg-purple-500/10 text-purple-400",
    },
    {
      name: "Mastering C++",
      org: "Lovely Professional University",
      year: "Jun–Jul '25",
      link: "https://drive.google.com/file/d/1Rmvyqv1yd2qgCy5bwnEQhZjxLSH-VGTc/view?usp=sharing",
      color: "from-cyan-500/20 to-cyan-900/10",
      border: "border-cyan-500/30",
      badge: "bg-cyan-500/10 text-cyan-400",
    },
    {
      name: "Cloud Computing",
      org: "NPTEL",
      year: "Apr '25",
      link: "https://drive.google.com/file/d/1o9msNEtlpM5f6nHRRQFY4Y4z8Y0tZRL2/view?usp=drive_link",
      color: "from-amber-500/20 to-amber-900/10",
      border: "border-amber-500/30",
      badge: "bg-amber-500/10 text-amber-400",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Online courses and certifications I&apos;ve completed to expand my skills beyond the classroom.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group rounded-2xl p-6 bg-gradient-to-br ${cert.color} border ${cert.border} hover:scale-[1.02] transition-transform block`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-white font-semibold text-sm leading-snug">{cert.name}</h3>
                <span className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded-full ${cert.badge}`}>{cert.year}</span>
              </div>
              <p className="text-slate-500 text-xs">{cert.org}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 group-hover:text-white transition-colors">
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}


function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of the applications and systems I&apos;ve built, exploring different domains of computer science.
          </p>
        </div>
      </FadeInSection>

      <div className="flex justify-center">
        {projects.map((project, i) => (
          <FadeInSection key={i}>
            <div className="h-[24rem] flex items-center justify-center">
              <PinContainer title={project.title} href={project.href}>
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] min-h-[18rem]">
                  <h3 className="font-bold text-base text-white !pb-2 !m-0">{project.title}</h3>
                  <p className="text-slate-400 text-sm !m-0 !p-0 font-normal mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="flex flex-1 w-full rounded-lg mt-4 object-cover max-h-28 opacity-90" />
                  ) : null}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeInSection>
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Achievements & Awards</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recognition & Milestones</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Honors and awards earned through participation in competitions and leadership activities.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="space-y-5">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-indigo-500/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-[88px_1fr] gap-5 items-start">
                <p className="text-slate-500 font-mono text-sm tracking-wide">{achievement.year}</p>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <IconAward className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-white text-2xl font-semibold leading-tight">{achievement.title}</h3>
                  </div>
                  <p className="text-cyan-300 text-sm font-semibold">{achievement.event}</p>
                  <p className="text-slate-300 text-sm mt-3">- {achievement.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
const experienceData = [
  {
    title: "Oct '25 – Nov '25",
    content: (
      <div className="glass-card rounded-xl p-6 border-indigo-500/30">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20"><IconTerminal className="w-5 h-5 text-indigo-400" /></div>
          <div>
            <h4 className="text-lg font-bold text-white">learnwithtanishq <span className="ml-2 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 rounded-full align-middle">Live</span></h4>
            <p className="text-indigo-400 font-semibold text-sm">Freelance Backend Developer</p>
          </div>
        </div>
        <ul className="text-slate-400 text-sm list-disc list-inside space-y-2 mb-4 marker:text-indigo-500">
          <li>Developed a financial management platform focused on improving user spending habits via trading tools, risk insights, and budgeting.</li>
          <li>Implemented backend logic and APIs using Python and Node.js, enabling real-time analytics.</li>
          <li>Enhanced user decision-making efficiency by 40% by drastically improving risk evaluation speed.</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Python", "HTML/CSS", "JS", "UI Framework"].map((c) => (
            <span key={c} className="skill-badge">{c}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Sep '25 – Oct '25",
    content: (
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"><IconCode className="w-5 h-5 text-purple-400" /></div>
          <div>
             <h4 className="text-lg font-bold text-white">Tanix 2.0 <span className="ml-2 px-2 py-0.5 text-[0.65rem] uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 rounded-full align-middle">Live</span></h4>
            <p className="text-indigo-400 font-semibold text-sm">Full-Stack Developer</p>
          </div>
        </div>
        <ul className="text-slate-400 text-sm list-disc list-inside space-y-2 mb-4 marker:text-purple-500">
          <li>Built a full-stack smart trading bot to process real-time market data and generate dynamic candlestick charts.</li>
          <li>Integrated Socket.IO and REST APIs to deliver TradingView-style visualisations and live trend predictions.</li>
          <li>Reduced data-to-decision latency by 45%, massively improving overall trading performance.</li>
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Python", "Numpy", "Pandas", "OS/Time"].map((c) => (
            <span key={c} className="skill-badge">{c}</span>
          ))}
        </div>
      </div>
    ),
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">My Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Professional roles where I contributed to live production systems.
            </p>
          </div>
        </FadeInSection>
        <Timeline data={experienceData} />
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">Say Hello</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whether it&apos;s a collaboration, an internship opportunity, or just a chat about tech — I&apos;d love to hear from you.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5 text-indigo-400" />, label: "Email", value: "kritagyapandey21@gmail.com" },
                { icon: <Phone className="w-5 h-5 text-indigo-400" />, label: "Phone", value: "+91-6306829968" },
                { icon: <MapPin className="w-5 h-5 text-indigo-400" />, label: "Location", value: "Phagwara, Punjab, India" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="glass-card rounded-xl p-5 flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">{icon}</div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="glass-card rounded-xl p-5">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Connect Online</p>
                <div className="flex gap-3">
                  {[
                    { icon: <GithubSVG />, href: "https://github.com/kritagyapandey21", label: "GitHub" },
                    { icon: <LinkedInSVG />, href: "https://linkedin.com/in/kritagya-pandey", label: "LinkedIn" },
                  ].map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-lg border border-white/10 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume actions */}
              <div className="flex justify-start gap-3 flex-wrap">
                <MovingBorderButton
                  as="a"
                  href="/pandey-cv.pdf"
                  download
                  borderRadius="0.75rem"
                  containerClassName="h-12 w-48"
                  className="font-semibold text-sm gap-2"
                >
                  <Download className="w-4 h-4" suppressHydrationWarning /> Download CV
                </MovingBorderButton>
                <MovingBorderButton
                  as="a"
                  href="/pandey-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  borderRadius="0.75rem"
                  containerClassName="h-12 w-48"
                  className="font-semibold text-sm gap-2"
                >
                  <ExternalLink className="w-4 h-4" /> View CV
                </MovingBorderButton>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
              {sent ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-48 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Message Sent!</p>
                  <p className="text-slate-400 text-sm mt-1">I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What would you like to say?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all text-sm resize-none"
                    />
                  </div>
                  <MovingBorderButton
                    as="button"
                    type="submit"
                    borderRadius="0.75rem"
                    containerClassName="h-12 w-full"
                    className="font-semibold text-sm w-full"
                  >
                    Send Message
                  </MovingBorderButton>
                  <p className="text-slate-600 text-xs text-center mt-2">
                    * This form is for demonstration. For actual inquiries, please email me directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}


/* ─── PAGE ─── */
export default function Page() {
  useEffect(() => {
    document.body.classList.add("no-motion-page");
    return () => {
      document.body.classList.remove("no-motion-page");
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <CertificationsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
