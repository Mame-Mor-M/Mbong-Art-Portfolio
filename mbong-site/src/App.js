import logo from './logo.svg';
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
      <div className="Hero">
        <header className="Hero-header">
          <p>
            Eat my shorts dummy aaaaaa
          </p>
        </header>
      </div>
      <header className="Section-Header">
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
      <header className="Section-Header">
        Illustrations
        <p className='Section-Desc'>Where I put my illustrations (make read better)</p>
      </header>
      <div className="Illustrations">
        <MasonryLayout items={images}/>
      </div>
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
  export default App;
