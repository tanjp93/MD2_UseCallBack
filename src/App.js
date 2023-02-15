import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from 'react';
import Memo from './components/Memo';

function App() {
  const [count, setCount] = useState(0)
  const handleIncrease = useCallback(() => {
    setCount(count=>count + 1)
    // setCount(count + 1)
  }, [])
  // const handleIncrease =() => {
  //   setCount(count + 1)
  // }

  return (
    <div className="App" >
      <Memo onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
