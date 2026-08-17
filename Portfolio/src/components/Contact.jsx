import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <span className="text-[#00f5ff] font-mono text-xs tracking-widest mb-2"></span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider mb-3">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#00f5ff] via-[#d4af37] to-[#39ff14] rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Clean Professional Intro & Direct Info */}
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed max-w-lg">
            As a Computer Science Engineering student seeking an entry-level <strong className="text-white">Full-Stack Web Developer</strong> role, I am eager to contribute my skills in React.js, Node.js, Express.js, and MongoDB. Let&apos;s connect to discuss opportunities or innovative web projects!
          </p>

          <div className="space-y-4 pt-2 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-[#00f5ff] text-lg"><FaEnvelope /></span>
              <a href="mailto:nizamimujtaba391@gmail.com" className="hover:text-[#00f5ff] transition">nizamimujtaba391@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00f5ff] text-lg"><FaGithub /></span>
              <a href="https://github.com/mohdmujtabanizami" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5ff] transition">github.com/mohdmujtabanizami</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00f5ff] text-lg"><FaLinkedin /></span>
              <a href="https://linkedin.com/in/mohd-mujtaba-nizami-btech1707" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f5ff] transition">linkedin.com/in/mohd-mujtaba-nizami-btech1707</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#d4af37] text-lg"><FaMapMarkerAlt /></span>
              <span className="text-gray-300">New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Form Box (No Slashes / No Citations) */}
        <div className="portfolio-card bg-[#0f1117] border border-[#00f5ff]/30 rounded-2xl p-8 glow-animus relative">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono text-sm">
            <div>
              <label className="block text-xs text-gray-400 mb-2">NAME</label>
              <input 
                type="text" 
                className="w-full bg-[#07070b] border border-white/10 rounded-lg p-3.5 text-white focus:border-[#00f5ff] outline-none transition" 
                placeholder="Enter your name" 
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">EMAIL</label>
              <input 
                type="email" 
                className="w-full bg-[#07070b] border border-white/10 rounded-lg p-3.5 text-white focus:border-[#00f5ff] outline-none transition" 
                placeholder="Enter your email" 
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-2">MESSAGE</label>
              <textarea 
                rows="4" 
                className="w-full bg-[#07070b] border border-white/10 rounded-lg p-3.5 text-white focus:border-[#00f5ff] outline-none transition resize-none" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-gradient-to-r from-[#00f5ff] to-[#39ff14] text-black font-extrabold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;