import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const Research = () => {
  return (
    <section id="research" className="py-24 px-4 bg-[#07090e]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00d9ff] uppercase"></span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 mt-1">
            RESEARCH <span className="text-[#00d9ff]">PUBLICATION</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f1117] border border-[#00d9ff]/30 rounded-2xl p-8 glow-animus"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#00d9ff]/10 text-[#00d9ff] rounded-xl border border-[#00d9ff]/30">
              <FaBookOpen size={22} />
            </div>
            <span className="text-xs font-mono text-[#d4af37]">ACADEMIC PUBLICATION</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            AI-Powered Bargaining System for E-Commerce Platforms
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Authored a research paper focusing on customer engagement, dynamic pricing algorithms, artificial intelligence negotiation frameworks, and consumer behavior analysis.
          </p>
          <a href="#" className="inline-block px-6 py-2.5 bg-[#00d9ff] text-black font-bold rounded-xl text-sm hover:scale-105 transition">
            Read Publication
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;