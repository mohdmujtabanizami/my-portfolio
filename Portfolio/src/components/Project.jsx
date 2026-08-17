import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "BargainCart – AI-Powered E-Commerce & Rental Platform",
    role: "Full-Stack Developer (Solo Project)",
    points: [
      "Developed a modern full-stack e-commerce and rental web application featuring a dual store system supporting Buy and Rent options.",
      "Implemented an interactive AI Bargaining Assistant for dynamic price negotiation within smart limits before checkout.",
      "Built a live Admin Dashboard for inventory management, real-time order/rental tracking with timestamps, and admin-controlled cancellations."
    ],
    stack: ["React.js", "Node.js", "Firebase Real-Time Database", "Firebase Auth", "Postman", "JavaScript", "Vercel"],
    github: "https://github.com/mohdmujtabanizami/bargaincart-app",
    live: "https://bargaincart-app.vercel.app/"
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
    stack: ["React.js", "JavaScript", "Firebase Authentication", "REST APIs", "Vite"],
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
    stack: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/mohdmujtabanizami",
    live: "#"
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-[#0b0d12]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            PROJECTS <span className="text-[#00d9ff]"></span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="portfolio-card bg-[#0f1117] border border-[#00d9ff]/30 rounded-2xl p-7 glow-animus flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                    CONTRACT 0{index + 1}
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
    </section>
  );
};

export default Project;