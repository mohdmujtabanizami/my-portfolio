import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Certificate program in MERN Stack",
    issuer: "NASSCOM",
    date: "August 2026",
    link: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-f564cd02-a090-11f1-bcca-005056b48b54"
  },
  {
    title: "Certificate program in React JS",
    issuer: "NASSCOM",
    date: "August 2026",
    link: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-33392d2b-a092-11f1-bcca-005056b48b54"
  },
  {
    title: "Certificate program in Mobile App Development",
    issuer: "NASSCOM",
    date: "August 2026",
    link: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-a2e30244-a092-11f1-bcca-005056b48b54"
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "SSC NASSCOM",
    date: "August 2026",
    link: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/Mohd%2BMujtaba%2BNizami_163037563.pdf"
  },
  {
    title: "Exploratory Data Analysis",
    issuer: "Accenture",
    date: "August 2026",
    link: "https://www.futureskillsprime.in/iDH/user/credential/view/32914-6f1539a9-8e85-11f1-bcca-005056b48b54"
  },
  {
    title: "Cloud Computing Foundations",
    issuer: "Duke University",
    date: "April 2026",
    link: "https://coursera.org/share/cf94a4e150c8590e0cbf2b26bba44292"
  },
  {
    title: "Cloud Virtualization, Containers and APIs",
    issuer: "Duke University",
    date: "April 2026",
    link: "https://coursera.org/share/69471c3123d22383dddeb534b4c1599c"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            CERTIFICATES
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-[#00d9ff] via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card bg-[#0f1117] border border-white/10 rounded-2xl p-6 glow-animus flex justify-between items-center group cursor-pointer transition-all duration-300 hover:border-[#00d9ff]/60"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#d4af37]">{cert.date}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#00d9ff] transition">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
              <div className="text-gray-400 group-hover:text-[#00d9ff] transition p-3 rounded-xl bg-black/40 border border-white/5">
                <FaExternalLinkAlt size={18} />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;