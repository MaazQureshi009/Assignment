import React, { useState, useEffect } from 'react';
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  const handleAddClick = () => {
    setCount(count + 1);
  };

  return (
    <div className='container'>
      <h2>This is a Increment Counter which increments the count when the button is clicked.</h2>
      <h1>{count}</h1>
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default App;
