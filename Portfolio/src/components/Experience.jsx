import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Virtual Intern Web, Mobile Development & Marketing",
      company: "IBM (via FutureSkills Prime)",
      date: "July 2026 - Sept 2026",
      desc: "Completed a comprehensive virtual internship covering modern web development, mobile application development, and digital marketing strategies. Applied full-stack development skills to build and deploy dynamic web applications, contributing directly to an AI-powered e-commerce platform.",
      skills: ["React.js", "Node.js", "Firebase", "Web & Mobile Dev"],
      color: "text-[#39ff14]", // Text highlight ke liye green color rakha hai
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <span className="text-[#bf55ec] font-mono text-xs tracking-widest mb-2">MY JOURNEY</span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider mb-3">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] via-[#d4af37] to-[#bf55ec] rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Vertical Line (Hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0f1117] border-4 border-gray-800 items-center justify-center z-10">
                <FaBriefcase className={`text-sm ${exp.color}`} />
              </div>

              {/* Yahan Research wala effect lagaya hai: portfolio-card, glow-animus, border-white/10 */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-[45%] portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-8 glow-animus space-y-4 relative"
              >
                <div className="flex items-center gap-3 font-mono text-sm">
                  <FaCalendarAlt className={exp.color} />
                  <span className="text-gray-400">{exp.date}</span>
                </div>
                
                <div>
                  <h3 className={`text-2xl font-bold ${exp.color}`}>{exp.role}</h3>
                  <h4 className="text-white text-md font-medium mt-1">{exp.company}</h4>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {exp.desc}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-mono rounded-full border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Layout maintain karne ke liye empty div */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;