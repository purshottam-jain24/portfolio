"use client";

import SmoothScrollWrapper from "../components/wrapper.jsx";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import VisitorCounter from "../components/VisitorCounter.js";

const portfolioData = {
  name: "Purshottam Jain",
  title: "Full Stack Developer",
  bio: "Full-stack developer with 1+ year of experience building high-performance, scalable, and user-focused applications using Next.js, Firebase, and Tailwind. I take products from concept to production with clean architecture, smooth UI, and measurable performance improvements.",
  about: {
    p1: "I build meaningful digital experiences — not just websites. I focus on creating solutions that are fast, intuitive, reliable, and visually polished. My emphasis is on pragmatic architecture, performance, and UX that moves metrics.",
    p2: "I currently work as a Software Developer where I ship full-stack features, lead performance improvements, design reusable component systems, and build production-ready products. Outside of work, I explore new tools, refine animations, and build small products that solve real problems.",
  },
  contact: {
    email: "purshottam.jain24@gmail.com",
    social: {
      github: "https://github.com/purshottam-jain24",
      linkedin: "https://www.linkedin.com/in/purshottam-jain24",
    },
  },
  experience: [
    {
      date: "Sep 2024 — Present",
      role: "Software Developer",
      company: "Aardo Solutions",
      companyUrl: "https://www.aardosolutions.com/",
      description:
        "Built the corporate marketing site from Figma to production using Next.js, Tailwind and Framer Motion. Created a reusable component library (10–12 components), optimized runtime and bundle size, and implemented a secure lead-capture flow (NodeMailer + server actions).",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "NodeMailer",
        "Git & GitHub",
      ],
    },
    {
      date: "Jan 2024 — Present",
      role: "Software Developer Intern",
      company: "Vivekananda Institute of Professional Studies",
      companyUrl: "https://vips.edu/",
      description:
        "Developed 15+ internal pages and 10+ admin features for campus apps. Implemented RBAC for admins, optimized key routes for performance, and fixed critical production issues across the platform (React + Firebase).",
      technologies: [
        "React",
        "JavaScript",
        "Material UI",
        "Styled Components",
        "Firebase",
        "Git & GitHub",
      ],
    },
    {
      date: "Nov 2023 — Dec 2023",
      role: "Web Developer Trainee",
      company: "Vivekananda Institute of Professional Studies",
      companyUrl: "https://vips.edu/",
      description:
        "Completed hands-on training on responsive UI, component design and frontend fundamentals. Built responsive interfaces using modern HTML/CSS and JS patterns.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    },
  ],
  skills: {
    Frontend: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Framer Motion",
    ],
    Backend: ["Node.js", "Express", "REST APIs", "NodeMailer"],
    "Databases & Tools": [
      "MongoDB",
      "Firebase",
      "Git & GitHub",
      "Postman",
      "JWT (Authentication)",
    ],
    "Platforms & DevOps": [
      "Vercel",
      "Netlify",
      "Render",
      "Cloudflare",
      "AWS (S3)",
    ],
    "Design & Other": ["Figma", "Wix", "WordPress"],
  },
  projects: [
    {
      title: "VIPS Feedback Portal",
      description:
        "Large-scale internal portal used by 4+ departments and 1,000+ active users. Secure RBAC roles, anonymous feedback, faculty dashboards, real-time updates and scalable architecture using Next.js Server Actions + Firebase.",
      link: "http://student-feedback.vips.edu/",
      isLive: true,
      imageUrl:
        "https://student-feedback.vips.edu/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvipslogo.18ec150b.webp&w=1080&q=75&dpl=dpl_36653gfciVLN9JzwxbdXpSeiJRwE",
      technologies: [
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Server Actions",
        "RBAC",
      ],
    },
    {
      title: "Aardo Solutions Website",
      description:
        "End-to-end corporate website optimized for responsiveness, accessibility, and lead generation. Reusable components, smooth micro-interactions and secure contact flows.",
      link: "https://www.aardosolutions.com/",
      isLive: true,
      imageUrl:
        "https://www.aardosolutions.com/_next/image?url=%2Flogo.png&w=256&q=75",
      technologies: ["Next.js", "Framer Motion", "NodeMailer", "Tailwind CSS"],
    },
    {
      title: "Ngarg & Co.",
      description:
        "Modern digital presence for a chartered accountancy firm with fast load times, lead capture automation, and polished UI deployed on Vercel.",
      link: "https://ngarg.in/",
      isLive: true,
      imageUrl: "https://www.ngarg.in/_next/static/media/fav.9efafd18.png",
      technologies: ["Next.js", "Tailwind CSS", "NodeMailer", "Vercel"],
    },
    {
      title: "Skygaze India",
      description:
        "Reduced bundle and improved load performance by replacing heavy background assets, fixed critical UI bugs and implemented a fully responsive navbar for a visually driven astronomy site.",
      link: "https://www.skygazeindia.com/",
      isLive: true,
      imageUrl:
        "https://www.skygazeindia.com/_next/image?url=%2Flogo.png&w=256&q=75",
      technologies: ["Next.js", "Framer Motion", "TypeScript", "Git"],
    },
    {
      title: "WantJob.in — Job Platform",
      description:
        "Production job portal with auth, admin job posting flows and Razorpay payments. Built with Next.js + Firebase and used by students to apply for live opportunities.",
      link: "https://wantjob.in/",
      isLive: true,
      imageUrl: "https://wantjob.in/logo.png",
      technologies: ["Next.js", "Firebase", "Razorpay", "Tailwind CSS"],
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Portfolio() {
  const INITIAL_PROJECTS_COUNT = 5;
  const PROJECTS_TO_LOAD = 3;
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_COUNT
  );
  const handleLoadMore = () =>
    setVisibleProjects((prev) => prev + PROJECTS_TO_LOAD);

  return (
    <div className="min-h-screen bg-zinc-900 text-slate-300 font-sans selection:bg-amber-300 selection:text-zinc-900 antialiased">
      <header className="sticky top-0 z-40 w-full bg-zinc-900/60 backdrop-blur-sm border-b border-zinc-800">
        <div className="mx-auto max-w-screen-xl px-6 py-3 md:px-12 lg:px-24">
          <nav className="flex items-center justify-between">
            <a
              href="/"
              className="text-xl font-bold tracking-tight text-slate-200 hover:text-amber-300 sm:text-2xl"
            >
              {portfolioData.name}
            </a>
            <div className="flex items-center gap-6">
              <ul className="hidden md:flex items-center gap-6 text-sm">
                {["About", "Experience", "Skills", "Projects"].map((item) => (
                  <motion.li key={item} initial="hidden" whileHover="visible">
                    <a
                      className="relative font-medium text-slate-400 transition-colors hover:text-amber-300"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                      <motion.div
                        className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-amber-300 origin-left"
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.25 }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <ul className="flex items-center gap-4" aria-label="Social media">
                {Object.entries(portfolioData.contact.social).map(
                  ([key, value]) => {
                    const Icon = { github: Github, linkedin: Linkedin }[key];
                    return (
                      <motion.li
                        key={key}
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href={value}
                          target="_blank"
                          rel="noreferrer"
                          className="block hover:text-slate-200"
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                        </a>
                      </motion.li>
                    );
                  }
                )}
                <motion.li
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="block hover:text-slate-200"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </motion.li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <SmoothScrollWrapper>
        <div className="mx-auto max-w-screen-md px-6 py-12 md:px-12 lg:px-8 lg:py-20">
          <main>
            <motion.section
              className="mb-20 text-center"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-extrabold tracking-tight text-slate-200 sm:text-5xl"
              >
                {portfolioData.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-slate-300"
              >
                {portfolioData.bio}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex items-center justify-center gap-4"
              >
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-flex items-center gap-3 rounded-lg bg-amber-500/10 px-5 py-3 font-medium text-amber-300 hover:bg-amber-500/20 transition"
                >
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-3 rounded-lg border border-amber-500/20 px-5 py-3 text-sm font-medium text-slate-200 hover:border-amber-400 transition"
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.section>

            <motion.section
              id="about"
              className="mb-16 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-200 mb-6">
                About Me
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <p className="mb-4 text-slate-300">
                    {portfolioData.about.p1}
                  </p>
                  <p className="text-slate-300">{portfolioData.about.p2}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                    <h3 className="text-sm font-semibold text-slate-200">
                      Primary Stack
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Next.js", "Firebase", "Tailwind", "Framer Motion"].map(
                        (t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                          >
                            {t}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                    <h3 className="text-sm font-semibold text-slate-200">
                      Available For
                    </h3>
                    <div className="mt-3 flex flex-col gap-2">
                      <span className="text-sm text-slate-300">
                        Remote roles · Freelance · Contract work
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="experience"
              className="mb-16 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.12 }}
              variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Work Experience
              </motion.h2>
              <ol className="space-y-8">
                {portfolioData.experience.map((job, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="sm:w-1/4">
                      <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {job.date}
                      </div>
                    </div>
                    <div className="sm:w-3/4">
                      <div className="flex items-center gap-3">
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-slate-200 hover:text-amber-300 inline-flex items-center gap-2"
                        >
                          <span>
                            {job.role} · {job.company}
                          </span>
                          <ExternalLink className="h-4 w-4 text-slate-400" />
                        </a>
                      </div>
                      <p className="mt-2 text-sm leading-normal text-slate-300">
                        {job.description}
                      </p>
                      <div
                        className="mt-3 flex flex-wrap gap-2"
                        aria-label="Technologies used"
                      >
                        {job.technologies?.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.section>

            <motion.section
              id="skills"
              className="mb-16 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.18 }}
              variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Skills
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(portfolioData.skills).map(
                  ([category, skillsList]) => (
                    <motion.div key={category} variants={fadeInUp}>
                      <h3 className="mb-3 text-lg font-medium text-slate-200">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.section>

            <motion.section
              id="projects"
              className="mb-16 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.08 }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Projects
              </motion.h2>
              <ul className="space-y-4">
                {portfolioData.projects
                  .slice(0, visibleProjects)
                  .map((project, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.12 }}
                    >
                      <div className="grid gap-4 sm:grid-cols-8 p-4 rounded-md transition-all bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/40">
                        <div className="sm:col-span-2 pt-1 flex items-center justify-center">
                          <a
                            href={project.link || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className={!project.link ? "cursor-default" : ""}
                          >
                            <div className="w-40 h-20 relative rounded overflow-hidden border border-slate-200/6 bg-zinc-800">
                              <Image
                                alt={`${project.title} thumbnail`}
                                loading="lazy"
                                width={400}
                                height={200}
                                className="object-contain w-full h-full"
                                src={
                                  project.imageUrl ||
                                  "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                                }
                              />
                            </div>
                          </a>
                        </div>
                        <div className="sm:col-span-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <a
                                href={project.link || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-slate-200 hover:text-amber-300 inline-flex items-center gap-2"
                              >
                                <span>{project.title}</span>
                                {project.link && (
                                  <ExternalLink className="h-4 w-4 text-slate-400" />
                                )}
                              </a>
                              {!project.isLive && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-amber-400/30 text-amber-300"
                                >
                                  In Progress
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="mt-2 text-sm leading-normal text-slate-300">
                            {project.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies?.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
              </ul>

              {visibleProjects < portfolioData.projects.length && (
                <motion.div
                  className="mt-8 text-center"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.button
                    onClick={handleLoadMore}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-medium text-slate-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-lg px-6 py-3 transition-colors"
                  >
                    Load More
                  </motion.button>
                </motion.div>
              )}
            </motion.section>

            <motion.footer
              className="text-center text-sm text-slate-500 py-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeInUp}
            >
              <p className="text-slate-400">
                Built with{" "}
                <a
                  href="https://nextjs.org/"
                  className="font-medium text-slate-400 hover:text-amber-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-400 hover:text-amber-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>
                , deployed on{" "}
                <a
                  href="https://vercel.com/"
                  className="font-medium text-slate-400 hover:text-amber-300 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </a>
                .
              </p>
              <div className="flex justify-center mt-3">
                <VisitorCounter />
              </div>
            </motion.footer>
          </main>
        </div>
      </SmoothScrollWrapper>
    </div>
  );
}
