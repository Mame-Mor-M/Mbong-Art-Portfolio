import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import './Home.css';

function App() {
  const character_designs = [
    { id: 8, content: '/Illustrations/AmariSheet.png', height: 0, wide: false, vOffset: 0, hOffset: 25, width: 600 },
    { id: 9, content: '/Illustrations/AmariSheet2.png', height: 0, wide: false, vOffset: 0, hOffset: 145, width: 400 },
    { id: 5, content: '/Illustrations/Trio.png', height: 750, wide: false, vOffset: 0, hOffset: 65, width: 400 },
    { id: 11, content: '/Illustrations/Hunter1.png', height: 800, wide: false, vOffset: 0, hOffset: 25, width: 600 },
    { id: 11, content: '/Illustrations/HunterSheet.png', height: 800, wide: false, vOffset: 0, hOffset: 145, width: 400 },
    { id: 2, content: '/Illustrations/Hunter2.png', height: 800, wide: false, vOffset: 0, hOffset: 65, width: 400 },
    { id: 7, content: '/Illustrations/FightLady.png', height: 0, wide: false, vOffset: -700, hOffset: 1065, width: 400 },

  ]
  const portraits = [
    { id: 11, content: '/Illustrations/Picture2.png', height: 800, wide: false, vOffset: 0, hOffset: 25, width: 500 },
    { id: 1, content: '/Illustrations/Picture1.png', height: 800, wide: false, vOffset: 0, hOffset: 42, width: 600 },
    { id: 3, content: '/Illustrations/Picture3.png', height: 800, wide: false, vOffset: 0, hOffset: 165, width: 300 },
    { id: 4, content: '/Illustrations/Picture4.png', height: 800, wide: false, vOffset: 0, hOffset: 126, width: 400 },
    { id: 6, content: '/Illustrations/Picture6.png', height: 0, wide: false, vOffset: -370, hOffset: 665, width: 300 },
    
  ]

  const animations = [
    {id: 1, content: '/Animations/'}
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
            EWAODAWOIDHOADHAWODA
          </p>
        </header>
      </div>
      <header className="Section-Header" id="Illustrations">
        Illustrations
        <p className='Section-Desc'>Where I put my illustrations (make read better)</p>
      </header>
      <div className="Illustrations">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry columnsCount={3} gutter='15px'>
          {character_designs.map((image, i) => (
            <div>
            <img key={i} src={image.content} style={{width: `${image.width}px`, position: `relative`, left: `${image.hOffset}px`, top: `${image.vOffset}px`}}/>
            </div>
          ))}
        </Masonry>
        </ResponsiveMasonry>
        <ResponsiveMasonry className="Portrait-Section" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter='15px'>
            {portraits.map((image, i) => (
              <div>
                <img key={i} src={image.content} style={{ width: `${image.width}px`, position: `relative`, left: `${image.hOffset}px`, top: `${image.vOffset}px` }} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <footer id="Contact">
        <h2>Contact Me</h2>
      </footer>
    </div>
  );
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
        <p>Animator & Digital Artist</p>
      </div>

      <div className="Navbar-Right">
        <a href="https://www.instagram.com/mbong_mbong/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/mbong-mbong-929a0b35a/" target="_blank" rel="noopener noreferrer">
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
