import { useState, useRef, useEffect } from 'react'
import  './App.css';

function App() {
 
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  function start() { 
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() { 
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0)
    setIsRunning(false);
  }  
  function formatTime() {

    const pad = (num: number, length: number) => {
      return num.toString().padStart(length, '0');
    };

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`;
  }

  return (
    <div className="stopwatch">
      <h2><span>Stop</span> watch</h2>
      <div className="stop-box">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className='start btn'>Start</button>
          <button onClick={stop} className='stop btn'>Stop</button>
          <button onClick={reset} className='reset btn'>Reset</button> 
        </div>
      </div>
    </div>
  )
}

export default App
