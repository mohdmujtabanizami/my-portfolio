import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileAlt, FaCamera, FaTimes } from "react-icons/fa";
import Typewriter from "./Typewriter";

const Hero = () => {
  const nameLetters = "MUJTABA".split("");
  const [activeCount, setActiveCount] = useState(0); 
  const [phase, setPhase] = useState("filling"); 
  const [currentColor, setCurrentColor] = useState("#00f5ff");
  const [isPhotoOpen, setIsPhotoOpen] = useState(false); // Photo modal state

  const getRandomColor = () => {
    const colors = ["#ff2d95", "#39ff14", "#d4af37", "#00f5ff", "#bf55ec", "#ff9f43", "#00d9ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    let timer;

    if (phase === "filling") {
      if (activeCount < nameLetters.length) {
        timer = setTimeout(() => {
          setActiveCount((prev) => prev + 1);
        }, 150);
      } else {
        timer = setTimeout(() => {
          setActiveCount(0);
          setPhase("clearing");
        }, 2500);
      }
    } else if (phase === "clearing") {
      if (activeCount < nameLetters.length) {
        timer = setTimeout(() => {
          setActiveCount((prev) => prev + 1);
        }, 150);
      } else {
        timer = setTimeout(() => {
          setCurrentColor(getRandomColor());
          setActiveCount(0);
          setPhase("filling");
        }, 3500);
      }
    }

    return () => clearTimeout(timer);
  }, [activeCount, phase, nameLetters.length]);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-4 pt-28 pb-16">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00d9ff] rounded-full blur-[180px] opacity-15"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#d4af37] rounded-full blur-[160px] opacity-15"></div>

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff] text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-pulse"></span>
              Full-Stack Developer
            </div>

            <div className="text-2xl sm:text-3xl font-medium text-gray-300 h-12 flex items-center gap-2 font-mono">
              <span>&gt;</span>
              <Typewriter
                texts={["Full-Stack Web Developer", "Software Engineer", "Gamer"]}
                speed={90}
                delay={2000}
                className="text-[#d4af37] font-bold"
              />
            </div>

            {/* Letter-by-Letter Color Filling & Clearing Loop */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 flex select-none">
              {nameLetters.map((char, index) => {
                let isColored = false;

                if (phase === "filling") {
                  isColored = index < activeCount;
                } else if (phase === "clearing") {
                  isColored = index >= activeCount;
                }

                return (
                  <span
                    key={index}
                    style={{
                      color: isColored ? currentColor : "#ffffff",
                      textShadow: isColored ? `0 0 20px ${currentColor}` : "none",
                      transition: "color 0.3s ease, text-shadow 0.3s ease",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>

            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Operating from New Delhi. Computer Science Engineering student seeking an entry-level Full-Stack Web Developer role. Skilled in React.js, Node.js, Express.js, and MongoDB.
            </p>

            {/* Buttons Row 1 */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="px-8 py-3.5 bg-[#00f5ff] text-black font-extrabold rounded-lg hover:scale-105 transition-all glow-animus">
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1GkcOHPHhtHHIa7rYUNK6dti0DqoqjV-d/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#d4af37]/10 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse"
              >
                <FaFileAlt /> Resume
              </a>
            </div>

            {/* Buttons Row 2: Contact & Photo */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a href="#contact" className="inline-block px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-black transition-all">
                Contact
              </a>
              
              <button 
                onClick={() => setIsPhotoOpen(true)}
                className="inline-flex px-8 py-3 bg-[#bf55ec]/10 border-2 border-[#bf55ec] text-[#bf55ec] font-bold rounded-lg hover:bg-[#bf55ec] hover:text-white transition-all items-center gap-2 shadow-[0_0_15px_rgba(191,85,236,0.3)] hover:shadow-[0_0_25px_rgba(191,85,236,0.6)]"
              >
                <FaCamera /> Photo
              </button>
            </div>
          </motion.div>

          {/* Right Code Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative portfolio-card"
          >
            <div className="bg-[#0f1117] border border-[#00f5ff]/30 rounded-2xl p-6 glow-animus relative font-mono text-sm">
              <div className="flex items-center gap-2 mb-5 border-b border-gray-800 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-[#d4af37]"></div>
                <div className="w-3 h-3 rounded-full bg-[#39ff14]"></div>
                <span className="ml-3 text-xs text-[#00f5ff]">developer.js</span>
              </div>

              <pre className="text-[13px] sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">name</span>: <span className="text-green-300">&quot;Mohd Mujtaba Nizami&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">role</span>: <span className="text-green-300">&quot;Full-Stack Developer&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">stack</span>: [<span className="text-green-300">&quot;React&quot;</span>, <span className="text-green-300">&quot;Node&quot;</span>, <span className="text-green-300">&quot;Express&quot;</span>, <span className="text-green-300">&quot;MongoDB&quot;</span>],<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">passion</span>: <span className="text-green-300">&quot;Building Web Apps & Gaming&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">gamingHours</span>: <span className="text-orange-400">Infinity</span>,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">code</span>: <span className="text-purple-400">function</span>() &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-green-300"></span>;<br/>
                  &nbsp;&nbsp;&#125;,<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">status</span>: <span className="text-green-300">&quot;Open to Work &quot;</span><br/>
                  &#125;;
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Photo Modal with Framer Motion Effects --- */}
      <AnimatePresence>
        {isPhotoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.5, y: 50, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.5, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100 }}
              className="relative group"
              onClick={(e) => e.stopPropagation()} 
            >

              {/* Photo Container with Red Glow and Hover Effects */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.5)] group-hover:shadow-[0_0_60px_rgba(255,69,0,0.7)] group-hover:border-[#ff4500] transition-all duration-500">
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPhotoOpen(false);
                  }}
                  className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-gray-300 hover:text-white hover:bg-red-500 backdrop-blur-sm transition-all shadow-lg border border-white/10"
                >
                  <FaTimes className="text-xl" />
                </button>

                <img 
                  src="/profile.png" 
                  alt="Mohd Mujtaba Nizami" 
                  className="max-w-[280px] sm:max-w-md max-h-[75vh] object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;