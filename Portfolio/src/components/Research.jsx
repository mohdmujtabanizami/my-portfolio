import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const Research = () => {
  return (
    <section id="research" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
            RESEARCH<span className="text-[#d4af37]"> PUBLICATIONS</span>
          </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] via-[#d4af37] to-[#39ff14] rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-8 glow-animus space-y-4"
        >
          <div className="flex items-center gap-3 text-[#00f5ff] text-sm font-mono">
            <FaBookOpen />
            <span>Academic Research</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            Dynamic Negotiation Engine: An Advanced E-Commerce Framework
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Focused on developing an automated framework for e-commerce negotiations, integrating smart logic and secure multi-party communication protocols.
          </p>

          <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-mono text-gray-400">Published / Final Year Major Project</span>
            
            {/* Direct Google Drive Research Paper Link */}
            <a
              href="https://drive.google.com/file/d/1uj5MZmAJwyAW5PZIpR6kGfbYhOctBnSt/view?usp=drivesdk" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#00f5ff]/10 border border-[#00f5ff] text-[#00f5ff] font-bold rounded-lg hover:bg-[#00f5ff] hover:text-black transition-all flex items-center gap-2 text-sm"
            >
              Read Publication <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;