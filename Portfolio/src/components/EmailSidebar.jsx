const EmailSidebar = () => {
  return (
    <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40 after:content-[''] after:w-[1px] after:h-24 after:bg-gray-600">
      <div 
        className="writing-mode-vertical text-xs font-mono text-gray-400 tracking-widest hover:text-[#d4af37] transition-all pb-2 cursor-pointer" 
        style={{ writingMode: 'vertical-rl' }}
        onClick={() => window.location.href = "mailto:nizamimujtaba391@gmail.com"}
      >
        nizamimujtaba391@gmail.com
      </div>
    </div>
  );
};

export default EmailSidebar;