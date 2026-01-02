import { FaInstagram, FaLinkedin, FaEnvelope, FaVolumeMute, FaVolumeUp} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import backpack from './Animations/BackpackLady.mp4';
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

  ]
  const portraits = [
    { content: './Illustrations/Picture2.png', height: 800, wide: false, vOffset: 0, hOffset: 25, width: 500 },
    { content: './Illustrations/Picture1.png', height: 800, wide: false, vOffset: 0, hOffset: 42, width: 600 },
    { content: './Illustrations/Picture3.png', height: 800, wide: false, vOffset: 0, hOffset: 165, width: 300 },
    { content: './Illustrations/Picture4.png', height: 800, wide: false, vOffset: 0, hOffset: 126, width: 400 },
    { content: './Illustrations/Picture6.png', height: 0, wide: false, vOffset: -370, hOffset: 665, width: 300 },
    
  ]

  const animation_clips = [
    { id: 0, content: './Animations/HallwayRun.mp4', audio: false}, 
    { id: 1, content: './Animations/RunawayShot.mp4', audio: false }, 
    { id: 2, content: './Animations/Runaway2.mp4', audio: false },
    { id: 2, content: './Animations/OragamiLady.mp4', audio: true },
    { id: 3, content: './Animations/Squabble.mp4', audio: false },
    { id: 4, content: './Animations/JumpOver.mp4', audio: false },
    { id: 5, content: './Animations/Flip.mp4', audio: false },
    { id: 7, content: './Animations/RunningMan.mp4', audio: false },
    { id: 6, content: backpack, audio: false },
    { id: 8, content: './Animations/Yourmom.mp4', audio: true },
    { id: 9, content: './Animations/PunchingBagCut.mp4', audio: false },
    { id: 10, content: './Animations/Quoi.mp4', audio: false },
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
        <video src={'./Animations/Flux_Intro.mp4'}muted autoPlay></video>
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
        <video controls={true} src={'./Animations/Demo_Reel.mp4'}></video>
      </div>
      <header className="Section-Header" id="Illustrations">
        Illustrations
        <p className='Section-Desc'>Character sheets & portraits</p>
      </header>
      <div className="Illustrations">
        <ResponsiveMasonry className="Sheet-Section" columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
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
