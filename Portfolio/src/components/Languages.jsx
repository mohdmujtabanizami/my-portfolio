import { motion } from "framer-motion";

const languages = [
  {
    name: "English",
    level: "Read, Write & Speak",
    glowColor: "rgba(239, 68, 68, 0.35)",   // Red glow
    borderColor: "border-red-500/30",
    hoverBorder: "hover:border-red-500/80",
    textColor: "text-red-400"
  },
  {
    name: "Hindi",
    level: "Read, Write & Speak",
    glowColor: "rgba(34, 197, 94, 0.35)",   // Green glow
    borderColor: "border-green-500/30",
    hoverBorder: "hover:border-green-500/80",
    textColor: "text-green-400"
  },
  {
    name: "Urdu",
    level: "Read, Write & Speak",
    glowColor: "rgba(34, 197, 94, 0.35)",   // Green glow
    borderColor: "border-green-500/30",
    hoverBorder: "hover:border-green-500/80",
    textColor: "text-green-400"
  },
  {
    name: "Arabic",
    level: "Read & Write Only",
    glowColor: "rgba(0, 217, 255, 0.35)",   // Cyan/Blue glow
    borderColor: "border-[#00d9ff]/30",
    hoverBorder: "hover:border-[#00d9ff]/80",
    textColor: "text-[#00d9ff]"
  }
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider">
            <span className="text-white">LANGUAGES </span> 
            <span className="text-[#d4af37]">KNOWN</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ boxShadow: `0 0 25px ${lang.glowColor}` }}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl bg-[#0f1117] border ${lang.borderColor} ${lang.hoverBorder} transition-all duration-300 hover:-translate-y-2 cursor-default group`}
            >
              <h3 className="text-3xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                {lang.name}
              </h3>
              <p className={`font-mono text-sm tracking-wide ${lang.textColor}`}>
                {lang.level}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Languages;