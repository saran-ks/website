import React from 'react'

const PROFILE = {
  name: "Kalanivas Sabukuttan Nair Saran",
  role: "M.Sc. Electromobility (ACES) — FAU",
  location: "Herzogenaurach, Germany",
  summary:
    "Master’s student focusing on AI for autonomous/connected electric mobility. Hands-on with simulation (CARLA), perception, and ML for ADAS/AD; keen to bridge research to real-world impact.",
  email: "kssaran015@gmail.com",
  phone: "+49 17688413980",
  address: "Münchauracher Straße 19, 91074 Herzogenaurach, Bavaria, Germany",
  links: {
    github: "https://github.com/kssaran",
    linkedin: "https://www.linkedin.com/in/kssaran",
    website: "",
    resume: "/resume.pdf",
  },
  projects: [
    {
      title: "AUDI AWS DeepRacer Cup 1 — Self‑Driving with Reinforcement Learning",
      blurb:
        "Trained and deployed a reinforcement learning policy to complete a racetrack lap; qualified to final round and achieved a 16s lap without off‑track in live race.",
      tech: ["Reinforcement Learning", "AWS DeepRacer", "Python"],
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
      url: "",
      repo: "",
    },
    {
      title: "Self‑Driving Vehicle Project in CARLA",
      blurb:
        "Built a Python autonomy agent and integrated vehicle modeling & controller design (University of Toronto ‘Introduction to Self‑Driving Cars’).",
      tech: ["Python", "ROS", "OpenScenario", "OpenDrive", "CARLA"],
      image:
        "https://images.unsplash.com/photo-1542367597-8849ebf7c346?q=80&w=1200&auto=format&fit=crop",
      url: "",
      repo: "",
    },
    {
      title: "Intelligent Room Environment Control System",
      blurb:
        "Fuzzy‑logic lighting + hybrid PID temperature control in a cyber‑physical Simulink model to balance comfort and energy efficiency.",
      tech: ["MATLAB", "Simulink", "Fuzzy Logic", "PID", "CPS"],
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1200&auto=format&fit=crop",
      url: "",
      repo: "",
    },
    {
      title: "Real‑Time Energy Monitoring for Solar DC/AC Hybrid Systems (B.Tech Thesis)",
      blurb:
        "Designed an embedded controller for smart switching between solar DC and backup AC, with MPPT charge controller and reliability focus.",
      tech: ["Embedded C", "Electronics", "MPPT", "IoT"],
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
      url: "",
      repo: "",
    },
  ],
  experience: [
    {
      role: "Master Thesis — Machine Learning in Autonomous Driving",
      company: "AUDI AG, Ingolstadt, Germany",
      period: "May 2025 — Ongoing",
      points: [
        "R&D of Vision‑Language Models (VLMs) for autonomous parking using camera‑only systems",
        "Simulation of parking scenarios in CARLA for model training and evaluation",
        "Fine‑tuning and evaluation of BLIP/CLIP for scene understanding and explainability",
      ],
    },
    {
      role: "Intern — Technical Project Management (Driving & Energy Subsystem)",
      company: "AUDI AG, Ingolstadt, Germany",
      period: "Apr 2024 — Sep 2024",
      points: [
        "Technical steering of driving and energy subsystems",
        "Support/collaboration in OE processes and tasks; project tracking and presentations",
      ],
    },
    {
      role: "Intern — Software Development, Autonomous Driving",
      company: "BMW Group, Munich, Germany",
      period: "Jun 2023 — Dec 2023",
      points: [
        "Adaptation of simulation models (sensors, vehicle) for function‑developer needs",
        "Adjustments to framework linking environmental simulation and BMW functional stack",
        "Investigated and resolved simulation‑related errors",
      ],
    },
    {
      role: "Autonomous Driving Team Member",
      company: "High Octane Motorsports, FAU, Germany",
      period: "Oct 2022 — May 2023",
      points: [
        "Computer Vision and Perception for self‑driving (Deep Learning course work)",
        "Completed UofT ‘Introduction to Self‑Driving Cars’ certification",
      ],
    },
    {
      role: "Electrical Junior Engineer",
      company: "Indian Railways — Track Machines Department",
      period: "Nov 2020 — Jul 2022",
      points: [
        "Handled national projects in electrical/electronics domain of rail track machines",
        "Team & hardware management; Embedded C based control tasks",
      ],
    },
    {
      role: "EV Powertrain Simulations Intern",
      company: "Decibels Lab Pvt. Ltd., India",
      period: "Jun 2020 — Jul 2020",
      points: [
        "Executed powertrain modeling & simulation for Ather 450, Nissan Leaf, and a Formula race car",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. Electromobility (ACES)",
      school: "Friedrich‑Alexander‑Universität Erlangen‑Nürnberg (FAU), Germany",
      period: "Oct 2022 — Ongoing",
      highlights: [
        "Majors: AI & Autonomous Driving, Connected Vehicles, Electric Powertrain, Sustainable Mobility & Production Technology",
      ],
    },
    {
      degree: "B.Tech. Electrical & Electronics Engineering (CGPA 8.71/10)",
      school: "Cochin University of Science and Technology (CUSAT), Kerala, India",
      period: "Jul 2014 — Jun 2018",
      highlights: [
        "Gold Medalist for highest grades and outstanding academic performance",
      ],
    },
  ],
  skills: [
    { group: "Programming", items: ["Python", "C++", "Embedded C", "XML"] },
    { group: "Simulation", items: ["Gazebo", "CARLA", "MATLAB", "AnyLogic", "SCILAB", "PV Syst", "PV Sol"] },
    { group: "Tools & Frameworks", items: ["OpenScenario", "OpenDrive", "ROS", "Unity", "Jira", "Git", "Linux", "Bazel", "Google Tester"] },
  ],
  awards: [
    { title: "Final Round — AUDI AWS DeepRacer Cup 1", issuer: "AUDI Sport GmbH, AWS, XL2 (Germany)", date: "Jun 2024" },
    { title: "Silver Award — Tales of Tomorrow (Global storytelling)", issuer: "IEEE VTS, US", date: "Jan 2024" },
    { title: "e.fellows.net Scholarship Holder", issuer: "e.fellows.net, Germany", date: "Nov 2023" },
    { title: "IEEE PES Outstanding Engineer Award", issuer: "IEEE PES, US", date: "Dec 2021" },
    { title: "First Rank Holder — EEE (2014–18)", issuer: "College of Engineering Adoor, India", date: "Jan 2019" },
  ],
  volunteering: [
    "Chair — Awards & Recognitions Subcommittee, IEEE PES SCC (2022–23)",
    "Strategic Planning Coordinator — IEEE Smart Village (2022)",
    "South India Representative — IEEE PES CSAC (2021)",
    "Student Activities Coordinator — IEEE PES Kerala Chapter (2021)",
    "Young Professional Activities Coordinator — IEEE PES Kerala Chapter (2020)",
    "Chair — IEEE PES Student Branch Chapter, College of Engineering Adoor (2018)",
  ],
  memberships: [
    "IEEE (8 years)",
    "IEEE Robotics and Automation Society (RAS)",
    "IEEE Intelligent Transportation Systems Society (ITSS)",
    "IEEE Vehicular Technology Society (VTS)",
    "IEEE Power and Energy Society (PES)",
    "IEEE Industry Applications Society (IAS)",
  ],
  languages: [
    { name: "English", level: "C1" },
    { name: "German", level: "A1" },
    { name: "Malayalam", level: "Native" },
    { name: "Hindi", level: "—" },
    { name: "Tamil", level: "—" },
  ],
}

// UI helpers
const Container = ({ children }) => (
  <div className="container mx-auto px-6">{children}</div>
)

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-24 scroll-mt-24">
    <Container>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-neutral-500 max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-10">{children}</div>
    </Container>
  </section>
)

const Card = ({ children }) => (
  <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
    {children}
  </div>
)

const CardBody = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
    {children}
  </span>
)

const Button = ({ children, href, variant = "solid" }) => (
  <a
    href={href}
    className={
      variant === "solid"
        ? "inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90"
        : "inline-flex items-center rounded-xl px-4 py-2 border hover:bg-black/5"
    }
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noreferrer" : undefined}
  >
    {children}
  </a>
)

const Nav = () => (
  <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
    <Container>
      <div className="h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold">
          {PROFILE.name}
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#awards" className="hover:underline">Awards</a>
          <a href="#extra" className="hover:underline">More</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" href={`mailto:${PROFILE.email}`}>Email</Button>
          {PROFILE.links.resume && <Button href={PROFILE.links.resume}>Resume</Button>}
        </div>
      </div>
    </Container>
  </div>
)

const Hero = () => (
  <section id="home" className="pt-20 pb-24">
    <Container>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-3 text-xl text-neutral-600">
            {PROFILE.role} · <span className="text-sm">{PROFILE.location}</span>
          </p>
          <p className="mt-4 text-sm text-neutral-500">{PROFILE.address}</p>
          <p className="mt-6 text-lg leading-relaxed max-w-xl">{PROFILE.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {PROFILE.links.github && (
              <Button variant="outline" href={PROFILE.links.github}>GitHub</Button>
            )}
            {PROFILE.links.linkedin && (
              <Button variant="outline" href={PROFILE.links.linkedin}>LinkedIn</Button>
            )}
            <Button href={`mailto:${PROFILE.email}`}>Contact</Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img
              alt="Cover image"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1560&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
)

const ProjectCard = ({ p }) => (
  <Card>
    <div className="aspect-video w-full overflow-hidden">
      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
    </div>
    <CardBody>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
      </div>
      <p className="mt-2 text-neutral-600">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech?.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </CardBody>
  </Card>
)

const Projects = () => (
  <Section id="projects" title="Projects" subtitle="Selected work.">
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {PROFILE.projects.map((p) => (
        <ProjectCard key={p.title} p={p} />
      ))}
    </div>
  </Section>
)

const Experience = () => (
  <Section id="experience" title="Experience" subtitle="Professional and project roles.">
    <div className="space-y-6">
      {PROFILE.experience.map((job) => (
        <Card key={`${job.company}-${job.role}`}>
          <CardBody>
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-sm text-neutral-500">{job.company} · {job.period}</p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-sm md:text-base">
              {job.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" title="Skills" subtitle="A snapshot of my toolkit.">
    <div className="grid md:grid-cols-3 gap-6">
      {PROFILE.skills.map((group) => (
        <Card key={group.group}>
          <CardBody>
            <h3 className="text-lg font-semibold">{group.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
)

const Education = () => (
  <Section id="education" title="Education" subtitle="Academic background.">
    <div className="space-y-6">
      {PROFILE.education?.map((ed) => (
        <Card key={ed.degree}>
          <CardBody>
            <h3 className="text-xl font-semibold">{ed.degree}</h3>
            <p className="text-sm text-neutral-500">{ed.school} · {ed.period}</p>
            {ed.highlights?.length ? (
              <ul className="list-disc pl-5 space-y-2 mt-4 text-sm md:text-base">
                {ed.highlights.map((h, i) => (<li key={i}>{h}</li>))}
              </ul>
            ) : null}
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
)

const Awards = () => (
  <Section id="awards" title="Awards & Honors" subtitle="Recognition and scholarships.">
    <div className="grid md:grid-cols-2 gap-6">
      {PROFILE.awards?.map((a) => (
        <Card key={a.title}>
          <CardBody>
            <h3 className="text-base md:text-lg font-semibold">{a.title}</h3>
            <p className="text-sm text-neutral-500">{a.issuer} · {a.date}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  </Section>
)

const Extra = () => (
  <Section id="extra" title="Volunteering, Memberships & Languages" subtitle="Beyond work.">
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold">Volunteering</h3>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-sm md:text-base">
            {PROFILE.volunteering?.map((v, i) => (<li key={i}>{v}</li>))}
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold">Memberships</h3>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-sm md:text-base">
            {PROFILE.memberships?.map((m, i) => (<li key={i}>{m}</li>))}
          </ul>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold">Languages</h3>
          <ul className="list-disc pl-5 space-y-2 mt-3 text-sm md:text-base">
            {PROFILE.languages?.map((l, i) => (<li key={i}>{l.name} — {l.level}</li>))}
          </ul>
        </CardBody>
      </Card>
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact" title="Contact" subtitle="Want to collaborate or have a role in mind? Let’s talk.">
    <Card>
      <CardBody>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Email:</span> <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
            {PROFILE.phone && <p><span className="font-medium">Phone:</span> {PROFILE.phone}</p>}
            {PROFILE.address && <p><span className="font-medium">Address:</span> {PROFILE.address}</p>}
            {PROFILE.links.linkedin && <p><span className="font-medium">LinkedIn:</span> <a className="underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">{PROFILE.links.linkedin}</a></p>}
            {PROFILE.links.github && <p><span className="font-medium">GitHub:</span> <a className="underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">{PROFILE.links.github}</a></p>}
          </div>
          <form className="grid gap-4" action={`mailto:${PROFILE.email}`} method="post" encType="text/plain">
            <input name="name" placeholder="Your name" required className="w-full rounded-xl border px-3 py-2" />
            <input name="email" type="email" placeholder="Your email" required className="w-full rounded-xl border px-3 py-2" />
            <textarea name="message" placeholder="Tell me about your project…" rows="5" required className="w-full rounded-xl border px-3 py-2"></textarea>
            <button type="submit" className="inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:opacity-90">Send</button>
          </form>
        </div>
      </CardBody>
    </Card>
  </Section>
)

const Footer = () => (
  <footer className="py-10 border-t">
    <Container>
      <div className="text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {PROFILE.links.website && (
            <a className="hover:underline" href={PROFILE.links.website} target="_blank" rel="noreferrer">Website</a>
          )}
          {PROFILE.links.github && (
            <a className="hover:underline" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {PROFILE.links.linkedin && (
            <a className="hover:underline" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
        </div>
      </div>
    </Container>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Awards />
      <Extra />
      <Contact />
      <Footer />
    </div>
  )
}
