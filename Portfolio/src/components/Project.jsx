import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const majorProjects = [
  {
    title: "BargainCart – AI-Powered E-Commerce & Rental Platform",
    role: "Full-Stack Developer (Solo Project)",
    points: [
      "Developed a modern full-stack e-commerce and rental web application featuring a dual store system supporting Buy and Rent options.",
      "Implemented an interactive AI Bargaining Assistant for dynamic price negotiation within smart limits before checkout.",
      "Built a live Admin Dashboard for inventory management, real-time order/rental tracking with timestamps, and admin-controlled cancellations."
    ],
    stack: ["React.js", "Node.js", "Firebase Real-Time Database", "Firebase Auth", "Postman", "JavaScript", "HTML5", "CSS3", "Vercel"],
    github: "https://github.com/mohdmujtabanizami/bargaincart-app",
    live: "https://bargaincart-app.vercel.app"
  },
  {
    title: "ScoreHub – Live Football Scores & Statistics Platform",
    role: "Full-Stack Developer (Solo Project)",
    points: [
      "Developed a responsive football web application using React.js to display live scores, fixtures, standings, team details, and player statistics.",
      "Integrated football APIs to fetch real-time match data, league standings, top scorers, and detailed team information, tested via Postman.",
      "Built reusable React components and implemented dynamic routing for team pages, player profiles, and match details.",
      "Implemented Firebase Authentication with Google Sign-In for secure user access and personalized experiences."
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "Firebase Authentication", "Postman", "REST APIs", "Vite"],
    github: "https://github.com/mohdmujtabanizami/football-live-score",
    live: "https://football-live-score-one.vercel.app"
  },
  {
    title: "AI-Powered E-Commerce Website with Dynamic Bargaining System",
    role: "Frontend Developer (Team Project)",
    points: [
      "Developed a responsive AI-powered e-commerce web application using React.js and Next.js, enabling users to browse products and interact with a dynamic bargaining system.",
      "Designed and implemented reusable UI components to improve maintainability, user experience, and application scalability.",
      "Integrated REST APIs for product management, user authentication, and real-time price negotiation features.",
      "Built a mobile-friendly interface using Tailwind CSS, ensuring responsive design across different devices and screen sizes."
    ],
    stack: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/mohdmujtabanizami",
    live: "https://hugglemart-mern-stack-2.onrender.com"
  }
];

const miniProjects = [
  {
    title: "HisabKitab – Ultimate Financial Pro Tracker",
    role: "Solo Project",
    points: [
      "Developed a feature-rich Progressive Web Application (PWA) for comprehensive personal finance and budget management using HTML5, CSS3, and Vanilla JavaScript.",
      "Engineered an AI-powered OCR Receipt Scanner using Tesseract.js to automatically extract itemized bill details and integrated Voice-Powered Expense Logging via the Web Speech API.",
      "Implemented robust offline data persistence using local storage with Cloud JSON Backup capabilities, multi-language support, and a custom 4-digit PIN lock for data security."
    ],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "Tesseract.js", "Web Speech API", "PWA", "Vercel"],
    github: "https://github.com/mohdmujtabanizami",
    live: "https://hisab-kitab-iota-one.vercel.app"
  },
  {
    title: "SkyPulse-Weather",
    role: "Solo Project",
    points: [
      "Developed a high-performance Progressive Web Application (PWA) for real-time global weather tracking using HTML5, CSS3, and Vanilla JavaScript.",
      "Engineered a custom multi-API key rotation system integrating OpenWeatherMap APIs to bypass rate limits and ensure zero application downtime.",
      "Implemented interactive visual components including a precise SVG sun tracking arc, hourly temperature wave chart, comprehensive rain tracking engine, and a live timezone-synchronized world clock."
    ],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "OpenWeatherMap API", "PWA", "Vercel"],
    github: "https://github.com/mohdmujtabanizami",
    live: "https://skypulse-weather-pi.vercel.app"
  },
  {
    title: "Multi-Tool App – Scientific Calculator & Currency Converter",
    role: "Solo Project",
    points: [
      "Developed a fast, responsive utility web application featuring a Scientific Calculator, real-time Currency Converter, and Percentage Calculator.",
      "Configured the application as an installable Progressive Web App (PWA) with a custom Service Worker and web manifest for native-like mobile and desktop experiences.",
      "Integrated a live, open exchange rate API to fetch global currency rates and engineered persistent state tracking using browser localStorage."
    ],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "REST APIs", "PWA", "Vercel"],
    github: "https://github.com/mohdmujtabanizami",
    live: "https://multi-tool-app-hazel.vercel.app"
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            PROJECTS <span className="text-[#00d9ff]"></span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* ---------- MAJOR PROJECTS SECTION ---------- */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-[#00d9ff] pl-4">
            Major Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={`major-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="portfolio-card bg-[#0f1117] border border-[#00d9ff]/30 rounded-2xl p-7 glow-animus flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                      MAJOR 0{index + 1}
                    </span>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d9ff] transition">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d9ff] transition">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-mono text-[#00d9ff] mb-4">{project.role}</p>

                  <ul className="space-y-2 mb-6 text-gray-300 text-xs sm:text-sm list-disc pl-4">
                    {project.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-[#00d9ff] bg-[#00d9ff]/10 px-2 py-0.5 rounded border border-[#00d9ff]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- MINI PROJECTS SECTION ---------- */}
        <div className="pt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-[#d4af37] pl-4">
            Mini Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {miniProjects.map((project, index) => (
              <motion.div
                key={`mini-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="portfolio-card bg-[#0f1117] border border-[#d4af37]/30 rounded-2xl p-7 flex flex-col justify-between hover:border-[#d4af37] transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-[#00d9ff] bg-[#00d9ff]/10 px-3 py-1 rounded-full border border-[#00d9ff]/30">
                      MINI 0{index + 1}
                    </span>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d4af37] transition">
                        <FaGithub size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d4af37] transition">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-mono text-[#d4af37] mb-4">{project.role}</p>

                  <ul className="space-y-2 mb-6 text-gray-300 text-xs sm:text-sm list-disc pl-4">
                    {project.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-800">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;