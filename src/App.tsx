// import React, { useState, useRef } from 'react'
import  './App.css';

function App() {
 
  // const [isRunning, setIsRunning] = useState<boolean>(false);
  // const [elapsedTime, setElapsedTime] = useState<number>(0);
  // const intervalRef = useRef<number | null>(null);
  // const startTimeRef = useRef<number>(0);

  function start() { 
    return console.log('start');
  }

  function stop() { 
    return console.log('stop');
    }
  function reset() { 
    return console.log('reset');
  }  
  function save() { 
    return console.log('save');
  }
  function formatTime() {
    return `00:00:00`;
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
          <button onClick={save} className='save btn'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default App
