import React, { useState, useEffect } from 'react';

function App() {

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('https://jon-coffee-api.herokuapp.com/get_drinks')
    .then(res => res.json())
    .then((data) => {
      setDrinks(data)
    })
  });

  return (
    <div className="App">
      
    </div>
  );
}

export default App;