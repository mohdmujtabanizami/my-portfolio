import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiFirebase, SiGit } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <SiReact className="text-[#00d9ff]" />, level: "Master Rank" },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#39ff14]" />, level: "Master Rank" },
  { name: "Express.js", icon: <SiExpress className="text-white" />, level: "Adept Rank" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#39ff14]" />, level: "Master Rank" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#d4af37]" />, level: "Master Rank" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#00d9ff]" />, level: "Master Rank" },
  { name: "Firebase", icon: <SiFirebase className="text-[#d4af37]" />, level: "Adept Rank" },
  { name: "Git & GitHub", icon: <SiGit className="text-red-400" />, level: "Master Rank" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-[#07090e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            SKILLS &<span className="text-[#d4af37]"> TECHNOLOGIES</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#0f1117] border border-[#d4af37]/20 hover:border-[#00d9ff]/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]"
            >
              <div className="text-4xl mb-4 p-3 rounded-xl bg-gray-900/90 group-hover:bg-[#00d9ff]/10 transition">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00d9ff] transition">
                {skill.name}
              </h3>
              <span className="text-xs font-mono text-[#d4af37] bg-black/40 px-3 py-1 rounded-full border border-[#d4af37]/30">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;