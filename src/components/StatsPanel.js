import React from 'react'
import StatsContainer from './StatsContainer'

function StatsPanel() {
  let stats = {
    "today": 3,
    "this week": 14,
    "in January": 58
  }

    return (
      <div className="StatsPanel">
          <h1 className='subhead'>JON LONG HAS HAD</h1>
          <h1 className='head'>527 COFFEES</h1>
          <h1 className='subhead'>IN 2021</h1>

        <StatsContainer stats={stats} />
      </div>
    );
  }
  
  export default StatsPanel;