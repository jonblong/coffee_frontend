import React, { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('https://jon-coffee-api.herokuapp.com/get_drinks')
    .then(res => res.json())
    .then((data) => {
      setDrinks(data.json_list)
    })
  }, []);

  return (
    <div className="App">
      <h3 className='subhead'>Jon has consumed</h3>
      <h2 className='head'>{drinks.length} Coffees</h2>
      <h3 className='subhead'>in 2021.</h3>
    </div>
  );
}

export default App;