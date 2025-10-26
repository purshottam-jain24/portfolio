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
  bio: "Hey, I’m Purshottam — a full-stack developer who loves turning ideas into beautiful, high-performance web experiences. I’m all about building things that look great, run fast, and actually make people’s lives easier.",
  about: {
    p1: "I’m someone who loves building things that work smoothly and make sense to people. For me, good development isn’t just about writing code — it’s about understanding what a project really needs and making it simple for the user. I enjoy taking an idea, figuring out how it can be better, and then turning it into something that looks good and runs fast.",
    p2: "Right now, I work as a Software Developer where I get to do this every day — solving real problems and learning something new with every project. When I’m not coding, I’m usually playing games, watching tech videos, or trying out new tools just for fun.",
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
        "Leading the full-cycle development of Aardo Solutions’ main corporate website — a key marketing and lead-generation platform. I transformed Figma designs into a fast, responsive Next.js site with Tailwind CSS, and built a secure contact flow using NodeMailer and Firebase to capture leads reliably.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "NodeMailer",
        "Framer Motion",
        "Git & GitHub",
      ],
    },
    {
      date: "Jan 2024 — Present",
      role: "Software Developer Intern",
      company: "Vivekananda Institute of Professional Studies",
      companyUrl: "https://vips.edu/",
      description:
        "Worked with the internal dev team to build and maintain web applications that streamline campus operations. Focused on creating and debugging React components, improving UI consistency, and collaborating closely with senior developers to roll out updates faster.",
      technologies: [
        "React",
        "JavaScript",
        "Styled Components",
        "Material UI",
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
        "Completed an intensive hands-on training program focused on web fundamentals. Built multiple responsive projects using HTML, CSS, and JavaScript — gaining a strong understanding of how to turn concepts into clean, interactive user interfaces.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    },
  ],
  skills: {
    Frontend: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5 & CSS3",
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
      title: "Aardo Solutions",
      description:
        "Developed the company’s official website from scratch — a sleek, high-performance site built with Next.js and Tailwind CSS. Added motion and interactivity using Framer Motion, and implemented a reliable contact form with NodeMailer for real-time lead capture.",
      link: "https://www.aardosolutions.com/",
      imageUrl:
        "https://www.aardosolutions.com/_next/image?url=%2Flogo.png&w=256&q=75",
      isLive: true,
      technologies: ["Next.js", "Framer Motion", "NodeMailer", "Tailwind CSS"],
    },
    {
      title: "Ngarg & Co.",
      description:
        "Built a modern digital identity for a chartered accountancy firm — designed to boost credibility and capture leads efficiently. The site was developed end-to-end with Next.js and deployed seamlessly on Vercel with secure form handling via NodeMailer.",
      link: "https://ngarg.in/",
      imageUrl: "https://www.ngarg.in/_next/static/media/fav.9efafd18.png",
      isLive: true,
      technologies: ["Next.js", "Tailwind CSS", "NodeMailer", "Vercel"],
    },
    {
      title: "Skygaze India",
      description:
        "Collaborated with a talented team at Aardo Solutions to craft a responsive, visually stunning website for India’s leading astronomy travel company. Focused on building reusable UI components and ensuring a smooth, engaging experience across all devices.",
      link: "https://www.skygazeindia.com/",
      imageUrl:
        "https://www.skygazeindia.com/_next/image?url=%2Flogo.png&w=256&q=75",
      isLive: true,
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Git"],
    },
    {
      title: "AffectionQuest",
      description:
        "Helped shape this unique quiz-based app that identifies a user’s love language through interactive questions. My role was to design and implement the scoring logic and state management for a smooth and intuitive user journey.",
      link: "https://affectionquest.com/",
      imageUrl: "https://affectionquest.com/assets/hero-DuAjtFe1.png",
      isLive: true,
      technologies: ["Cloud Functions", "React", "Tailwind CSS", "Firebase"],
    },
    {
      title: "VIPS Feedback Portal",
      description:
        "Engineered a secure feedback system where students can share anonymous feedback and placement updates with faculty. Focused on authentication, real-time data flow, and ensuring confidentiality throughout the platform.",
      link: "http://student-feedback.vips.edu/",
      isLive: true,
      technologies: ["Next.js", "Firebase Admin", "Tailwind CSS"],
    },
  ],
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Portfolio() {
  const INITIAL_PROJECTS_COUNT = 6;
  const PROJECTS_TO_LOAD = 3;

  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_PROJECTS_COUNT
  );

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => prevCount + PROJECTS_TO_LOAD);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-slate-300 font-sans selection:bg-amber-300 selection:text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-zinc-900/75 backdrop-blur-sm">
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
                        className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-amber-300"
                        variants={{
                          hidden: { scaleX: 0 },
                          visible: { scaleX: 1 },
                        }}
                        transition={{ duration: 0.3 }}
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
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
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
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="block hover:text-slate-200"
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
        {/* Main Content Area */}
        <div className="mx-auto max-w-screen-md px-6 py-12 md:px-12 lg:px-8 lg:py-20">
          <main>
            {/* Hero/Intro Section */}
            <motion.section
              className="mb-24 text-center"
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
              >
                {portfolioData.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-xl mx-auto text-lg leading-relaxed"
              >
                {portfolioData.bio}
              </motion.p>
            </motion.section>
            {/* About Section */}
            <motion.section
              id="about"
              className="mb-24 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold tracking-tight text-slate-200 mb-6">
                About Me
              </h2>
              <div>
                <p className="mb-4">{portfolioData.about.p1}</p>
                <p>{portfolioData.about.p2}</p>
              </div>
            </motion.section>
            {/* Experience Section */}
            <motion.section
              id="experience"
              className="mb-24 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Work Experience
              </motion.h2>
              <ol>
                {portfolioData.experience.map((job, index) => (
                  <motion.li key={index} variants={fadeInUp} className="mb-12">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <header className="text-sm font-semibold uppercase tracking-wide text-slate-500 sm:w-1/4">
                        {job.date}
                      </header>
                      <div className="sm:w-3/4">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-amber-300 group/link text-base transition-colors"
                            href={job.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>
                              {job.role} · {job.company}{" "}
                              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {job.description}
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {job.technologies?.map((tech, techIndex) => (
                            <li key={techIndex} className="mr-1.5 mt-2">
                              <Badge
                                variant="secondary"
                                className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                              >
                                {tech}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
              {/* <motion.div variants={fadeInUp}>
              <a
                className="inline-flex items-center font-medium leading-tight text-slate-200 group"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  View Full Résumé{" "}
                  <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </span>
              </a>
            </motion.div> */}
            </motion.section>
            {/* Skills Section */}
            <motion.section
              id="skills"
              className="mb-24 scroll-mt-20"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Skills
              </motion.h2>
              <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(portfolioData.skills).map(
                  ([category, skillsList]) => (
                    <motion.div key={category} variants={fadeInUp}>
                      <h3 className="mb-4 text-lg font-medium text-slate-200">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillsList.map((skill, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -4, scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-amber-400/10 text-amber-300 border border-amber-400/20 cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.section>
            <motion.section
              id="projects"
              className="mb-24 scroll-mt-20"
              // No animation props on the parent anymore. They are moved to the children.
            >
              <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-2xl font-bold tracking-tight text-slate-200 mb-6"
              >
                Projects
              </motion.h2>

              <ul className="space-y-4">
                {portfolioData.projects
                  .slice(0, visibleProjects)
                  .map((project, index) => {
                    return (
                      // --- THE FIX IS HERE ---
                      // Each list item now controls its own animation.
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.1 }} // amount triggers animation when 10% of the item is visible
                      >
                        <motion.div
                          className="grid gap-4 sm:grid-cols-8 p-4 rounded-md transition-all"
                          whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            boxShadow: "0px 4px 20px -10px rgba(0,0,0,0.7)",
                          }}
                        >
                          <div className="sm:col-span-2 pt-1">
                            <a
                              href={project.link || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className={!project.link ? "cursor-default" : ""}
                            >
                              <Image
                                alt={`${project.title} thumbnail`}
                                loading="lazy"
                                width={2000}
                                height={100}
                                className="rounded border-2 border-slate-200/10 object-fill w-auto h-full"
                                src={
                                  project.imageUrl ||
                                  "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                }
                              />
                            </a>
                          </div>
                          <div className="sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200 flex items-center gap-2">
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-amber-300 group/link text-base transition-colors"
                                href={project.link || "#"}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span>
                                  {project.title}{" "}
                                  {project.link && (
                                    <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                  )}
                                </span>
                              </a>
                              {!project.isLive && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-amber-400/30 text-amber-300"
                                >
                                  In Progress
                                </Badge>
                              )}
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              {project.description}
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="mr-1.5 mt-2">
                                  <Badge
                                    variant="secondary"
                                    className="bg-amber-400/10 text-amber-300 border border-amber-400/20"
                                  >
                                    {tech}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.li>
                    );
                  })}
              </ul>

              {/* LOAD MORE BUTTON (This part is correct and doesn't need changes) */}
              {visibleProjects < portfolioData.projects.length && (
                <motion.div
                  className="mt-8 text-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeInUp}
                >
                  <motion.button
                    onClick={handleLoadMore}
                    className="font-medium text-slate-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-lg px-6 py-3 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Load More
                  </motion.button>
                </motion.div>
              )}
            </motion.section>
            {/* Footer */}
            <motion.footer
              className="text-center text-sm text-slate-500 py-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <p>
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
                , deployed with{" "}
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
              <div className="flex justify-center mt-2">
                <VisitorCounter />
              </div>
            </motion.footer>
          </main>
        </div>
      </SmoothScrollWrapper>
    </div>
  );
}
