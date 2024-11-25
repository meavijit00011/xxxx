import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { arr } from './a';


function App() {
  const [play, setPlay] = useState(null);
  const [arrr,setArrr] = useState(null);
  const handleTouch = (ind) => {
    setPlay(ind);
  }
  useEffect(()=>{
    let temp = []
    for(let i=0; i<arr.length; i++){
       temp = [...temp,...arr[i]];
    }
    setArrr(temp);
  },[])
  return (
    <div className="App">
      {arrr && arrr.map((item, ind) => <div onTouchEnd={handleTouch.bind(null, ind)}>{play != ind && <a href={item.link1} target='_blank'><img src={item.thumbLink} height='200px' width='200px'></img></a>}{<div style={{ color: 'grey' }}>{ind}{play == ind && <a target='_blank' href={item.link1} ><video src={item.link2} width="200" height="200" loop='loop' muted autoPlay={true}></video></a>}</div>}</div>)}
    </div>
  );
}

export default App;
