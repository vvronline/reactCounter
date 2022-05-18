import React ,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
 
  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setCounter(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCounter(counter => counter + 1);
      }, 1000);
    } else if (!isActive && counter !== 0) {
      clearInterval(interval);
      }
    return () => {
      clearInterval(interval);
    }
  
  
  }, [isActive, counter])
  
  
 
  return (
    <div className="App">
      <h1>{counter}s</h1>
      <button  onClick={toggle}>{isActive?'pause':'start' }</button>
      <button  onClick={reset}>reset</button>
     
    </div>
  );
}

export default App;
