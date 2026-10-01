import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" }, // Yahan Experience add kiya gaya hai
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Research", href: "#research", id: "research" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Languages", href: "#languages", id: "languages" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }); 

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0d12]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-mono font-bold text-[#00f5ff] flex items-center gap-1">
          &lt;MUJTABA /&gt;
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-xs font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`transition-all duration-200 px-2 py-1 rounded cursor-pointer ${
                      isActive
                        ? "text-[#00f5ff] font-bold border-b-2 border-[#00f5ff] bg-[#00f5ff]/10 shadow-[0_0_10px_rgba(0,245,255,0.3)]"
                        : "text-gray-400 hover:text-[#00f5ff]"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl text-[#00f5ff]">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0f1117] border-b border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-6 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`transition cursor-pointer ${
                    activeSection === link.id ? "text-[#00f5ff] font-bold" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;