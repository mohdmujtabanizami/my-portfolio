import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-600">
      <a href="https://github.com/mohdmujtabanizami" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00f5ff] hover:-translate-y-1 transition-all text-lg">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/mohd-mujtaba-nizami-btech1707" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00f5ff] hover:-translate-y-1 transition-all text-lg">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialSidebar;