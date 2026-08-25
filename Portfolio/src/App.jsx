import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Project';
import Research from './components/Research';
import Certificates from './components/Certificate';
import Languages from './components/Languages'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import matrixBg from './assets/matrix-bg.jpg';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white relative overflow-x-hidden">
      {/* Fixed Matrix Background Image with Blur & Dark Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${matrixBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.25)',
          transform: 'scale(1.1)',
        }}
      />

      <Cursor />
      <SocialSidebar />
      <EmailSidebar />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Certificates />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;