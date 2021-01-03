import React, { useState, useEffect } from 'react';
import './App.css';
import SizePicker from './Components/SizePicker/SizePicker';

function App() {

  const DATASIZES = {
    BIG: 'big',
    LARGE: 'large',
    HUGE: 'huge'
  }

  const [drinks, setDrinks] = useState([]);
  const [dataSize, setDataSize] = useState(DATASIZES.BIG);

  useEffect(() => {
    fetch('https://jon-coffee-api.herokuapp.com/get_drinks')
    .then(res => res.json())
    .then((data) => {
      setDrinks(data.json_list)
    })
  }, []);

  return (
    <div className="App">
      <SizePicker
        dataSize={dataSize}
        setDataSize={setDataSize}
        sizes={DATASIZES}
      />

      {dataSize === DATASIZES.BIG &&
        <div className='big-container'>
          <h3 className='subhead'>Jon has had</h3>
          <h2 className='head'>{drinks.length} coffees</h2>
          <h3 className='subhead'>in 2021.</h3>
        </div>
      }
    </div>
  );
}

export default App;