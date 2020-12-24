import React from 'react'
import StatBlock from './StatBlock'

function StatsContainer(props) {
    return (
      <div className="StatsContainer">
        {Object.entries(props.stats).map(([name, value]) =>
          <StatBlock name={name} value={value} />
        )}
      </div>
    );
  }
  
  export default StatsContainer;