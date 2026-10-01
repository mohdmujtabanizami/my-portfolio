import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider mb-3">
          ABOUT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] via-[#d4af37] to-[#39ff14] rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Text Content */}
        <div className="space-y-6 text-gray-300 text-base leading-relaxed">
          <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
          <p>
            I am <strong className="text-white">Mohd Mujtaba Nizami</strong>, a Computer Science Engineering student seeking an entry-level Full-Stack Web Developer role.
          </p>
          <p>
            I am skilled in React.js, Node.js, Express.js, MongoDB, Postman, Firebase, JavaScript, HTML5, CSS3, Tailwind CSS, and REST API Integration with hands-on experience building responsive full-stack web applications.
          </p>
          <p>
            I possess a strong understanding of web development, frontend-backend integration, and modern web technologies.
          </p>

          {/* 4 Counter Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-6 glow-animus text-center">
              <h4 className="text-2xl font-black text-[#00f5ff] mb-1">7+</h4>
              <p className="text-xs font-mono text-gray-400">Projects Built</p>
            </div>
            <div className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-6 glow-animus text-center">
              <h4 className="text-2xl font-black text-[#39ff14] mb-1">4+</h4>
              <p className="text-xs font-mono text-gray-400">Yrs Coding</p>
            </div>
            <div className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-6 glow-animus text-center">
              <h4 className="text-xl font-black text-[#d4af37] mb-1">MERN</h4>
              <p className="text-xs font-mono text-gray-400">Core Stack</p>
            </div>
            <div className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-6 glow-animus text-center">
              <h4 className="text-2xl font-black text-[#00f5ff] mb-1">2026</h4>
              <p className="text-xs font-mono text-gray-400">Graduating</p>
            </div>
          </div>
        </div>

        {/* Right Terminal Box (Slashes Removed) */}
        <div className="portfolio-card bg-[#0f1117] border border-[#00f5ff]/30 rounded-2xl p-6 glow-animus relative font-mono text-sm">
          <div className="flex items-center gap-2 mb-5 border-b border-gray-800 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-[#d4af37]"></div>
            <div className="w-3 h-3 rounded-full bg-[#39ff14]"></div>
          </div>

          <div className="space-y-3 text-gray-300">
            <p className="text-[#39ff14]">MERN Full-Stack Developer Profile & Credentials</p>
            <div className="grid grid-cols-[110px_1fr] gap-2 text-xs sm:text-sm pl-2 pt-2">
              <span className="text-purple-400">Name</span><span className="text-yellow-400">→ Mohd Mujtaba Nizami</span>
              <span className="text-purple-400">Degree</span><span className="text-yellow-400">→ B.Tech CSE (2022-2026)</span>
              <span className="text-purple-400">College</span><span className="text-yellow-400">→ MIET, Greater Noida</span>
              <span className="text-purple-400">University</span><span className="text-yellow-400">→ AKTU</span>
              <span className="text-purple-400">Role</span><span className="text-yellow-400">→ Full-Stack Web Developer</span>
              <span className="text-purple-400">Specialist</span><span className="text-yellow-400">→ MERN Stack</span>
              <span className="text-purple-400">Interest</span><span className="text-yellow-400">→ Web Apps, Full-Stack Architecture, AI</span>
              <span className="text-purple-400">Language</span><span className="text-yellow-400">→ JavaScript, Java, Python, C, C++</span>
              <span className="text-purple-400">Status</span><span className="flex items-center gap-2 text-green-400">→ <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open to Work</span>
            </div>

            <p className="text-[#39ff14] pt-6">Core Stack & Development Focus</p>
            <div className="text-xs text-gray-400 space-y-1 pl-2 font-mono">
              <p>Primary Focus: Building responsive MERN stack web applications</p>
              <p>Expertise: Frontend-backend integration & RESTful APIs</p>
              <p>Clean Code  → Scalable Architecture → Deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;