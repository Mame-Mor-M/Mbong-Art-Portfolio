import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import './Home.css';

function App() {
  const images = [
    {id: 1, content:'/Illustrations/Picture1.png', height:800, wide: false, vOffset: 50, hOffset: 0},
    { id: 2, content: '/Illustrations/Picture2.png', height: 800, wide: false, vOffset: 100, hOffset: 0 },
    { id: 5, content: '/Illustrations/Picture5.png', height: 750, wide: true, vOffset: 150, hOffset: 0 },
    { id: 3, content: '/Illustrations/Picture3.png', height: 800, wide: false, vOffset: 200, hOffset: 0 },
    { id: 4, content: '/Illustrations/Picture4.png', height: 800, wide: false, vOffset: 230, hOffset: 0 },
    { id: 6, content: '/Illustrations/Picture6.png', height: 0, wide: false, vOffset: 230, hOffset: -200 },
  ]
  
  return (
    <div className="Home">
      <Navbar />
      <div className="Hero" id="Hero">
        <video src={'/Animations/Flux_Intro.mp4'}muted autoPlay></video>
      </div>
      <header className="Section-Header" id="Animations">
        Animation Gallery
        <p className='Section-Desc'>Where I put my animations (make read better)</p>
      </header>
      <div className="Animations">
        <header className="Hero-header">
          <p>
            Eat my shorts dummy aaaaaa
          </p>
        </header>
      </div>
      <header className="Section-Header" id="Illustrations">
        Illustrations
        <p className='Section-Desc'>Where I put my illustrations (make read better)</p>
      </header>
      <div className="Illustrations">
        <MasonryLayout items={images}/>
      </div>
      <footer id="Contact">
        <h2>Contact Me</h2>
      </footer>
    </div>
  );
}

const MasonryLayout = ({ items }) => {
  return (
    <div className='Illustrations-Grid'>
      {items.map((item) => (
        <div key={item.id} className={`Illustrations-Item ${item.wide ? 'wide' : ''}`} style={{height: `${item.height}px`, top:` ${item.vOffset}px`, left:`${item.hOffset}px`, position: 'relative'}}>
          <img src={item.content} />
      </div>
  ))}
    </div>
  )
}

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 9000); // Play around with time here, idk if good yet
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`Navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="Navbar-Left">
        <button onClick={() => scrollToSection('About')}>About Me</button>
        <button onClick={() => scrollToSection('Illustrations')}>Illustrations</button>
        <button onClick={() => scrollToSection('Animations')}>Animations</button>
      </div>

      <div className="Navbar-Center">
        <h1>Mbong Mbong</h1>
        <p>Animation & Art????</p>
      </div>

      <div className="Navbar-Right">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <button onClick={() => scrollToSection('Contact')}>
          <FaEnvelope />
        </button>
      </div>
    </nav>
  );
};
  export default App;
