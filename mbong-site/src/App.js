import { FaInstagram, FaLinkedin, FaEnvelope, FaVolumeMute, FaVolumeUp} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import emailjs from "@emailjs/browser";
import './Home.css';

function App() {
  const character_designs = [
    { content: './Illustrations/AmariSheet.png', height: 0, wide: false, vOffset: 0, hOffset: 25, width: 600 },
    { content: './Illustrations/AmariSheet2.png', height: 0, wide: false, vOffset: 0, hOffset: 145, width: 400 },
    { content: './Illustrations/Trio.png', height: 750, wide: false, vOffset: 0, hOffset: 65, width: 400 },
    { content: './Illustrations/Hunter1.png', height: 800, wide: false, vOffset: 0, hOffset: 25, width: 600 },
    { content: './Illustrations/HunterSheet.png', height: 800, wide: false, vOffset: 0, hOffset: 145, width: 400 },
    { content: './Illustrations/Hunter2.png', height: 800, wide: false, vOffset: 0, hOffset: 65, width: 400 },
    { content: './Illustrations/FightLady.png', height: 0, wide: false, vOffset: -700, hOffset: 1065, width: 400 },
    { content: './Illustrations/Picture2.png', height: 800, wide: false, vOffset: 0, hOffset: 25, width: 500 },
    { content: './Illustrations/Picture1.png', height: 800, wide: false, vOffset: 0, hOffset: 42, width: 600 },
    { content: './Illustrations/Picture3.png', height: 800, wide: false, vOffset: 0, hOffset: 165, width: 300 },
    { content: './Illustrations/Picture4.png', height: 800, wide: false, vOffset: 0, hOffset: 126, width: 400 },
    { content: './Illustrations/Picture6.png', height: 0, wide: false, vOffset: -370, hOffset: 665, width: 300 },
    
  ]

  const animation_clips = [
    { id: 0, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/HallwayRun.mp4', audio: false}, 
    { id: 1, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/RunawayShot.mp4', audio: false }, 
    { id: 2, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Runaway2.mp4', audio: false },
    { id: 2, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/OragamiLady.mp4', audio: true },
    { id: 3, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Squabble.mp4', audio: false },
    { id: 4, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/JumpOver.mp4', audio: false },
    { id: 5, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flip.mp4', audio: false },
    { id: 7, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/RunningMan.mp4', audio: false },
    { id: 6, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/BackpackLady.mp4', audio: false },
    { id: 8, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Yourmom.mp4', audio: true },
    { id: 9, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/PunchingBagCut.mp4', audio: false },
    { id: 10, content: 'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Quoi.mp4', audio: false },
  ]
  const [mutedVideos, setMutedVideos] = useState(() =>
    Object.fromEntries(animation_clips.map(v => [v.id, true]))
  );

  const toggleMute = (id) => {
    setMutedVideos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className="Home">
      <Navbar />
      <div className="Hero" id="Hero">
        <video src={'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Flux_Intro.mp4'}muted autoPlay loop={false} playsInline preload='auto' controls={false}></video>
      </div>
      <header className="Section-Header" id="Animations">
        Animation Gallery
        <p className='Section-Desc'></p>
      </header>
      <div className="Animations">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
          <Masonry  columnsCount={4} gutter='15px'>
            {animation_clips.map((video, i) => (
              <div className="Animations-Clip" >
                {video.audio ? <a className="Animation-Volume" onClick={() => toggleMute(video.id)}>{ mutedVideos[video.id]  ? <FaVolumeMute /> : <FaVolumeUp /> }</a> : <a></a>} {/* video.muted doesn't toggle a re-render, need to use state change for this*/}
                <video key={i} src={video.content}  autoPlay muted={mutedVideos[video.id]} loop style={{width: `97%`}}></video>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <header className="Section-Header" id="Animations">
          Demo Reel
        </header>
        <video controls={true} src={'https://github.com/Mame-Mor-M/Mbong-Art-Portfolio/releases/download/Animation/Demo_Reel.mp4'}></video>
      </div>
      <header className="Section-Header" id="Illustrations">
        Illustrations
        <p className='Section-Desc'>Character sheets & portraits</p>
      </header>
      <div className="Illustrations">
        <ResponsiveMasonry className="Sheet-Section" columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
        <Masonry columnsCount={4} gutter='15px'>
          {character_designs.map((image, i) => (
            <div>
              <img key={i} src={image.content} style={{ width: `100%`}}/>
            </div>
          ))}
        </Masonry>
        </ResponsiveMasonry>
      </div>
      <div id="Contact" className="Contact">
        <Contact/>
      </div>

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
        {/*<button onClick={() => scrollToSection('About')}>About Me</button>*/}
        <button onClick={() => scrollToSection('Illustrations')}>Illustrations</button>
        <button onClick={() => scrollToSection('Animations')}>Animations</button>
      </div>

      <div className="Navbar-Center" onClick={() => scrollToSection('Hero')}>
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

const Contact = () => {
  const form = useRef();
  const [sendMessage, setMessage] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("Sent")
    emailjs.sendForm(
      "service_uwh8xsc",
      "template_x6qnb18",
      form.current,
      "Z80bLHF2ujQrFBCXq"
    ).then(
      () => {
        
        setTimeout(() => {
          setMessage("Send Message");
        }, 1000)
        form.current.reset();
      },
      () => {
        alert("Something went wrong.");
      }
    );
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-card">
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name*</label>
          <input type="text" name="name" required />

          <label>Email*</label>
          <input type="email" name="email" required />

          <label>Message*</label>
          <textarea name="message" rows="6" required />

          <button type="submit">{sendMessage}</button>
        </form>
      </div>
    </section>
  );
};
  export default App;
