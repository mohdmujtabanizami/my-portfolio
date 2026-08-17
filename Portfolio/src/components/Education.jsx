import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Mangalmay Institute of Engineering & Technology, Greater Noida",
    period: "Expected 2026",
    description: "Specializing in full-stack development, algorithms, and modern web frameworks.",
    status: "Current Level",
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Sacred Heart School, Mau, Uttar Pradesh",
    period: "2020 - 2021",
    description: "Completed senior secondary education with a strong foundation in science and mathematics.",
    status: "Completed",
  },
  {
    degree: "Class X (ICSE)",
    institution: "St. Xavier’s High School, Jabalpur, Madhya Pradesh",
    period: "2018 - 2019",
    description: "Completed matriculation with academic distinction.",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-[#07070b] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            EDUCATION <span className="text-[#00f5ff]"></span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00f5ff] via-[#9333ea] to-[#facc15] mx-auto"></div>
          <p className="text-gray-400 mt-4 text-sm font-mono"></p>
        </div>

        <div className="relative border-l-2 border-[#9333ea]/40 ml-4 md:ml-32 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07070b] border-2 border-[#00f5ff] group-hover:bg-[#00f5ff] transition"></div>

              {/* Period Tag on desktop (left side) */}
              <div className="hidden md:block absolute -left-36 top-1 text-sm font-mono text-[#facc15] font-bold">
                {edu.period}
              </div>

              {/* Content Card */}
              <div className="bg-[#0f0f16] border border-gray-800 rounded-2xl p-6 hover:border-[#00f5ff]/50 transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden text-xs font-mono text-[#facc15] font-bold">
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 text-xs font-mono bg-[#00f5ff]/10 text-[#00f5ff] rounded-full border border-[#00f5ff]/20">
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-[#9333ea] text-sm font-medium mb-3">{edu.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;