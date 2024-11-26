import './App.css';
import { useEffect, useRef, useState } from 'react';
import data from './2000.json'
import Thumb from './Thumb';
import Video from './Video';


function App() {
  const [play, setPlay] = useState(null);
  const [list, setList] = useState([]);
  const [curr, setCurr] = useState(0);
  const ref = useRef()
  const handleTouch = (ind) => {
    setPlay(ind);
  }
  useEffect(() => {
    let temp = [];
    for (let i = curr; i < curr + 10; i++) {
      temp = [...temp, ...JSON.parse(JSON.stringify(data[i]))]
    }
    setList(temp);
    window.scrollTo(0,0);
    
  }, [curr]);

  const handleNxt = () => {
    setCurr(prev => prev + 10);
  }

  const handlePrev = () => {
    setCurr(prev => prev - 10);
  }

  return (
    <div className="App" ref={ref}>
      <div className='action'>
        <span>{curr} - {curr + 10}</span>
        <button onClick={handlePrev}>prv</button>
        <button onClick={handleNxt}>nxt</button>
      </div>
      {list.map((item, ind) => {
         return item && <div key={Math.random()} onTouchEnd={handleTouch.bind(null, ind)}>{ind != play ? <Thumb link={item.link1} thumbLink={item.thumbLink}></Thumb> : <Video link={item.link1} vidLink={item.link2}></Video>}</div>
      })}

    </div>
  );
}

export default App;
