import React, { useState, useEffect } from 'react';

import Feed from './Components/Feed/Feed.js'

import './App.css'
import FeedItem from './Components/FeedItem/FeedItem.js';

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
      <h2 className='head'>{drinks.length} coffees</h2>
      <h3 className='subhead'>in 2021.</h3>

      <Feed items={drinks}/>
    </div>
  );
}

export default App;