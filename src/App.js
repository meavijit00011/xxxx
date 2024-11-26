
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import data from './4.json'
import Thumb from './Thumb';
import Video from './Video';


function App() {
  const [play, setPlay] = useState(null);
  const [list, setList] = useState([]);
  const handleTouch = (ind) => {
    setPlay(ind);
  }
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      temp = [...temp, ...data[i]]
    }
    setList(temp);
  }, []);

  return (
    <div className="App">
      {list.map((item, ind) => {
        return <div onTouchEnd={handleTouch.bind(null, ind)}>{ind != play ? <Thumb link={item.link1} thumbLink={item.thumbLink}></Thumb> : <Video link={item.link1} vidLink={item.link2}></Video>}</div>
      })}
    </div>
  );
}

export default App;
